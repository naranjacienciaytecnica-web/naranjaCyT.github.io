(function () {
  const input = document.getElementById('search-input');
  if (!input) return;
  const empty = document.getElementById('search-empty');
  // Combining diacritical marks: U+0300..U+036F
  const DIACRITICS = new RegExp('[\\u0300-\\u036f]', 'g');
  const normalize = (s) => s.toLowerCase().normalize('NFD').replace(DIACRITICS, '');
  const items = document.querySelectorAll('.articles-grid .article-card');
  const index = Array.from(items).map((el) => ({ el, text: normalize(el.textContent) }));
  input.addEventListener('input', () => {
    const q = normalize(input.value.trim());
    let visible = 0;
    index.forEach(({ el, text }) => {
      const show = !q || text.includes(q);
      el.style.display = show ? '' : 'none';
      if (show) visible++;
    });
    if (empty) empty.classList.toggle('visible', visible === 0);
  });
})();
