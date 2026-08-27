#!/bin/bash

# Script para transcribir audio con Whisper
# Uso: ./whisper_transcribe.sh -p /ruta/al/audio.mp3 -o nombre_salida
# Ejemplo: bash whisperer.sh -p /entrevista.mp3 -o entrevista -f txt

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

MODEL="small"
OUTPUT_FORMAT="txt"
LANGUAGE="es"

show_help() {
    echo "Uso: $0 -p <ruta_del_audio> -o <nombre_salida> [opciones]"
    echo ""
    echo "Opciones obligatorias:"
    echo "  -p, --path        Ruta del archivo de audio a transcribir"
    echo "  -o, --output      Nombre base para los archivos de salida (sin extensión)"
    echo ""
    echo "Opciones opcionales:"
    echo "  -m, --model       Modelo de Whisper (tiny, base, small, medium, large) [default: small]"
    echo "  -f, --format      Formato de salida (txt, srt, vtt, json) [default: txt]"
    echo "  -l, --language    Código de idioma (es, en, fr, etc.) [default: es]"
    echo "  --device          Dispositivo (cpu, cuda) [default: cpu]"
    echo "  -h, --help        Mostrar esta ayuda"
    echo ""
    echo "Ejemplos:"
    echo "  $0 -p ./audio.mp3 -o mi_transcripcion"
    echo "  $0 -p ./audio.wav -o resultado -m medium -l en"
    echo "  $0 -p ./audio.mp3 -o texto --model large --device cuda"
}

if [ $# -eq 0 ]; then
    show_help
    exit 1
fi

AUDIO_PATH=""
OUTPUT_NAME=""
DEVICE="cpu"

while [[ $# -gt 0 ]]; do
    case $1 in
        -p|--path)
            AUDIO_PATH="$2"
            shift 2
            ;;
        -o|--output)
            OUTPUT_NAME="$2"
            shift 2
            ;;
        -m|--model)
            MODEL="$2"
            shift 2
            ;;
        -f|--format)
            OUTPUT_FORMAT="$2"
            shift 2
            ;;
        -l|--language)
            LANGUAGE="$2"
            shift 2
            ;;
        --device)
            DEVICE="$2"
            shift 2
            ;;
        -h|--help)
            show_help
            exit 0
            ;;
        *)
            echo -e "${RED}Error: Opción desconocida $1${NC}"
            show_help
            exit 1
            ;;
    esac
done

if [ -z "$AUDIO_PATH" ]; then
    echo -e "${RED}Error: Debes especificar la ruta del audio con -p o --path${NC}"
    show_help
    exit 1
fi

if [ ! -f "$AUDIO_PATH" ]; then
    echo -e "${RED}Error: El archivo '$AUDIO_PATH' no existe${NC}"
    exit 1
fi

if [ -z "$OUTPUT_NAME" ]; then
    echo -e "${RED}Error: Debes especificar el nombre de salida con -o o --output${NC}"
    show_help
    exit 1
fi

if [[ ! "$MODEL" =~ ^(tiny|base|small|medium|large)$ ]]; then
    echo -e "${RED}Error: Modelo '$MODEL' no válido. Usar: tiny, base, small, medium, large${NC}"
    exit 1
fi

if [[ ! "$DEVICE" =~ ^(cpu|cuda)$ ]]; then
    echo -e "${RED}Error: Dispositivo '$DEVICE' no válido. Usar: cpu o cuda${NC}"
    exit 1
fi

echo -e "${YELLOW}========================================${NC}"
echo -e "${GREEN} Transcribiendo audio con Whisper${NC}"
echo -e "${YELLOW}========================================${NC}"
echo -e " Archivo:      $AUDIO_PATH"
echo -e " Salida:       $OUTPUT_NAME.$OUTPUT_FORMAT"
echo -e " Modelo:       $MODEL"
echo -e " Idioma:       $LANGUAGE"
echo -e "${YELLOW}========================================${NC}"
echo ""

echo -e "${GREEN} Iniciando transcripción...${NC}"
echo ""

whisper "$AUDIO_PATH" \
    --model "$MODEL" \
    --language "$LANGUAGE" \
    --output_format "$OUTPUT_FORMAT" \
    --device "$DEVICE" \
    --output_dir "$(dirname "$OUTPUT_NAME")" \
    --task transcribe

BASE_NAME=$(basename "$OUTPUT_NAME")
DIR_NAME=$(dirname "$OUTPUT_NAME")
OUTPUT_FILE="${DIR_NAME}/${BASE_NAME}.${OUTPUT_FORMAT}"

if [ -f "$OUTPUT_FILE" ]; then
    echo ""
    echo -e "${GREEN} Transcripción completada exitosamente!${NC}"
else
    echo -e "${RED} Error: No se pudo generar el archivo de transcripción${NC}"
    exit 1
fi