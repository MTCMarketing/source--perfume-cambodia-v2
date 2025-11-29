import React from "react";
import { FaShoppingBag, FaStar, FaFire, FaCrown } from "react-icons/fa";
import "./MostWantedgallery.css";

const products = [
  {
    image: "https://uk.afnan.com/cdn/shop/files/Historic_Sahara.png?v=1764050187&width=1000",
    name: "Historic Sahara",
    category: "Luxury Fragrance",
    price: "$285.00",
    originalPrice: "$340.00",
    rating: 4.9,
    reviews: 142,
    badge: "BESTSELLER"
  },
  {
    image: "https://uk.afnan.com/cdn/shop/files/Supremacy_Collectors.png?v=1764050187&width=1000",
    name: "Supremacy Collector's Edition",
    category: "Premium Collection", 
    price: "$395.00",
    originalPrice: "$450.00",
    rating: 5.0,
    reviews: 89,
    badge: "LIMITED"
  },
  {
    image: "https://uk.afnan.com/cdn/shop/files/Rare_Reef.png?v=1764050187&width=1000",
    name: "Rare Reef",
    category: "Aquatic Fresh",
    price: "$265.00",
    originalPrice: "$320.00",
    rating: 4.8,
    reviews: 203,
    badge: "TRENDING"
  },
  {
    image: "https://uk.afnan.com/cdn/shop/files/Delicious_Bouquet.png?v=1764050188&width=1000",
    name: "Delicious Bouquet",
    category: "Floral Elegance",
    price: "$275.00",
    originalPrice: "$330.00",
    rating: 4.7,
    reviews: 167,
    badge: "NEW"
  },
];

const MostWantedGallery: React.FC = () => {
  return (
    <section className="lll-mostwanted-gallery-section">
      {/* Section Header */}
      <div className="lll-mostwanted-header">
        <div className="lll-header-content">
          <span className="lll-section-badge">
            <FaFire className="lll-badge-icon" />
            Collections
          </span>
          <h2 className="lll-mostwanted-title">Shop Our Collections </h2>
          <p className="lll-mostwanted-subtitle">
            Discover our curated collection of premium fragrances, each designed to captivate your senses. From timeless classics to exclusive releases, find your perfect scent today.
          </p>
        </div>
        
        {/* Stats */}
        <div className="lll-mostwanted-stats">
          <div className="lll-stat-item">
            <div className="lll-stat-number">10K+</div>
            <div className="lll-stat-label">Monthly Sales</div>
          </div>
          <div className="lll-stat-item">
            <div className="lll-stat-number">4.8/5</div>
            <div className="lll-stat-label">Avg Rating</div>
          </div>
          <div className="lll-stat-item">
            <div className="lll-stat-number">98%</div>
            <div className="lll-stat-label">Satisfaction</div>
          </div>
        </div>
      </div>

      {/* Full Width Grid */}
      <div className="lll-mostwanted-grid-full">
        {products.map((product, index) => (
          <div className="lll-mostwanted-card-full" key={index}>
            {/* Product Badge */}
            <div className={`lll-product-badge lll-${product.badge.toLowerCase()}`}>
              {product.badge === "BESTSELLER" && <FaCrown />}
              {product.badge === "LIMITED" && <FaStar />}
              {product.badge === "TRENDING" && <FaFire />}
              {product.badge}
            </div>

            {/* Product Image */}
            <div className="lll-image-container-full">
              <img src={product.image} alt={product.name} className="lll-mw-image-full" />
              
              {/* Discount Badge */}
              <div className="lll-discount-badge">
                {Math.round((1 - parseFloat(product.price.replace('$', '')) / parseFloat(product.originalPrice.replace('$', ''))) * 100)}% OFF
              </div>
            </div>

            {/* Overlay Content */}
            <div className="lll-mw-overlay-full">
              <div className="lll-overlay-content">
                <div className="lll-product-category">{product.category}</div>
                <h3 className="lll-mw-name-full">{product.name}</h3>
                
                {/* Rating */}
                <div className="lll-product-rating">
                  <div className="lll-stars">
                    {[...Array(5)].map((_, i) => (
                      <FaStar 
                        key={i} 
                        className={`lll-star ${i < Math.floor(product.rating) ? 'lll-filled' : ''}`}
                      />
                    ))}
                  </div>
                  <span className="lll-rating-text">{product.rating} ({product.reviews})</span>
                </div>

                {/* Pricing */}
                <div className="lll-product-pricing">
                  <span className="lll-current-price">{product.price}</span>
                  <span className="lll-original-price">{product.originalPrice}</span>
                </div>

                {/* Quick Stats */}
                <div className="lll-quick-stats">
                  <span className="lll-stat">🔥 High Demand</span>
                  <span className="lll-stat">🚚 Free Shipping</span>
                </div>

                {/* CTA Buttons */}
                <div className="lll-cta-buttons">
                  <button className="lll-buy-button lll-primary">
                    <FaShoppingBag className="lll-button-icon" />
                    Buy Now
                  </button>
                  <button className="lll-buy-button lll-secondary">
                    Quick View
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      
    </section>
  );
};

export default MostWantedGallery;