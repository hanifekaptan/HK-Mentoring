# One-on-One Lessons

Modern ve interaktif bire bir ders/mentörlük platformu. React + TypeScript + Vite ile geliştirilmiş frontend ve Flask ile geliştirilmiş backend API içerir.

## 🚀 Özellikler

- **Modern UI/UX**: Responsive tasarım ve smooth animasyonlar
- **Dinamik İçerik**: JSON dosyalarından yüklenen dinamik içerik yönetimi
- **İletişim Formu**: Backend API ile entegre e-posta gönderimi
- **Section Bazlı Yapı**: Hero, About, Strategy, Learning Path, Roadmap, Testimonials, Pricing, CTA ve Footer bölümleri
- **TypeScript**: Tip güvenli kod yapısı
- **Modüler Mimari**: Yeniden kullanılabilir component yapısı

## 📁 Proje Yapısı

```
one-on-one-lessons/
├── backend/                    # Flask API
│   ├── app.py                 # Ana Flask uygulaması
│   ├── requirements.txt       # Python bağımlılıkları
│   ├── Procfile              # Render deployment
│   ├── .env                  # Ortam değişkenleri (Git'e eklenmez)
│   └── .env.example          # Ortam değişkenleri şablonu
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

### Frontend
- **React 19** - UI kütüphanesi
- **TypeScript** - Tip güvenliği
- **Vite** - Build tool ve dev server
- **CSS3** - Modern styling

### Backend
- **Flask** - Python web framework
- **Flask-CORS** - Cross-Origin Resource Sharing
- **SMTPLib** - E-posta gönderimi
- **python-dotenv** - Ortam değişkenleri yönetimi
- **Gunicorn** - WSGI server

## 📦 Kurulum

### Frontend Kurulumu

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

### Backend Kurulumu

```bash
# Backend dizinine git
cd backend

# Python sanal ortamı oluştur
python -m venv venv

# Sanal ortamı aktifleştir (Windows)
venv\Scripts\activate

# Bağımlılıkları yükle
pip install -r requirements.txt

# .env dosyasını oluştur
copy .env.example .env

# .env dosyasını düzenle ve e-posta bilgilerini ekle
# SENDER_EMAIL, SENDER_PASSWORD, RECIPIENT_EMAIL vb.

# Backend'i başlat
python app.py
```

## 🔐 Ortam Değişkenleri

### Frontend `.env`
```env
VITE_API_URL=http://localhost:5000
```

### Backend `.env`
```env
SENDER_EMAIL=gönderen@gmail.com
SENDER_PASSWORD=gmail_uygulama_sifresi
RECIPIENT_EMAIL=alıcı@gmail.com
SMTP_SERVER=smtp.gmail.com
SMTP_PORT=587
SECRET_KEY=güçlü_rastgele_anahtar
PORT=5000
```

**Not**: Gmail için [Uygulama Şifresi](https://support.google.com/accounts/answer/185833) kullanmalısınız.

## 🌐 Dağıtım

### Backend (Render)

1. Repository'yi GitHub'a push edin
2. Render Dashboard'da yeni Web Service oluşturun
3. Ayarlar:
   - **Root Directory**: `backend`
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `gunicorn app:app`
4. Environment variables ekleyin
5. Deploy edin

### Frontend (Vercel/Netlify)

1. Repository'yi bağlayın
2. Build ayarları:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
3. Environment variable ekleyin: `VITE_API_URL`
4. Deploy edin

## 📝 API Endpoints

### `POST /submit_form`
İletişim formu gönderimi

**Request Body** (form-data):
```
ad_soyad: string (zorunlu)
iletisim_bilgisi: string (zorunlu)
ek_notlar: string (opsiyonel)
```

**Response** (JSON):
```json
{
  "status": "success",
  "message": "Başvurunuz başarıyla gönderildi..."
}
```

### `GET /`
API durum kontrolü

### `GET /health`
Health check endpoint

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

### E-posta Gönderilmiyor
- Gmail Uygulama Şifresi kullandığınızdan emin olun
- 2 Adımlı Doğrulama aktif olmalı
- `.env` dosyasında boşluk olmamalı
- Backend'i yeniden başlatın

### CORS Hatası
- Backend'de `flask-cors` yüklü olduğundan emin olun
- Frontend `.env` dosyasında doğru API URL'i olmalı

### Build Hatası
- `node_modules` silip yeniden `npm install` yapın
- TypeScript hatalarını kontrol edin

## 📄 Lisans

Bu proje özel kullanım içindir.

## 👤 İletişim

Sorularınız için [hanifekaptan.dev@gmail.com](mailto:hanifekaptan.dev@gmail.com)

---

⭐ Projeyi beğendiyseniz yıldız vermeyi unutmayın!