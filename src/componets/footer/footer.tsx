import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterest, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope, FaShippingFast, FaLock, FaHeadset, FaLinkedin } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';
import { getTranslation } from '../../data/translations';
import './footer.css';
import logo from '../../images/logo2.avif';

const Footer: React.FC = () => {
  const { currentLanguage } = useLanguage();
  
  return (
    <footer className="luxury-footer">
      <div className="footer-container">
        
        {/* Top Section */}
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={logo} alt="Afnan Perfumes" className="logo-image" />
            </div>
            <p className="brand-description">
              {getTranslation('footer_brand_desc', currentLanguage)}
            </p>
            
          </div>

          <div className="footer-links-grid">
            {/* Shop Links */}
            <div className="footer-column">
              <h4 className="column-title">{getTranslation('footer_shop', currentLanguage)}</h4>
              <ul className="footer-links">
                <li><a href="#">{getTranslation('footer_all_fragrances', currentLanguage)}</a></li>
                <li><a href="#">{getTranslation('footer_new_arrivals', currentLanguage)}</a></li>
                <li><a href="#">{getTranslation('footer_best_sellers', currentLanguage)}</a></li>
                <li><a href="#">{getTranslation('footer_for_men', currentLanguage)}</a></li>
                <li><a href="#">{getTranslation('footer_for_women', currentLanguage)}</a></li>
                <li><a href="#">{getTranslation('footer_unisex', currentLanguage)}</a></li>
              </ul>
            </div>

            {/* Company Links */}
            <div className="footer-column">
              <h4 className="column-title">{getTranslation('footer_company', currentLanguage)}</h4>
              <ul className="footer-links">
                <li><a href="#">{getTranslation('footer_our_story', currentLanguage)}</a></li>
                <li><a href="#">{getTranslation('footer_sustainability', currentLanguage)}</a></li>
                <li><a href="#">{getTranslation('footer_press', currentLanguage)}</a></li>
                <li><a href="#">{getTranslation('footer_careers', currentLanguage)}</a></li>
                <li><a href="#">{getTranslation('footer_wholesale', currentLanguage)}</a></li>
                <li><a href="#">{getTranslation('footer_affiliates', currentLanguage)}</a></li>
              </ul>
            </div>

            {/* Customer Care */}
            <div className="footer-column">
              <h4 className="column-title">{getTranslation('footer_customer_care', currentLanguage)}</h4>
              <ul className="footer-links">
                <li><a href="#">{getTranslation('footer_contact_us', currentLanguage)}</a></li>
                <li><a href="#">{getTranslation('footer_shipping_info', currentLanguage)}</a></li>
                <li><a href="#">{getTranslation('footer_returns', currentLanguage)}</a></li>
                <li><a href="#">{getTranslation('footer_faq', currentLanguage)}</a></li>
                <li><a href="#">{getTranslation('footer_track_order', currentLanguage)}</a></li>
                <li><a href="#">{getTranslation('footer_gift_cards', currentLanguage)}</a></li>
              </ul>
            </div>

            {/* Contact Info */}
          <div className="footer-column">
            <h4 className="column-title">{getTranslation('footer_follow_us', currentLanguage)}</h4>
            <div className="social-links">
              <a href="https://www.facebook.com/afnanperfumesofficial" className="social-link" aria-label="Facebook" target='_blank'>
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/afnanperfumes/" className="social-link" aria-label="Instagram" target='_blank'>
                <FaInstagram />
              </a>
             
              <a href="https://www.youtube.com/channel/UC05zjsmI89CJlhU8hg7L-VQ" className="social-link" aria-label="Pinterest" target='_blank'>
                <FaYoutube />
              </a>
              <a href="https://ae.linkedin.com/company/afnanperfumes" className="social-link" aria-label="YouTube" target='_blank'>
                <FaLinkedin />
              </a>
            </div>

                      </div>

          </div>
        </div>

        {/* Trust Badges */}
        <div className="trust-badges">
          <div className="trust-badge">
            <FaShippingFast className="badge-icon" />
            <div className="badge-text">
              <strong>{getTranslation('footer_free_shipping', currentLanguage)}</strong>
              <span>{getTranslation('footer_free_shipping_desc', currentLanguage)}</span>
            </div>
          </div>
          <div className="trust-badge">
            <FaLock className="badge-icon" />
            <div className="badge-text">
              <strong>{getTranslation('footer_secure_payment', currentLanguage)}</strong>
              <span>{getTranslation('footer_secure_payment_desc', currentLanguage)}</span>
            </div>
          </div>
          <div className="trust-badge">
            <FaHeadset className="badge-icon" />
            <div className="badge-text">
              <strong>{getTranslation('footer_support', currentLanguage)}</strong>
              <span>{getTranslation('footer_support_desc', currentLanguage)}</span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>&copy; {new Date().getFullYear()}Afnan Perfumes. {getTranslation('footer_copyright', currentLanguage)} <a href='https://makethemcall.me' >MTC</a> </p> 
            </div>
            
            <div className="legal-links">
              <a href="/privacy-policy">{getTranslation('footer_privacy', currentLanguage)}</a>
              <a href="/terms-of-service">{getTranslation('footer_terms', currentLanguage)}</a>
              <a href="/cookie-policy">{getTranslation('footer_cookies', currentLanguage)}</a>
              <a href="/accessibility">{getTranslation('footer_accessibility', currentLanguage)}</a>
            </div>
            
         
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;