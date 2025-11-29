import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { getTranslation } from '../../data/translations';
import CollisionButton from '../hero/CollisionButton';
import './featuredcollections.css';

const FeaturedCollections: React.FC = () => {
  const { currentLanguage } = useLanguage();
  
  const collections = [
    {
      id: 1,
      titleKey: "collection_him",
      subtitleKey: "collection_him_sub",
      image: "https://ik.imagekit.io/dloitl7fd8/image-removebg-preview%20(1).png",
      bgColor: "linear-gradient(135deg, #E8F4FD 0%, #D1E7F5 100%)",
      bgPattern: "radial-gradient(circle at 20% 80%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.2) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(255,255,255,0.1) 0%, transparent 50%)"
    },
    {
      id: 2,
      titleKey: "collection_her",
      subtitleKey: "collection_her_sub",
      image: "https://ik.imagekit.io/dloitl7fd8/image-removebg-preview%20(1).png",
      bgColor: "linear-gradient(135deg, #FDF2F8 0%, #F5E6F0 100%)",
      bgPattern: "radial-gradient(circle at 30% 70%, rgba(255,255,255,0.4) 0%, transparent 40%), radial-gradient(circle at 70% 30%, rgba(255,255,255,0.3) 0%, transparent 40%), radial-gradient(circle at 50% 90%, rgba(255,255,255,0.2) 0%, transparent 30%)"
    },
    {
      id: 3,
      titleKey: "collection_unisex",
      subtitleKey: "collection_unisex_sub",
      image: "https://ik.imagekit.io/dloitl7fd8/image-removebg-preview%20(1).png",
      bgColor: "linear-gradient(135deg, #F0FDF4 0%, #E6F7E9 100%)",
      bgPattern: "radial-gradient(circle at 25% 25%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255,255,255,0.2) 0%, transparent 50%), linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)"
    }
  ];


  return (
    <section className="featured-collections">
      <div className="collections-container">
        {/* Optional Section Header */}
        <div className="collections-header animate-on-scroll">
          <span className="section-subtitle">{getTranslation('featured_subtitle', currentLanguage)}</span>
          <h2 className="section-title">{getTranslation('featured_title', currentLanguage)}</h2>
        </div>

        {/* Collections Grid */}
        <div className="collections-grid">
          {collections.map((collection, index) => (
            <div key={collection.id} className={`collection-card animate-on-scroll delay-${(index + 1) * 100}`}>
              <div
                className="card-background"
                style={{
                  background: collection.bgColor
                }}
              >
                <div
                  className="card-pattern"
                  style={{
                    background: collection.bgPattern,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    opacity: 0.6
                  }}
                ></div>
                <div className="product-image-container1">
                  <img
                    src={collection.image}
                    alt={getTranslation(collection.titleKey, currentLanguage)}
                    className="product-image"
                  />
                </div>
              </div>

              <div className="card-content">
                <h3 className="card-title">{getTranslation(collection.titleKey, currentLanguage)}</h3>
                <div className="title-divider"></div>
                <p className="card-subtitle">{getTranslation(collection.subtitleKey, currentLanguage)}</p>
                <CollisionButton label={getTranslation('collection_cta', currentLanguage)} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;