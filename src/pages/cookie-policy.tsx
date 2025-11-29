import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../data/translations';
import Navigation from '../componets/Navbar/nav';
import Footer from '../componets/footer/footer';
import '../styles/legal-pages.css';

const CookiePolicy: React.FC = () => {
  const { currentLanguage } = useLanguage();

  return (
    <div className="legal-page">
      <Navigation />
      <main className="legal-content">
        <div className="legal-container">
          <div className="legal-header">
            <h1>{getTranslation('footer_cookies', currentLanguage)}</h1>
            <p className="last-updated">{getTranslation('legal_last_updated', currentLanguage)}: January 2024</p>
          </div>
          
          <div className="legal-body">
            <section>
              <h2>{getTranslation('cookies_what', currentLanguage)}</h2>
              <p>{getTranslation('cookies_what_desc', currentLanguage)}</p>
            </section>
            
            <section>
              <h2>{getTranslation('cookies_how_use', currentLanguage)}</h2>
              <p>{getTranslation('cookies_how_use_desc', currentLanguage)}</p>
            </section>
            
            <section>
              <h2>{getTranslation('cookies_types', currentLanguage)}</h2>
              <ul>
                <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
                <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
              </ul>
            </section>
            
            <section>
              <h2>{getTranslation('cookies_managing', currentLanguage)}</h2>
              <p>{getTranslation('cookies_managing_desc', currentLanguage)}</p>
            </section>
            
            <section>
              <h2>{getTranslation('privacy_contact', currentLanguage)}</h2>
              <p>{getTranslation('cookies_contact_desc', currentLanguage)}</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePolicy;