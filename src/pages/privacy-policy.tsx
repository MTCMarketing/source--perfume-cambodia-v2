import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../data/translations';
import Navigation from '../componets/Navbar/nav';
import Footer from '../componets/footer/footer';
import '../styles/legal-pages.css';

const PrivacyPolicy: React.FC = () => {
  const { currentLanguage } = useLanguage();

  return (
    <div className="legal-page">
      <Navigation />
      <main className="legal-content">
        <div className="legal-container">
          <div className="legal-header">
            <h1>{getTranslation('footer_privacy', currentLanguage)}</h1>
            <p className="last-updated">{getTranslation('legal_last_updated', currentLanguage)}: January 2025</p>
          </div>
          
          <div className="legal-body">
            <section>
              <h2>{getTranslation('privacy_info_collect', currentLanguage)}</h2>
              <p>{getTranslation('privacy_info_collect_desc', currentLanguage)}</p>
            </section>
            
            <section>
              <h2>{getTranslation('privacy_how_use', currentLanguage)}</h2>
              <p>{getTranslation('privacy_how_use_desc', currentLanguage)}</p>
            </section>
            
            <section>
              <h2>{getTranslation('privacy_info_sharing', currentLanguage)}</h2>
              <p>{getTranslation('privacy_info_sharing_desc', currentLanguage)}</p>
            </section>
            
            <section>
              <h2>{getTranslation('privacy_data_security', currentLanguage)}</h2>
              <p>{getTranslation('privacy_data_security_desc', currentLanguage)}</p>
            </section>
            
            <section>
              <h2>{getTranslation('privacy_contact', currentLanguage)}</h2>
              <p>{getTranslation('privacy_contact_desc', currentLanguage)}</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;