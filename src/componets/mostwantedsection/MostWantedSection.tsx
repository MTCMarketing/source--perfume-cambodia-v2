import React, { useState } from 'react';
import { FaShoppingBag, FaStar, FaHeart, FaEye, FaFire, FaBolt, FaCrown } from 'react-icons/fa';
import './MostWantedSection.css';
import { IoIosTrendingUp } from "react-icons/io";
interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  originalPrice?: string;
  image: string;
  rating: number;
  reviewCount: number;
  discount?: string;
  isBestSeller?: boolean;
  isTrending?: boolean;
  isNew?: boolean;
}

const MostWantedSection: React.FC = () => {
  const [activeHover, setActiveHover] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Fragrances', count: 8 },
    { id: 'men', name: 'Men Fragrances', count: 2 },
    { id: 'women', name: 'Women Fragrances', count: 2 },
    { id: 'unisex', name: 'Unisex', count: 1 },
    { id: 'luxury', name: 'Luxury Collection', count: 2 },
    { id: 'travel', name: 'Travel Size', count: 1 }
  ];

  const products: Product[] = [
    {
      id: 1,
      name: "Chanel No. 5",
      category: "women",
      price: "$129.00",
      originalPrice: "$165.00",
      image: "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/1.webp",
      rating: 4.9,
      reviewCount: 324,
      discount: "22% OFF",
      isBestSeller: true,
      isTrending: true
    },
    {
      id: 2,
      name: "Dior Sauvage",
      category: "men",
      price: "$89.00",
      originalPrice: "$115.00",
      image: "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/1.webp",
      rating: 4.8,
      reviewCount: 189,
      discount: "23% OFF",
      isBestSeller: true
    },
    {
      id: 3,
      name: "Tom Ford Black Orchid",
      category: "luxury",
      price: "$99.00",
      originalPrice: "$135.00",
      image: "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/1.webp",
      rating: 4.7,
      reviewCount: 512,
      discount: "27% OFF",
      isTrending: true
    },
    {
      id: 4,
      name: "Versace Eros",
      category: "men",
      price: "$69.00",
      originalPrice: "$95.00",
      image: "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/1.webp",
      rating: 4.8,
      reviewCount: 267,
      discount: "27% OFF",
      isNew: true
    },
    {
      id: 5,
      name: "YSL Black Opium",
      category: "women",
      price: "$79.00",
      originalPrice: "$105.00",
      image: "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/2.webp",
      rating: 4.6,
      reviewCount: 178,
      discount: "25% OFF",
      isTrending: true
    },
    {
      id: 6,
      name: "Creed Aventus",
      category: "luxury",
      price: "$299.00",
      originalPrice: "$365.00",
      image: "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/2.webp",
      rating: 4.7,
      reviewCount: 143,
      discount: "18% OFF",
      isNew: true
    },
    {
      id: 7,
      name: "Byredo Gypsy Water",
      category: "unisex",
      price: "$149.00",
      originalPrice: "$180.00",
      image: "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/2.webp",
      rating: 4.8,
      reviewCount: 421,
      discount: "17% OFF",
      isBestSeller: true
    },
    {
      id: 8,
      name: "Maison Margiela Replica",
      category: "travel",
      price: "$39.00",
      originalPrice: "$49.00",
      image: "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/2.webp",
      rating: 4.5,
      reviewCount: 96,
      discount: "20% OFF"
    }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const handleAddToCart = (productId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    console.log('Added to cart:', productId);
  };

  const handleQuickView = (productId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    console.log('Quick view:', productId);
  };

  const handleWishlist = (productId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    console.log('Added to wishlist:', productId);
  };

  const getSavingsAmount = (product: Product) => {
    if (!product.originalPrice) return 0;
    const original = parseFloat(product.originalPrice.replace('$', '').replace(',', ''));
    const current = parseFloat(product.price.replace('$', '').replace(',', ''));
    return original - current;
  };

  return (
    <section className="most-wanted-section">
      <div className="most-wanted-container">
        {/* Section Header */}
        <div className="most-wanted-header">
          <div className="header-content">
            <span className="section-label">🔥 MOST WANTED</span>
            <h2 className="section-title">Shop Our Most Wanted</h2>
            
          </div>
          
          {/* Stats */}
          <div className="stats-container">
            <div className="stat-item">
              <div className="stat-number">10K+</div>
              <div className="stat-label">Monthly Sales</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">4.8/5</div>
              <div className="stat-label">Customer Rating</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="category-filter">
          <div className="filter-container">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                <span className="filter-name">{category.name}</span>
                <span className="filter-count">{category.count}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="most-wanted-grid">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="most-wanted-card"
              onMouseEnter={() => setActiveHover(product.id)}
              onMouseLeave={() => setActiveHover(null)}
            >
              {/* Product Image Container */}
              <div className="most-wanted-image-container">
                {/* Badges */}
                <div className="product-badges">
                  {product.isBestSeller && (
                    <div className="badge bestseller">
                      <FaCrown />
                      Best Seller
                    </div>
                  )}
                  {product.isTrending && (
                    <div className="badge trending">
                     <IoIosTrendingUp />
                      Trending
                    </div>
                  )}
                  {product.isNew && (
                    <div className="badge new">
                      <FaBolt />
                      New
                    </div>
                  )}
                </div>
                
                {/* Discount Badge - Separate positioning */}
                {product.discount && (
                  <div className="badge discount">
                    {product.discount}
                  </div>
                )}

                {/* Product Image */}
                <div className="most-wanted-image-wrapper">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="most-wanted-product-image"
                  />
                </div>

                {/* Hover Overlay */}
                <div className={`most-wanted-hover-overlay ${activeHover === product.id ? 'active' : ''}`}>
                  <div className="most-wanted-hover-content">
                    <button 
                      className="most-wanted-add-to-cart"
                      onClick={(e) => handleAddToCart(product.id, e)}
                    >
                      <FaShoppingBag className="most-wanted-icon" />
                      Add to Cart
                    </button>
                    
                    <div className="most-wanted-secondary-actions">
                      <button 
                        className="most-wanted-quick-view"
                        onClick={(e) => handleQuickView(product.id, e)}
                      >
                        <FaEye />
                      </button>
                      <button 
                        className="most-wanted-wishlist"
                        onClick={(e) => handleWishlist(product.id, e)}
                      >
                        <FaHeart />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="most-wanted-product-info">
                <div className="category-tag">
                  {product.category.toUpperCase()}
                </div>
                
                <h3 className="most-wanted-product-name">{product.name}</h3>
                
                <div className="most-wanted-rating">
                  <div className="most-wanted-stars">
                    {[...Array(5)].map((_, i) => (
                      <FaStar 
                        key={i} 
                        className={`most-wanted-star ${i < Math.floor(product.rating) ? 'filled' : ''}`}
                      />
                    ))}
                  </div>
                  <span className="most-wanted-rating-text">
                    {product.rating} ({product.reviewCount} reviews)
                  </span>
                </div>

                <div className="most-wanted-pricing">
                  <div className="price-container">
                    <span className="current-price12">{product.price}</span>
                    {product.originalPrice && (
                      <span className="original-price">{product.originalPrice}</span>
                    )}
                  </div>
                  
                  {product.originalPrice && (
                    <div className="savings-info">
                      <span className="savings-amount">
                        Save ${getSavingsAmount(product).toFixed(0)}
                      </span>
                      <div className="savings-bar">
                        <div 
                          className="savings-progress" 
                          style={{ 
                            width: `${(getSavingsAmount(product) / parseFloat(product.originalPrice.replace('$', '').replace(',', ''))) * 100}%` 
                          }}
                        ></div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Quick Stats */}
                <div className="quick-stats">
                  <div className="stat">
                    <FaFire className="stat-icon" />
                    <span>High Demand</span>
                  </div>
                  <div className="stat">
                    <span>🚚 Free Shipping</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="most-wanted-cta">
          <div className="cta-content">
            <h3 className="cta-title">Can't Find What You're Looking For?</h3>
            <p className="cta-subtitle">
              Our product experts are here to help you find the perfect tech solution.
            </p>
            <div className="cta-buttons">
              <button className="cta-button primary">
                Browse All Products
              </button>
              <button className="cta-button secondary">
                Contact Expert
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MostWantedSection;