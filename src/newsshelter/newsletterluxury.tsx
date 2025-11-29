import React, { useState } from 'react';
import { FaArrowRight, FaEnvelope, FaCrown } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../data/translations';
import './newsletterluxury.css';

const NewsletterLuxury: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log('Subscribed with email:', email);
      setIsSubscribed(true);
      setEmail('');
      // Simulate API call
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="newsletter-luxury">
      {/* Background Video with Overlay */}
      <div className="newsletter-bg">
        <video 
          className="bg-video" 
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src="https://uk.afnan.com/cdn/shop/videos/c/vp/d3333cf5dee2480a90438c23529b4a28/d3333cf5dee2480a90438c23529b4a28.HD-1080p-7.2Mbps-36113887.mp4?v=0" type="video/mp4" />
        </video>
        <div className="bg-overlay"></div>
        <div className="bg-texture"></div>
      </div>

      <div className="newsletter-container">
        <div className="newsletter-content">
          {/* Crown Icon */}
          <div className="crown-icon">
            <FaCrown />
          </div>

          {/* Header */}
          <div className="newsletter-header">
            <h2 className="newsletter-title">{getTranslation('newsletter_title', currentLanguage)}</h2>
            <p className="newsletter-subtitle">
              {getTranslation('newsletter_subtitle', currentLanguage)}
            </p>
          </div>

          {/* Subscription Form */}
          {!isSubscribed ? (
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <div className="input-group">
                <div className="input-wrapper">
                  <FaEnvelope className="input-icon" />
                  <input
                    type="email"
                    placeholder={getTranslation('newsletter_placeholder', currentLanguage)}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="email-input"
                    required
                  />
                </div>
                <button type="submit" className="subscribe-btn">
                  <span>{getTranslation('newsletter_subscribe', currentLanguage)}</span>
                  <FaArrowRight className="btn-icon" />
                </button>
              </div>
            </form>
          ) : (
            /* Success Message */
            <div className="success-message">
              <div className="success-icon">✓</div>
              <h3>{getTranslation('newsletter_success_title', currentLanguage)}</h3>
              <p>{getTranslation('newsletter_success_message', currentLanguage)}</p>
            </div>
          )}

          {/* Trust Badges */}
          <div className="trust-badges">
            <div className="trust-item">
              <span className="trust-number">15K+</span>
              <span className="trust-text">{getTranslation('newsletter_members', currentLanguage)}</span>
            </div>
            <div className="trust-item">
              <span className="trust-number">24H</span>
              <span className="trust-text">{getTranslation('newsletter_early_access', currentLanguage)}</span>
            </div>
            <div className="trust-item">
              <span className="trust-number">VIP</span>
              <span className="trust-text">{getTranslation('newsletter_exclusive', currentLanguage)}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterLuxury;