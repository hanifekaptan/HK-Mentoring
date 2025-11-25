# HK Mentoring

Modern ve interaktif mentörlük platformu. React + TypeScript + Vite ile geliştirilmiş frontend, Formspree ile form yönetimi.

## 🚀 Özellikler

- **Modern UI/UX**: Responsive tasarım ve smooth animasyonlar
- **Dinamik İçerik**: JSON dosyalarından yüklenen dinamik içerik yönetimi
- **İletişim Formu**: Formspree ile e-posta gönderimi
- **Section Bazlı Yapı**: Hero, About, Strategy, Learning Path, Roadmap, Testimonials, Pricing, CTA ve Footer bölümleri
- **TypeScript**: Tip güvenli kod yapısı
- **Modüler Mimari**: Yeniden kullanılabilir component yapısı
- **Bakım Gerektirmeyen**: Backend yok, sadece static frontend

## 📁 Proje Yapısı

```
hk-mentoring/
├── src/
│   ├── components/
│   │   ├── base/             # Temel componentler (Button, SectionTitle)
│   │   └── sections/         # Sayfa bölümleri
│   ├── content/              # JSON veri dosyaları
│   ├── pages/                # Sayfa componentleri
│   ├── services/             # API servisleri
│   └── types/                # TypeScript tip tanımları
├── public/                    # Statik dosyalar
└── package.json
```

## 🛠️ Teknolojiler

- **React 19** - UI kütüphanesi
- **TypeScript** - Tip güvenliği
- **Vite** - Build tool ve dev server
- **CSS3** - Modern styling
- **Formspree** - Form yönetimi ve e-posta gönderimi

## 📦 Kurulum

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev

# Production build
npm run build

# Build önizleme
npm run preview
```

## 📧 Form Yapılandırması

Form, Formspree (`https://formspree.io/f/mqaowkrj`) üzerinden yönetiliyor. 

Kendi Formspree form'unuzu kullanmak için:
1. https://formspree.io'da hesap oluşturun
2. Yeni form oluşturun
3. `src/components/sections/CTASection/index.tsx` dosyasındaki form action URL'ini güncelleyin

## 🌐 Dağıtım

### Vercel (Önerilen)

```bash
npm run build
vercel --prod
```

### Netlify

1. Repository'yi bağlayın
2. Build ayarları:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
3. Deploy edin

**Not**: Backend olmadığı için environment variable gerekmez!

## 🎨 Özelleştirme

### İçerik Düzenleme
JSON dosyalarını düzenleyerek içerikleri özelleştirin:
- `src/content/heroData.json` - Hero section
- `src/content/aboutMeData.json` - Hakkımda
- `src/content/pricingData.json` - Fiyatlandırma
- `src/content/testimonialsData.json` - Referanslar
- vb.

### Stil Düzenleme
Her component kendi CSS dosyasına sahiptir:
- Global stiller: `src/index.css`
- Component stiller: `src/components/sections/[SectionName]/index.css`

## 🐛 Sorun Giderme

### Form Gönderilmiyor
- Formspree form ID'sinin doğru olduğundan emin olun
- Tarayıcı console'unda hata kontrolü yapın
- Formspree dashboard'unuzda spam kontrolü yapın

### Build Hatası
- `node_modules` silip yeniden `npm install` yapın
- TypeScript hatalarını kontrol edin
- Cache temizleyin: `npm run build -- --force`

## 📄 Lisans

Bu proje özel kullanım içindir.

## 👤 İletişim

Sorularınız için [hanifekaptan.dev@gmail.com](mailto:hanifekaptan.dev@gmail.com)

---

⭐ Projeyi beğendiyseniz yıldız vermeyi unutmayın!