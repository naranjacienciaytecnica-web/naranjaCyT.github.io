import sys
import os
import glob
import re
from html.parser import HTMLParser
from datetime import datetime, timezone
import email.utils
from xml.sax.saxutils import escape

project_root = sys.argv[1]
base_url = sys.argv[2]

MESES = {
    "enero": 1, "febrero": 2, "marzo": 3, "abril": 4,
    "mayo": 5, "junio": 6, "julio": 7, "agosto": 8,
    "septiembre": 9, "octubre": 10, "noviembre": 11, "diciembre": 12,
    "spetiembre": 9,  # typo present in one article
}

RE_FULL      = re.compile(r'(\d{1,2})\s+de\s+(\w+)\s+de\s+(\d{4})', re.IGNORECASE)
RE_FULL_ALT  = re.compile(r'(\d{1,2})\s+(\w+)\s+de\s+(\d{4})', re.IGNORECASE)
RE_NO_DE     = re.compile(r'(\d{1,2})\s+(\w+)\s+(\d{4})', re.IGNORECASE)
RE_MONTH_YR  = re.compile(
    r'\b(enero|febrero|marzo|abril|mayo|junio|julio|agosto|'
    r'septiembre|octubre|noviembre|diciembre|spetiembre)\s+de\s+(\d{4})',
    re.IGNORECASE
)


# =====================
# Article parser
# =====================

class ArticleParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.title_raw = ""
        self.headline = ""
        self.author_raw = ""
        self.tags_raw = ""
        self.meta_text = ""
        self.time_datetime = ""
        self._in_title = False
        self._in_headline = False
        self._in_byline = False
        self._in_tag = False
        self._tag_depth = 0
        self._in_meta = False
        self._meta_depth = 0

    def handle_starttag(self, tag, attrs):
        attrs_dict = dict(attrs)
        classes = attrs_dict.get("class", "").split()

        if tag == "title":
            self._in_title = True
        elif tag == "h1" and "headline" in classes:
            self._in_headline = True
        elif tag == "span" and "byline-author" in classes:
            self._in_byline = True

        if tag == "div":
            if classes == ["tag"]:
                self._in_tag = True
                self._tag_depth = 1
            elif self._in_tag:
                self._tag_depth += 1

            if "article-meta" in classes:
                self._in_meta = True
                self._meta_depth = 1
            elif self._in_meta:
                self._meta_depth += 1

        if tag == "time" and "datetime" in attrs_dict:
            self.time_datetime = attrs_dict["datetime"]

    def handle_endtag(self, tag):
        if tag == "title":
            self._in_title = False
        if tag == "h1" and self._in_headline:
            self._in_headline = False
        if tag == "span" and self._in_byline:
            self._in_byline = False
        if tag == "div":
            if self._in_tag:
                self._tag_depth -= 1
                if self._tag_depth == 0:
                    self._in_tag = False
            if self._in_meta:
                self._meta_depth -= 1
                if self._meta_depth == 0:
                    self._in_meta = False

    def handle_data(self, data):
        if self._in_title:
            self.title_raw += data
        if self._in_headline:
            self.headline += data
        if self._in_byline:
            self.author_raw += data
        if self._in_tag:
            self.tags_raw += data
        if self._in_meta:
            self.meta_text += data


# =====================
# Nota parser
# =====================

class NotaParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.title_raw = ""
        self.h1 = ""
        self.tags_raw = ""
        self.date_text = ""
        self._in_title = False
        self._in_h1 = False
        self._h1_done = False
        self._in_tag = False
        self._in_date = False
        self._date_depth = 0

    def handle_starttag(self, tag, attrs):
        attrs_dict = dict(attrs)
        classes = attrs_dict.get("class", "").split()

        if tag == "title":
            self._in_title = True
        elif tag == "h1" and not self._h1_done:
            self._in_h1 = True
        elif tag == "span" and classes == ["tag"]:
            self._in_tag = True

        if tag == "div" and "date" in classes:
            self._in_date = True
            self._date_depth = 1
        elif self._in_date and tag == "div":
            self._date_depth += 1

    def handle_endtag(self, tag):
        if tag == "title":
            self._in_title = False
        if tag == "h1" and self._in_h1:
            self._in_h1 = False
            self._h1_done = True
        if tag == "span" and self._in_tag:
            self._in_tag = False
        if tag == "div" and self._in_date:
            self._date_depth -= 1
            if self._date_depth == 0:
                self._in_date = False

    def handle_data(self, data):
        if self._in_title:
            self.title_raw += data
        if self._in_h1:
            self.h1 += data
        if self._in_tag:
            self.tags_raw += data
        if self._in_date:
            self.date_text += data


