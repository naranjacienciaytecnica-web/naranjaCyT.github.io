#!/bin/bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"
BASE_URL="https://www.naranjacyt.org"
OUTPUT="$PROJECT_ROOT/feed.xml"

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${YELLOW}======================================${NC}"
echo -e "${GREEN} Generando feed RSS · Gaceta Clara Zetkin${NC}"
echo -e "${YELLOW}======================================${NC}"

TEMP_OUTPUT=$(mktemp)
trap 'rm -f "$TEMP_OUTPUT"' EXIT

python3 "$SCRIPT_DIR/src/generate_rss.py" "$PROJECT_ROOT" "$BASE_URL" > "$TEMP_OUTPUT"

mv "$TEMP_OUTPUT" "$OUTPUT"
trap - EXIT

ITEM_COUNT=$(grep -c '<item>' "$OUTPUT" || true)
echo -e "${GREEN} Feed escrito en:${NC} $OUTPUT"
echo -e "${GREEN} Total artículos:${NC} $ITEM_COUNT"
