import { Button } from '../../base';
import './index.css';

export const CTASection = () => {

    return (
        <section id="contact" className="contact-form" aria-labelledby="cta-title">
            <div className="contact-container">
                <div className="form-wrapper" role="form">
                    <h2 id="cta-title" className="form-title">Ücretsiz Tanışma Görüşmesi: Hedeflerini Konuşalalım!</h2>
                    <p className="form-subtitle">Nasıl başlayalım, neler yapabiliriz - birlikte konuşalalım. Hiçbir bağlayıcılığı yok, sadece tanışmak ve yol haritanızı çizmek için.</p>
                    <form className="contact-form-element" action="https://formspree.io/f/xknnynjz" method="POST">
                        <div className="form-group">
                            <label htmlFor="name">Ad Soyad <span className="required">*</span></label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Adınız ve soyadınız"
                                required
                                autoComplete="name"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="contact">İletişim Bilgisi <span className="required">*</span></label>
                            <input
                                type="email"
                                id="contact"
                                name="email"
                                placeholder="E-posta adresiniz (ornek@email.com)"
                                required
                                autoComplete="email"
                            />
                            <span className="field-hint">Size ulaşabilmemiz için e-posta adresiniz.</span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="details">Eklemek istediğiniz notlar (İsteğe bağlı)</label>
                            <textarea
                                id="details"
                                name="message"
                                rows={4}
                                placeholder="Varsa özel sorularınızı, kodlama bilgi düzeyinizi veya merak ettiklerinizi buraya yazabilirsiniz."
                            />
                        </div>
                        <button type="submit" className="btn btn-teriary form-submit">
                            Başvuruyu Gönder
                        </button>
                        <div className="form-extras">
                            <p className="form-guarantee">✓ Sadece tanışmak için. Hiçbir satış baskısı yok, zorunluluk yok.</p>
                            <a href="/privacy" className="privacy-link">Gizlilik Politikası</a>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};