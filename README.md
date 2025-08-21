# İnteraktif Sosyal Güvenlik Hukuku Rehberi

Türkiye'deki sosyal güvenlik sisteminin temel konularını anlaşılır ve interaktif bir şekilde sunan eğitim amaçlı web sitesi.

## 🎯 Proje Amacı

Bu proje, Sosyal Güvenlik Kanunu derslerini alan öğrenciler ve sosyal güvenlik sistemini öğrenmek isteyen herkes için kapsamlı bir rehber niteliğindedir. Karmaşık yasal kavramları, prim oranlarını ve sigortalılık statülerini görsel ve interaktif yöntemlerle öğrenmeyi kolaylaştırır.

## ✨ Özellikler

### 📚 Kapsamlı İçerik
- **Sigortalılık İlişkisi**: Temel kavramlar ve hukuki çerçeve
- **Sigortalı Statüleri**: 4/a, 4/b, 4/c statülerinin detaylı karşılaştırması
- **Prime Esas Kazanç (PEK)**: Hesaplama yöntemleri ve sınırlar
- **Prim Oranları**: Tüm sigortalı grupları için güncel oranlar
- **Sigorta Kolları**: Kısa vadeli ve uzun vadeli sigorta kolları
- **Genel Sağlık Sigortası**: Kapsam ve haklar
- **Finansman**: Ödeme süreçleri ve yaptırımlar

### 🎨 İnteraktif Özellikler
- **Dinamik Prim Hesaplayıcı**: Farklı sigortalı grupları için görsel prim dağılımı
- **Accordion Menüler**: Konuları düzenli şekilde açıp kapama
- **Responsive Tasarım**: Tüm cihazlarda uyumlu görüntüleme
- **Grafik Sunumlar**: Chart.js ile görsel veri sunumu
- **Akıllı Navigasyon**: Sidebar ile kolay gezinme

### 💡 Teknik Özellikler
- **Modern CSS**: Tailwind CSS framework
- **İnteraktif Grafikler**: Chart.js kütüphanesi
- **Vanilla JavaScript**: Hızlı ve hafif kod yapısı
- **Font Integration**: Google Fonts (Inter)
- **Responsive Design**: Mobile-first yaklaşım

## 🚀 Kurulum ve Kullanım

### Gereksinimler
- Modern web tarayıcısı (Chrome, Firefox, Safari, Edge)
- İnternet bağlantısı (CDN kaynakları için)

### Kurulum
1. Projeyi bilgisayarınıza indirin veya klonlayın
2. `index.html` dosyasını web tarayıcınızda açın
3. Alternatif olarak bir yerel web sunucusu kullanabilirsiniz

### Yerel Sunucu ile Çalıştırma
```bash
# Python ile (Python 3.x)
python -m http.server 8000

# Node.js ile (npx kullanarak)
npx serve .

# PHP ile
php -S localhost:8000
```

## 📁 Dosya Yapısı

```
SGK WEB SİTESİ/
├── index.html          # Ana HTML dosyası
├── styles.css          # CSS stilleri
├── script.js           # JavaScript kodları
└── README.md           # Proje dokümantasyonu
```

## 🎨 Tasarım Sistemi

### Renk Paleti
- **Ana Renk**: Teal (#0d9488) - Güvenilirlik ve profesyonellik
- **Arka Plan**: Slate (#f8fafc) - Temiz ve modern görünüm
- **Vurgular**: Sky, Emerald, Rose tonları - İçerik kategorilerine göre

### Tipografi
- **Ana Font**: Inter (Google Fonts)
- **Yazı Boyutları**: Responsive ve hiyerarşik yapı
- **Ağırlıklar**: Normal (400), Medium (500), Semibold (600), Bold (700)

## 📱 Responsive Tasarım

- **Desktop**: 1024px ve üzeri - Sidebar ile tam deneyim
- **Tablet**: 768px - 1023px - Uyarlanmış navigasyon
- **Mobile**: 767px ve altı - Tam responsive deneyim

## 🔧 Özelleştirme

### İçerik Güncelleme
`script.js` dosyasındaki `siteData` objesi üzerinden tüm içerikler güncellenebilir:

```javascript
const siteData = {
    primData: {
        // Prim oranları verisi
    },
    sections: {
        // Sayfa içerikleri
    }
};
```

### Stil Değişiklikleri
`styles.css` dosyasından renk, font ve layout ayarları özelleştirilebilir.

## 🤝 Katkıda Bulunma

1. Projeyi fork edin
2. Yeni bir feature branch oluşturun (`git checkout -b feature/YeniOzellik`)
3. Değişikliklerinizi commit edin (`git commit -am 'Yeni özellik eklendi'`)
4. Branch'inizi push edin (`git push origin feature/YeniOzellik`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje eğitim amaçlı olarak geliştirilmiştir. Kaynak kodlar MIT lisansı altında serbestçe kullanılabilir.

## 🚀 Hızlı Başlangıç

### Yerel Bilgisayarınızda Çalıştırma

**En Kolay Yöntem:**
```bash
# Terminal açın ve proje klasörüne gidin
cd "SGK WEB SİTESİ"

# Python sunucuyu başlatın
python3 server.py
```

**Alternatif Yöntemler:**
- **Mac/Linux**: `./start.sh` dosyasını çalıştırın
- **Windows**: `start.bat` dosyasını çift tıklayın
- **Manuel**: `python3 -m http.server 8080`

Sunucu başladıktan sonra `http://localhost:8080` adresini ziyaret edin.

### İnternet Üzerinden Paylaşma

Detaylı deployment rehberi için `DEPLOYMENT.md` dosyasını okuyun.

**Hızlı GitHub Pages Kurulumu:**
1. GitHub'da yeni repository oluşturun
2. Dosyaları yükleyin: `git add . && git commit -m "İlk commit" && git push`
3. Repository Settings > Pages > Source: "Deploy from branch" seçin
4. Branch: "main" seçin ve Save'e tıklayın
5. Siteniz `https://username.github.io/repo-name` adresinde yayında!

## 🔗 Bağımlılıklar

### CDN Kaynakları
- **Tailwind CSS**: https://cdn.tailwindcss.com
- **Chart.js**: https://cdn.jsdelivr.net/npm/chart.js
- **Google Fonts**: https://fonts.googleapis.com

### Font
- **Inter**: Modern ve okunabilir sans-serif font

## 📁 Dosya Yapısı (Güncellenmiş)

```
SGK WEB SİTESİ/
├── index.html              # Ana HTML dosyası
├── styles.css              # CSS stilleri
├── script.js               # JavaScript kodları
├── README.md               # Proje dokümantasyonu
├── DEPLOYMENT.md           # Paylaşım rehberi
├── package.json            # NPM ayarları
├── server.py               # Python sunucu (executable)
├── start.sh                # Mac/Linux başlatıcı (executable)
├── start.bat               # Windows başlatıcı
├── _config.yml             # GitHub Pages ayarları
├── netlify.toml            # Netlify deployment ayarları
├── vercel.json             # Vercel deployment ayarları
└── .gitignore              # Git ignore kuralları
```

## 📞 İletişim

Proje hakkında sorularınız için lütfen iletişime geçin.

---

**Not**: Bu proje, 5510 sayılı Sosyal Sigortalar ve Genel Sağlık Sigortası Kanunu temel alınarak hazırlanmıştır. Yasal değişiklikler takip edilmeli ve içerik güncel tutulmalıdır.
