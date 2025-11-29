import React from 'react';
import './fragrancehighlights.css';

const FragranceHighlights: React.FC = () => {
  const ingredients = [
    {
      id: 1,
      name: "Oud",
      description: "Rich, deep, timeless essence",
      icon: "🪵",
      color: "#8B4513",
      gradient: "linear-gradient(135deg, #8B4513 0%, #A0522D 100%)",
      descriptionFull: "Rare agarwood essence with centuries of heritage"
    },
    {
      id: 2,
      name: "Rose",
      description: "Elegant & feminine bouquet",
      icon: "🌹",
      color: "#C71585",
      gradient: "linear-gradient(135deg, #C71585 0%, #DB7093 100%)",
      descriptionFull: "Bulgarian rose petals hand-picked at dawn"
    },
    {
      id: 3,
      name: "Amber",
      description: "Warm & sensual embrace",
      icon: "🟠",
      color: "#D4AF37",
      gradient: "linear-gradient(135deg, #D4AF37 0%, #F4D03F 100%)",
      descriptionFull: "Warm resinous notes that linger on the skin"
    },
    {
      id: 4,
      name: "Musk",
      description: "Clean & lasting foundation",
      icon: "🌿",
      color: "#2F4F4F",
      gradient: "linear-gradient(135deg, #2F4F4F 0%, #708090 100%)",
      descriptionFull: "Animalic warmth with modern clean undertones"
    },
    {
      id: 5,
      name: "Sandalwood",
      description: "Creamy & spiritual wood",
      icon: "🌲",
      color: "#DEB887",
      gradient: "linear-gradient(135deg, #DEB887 0%, #F5DEB3 100%)",
      descriptionFull: "Mysore sandalwood aged for exceptional smoothness"
    },
    {
      id: 6,
      name: "Vanilla",
      description: "Comforting & sweet warmth",
      icon: "🍦",
      color: "#D2691E",
      gradient: "linear-gradient(135deg, #D2691E 0%, #CD853F 100%)",
      descriptionFull: "Tahitian vanilla beans with caramelized depth"
    }
  ];

  return (
    <section className="fragrance-highlights">
      <div className="highlights-container">
        {/* Section Header */}
        <div className="highlights-header">
          <span className="section-label-highlights">SIGNATURE NOTES</span>
          <h2 className="section-title-highlights">Fragrance Highlights</h2>
          <p className="section-subtitle-highlights">
            Discover the exceptional ingredients that define our luxury scents
          </p>
        </div>

        {/* Ingredients Grid */}
        <div className="ingredients-grid">
          {ingredients.map((ingredient) => (
            <div 
              key={ingredient.id} 
              className="ingredient-card"
              style={{ 
                '--ingredient-color': ingredient.color,
                '--ingredient-gradient': ingredient.gradient
              } as React.CSSProperties}
            >
              {/* Card Background */}
              <div className="card-bg"></div>
              
              {/* Icon Container */}
              <div className="icon-container">
                <div className="icon-wrapper">
                  <span className="ingredient-icon">{ingredient.icon}</span>
                  <div className="icon-glow"></div>
                </div>
              </div>

              {/* Content */}
              <div className="ingredient-content">
                <h3 className="ingredient-name">{ingredient.name}</h3>
                <p className="ingredient-description">{ingredient.description}</p>
                <p className="ingredient-full-description">{ingredient.descriptionFull}</p>
              </div>

              {/* Hover Effect */}
              <div className="card-hover-effect"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="highlights-cta">
          <p className="cta-text">
            Each fragrance tells a story through carefully selected ingredients of the highest quality
          </p>
        </div>
      </div>
    </section>
  );
};

export default FragranceHighlights;