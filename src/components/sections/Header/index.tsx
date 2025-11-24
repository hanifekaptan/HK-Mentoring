import React, { useState } from 'react';
import './index.css';

const Header: React.FC = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const closeNav = () => {
        setIsNavOpen(false);
    };

    return (
        <header className="site-header">
            <div className="container">
                <div className="header-content">
                    {/* <div className="logo">
                        <a href="/">AI.DevJourney</a>
                    </div> */}
                    <button
                        className={`header-nav-toggle ${isNavOpen ? 'active' : ''}`}
                        onClick={toggleNav}
                        aria-label="Navigasyonu aç/kapat"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <nav className={`header-nav ${isNavOpen ? 'open' : ''}`}>
                        <ul>
                            <li><a href="#modules" onClick={closeNav}>Modüller</a></li>
                            <li><a href="#pricing" onClick={closeNav}>Fiyatlandırma</a></li>
                            <li><a href="#about" onClick={closeNav}>Hakkımda</a></li>
                            <li><a href="#contact" className="header-cta" onClick={closeNav}>Ücretsiz Görüşme</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
