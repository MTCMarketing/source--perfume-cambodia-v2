import React, { useState, useRef } from 'react';
import { FaChevronLeft, FaChevronRight, FaStar, FaShoppingBag, FaHeart, FaEye,  FaGift, FaCrown, FaBolt, FaFire, FaClock, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './NineCollectionSection.css';
import { TbSparkles } from "react-icons/tb";
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
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
const NineCollectionSection: React.FC = () => {

  const scrollRef = useRef<HTMLDivElement>(null);
 
    const [activeHover, setActiveHover] = useState<number | null>(null);
    const [isSliderHovered, setIsSliderHovered] = useState(false);

 
  const products: Product[] = [
    {
      id: 1,
      name: "Chanel No. 5",
      subtitle: "Eau de Parfum - 100ml",
      price: "$129.00",
      originalPrice: "$165.00",
      image: "https://uk.afnan.com/cdn/shop/files/9PM-Product-02_d126191d-c5db-4607-b51c-d00be87fba3a.jpg?v=1728582765&width=600",
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
      image: "https://uk.afnan.com/cdn/shop/files/Untitled_design_52.png?v=1731064675&width=600",
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
      image: "https://uk.afnan.com/cdn/shop/files/9PM_ELIXIR-2.png?v=1753271109&width=600",
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
      image: "https://uk.afnan.com/cdn/shop/files/9AM-Dive-02_fb8cc3ad-f1b0-4032-ae09-6d5a6f52e1bc.jpg?v=1760102312&width=600",
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
      image: "https://uk.afnan.com/cdn/shop/files/9AM-Product-02_fcbd4807-bb91-44d9-b236-404cec40132d.jpg?v=1728582743&width=600",
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
  

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  const calculateSavings = (original: string, current: string) => {
    const orig = parseFloat(original.replace('$', '').replace(',', ''));
    const curr = parseFloat(current.replace('$', '').replace(',', ''));
    return orig - curr;
  };

  return (
    <section className="luxury-perfume-section">
      {/* Hero Banner */}
      <div className="hero-banner">
        <div className="banner-background">
          <img 
            src="https://ik.imagekit.io/dloitl7fd8/9amtopm.webp" 
            alt="Luxury Perfume Collection"
            className="banner-bg-image"
          />
          <div className="banner-gradient-overlay"></div>
        </div>
        <div className="banner-content">
          <div className="banner-text">
            <span className="luxury-badge">
             <TbSparkles /> EXCLUSIVE COLLECTION
            </span>
            <h1 className="banner-title">Signature Fragrances</h1>
            <p className="banner-subtitle">
              Discover our curated selection of the world's most coveted perfumes.
              Each fragrance tells a unique story of elegance and sophistication.
            </p>
            <div className="banner-stats">
              <div className="stat-item">
                <span className="stat-number">100+</span>
                <span className="stat-label">Premium Brands</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">4.9★</span>
                <span className="stat-label">Customer Rating</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">24h</span>
                <span className="stat-label">Fast Delivery</span>
              </div>
            </div>
            <button className="explore-btn">
              <FaGift /> Explore Collection
            </button>
          </div>
        </div>
      </div>
      
      <div className="hot-deals-section">
        <div className="hot-deals-container">
          {/* Section Header */}
          <div className="section-header-hot-deals">
            <div className="section-header-center">
              <span className="section-label-hot">✨ FEATURED COLLECTION</span>
            </div>
            <h2 className="section-title-hot">9AM/9PM COLLECTION</h2>
            <p className="section-subtitle-hot">Handpicked by our fragrance experts for their exceptional quality and lasting appeal</p>
          </div>
          </div>


       <div 
          className="hot-deals-slider-container  "
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
      </div>
    </section>
  );
};

export default NineCollectionSection;