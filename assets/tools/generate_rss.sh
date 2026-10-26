#!/bin/bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"
BASE_URL="https://www.naranjacyt.org"

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${YELLOW}======================================${NC}"
echo -e "${GREEN} Generando feed RSS · Gaceta Clara Zetkin${NC}"
echo -e "${YELLOW}======================================${NC}"

python3 "$SCRIPT_DIR/src/generate_rss.py" "$PROJECT_ROOT" "$BASE_URL"

COUNT_ARTICULOS=$(grep -c '<item>' "$PROJECT_ROOT/gacetaZetkin.xml" || true)
COUNT_DECLARACIONES=$(grep -c '<item>' "$PROJECT_ROOT/declaraciones.xml" || true)
echo -e "${GREEN} gacetaZetkin.xml escrito:${NC} $COUNT_ARTICULOS artículos"
echo -e "${GREEN} declaraciones.xml escrito:${NC} $COUNT_DECLARACIONES declaraciones"
