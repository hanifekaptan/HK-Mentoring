# Backend Kurulum Talimatları

Backend klasörü başarıyla oluşturuldu! Şimdi aşağıdaki adımları takip edin:

## 1. Backend Klasörüne Gidin

```bash
cd backend
```

## 2. Python Sanal Ortamı Oluşturun

```bash
python -m venv venv
```

## 3. Sanal Ortamı Aktifleştirin

```bash
venv\Scripts\activate
```

## 4. Bağımlılıkları Yükleyin

```bash
pip install -r requirements.txt
```

## 5. Ortam Değişkenlerini Ayarlayın

`.env.example` dosyasını `.env` olarak kopyalayın:

```bash
copy .env.example .env
```

`.env` dosyasını bir metin editörü ile açın ve aşağıdaki değerleri doldurun:

```env
SENDER_EMAIL=sizin@gmail.com
SENDER_PASSWORD=gmail_uygulama_sifresi
RECIPIENT_EMAIL=formların_gönderileceği@email.com
SMTP_SERVER=smtp.gmail.com
SMTP_PORT=587
SECRET_KEY=güçlü_rastgele_anahtar
PORT=5000
```

### Gmail Uygulama Şifresi Nasıl Alınır?

1. Google Hesabınıza gidin
2. Güvenlik > 2 Adımlı Doğrulama (aktif olmalı)
3. Uygulama Şifreleri bölümüne gidin
4. "Uygulama Seç" > "Diğer" > "Flask Backend" yazın
5. Oluşturulan 16 haneli şifreyi kopyalayıp SENDER_PASSWORD'e yapıştırın

### SECRET_KEY Oluşturma

```bash
python -c "import secrets; print(secrets.token_hex(16))"
```

## 6. Backend'i Başlatın

```bash
python app.py
```

Backend http://localhost:5000 adresinde çalışacaktır.

## 7. Frontend .env Dosyasını Oluşturun

Ana dizine dönün ve frontend için .env dosyası oluşturun:

```bash
cd ..
copy .env.example .env
```

`.env` dosyasını düzenleyin:

```env
VITE_API_URL=http://localhost:5000
```

## 8. Frontend'i Başlatın

```bash
npm run dev
```

## Test Etme

1. Frontend'i açın (genellikle http://localhost:5173)
2. Contact formunu doldurun
3. "Başvuruyu Gönder" butonuna tıklayın
4. E-postanın RECIPIENT_EMAIL adresine geldiğini kontrol edin

## Render'a Dağıtım

### Backend Dağıtımı

1. GitHub'a push edin
2. Render Dashboard > New > Web Service
3. Repository'yi bağlayın
4. Ayarlar:
   - Root Directory: `backend`
   - Build Command: `pip install -r requirements.txt`
   - Start Command: `gunicorn app:app`
5. Environment Variables ekleyin (.env'deki tüm değerleri)
6. Deploy edin

### Frontend Dağıtımı

1. Vercel/Netlify'da yeni proje oluşturun
2. Environment Variable ekleyin:
   - `VITE_API_URL=https://your-backend-url.onrender.com`
3. Deploy edin

Tebrikler! Backend ve frontend entegrasyonu tamamlandı! 🎉