# =====================
# Shared helpers
# =====================

def _clean_author(raw):
    author = raw.strip()
    while author.lower().startswith("por "):
        author = author[4:].lstrip()
    return author


def _parse_tags(tags_raw):
    if not tags_raw.strip():
        return []
    # Articles use · (U+00B7), notas use • (U+2022)
    return [t.strip() for t in re.split(r'[·•]', tags_raw) if t.strip()]


def _extract_date(time_attr, text, filepath):
    if time_attr:
        try:
            return datetime.strptime(time_attr[:10], "%Y-%m-%d").replace(tzinfo=timezone.utc), None
        except ValueError:
            pass

    m = RE_FULL.search(text)
    if m:
        month_n = MESES.get(m.group(2).lower())
        if month_n:
            return datetime(int(m.group(3)), month_n, int(m.group(1)), tzinfo=timezone.utc), None

    m = RE_FULL_ALT.search(text)
    if m:
        month_n = MESES.get(m.group(2).lower())
        if month_n:
            return datetime(int(m.group(3)), month_n, int(m.group(1)), tzinfo=timezone.utc), None

    m = RE_NO_DE.search(text)
    if m:
        month_n = MESES.get(m.group(2).lower())
        if month_n:
            return datetime(int(m.group(3)), month_n, int(m.group(1)), tzinfo=timezone.utc), None

    m = RE_MONTH_YR.search(text)
    if m:
        month_n = MESES.get(m.group(1).lower())
        if month_n:
            warn = f'month-only date "{m.group(1)} de {m.group(2)}" — pubDate set to first of month'
            return datetime(int(m.group(2)), month_n, 1, tzinfo=timezone.utc), warn

    mtime = os.path.getmtime(filepath)
    dt = datetime.fromtimestamp(mtime, tz=timezone.utc)
    warn = f"no date found in HTML — using file mtime ({dt.strftime('%Y-%m-%d')})"
    return dt, warn


# =====================
# Parse functions
# =====================

def parse_article(filepath):
    with open(filepath, encoding="utf-8") as f:
        html = f.read()

    parser = ArticleParser()
    parser.feed(html)

    filename = os.path.basename(filepath)
    url = f"{base_url}/articulos/{filename}"
    warnings = []

    if parser.headline.strip():
        title = parser.headline.strip()
    elif parser.title_raw.strip():
        raw = parser.title_raw.strip()
        title = raw.split(" | ", 1)[1] if " | " in raw else raw
    else:
        title = filename
        warnings.append("no title found — using filename as fallback")

    if parser.author_raw.strip():
        author = _clean_author(parser.author_raw)
    else:
        author = None
        warnings.append("missing author — <author> element omitted")

    tags = _parse_tags(parser.tags_raw)
    if not tags:
        warnings.append("no tags found — zero <category> elements")

    pub_dt, date_warn = _extract_date(parser.time_datetime, parser.meta_text, filepath)
    if date_warn:
        warnings.append(date_warn)

    return {
        "title": title,
        "link": url,
        "author": author,
        "pubDate": pub_dt,
        "tags": tags,
        "guid": url,
        "filename": filename,
        "warnings": warnings,
    }


