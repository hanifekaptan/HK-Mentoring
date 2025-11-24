# One-on-One Lessons Backend API

Flask tabanlı backend API - Form verilerini e-posta olarak gönderir.

## Kurulum

### 1. Python Sanal Ortamı Oluşturun

```bash
cd backend
python -m venv venv
```

### 2. Sanal Ortamı Aktifleştirin

**Windows:**
```bash
venv\Scripts\activate
```

**Mac/Linux:**
```bash
source venv/bin/activate
```

### 3. Bağımlılıkları Yükleyin

```bash
pip install -r requirements.txt
```

### 4. Ortam Değişkenlerini Ayarlayın

`.env.example` dosyasını `.env` olarak kopyalayın:

```bash
copy .env.example .env
```

`.env` dosyasını düzenleyip gerçek değerlerinizi girin:

- **SENDER_EMAIL**: E-posta gönderen adres (Gmail önerilir)
- **SENDER_PASSWORD**: Gmail Uygulama Şifresi (normal şifre değil!)
- **RECIPIENT_EMAIL**: E-postaların gönderileceği hedef adres
- **SECRET_KEY**: Flask için güvenli anahtar

**Gmail Uygulama Şifresi Oluşturma:**
1. Google Hesap ayarlarına gidin
2. Güvenlik > 2 Adımlı Doğrulama (aktif olmalı)
3. Uygulama Şifreleri > Yeni uygulama şifresi oluştur
4. Oluşan 16 haneli şifreyi SENDER_PASSWORD'e yazın

**SECRET_KEY Oluşturma:**
```bash
python -c "import secrets; print(secrets.token_hex(16))"
```

## Yerel Geliştirme

```bash
python app.py
```

API http://localhost:5000 adresinde çalışacaktır.

### Test Endpoint'leri

- `GET /` - API durumu
- `GET /health` - Sağlık kontrolü
- `POST /submit_form` - Form gönderimi

## Render'a Dağıtım

### 1. GitHub Repository'sine Push Edin

```bash
git add .
git commit -m "Add backend API"
git push
```

### 2. Render'da Yeni Web Service Oluşturun

1. [Render Dashboard](https://dashboard.render.com/) > New > Web Service
2. Repository'nizi bağlayın
3. Ayarları yapın:
   - **Name**: one-on-one-lessons-api
   - **Region**: Turkiye
   - **Branch**: main
   - **Root Directory**: backend
   - **Runtime**: Python 3
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `gunicorn app:app`
   - **Instance Type**: Free

### 3. Ortam Değişkenlerini Ekleyin

Render Dashboard'da > Environment sekmesi:

- SENDER_EMAIL
- SENDER_PASSWORD
- RECIPIENT_EMAIL
- SMTP_SERVER
- SMTP_PORT
- SECRET_KEY

### 4. Deploy Edin

"Create Web Service" butonuna tıklayın. Render otomatik olarak deploy edecektir.

## API Kullanımı

### Form Gönderimi

**Endpoint:** `POST /submit_form`

**Content-Type:** `application/x-www-form-urlencoded`

**Parametreler:**
- `ad_soyad` (zorunlu): Ad ve soyad
- `iletisim_bilgisi` (zorunlu): E-posta veya telefon
- `ek_notlar` (opsiyonel): Ek notlar

**Başarılı Yanıt (200):**
```json
{
  "status": "success",
  "message": "Başvurunuz başarıyla gönderildi..."
}
```

**Hata Yanıtı (400/500):**
```json
{
  "status": "error",
  "message": "Hata mesajı"
}
```

## Güvenlik Notları

- `.env` dosyası Git'e eklenmemelidir (`.gitignore`'da olmalı)
- Gmail için mutlaka Uygulama Şifresi kullanın
- Production'da `debug=False` olduğundan emin olun
- CORS ayarları production'da spesifik domain'e kısıtlanabilir

## Sorun Giderme

### E-posta Gönderilmiyor

1. Gmail Uygulama Şifresi kullandığınızdan emin olun
2. 2 Adımlı Doğrulama'nın aktif olduğunu kontrol edin
3. SMTP ayarlarının doğru olduğunu kontrol edin
4. Render loglarını kontrol edin

### CORS Hatası

Frontend URL'ini `app.py`'daki CORS ayarlarına ekleyin:

```python
CORS(app, origins=["https://your-frontend-domain.com"])
```
