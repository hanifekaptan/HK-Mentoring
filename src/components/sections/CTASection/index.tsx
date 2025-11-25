import { Button } from '../../base';
import './index.css';
import { useState } from 'react';

interface CTAFormState {
    name: string;
    contact: string;
    level: string;
    timeline: string;
    details: string;
}

export const CTASection = () => {
    const [formData, setFormData] = useState<CTAFormState>({
        name: '',
        contact: '',
        level: '',
        timeline: '',
        details: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [statusMessage, setStatusMessage] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const validate = () => {
        const next: Record<string, string> = {};
        if (!formData.name.trim()) next.name = 'İsim gerekli';
        if (!formData.contact.trim()) next.contact = 'İletişim bilgisi gerekli';

        setErrors(next);
        return Object.keys(next).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        setIsSubmitting(true);
        setStatusMessage('Lütfen bekleyiniz...');

        const formspreeId = import.meta.env.VITE_FORMSPREE_FORM_ID || 'YOUR_FORM_ID';

        try {
            const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    contact: formData.contact,
                    details: formData.details
                })
            });

            if (response.ok) {
                setSubmitted(true);
                setStatusMessage('Başvurunuz başarıyla gönderildi, size en kısa sürede dönüş yapacağız!');
                setFormData({
                    name: '',
                    contact: '',
                    level: '',
                    timeline: '',
                    details: ''
                });
            } else {
                setStatusMessage('Başvurunuzu gönderirken bir hata oluştu. Lütfen tekrar deneyiniz.');
            }
        } catch (error) {
            setStatusMessage('Başvurunuzu gönderirken bir hata oluştu. Lütfen tekrar deneyiniz.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="contact-form" aria-labelledby="cta-title">
            <div className="contact-container">
                <div className="form-wrapper" role="form">
                    <h2 id="cta-title" className="form-title">Ücretsiz Tanışma Görüşmesi: Hedeflerini Konuşalalım!</h2>
                    <p className="form-subtitle">Nasıl başlayalım, neler yapabiliriz - birlikte konuşalalım. Hiçbir bağlayıcılığı yok, sadece tanışmak ve yol haritanızı çizmek için.</p>
                    <form className="contact-form-element" onSubmit={handleSubmit} noValidate>
                        <div className="form-group">
                            <label htmlFor="name">Ad Soyad <span className="required">*</span></label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Adınız ve soyadınız"
                                value={formData.name}
                                onChange={handleChange}
                                aria-invalid={!!errors.name}
                                autoComplete="name"
                            />
                            {errors.name && <span className="error-msg" role="alert">{errors.name}</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="contact">İletişim Bilgisi <span className="required">*</span></label>
                            <input
                                type="text"
                                id="contact"
                                name="contact"
                                placeholder="E-posta veya telefon numaranız (ornek@email.com veya +90 5XX XXX XX XX)"
                                value={formData.contact}
                                onChange={handleChange}
                                aria-invalid={!!errors.contact}
                                autoComplete="email tel"
                            />
                            <span className="field-hint">Size ulaşabilmemiz için e-posta adresiniz veya telefon numaranız.</span>
                            {errors.contact && <span className="error-msg" role="alert">{errors.contact}</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="details">Eklemek istediğiniz notlar (İsteğe bağlı)</label>
                            <textarea
                                id="details"
                                name="details"
                                rows={4}
                                placeholder="Varsa özel sorularınızı, kodlama bilgi düzeyinizi veya merak ettiklerinizi buraya yazabilirsiniz. Örnek: 'Hiç bilmiyorum', 'Az biliyorum', 'Kariyer değiştirmek istiyorum'"
                                value={formData.details}
                                onChange={handleChange}
                            />
                        </div>
                        <Button variant="teriary" className="form-submit" onClick={() => { }} disabled={isSubmitting}>
                            {isSubmitting ? 'Gönderiliyor...' : 'Başvuruyu Gönder'}
                        </Button>
                        <div className="form-extras">
                            <p className="form-guarantee">✓ Sadece tanışmak için. Hiçbir satış baskısı yok, zorunluluk yok.</p>
                            <a href="/privacy" className="privacy-link">Gizlilik Politikası</a>
                            {statusMessage && (
                                <div className={`form-message ${submitted ? 'form-success' : 'form-error'}`} role="alert">
                                    {statusMessage}
                                </div>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};