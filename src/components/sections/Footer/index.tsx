import './index.css';

interface FooterLink {
    text: string;
    href: string;
}

interface FooterProps {
    brandText?: string;
    legalText?: string;
    copyright?: string;
    socialLinks?: FooterLink[];
}

export const Footer = ({
    brandText = 'Birebir Yazılım Mentörlüğü',
    legalText = 'Tüm hakları saklıdır.',
    copyright,
    socialLinks = [
        { text: 'LinkedIn', href: 'https://www.linkedin.com/in/hanifekaptan/' },
        { text: 'GitHub', href: 'https://github.com/hanifekaptan' },
        { text: 'İletişim', href: 'mailto:hanifekaptan.dev@gmail.com' }
    ],
}: FooterProps) => {
    const currentYear = new Date().getFullYear();
    const copyrightText = copyright || `© ${currentYear}`;

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h3>{brandText}</h3>
                        <p>Sıfırdan yazılımcı olma yolculuğunda yanındayım</p>
                    </div>

                    <div className="footer-links">
                        {socialLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer-link"
                            >
                                {link.text}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>
                        {copyrightText} {legalText}
                    </p>
                </div>
            </div>
        </footer>
    );
};
