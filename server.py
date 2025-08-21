#!/usr/bin/env python3
"""
Basit HTTP Sunucu - SGK Rehberi için
Bu dosyayi calistirarak projeyi yerel sunucuda açabilirsiniz.

Kullanim:
python3 server.py
veya
python server.py
"""

import http.server
import socketserver
import webbrowser
import os
import sys

def run_server(port=8080):
    """Belirtilen portta HTTP sunucuyu başlat"""
    try:
        # Proje dizinine git
        os.chdir(os.path.dirname(os.path.abspath(__file__)))
        
        # HTTP handler oluştur
        Handler = http.server.SimpleHTTPRequestHandler
        
        # Sunucuyu başlat
        with socketserver.TCPServer(("", port), Handler) as httpd:
            server_url = f"http://localhost:{port}"
            
            print("=" * 60)
            print("🚀 SGK Rehberi Yerel Sunucu Başlatıldı!")
            print("=" * 60)
            print(f"📍 Sunucu Adresi: {server_url}")
            print(f"📁 Dizin: {os.getcwd()}")
            print(f"🌐 Port: {port}")
            print("=" * 60)
            print("Sunucuyu durdurmak için Ctrl+C tuşlarına basın")
            print("=" * 60)
            
            # Tarayıcıyı otomatik aç
            try:
                webbrowser.open(server_url)
                print("✅ Tarayıcı otomatik olarak açıldı!")
            except:
                print("⚠️  Tarayıcı otomatik açılamadı. Lütfen elle açın.")
            
            print()
            
            # Sunucuyu çalıştır
            httpd.serve_forever()
            
    except KeyboardInterrupt:
        print("\n")
        print("🛑 Sunucu durduruldu!")
        print("Teşekkürler! 👋")
        
    except OSError as e:
        if "Address already in use" in str(e):
            print(f"❌ Port {port} zaten kullanımda!")
            print(f"💡 Farklı bir port deneyin: python3 server.py {port + 1}")
        else:
            print(f"❌ Sunucu başlatılamadı: {e}")
            
    except Exception as e:
        print(f"❌ Beklenmeyen hata: {e}")

if __name__ == "__main__":
    # Komut satırından port belirtme
    port = 8080
    if len(sys.argv) > 1:
        try:
            port = int(sys.argv[1])
        except ValueError:
            print("❌ Geçersiz port numarası!")
            print("Kullanım: python3 server.py [port]")
            print("Örnek: python3 server.py 3000")
            sys.exit(1)
    
    run_server(port)
