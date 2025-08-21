@echo off
title SGK Rehberi - Yerel Sunucu

echo =====================================================
echo 🚀 SGK Rehberi Yerel Sunucu Baslatiliyor...
echo =====================================================
echo.

REM Python kontrolu
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Python bulunamadi!
    echo 💡 Python yuklemek icin: https://python.org
    pause
    exit /b 1
)

echo ✅ Python bulundu!
echo 📁 Dizin: %cd%
echo 🌐 Sunucu baslatiliyor...
echo.
echo Sunucuyu durdurmak icin Ctrl+C tusuna basin
echo Tarayicida http://localhost:8080 adresini ziyaret edin
echo.

REM Sunucuyu baslat
python -m http.server 8080

pause
