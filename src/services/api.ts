import type { ContactFormData } from '../types/api.types';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const submitContactForm = async (formData: ContactFormData) => {
    const params = new URLSearchParams();
    params.append('ad_soyad', formData.ad_soyad);
    params.append('iletisim_bilgisi', formData.iletisim_bilgisi);
    if (formData.ek_notlar) {
        params.append('ek_notlar', formData.ek_notlar);
    }

    const response = await fetch(`${API_URL}/submit_form`, {
        method: 'POST',
        body: params,
        headers: {
            'Accept': 'application/json',
        },
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Bir hata oluştu');
    }

    return response.json();
};
