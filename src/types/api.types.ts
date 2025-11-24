export interface ContactFormData {
    ad_soyad: string;
    iletisim_bilgisi: string;
    ek_notlar?: string;
}

export interface ApiResponse {
    status: 'success' | 'error';
    message: string;
}
