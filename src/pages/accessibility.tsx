import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../data/translations';
import Navigation from '../componets/Navbar/nav';
import Footer from '../componets/footer/footer';
import '../styles/legal-pages.css';

const Accessibility: React.FC = () => {
  const { currentLanguage } = useLanguage();

  return (
    <div className="legal-page">
      <Navigation />
      <main className="legal-content">
        <div className="legal-container">
          <div className="legal-header">
            <h1>{getTranslation('footer_accessibility', currentLanguage)}</h1>
            <p className="last-updated">{getTranslation('legal_last_updated', currentLanguage)}: January 2024</p>
          </div>
          
          <div className="legal-body">
            <section>
              <h2>{getTranslation('accessibility_commitment', currentLanguage)}</h2>
              <p>{getTranslation('accessibility_commitment_desc', currentLanguage)}</p>
            </section>
            
            <section>
              <h2>{getTranslation('accessibility_features', currentLanguage)}</h2>
              <ul>
                <li>Keyboard navigation support</li>
                <li>Screen reader compatibility</li>
                <li>High contrast mode support</li>
                <li>Scalable text and images</li>
                <li>Alternative text for images</li>
                <li>Clear navigation structure</li>
              </ul>
            </section>
            
            <section>
              <h2>{getTranslation('accessibility_standards', currentLanguage)}</h2>
              <p>{getTranslation('accessibility_standards_desc', currentLanguage)}</p>
            </section>
            
            <section>
              <h2>{getTranslation('accessibility_feedback', currentLanguage)}</h2>
              <p>{getTranslation('accessibility_feedback_desc', currentLanguage)}:</p>
              <ul>
                <li>Email: accessibility@luxefragrances.com</li>
                <li>Phone: +1 (555) 123-4567</li>
              </ul>
            </section>
            
            <section>
              <h2>{getTranslation('accessibility_improvement', currentLanguage)}</h2>
              <p>{getTranslation('accessibility_improvement_desc', currentLanguage)}</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Accessibility;