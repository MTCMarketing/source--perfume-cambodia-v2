import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { FaShoppingBag, FaStar, FaHeart, FaEye, FaArrowLeft, FaArrowRight, FaFire, FaClock, FaBolt } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';
import { getTranslation } from '../../data/translations';
import 'swiper/css';
import 'swiper/css/navigation';
import './newreleases.css';

interface Product {
  id: number;
  name: string;
  subtitle: string;
  price: string;
  originalPrice?: string;
  image: string;
  badge: 'flash' | 'hot' | 'limited' | 'trending';
  rating: number;
  reviewCount: number;
  discount?: string;
  timeLeft?: string;
  stock: number;
}

const HotDealsSection: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const [activeHover, setActiveHover] = useState<number | null>(null);
  const [isSliderHovered, setIsSliderHovered] = useState(false);

  const products: Product[] = [
    {
      id: 1,
      name: "Chanel No. 5",
      subtitle: "Eau de Parfum - 100ml",
      price: "$129.00",
      originalPrice: "$165.00",
      image: "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/2.webp",
      badge: "flash",
      rating: 4.9,
      reviewCount: 142,
      discount: "18% OFF",
      timeLeft: "04:30:15",
      stock: 12
    },
    {
      id: 2,
      name: "Dior Sauvage",
      subtitle: "Eau de Toilette - 100ml",
      price: "$89.00",
      originalPrice: "$115.00",
      image: "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/1.webp",
      badge: "hot",
      rating: 4.8,
      reviewCount: 89,
      discount: "17% OFF",
      timeLeft: "06:15:30",
      stock: 8
    },
    {
      id: 3,
      name: "Tom Ford Black Orchid",
      subtitle: "Eau de Parfum - 50ml",
      price: "$99.00",
      originalPrice: "$135.00",
      image: "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/1.webp",
      badge: "trending",
      rating: 4.7,
      reviewCount: 203,
      discount: "17% OFF",
      stock: 25
    },
    {
      id: 4,
      name: "Versace Eros",
      subtitle: "Eau de Toilette - 100ml",
      price: "$69.00",
      originalPrice: "$95.00",
      image: "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/1.webp",
      badge: "limited",
      rating: 4.9,
      reviewCount: 67,
      discount: "15% OFF",
      timeLeft: "12:45:20",
      stock: 5
    },
    {
      id: 5,
      name: "Yves Saint Laurent Black Opium",
      subtitle: "Eau de Parfum - 90ml",
      price: "$79.00",
      originalPrice: "$105.00",
      image: "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/1.webp",
      badge: "hot",
      rating: 4.8,
      reviewCount: 312,
      discount: "25% OFF",
      stock: 18
    }
  ];

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

  const getBadgeText = (badge: string) => {
    switch (badge) {
      case 'flash': return 'FLASH SALE';
      case 'hot': return 'HOT DEAL';
      case 'limited': return 'LIMITED STOCK';
      case 'trending': return 'TRENDING';
      default: return 'HOT DEAL';
    }
  };

  const getBadgeIcon = (badge: string) => {
    switch (badge) {
      case 'flash': return <FaBolt />;
      case 'hot': return <FaFire />;
      case 'limited': return <FaClock />;
      case 'trending': return <FaStar />;
      default: return <FaFire />;
    }
  };

  return (
    <section className="hot-deals-section">
      <div className="hot-deals-container">
        {/* Section Header */}
        <div className="section-header-hot-deals">
          <div className="section-header-center">
            <span className="section-label-hot">🔥 HOT DEALS</span>
          </div>
          <h2 className="section-title-hot">Today's Best Deals</h2>
          <p className="section-subtitle-hot">Limited time offers on premium tech. Don't miss out!</p>
        </div>
   
        {/* Hot Deals Slider Container */}
        <div 
          className="hot-deals-slider-container"
          onMouseEnter={() => setIsSliderHovered(true)}
          onMouseLeave={() => setIsSliderHovered(false)}
        >
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={24}
            slidesPerView={4}
            navigation={{
              nextEl: '.hot-deals-next',
              prevEl: '.hot-deals-prev'
            }}
            autoplay={{ 
              delay: 4000, 
              disableOnInteraction: false 
            }}
            loop={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 16
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 24
              }
            }}
            className="hot-deals-swiper"
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <div 
                  className="hot-deals-product-card"
                  onMouseEnter={() => setActiveHover(product.id)}
                  onMouseLeave={() => setActiveHover(null)}
                >
                  {/* Product Image Container */}
                  <div className="hot-deals-image-container">
                    {/* Badge */}
                    <div className={`hot-deals-badge ${product.badge}`}>
                      {getBadgeIcon(product.badge)}
                      {getBadgeText(product.badge)}
                    </div>

                    {/* Discount Badge */}
                    {product.discount && (
                      <div className="discount-badge">
                        {product.discount}
                      </div>
                    )}

                    {/* Stock Indicator */}
                    <div className="stock-indicator">
                      <div className="stock-bar">
                        <div 
                          className="stock-progress" 
                          style={{ width: `${(product.stock / 30) * 100}%` }}
                        ></div>
                      </div>
                      <span className="stock-text">{product.stock} left</span>
                    </div>

                    {/* Product Image */}
                    <div className="hot-deals-image-wrapper">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="hot-deals-product-image"
                      />
                    </div>

                    {/* Countdown Timer */}
                    {product.timeLeft && (
                      <div className="product-countdown">
                        <FaClock className="countdown-icon" />
                        <span className="countdown-text">{product.timeLeft}</span>
                      </div>
                    )}

                    {/* Hover Overlay */}
                    <div className={`hot-deals-hover-overlay ${activeHover === product.id ? 'active' : ''}`}>
                      <div className="hot-deals-hover-content">
                        <button 
                          className="hot-deals-add-to-cart"
                          onClick={(e) => handleAddToCart(product.id, e)}
                        >
                          <FaShoppingBag className="hot-deals-icon" />
                          Add to Cart
                        </button>
                        
                        <div className="hot-deals-secondary-actions">
                          <button 
                            className="hot-deals-quick-view"
                            onClick={(e) => handleQuickView(product.id, e)}
                          >
                            <FaEye />
                          </button>
                          <button 
                            className="hot-deals-wishlist"
                            onClick={(e) => handleWishlist(product.id, e)}
                          >
                            <FaHeart />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="hot-deals-product-info">
                    <div className="hot-deals-product-text">
                      <h3 className="hot-deals-product-name">{product.name}</h3>
                      <p className="hot-deals-product-subtitle">{product.subtitle}</p>
                      
                      <div className="hot-deals-rating">
                        <div className="hot-deals-stars">
                          {[...Array(5)].map((_, i) => (
                            <FaStar 
                              key={i} 
                              className={`hot-deals-star ${i < Math.floor(product.rating) ? 'filled' : ''}`}
                            />
                          ))}
                        </div>
                        <span className="hot-deals-rating-text">
                          {product.rating} ({product.reviewCount})
                        </span>
                      </div>
                    </div>

                    <div className="hot-deals-pricing">
                      <div className="hot-deals-price-container">
                        <span className="hot-deals-current-price">{product.price}</span>
                        {product.originalPrice && (
                          <span className="hot-deals-original-price">{product.originalPrice}</span>
                        )}
                      </div>
                      <div className="hot-deals-savings">
                        You save ${(parseFloat(product.originalPrice?.replace('$', '') || '0') - parseFloat(product.price.replace('$', ''))).toFixed(0)}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation */}
          <div className={`hot-deals-navigation ${isSliderHovered ? 'visible' : ''}`}>
            <button className="hot-deals-prev">
              <FaArrowLeft />
            </button>
            <button className="hot-deals-next">
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* View All Button */}
        <div className="view-all-button-container">
          <button className="view-all-button">
            View All Deals →
          </button>
        </div>
        
      </div>
    </section>
  );
};

export default HotDealsSection;