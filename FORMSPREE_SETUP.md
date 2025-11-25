# Formspree Kurulum Rehberi

Backend'i kaldırdık! Artık formu Formspree ile yönetiyoruz.

## Adımlar

### 1. Formspree Hesabı Oluştur
- https://formspree.io adresine git
- Ücretsiz hesap oluştur (ayda 50 form gönderimi)

### 2. Yeni Form Oluştur
- Dashboard'da "New Form" butonuna tıkla
- Form adı: "One-on-One Lessons Contact"
- E-posta adresi: `hanifekaptan.dev@gmail.com` (formlar buraya gelecek)

### 3. Form ID'yi Al
- Form oluşturulduktan sonra size bir ID verecek
- Örnek: `https://formspree.io/f/xyzabc123`
- `xyzabc123` kısmı sizin Form ID'niz

### 4. Form ID'yi Kod İçine Ekle

`src/components/sections/CTASection/index.tsx` dosyasında:

```typescript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
```

Bu satırdaki `YOUR_FORM_ID` kısmını kendi Form ID'nizle değiştirin.

### 5. Deploy Et

Vercel veya Netlify'da deploy edin:

**Vercel:**
```bash
npm run build
vercel --prod
```

**Netlify:**
- Repository'yi bağlayın
- Build command: `npm run build`
- Publish directory: `dist`

### 6. Test Et

- Formu doldurup gönderin
- Formspree dashboard'unuzda gönderimleri göreceksiniz
- E-posta adresinize bildirim gelecek

## Avantajlar

✅ Backend yok, bakım yok
✅ CORS sorunu yok
✅ Ücretsiz plan (50 form/ay)
✅ Spam koruması dahil
✅ E-posta bildirimleri otomatik

## Environment Variables

Artık backend olmadığı için `.env` dosyasından `VITE_API_URL`'i kaldırabilirsiniz.

## Render'dan Backend'i Sil

1. Render Dashboard > Services
2. Backend service'inizi seçin
3. Settings > Delete Service

Artık sadece frontend var! 🎉
