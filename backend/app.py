import os
import smtplib
from email.message import EmailMessage
from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app, resources={
    r"/*": {
        "origins": [
            "https://one-on-one-lessons-frontend.onrender.com",
            "http://localhost:5173",
            "http://localhost:5000"
        ],
        "methods": ["GET", "POST", "OPTIONS"],
        "allow_headers": ["Content-Type", "Accept"]
    }
})
app.secret_key = os.getenv('SECRET_KEY', 'default_secret_key')

SENDER_EMAIL = os.getenv('SENDER_EMAIL')
SENDER_PASSWORD = os.getenv('SENDER_PASSWORD')
RECIPIENT_EMAIL = os.getenv('RECIPIENT_EMAIL')
SMTP_SERVER = os.getenv('SMTP_SERVER', 'smtp.gmail.com')
SMTP_PORT = int(os.getenv('SMTP_PORT', 587))

@app.route('/submit_form', methods=['POST'])
def submit_form():
    ad_soyad = request.form.get('ad_soyad', '').strip()
    iletisim_bilgisi = request.form.get('iletisim_bilgisi', '').strip()
    ek_notlar = request.form.get('ek_notlar', '').strip()

    if not ad_soyad or not iletisim_bilgisi:
        return jsonify({
            'status': 'error', 
            'message': 'Lütfen adınızı soyadınızı ve iletişim bilginizi girin.'
        }), 400

    msg = EmailMessage()
    msg['Subject'] = "Yeni Tanışma Görüşmesi Başvurusu"
    msg['From'] = SENDER_EMAIL
    msg['To'] = RECIPIENT_EMAIL
    content = f"""
Yeni bir tanışma görüşmesi başvurusu alındı:

Ad Soyad: {ad_soyad}
İletişim Bilgisi: {iletisim_bilgisi}
Ek Notlar: {ek_notlar or '-'}

---
Bu e-posta otomatik olarak gönderilmiştir.
    """
    msg.set_content(content)

    try:
        with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as server:
            server.starttls()
            server.login(SENDER_EMAIL, SENDER_PASSWORD)
            server.send_message(msg)
        return jsonify({
            'status': 'success', 
            'message': 'Başvurunuz başarıyla gönderildi, size en kısa sürede dönüş yapacağız!'
        }), 200
    except Exception as e:
        print(f"E-posta gönderme hatası: {str(e)}")
        return jsonify({
            'status': 'error', 
            'message': 'Başvurunuzu gönderirken bir hata oluştu.'
        }), 500

@app.route('/')
def home():
    return jsonify({
        'status': 'ok',
        'message': 'One-on-One Lessons Backend API'
    })

@app.route('/health')
def health():
    return jsonify({'status': 'healthy'}), 200

if __name__ == '__main__':
    app.run(debug=False, host='0.0.0.0', port=int(os.getenv('PORT', 5000)))