def parse_nota(filepath):
    with open(filepath, encoding="utf-8") as f:
        html = f.read()

    parser = NotaParser()
    parser.feed(html)

    filename = os.path.basename(filepath)
    url = f"{base_url}/notas/{filename}"
    warnings = []

    if parser.h1.strip():
        title = parser.h1.strip()
    elif parser.title_raw.strip():
        raw = parser.title_raw.strip()
        # Strip "Naranja - " prefix and " | Ciencia y Técnica" suffix
        if " - " in raw:
            raw = raw.split(" - ", 1)[1]
        if " | " in raw:
            raw = raw.split(" | ")[0]
        title = raw.strip()
    else:
        title = filename
        warnings.append("no title found — using filename as fallback")

    tags = _parse_tags(parser.tags_raw)
    if not tags:
        warnings.append("no tags found — zero <category> elements")

    pub_dt, date_warn = _extract_date("", parser.date_text, filepath)
    if date_warn:
        warnings.append(date_warn)

    return {
        "title": title,
        "link": url,
        "author": "Naranja Ciencia y Técnica",
        "pubDate": pub_dt,
        "tags": tags,
        "guid": url,
        "filename": filename,
        "warnings": warnings,
    }


# =====================
# RSS builder
# =====================

def build_rss(items, channel_title, channel_description, feed_url):
    now_rfc = email.utils.format_datetime(datetime.now(tz=timezone.utc))
    lines = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
        '  <channel>',
        f'    <title>{escape(channel_title)}</title>',
        f'    <link>{base_url}</link>',
        f'    <description>{escape(channel_description)}</description>',
        '    <language>es-AR</language>',
        f'    <lastBuildDate>{now_rfc}</lastBuildDate>',
        f'    <atom:link href="{feed_url}" rel="self" type="application/rss+xml"/>',
    ]

    for item in items:
        pub_rfc = email.utils.format_datetime(item["pubDate"])
        lines.append('')
        lines.append('    <item>')
        lines.append(f'      <title>{escape(item["title"])}</title>')
        lines.append(f'      <link>{item["link"]}</link>')
        if item["author"] is not None:
            lines.append(f'      <author>{escape(item["author"])}</author>')
        lines.append(f'      <pubDate>{pub_rfc}</pubDate>')
        for tag in item["tags"]:
            lines.append(f'      <category>{escape(tag)}</category>')
        lines.append(f'      <guid isPermaLink="true">{item["guid"]}</guid>')
        lines.append('    </item>')

    lines.append('')
    lines.append('  </channel>')
    lines.append('</rss>')

    return '\n'.join(lines)


# =====================
# Main
# =====================

def collect(glob_pattern, parse_fn, label):
    files = sorted(glob.glob(glob_pattern))
    if not files:
        print(f"ERROR: no HTML files found matching {glob_pattern}", file=sys.stderr)
        sys.exit(1)
    items = []
    for filepath in files:
        try:
            item = parse_fn(filepath)
            for w in item["warnings"]:
                print(f"WARNING: [{item['filename']}] {w}", file=sys.stderr)
            items.append(item)
        except Exception as e:
            print(f"ERROR: skipping {os.path.basename(filepath)}: {e}", file=sys.stderr)
    items.sort(key=lambda x: x["pubDate"], reverse=True)
    return items


articulos = collect(
    os.path.join(project_root, "articulos", "*.html"),
    parse_article,
    "articulos",
)

notas = collect(
    os.path.join(project_root, "notas", "*.html"),
    parse_nota,
    "notas",
)

feed_xml = build_rss(
    articulos,
    channel_title="Gaceta Clara Zetkin",
    channel_description="Revista de la Naranja Ciencia y Técnica",
    feed_url=f"{base_url}/gacetaZetkin.xml",
)

declaraciones_xml = build_rss(
    notas,
    channel_title="Declaraciones",
    channel_description="Declaraciones y comunicados de la Naranja Ciencia y Técnica",
    feed_url=f"{base_url}/declaraciones.xml",
)

with open(os.path.join(project_root, "gacetaZetkin.xml"), "w", encoding="utf-8") as f:
    f.write(feed_xml)

with open(os.path.join(project_root, "declaraciones.xml"), "w", encoding="utf-8") as f:
    f.write(declaraciones_xml)
