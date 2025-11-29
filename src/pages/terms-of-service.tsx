import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../data/translations';
import Navigation from '../componets/Navbar/nav';
import Footer from '../componets/footer/footer';
import '../styles/legal-pages.css';

const TermsOfService: React.FC = () => {
  const { currentLanguage } = useLanguage();

  return (
    <div className="legal-page">
      <Navigation />
      <main className="legal-content">
        <div className="legal-container">
          <div className="legal-header">
            <h1>{getTranslation('footer_terms', currentLanguage)}</h1>
            <p className="last-updated">{getTranslation('legal_last_updated', currentLanguage)}: January 2024</p>
          </div>
          
          <div className="legal-body">
            <section>
              <h2>{getTranslation('terms_acceptance', currentLanguage)}</h2>
              <p>{getTranslation('terms_acceptance_desc', currentLanguage)}</p>
            </section>
            
            <section>
              <h2>{getTranslation('terms_license', currentLanguage)}</h2>
              <p>{getTranslation('terms_license_desc', currentLanguage)}</p>
            </section>
            
            <section>
              <h2>{getTranslation('terms_disclaimer', currentLanguage)}</h2>
              <p>{getTranslation('terms_disclaimer_desc', currentLanguage)}</p>
            </section>
            
            <section>
              <h2>{getTranslation('terms_limitations', currentLanguage)}</h2>
              <p>{getTranslation('terms_limitations_desc', currentLanguage)}</p>
            </section>
            
            <section>
              <h2>{getTranslation('terms_governing', currentLanguage)}</h2>
              <p>{getTranslation('terms_governing_desc', currentLanguage)}</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;