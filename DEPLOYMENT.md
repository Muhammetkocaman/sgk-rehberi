# 🚀 SGK Rehberi - Paylaşım ve Deployment Rehberi

Bu rehber, SGK Rehberi projenizi farklı platformlarda paylaşmanız ve erişilebilir hale getirmeniz için hazırlanmıştır.

## 🏠 Yerel Bilgisayarınızda Çalıştırma

### Yöntem 1: Python ile (Önerilen)
```bash
# Terminal/Komut istemi açın ve proje klasörüne gidin
cd "SGK WEB SİTESİ"

# Python sunucuyu başlatın
python3 server.py
# veya
python server.py
```

### Yöntem 2: Hazır Script Dosyaları

**Mac/Linux için:**
```bash
./start.sh
```

**Windows için:**
```cmd
start.bat
```

### Yöntem 3: Doğrudan Python HTTP Server
```bash
python3 -m http.server 8080
```

Sunucu başladıktan sonra tarayıcınızda `http://localhost:8080` adresini ziyaret edin.

## 🌐 GitHub Pages ile Ücretsiz Paylaşım

### Adım 1: GitHub Repository Oluşturma
1. [GitHub.com](https://github.com) adresine gidin
2. Yeni repository oluşturun (`sgk-rehberi` gibi)
3. Public olarak ayarlayın

### Adım 2: Kodları GitHub'a Yükleme
```bash
# Proje klasöründe Git başlatın
git init

# Tüm dosyaları ekleyin
git add .

# İlk commit yapın
git commit -m "İlk commit: SGK Rehberi projesi"

# GitHub repository'nizle bağlantı kurun
git remote add origin https://github.com/KULLANICI_ADINIZ/sgk-rehberi.git

# Kodları GitHub'a gönderin
git push -u origin main
```

### Adım 3: GitHub Pages Aktivasyonu
1. GitHub repository sayfanızda `Settings` sekmesine gidin
2. Sol menüden `Pages` seçeneğini bulun
3. `Source` olarak `Deploy from a branch` seçin
4. Branch olarak `main` ve folder olarak `/ (root)` seçin
5. `Save` butonuna tıklayın

**🎉 Tebrikler!** Siteniz `https://KULLANICI_ADINIZ.github.io/sgk-rehberi` adresinde yayında!

## 📱 Diğer Ücretsiz Hosting Seçenekleri

### Netlify (Önerilen)
1. [Netlify.com](https://netlify.com) hesabı açın
2. `New site from Git` seçin
3. GitHub repository'nizi seçin
4. Deploy ayarları:
   - Build command: `echo "No build required"`
   - Publish directory: `/`
5. Deploy butonuna tıklayın

### Vercel
1. [Vercel.com](https://vercel.com) hesabı açın
2. GitHub ile login olun
3. Projenizi import edin
4. Otomatik deploy başlayacak

### Firebase Hosting
```bash
# Firebase CLI yükleyin
npm install -g firebase-tools

# Login olun
firebase login

# Projeyi başlatın
firebase init hosting

# Deploy edin
firebase deploy
```

## 📂 Dosya Paylaşımı

### Zip Dosyası ile Paylaşım
1. Tüm proje dosyalarını seçin
2. Sıkıştırılmış klasör oluşturun
3. Email veya dosya paylaşım servisleri ile gönderin

### Google Drive / OneDrive
1. Proje klasörünü cloud storage'a yükleyin
2. Paylaşım linkini oluşturun
3. Diğer kişilerle paylaşın

## 🔧 Sunucu Gereksinimleri

### Minimum Gereksinimler
- **Statik hosting** yeterli (PHP, Database gerekmez)
- **HTTPS** desteği (modern tarayıcılar için)
- **Gzip compression** (performans için önerilen)

### Önerilen Hosting Özellikleri
- CDN desteği
- Custom domain
- SSL sertifikası
- Backup sistemi

## 🔄 Güncellemeler

### GitHub Pages için
```bash
# Değişiklikleri commit edin
git add .
git commit -m "İçerik güncellendi"
git push

# GitHub Pages otomatik olarak güncellenecek
```

### Netlify/Vercel için
- GitHub'a push yaptığınızda otomatik deploy
- Manual deploy için admin panelini kullanın

## 🚨 Sorun Giderme

### CORS Hatası
Eğer `file://` protokolü ile çalışıyorsanız, mutlaka HTTP sunucu kullanın.

### Fontlar Yüklenmiyor
İnternet bağlantınızı kontrol edin (Google Fonts için gerekli).

### Chart.js Çalışmıyor
JavaScript console'da hata mesajlarını kontrol edin.

### Mobilde Görünüm Sorunu
Meta viewport tag'inin head bölümünde olduğundan emin olun.

## 🔐 Güvenlik Notları

### CDN Kaynakları
Proje external CDN kullanıyor:
- Tailwind CSS
- Chart.js
- Google Fonts

### HTTPS Önerisi
Production ortamında mutlaka HTTPS kullanın.

## 📊 Analytics (İsteğe Bağlı)

### Google Analytics Ekleme
`index.html` dosyasının `<head>` bölümüne ekleyin:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## ✅ Başarı Kontrol Listesi

- [ ] Proje yerel sunucuda çalışıyor
- [ ] Responsive tasarım tüm cihazlarda çalışıyor
- [ ] İnteraktif özellikler (accordion, chart) çalışıyor
- [ ] GitHub repository oluşturuldu
- [ ] GitHub Pages aktif
- [ ] Site linki paylaşıldı
- [ ] Domain (varsa) yapılandırıldı

## 📞 Yardım

Deployment sırasında sorun yaşarsanız:
1. Browser console'ı kontrol edin
2. Network sekmesinde failed request'leri inceleyin
3. Hosting provider dokümantasyonunu okuyun

---

**İpucu**: İlk deployment'tan sonra `https://SITENIZ.com` adresini bookmarkleyin ve öğrencilerle paylaşın! 🎓
