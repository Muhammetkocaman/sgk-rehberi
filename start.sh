#!/bin/bash

# SGK Rehberi - Yerel Sunucu Başlatıcı (Mac/Linux)

echo "====================================================="
echo "🚀 SGK Rehberi Yerel Sunucu Başlatılıyor..."
echo "====================================================="
echo

# Python kontrolü
if ! command -v python3 &> /dev/null; then
    if ! command -v python &> /dev/null; then
        echo "❌ Python bulunamadı!"
        echo "💡 Python yüklemek için:"
        echo "   Mac: brew install python3"
        echo "   Ubuntu: sudo apt install python3"
        echo "   Ya da https://python.org adresini ziyaret edin"
        exit 1
    else
        PYTHON_CMD="python"
    fi
else
    PYTHON_CMD="python3"
fi

echo "✅ Python bulundu: $PYTHON_CMD"
echo "📁 Dizin: $(pwd)"
echo "🌐 Sunucu başlatılıyor..."
echo
echo "Sunucuyu durdurmak için Ctrl+C tuşuna basın"
echo "Tarayıcıda http://localhost:8080 adresini ziyaret edin"
echo

# Sunucuyu başlat
$PYTHON_CMD -m http.server 8080
