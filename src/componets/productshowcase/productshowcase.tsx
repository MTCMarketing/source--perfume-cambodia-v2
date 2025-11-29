import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FaShoppingBag, FaHeart, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';
import { getTranslation } from '../../data/translations';
import CollisionButton from '../hero/CollisionButton';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './productshowcase.css';

interface Product {
  id: number;
  name: string;
  price: string;
  rating: number;
  image: string;
  category: string;
  isNew?: boolean;
  isBestSeller?: boolean;
}

const ProductSlider: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const [activeHover, setActiveHover] = useState<number | null>(null);

  const products: Product[] = [
    {
      id: 1,
      name: "Noir Essentiel",
      price: "$185.00",
      rating: 4.9,
      image: "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/1.webp",
      category: "Eau de Parfum",
      isNew: true
    },
    {
      id: 2,
      name: "Lumière Blanche",
      price: "$165.00",
      rating: 4.8,
      image: "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/1.webp",
      category: "Eau de Toilette",
      isBestSeller: true
    },
    {
      id: 3,
      name: "Rose Éternelle",
      price: "$195.00",
      rating: 4.9,
      image: "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/1.webp",
      category: "Eau de Parfum"
    },
    {
      id: 4,
      name: "Oud Imperial",
      price: "$225.00",
      rating: 5.0,
      image: "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/1.webp",
      category: "Parfum",
      isBestSeller: true
    },
    {
      id: 5,
      name: "Jardin Secret",
      price: "$175.00",
      rating: 4.7,
      image: "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/1.webp",
      category: "Eau de Parfum",
      isNew: true
    },
    {
      id: 6,
      name: "Ambre Nuit",
      price: "$205.00",
      rating: 4.8,
      image: "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/2.webp",
      category: "Eau de Parfum"
    }
  ];


  const handleAddToCart = (productId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    console.log('Added to cart:', productId);
    // Add your cart logic here
  };

  const handleQuickView = (productId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    console.log('Quick view:', productId);
    // Add quick view logic here
  };

  return (
    <section className="product-slider-section">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <h2>{getTranslation('products_title', currentLanguage)}</h2>
          <p>{getTranslation('products_subtitle', currentLanguage)}</p>
        </div>

        <div className="slider-container animate-on-scroll delay-200">
          <div className="custom-nav-prev">
            <FaChevronLeft />
          </div>
          <div className="custom-nav-next">
            <FaChevronRight />
          </div>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: '.custom-nav-prev',
              nextEl: '.custom-nav-next'
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 25
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 30
              }
            }}
            className="product-swiper"
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <div
                  className="product-card-31"
                  onMouseEnter={() => setActiveHover(product.id)}
                  onMouseLeave={() => setActiveHover(null)}
                >
                  {/* Product Image with Hover Overlay */}
                  <div className="product-image-container31">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-image"
                    />

                    {/* Badges */}
                    <div className="product-badges">
                      {product.isNew && <span className="badge new">{getTranslation('badge_new', currentLanguage)}</span>}
                      {product.isBestSeller && <span className="badge bestseller">{getTranslation('badge_bestseller', currentLanguage)}</span>}
                    </div>

                    {/* Hover Overlay */}
                    <div className={`product-overlay ${activeHover === product.id ? 'active' : ''}`}>
                      <div className="overlay-content">
                        <button
                          className="add-to-cart-btnr31 btn-shimmer"
                          onClick={(e) => handleAddToCart(product.id, e)}
                        >
                          <FaShoppingBag className="btn-icon" />
                          {getTranslation('btn_add_to_cart', currentLanguage)}
                        </button>
                        <button
                          className="quick-view-btn"
                          onClick={(e) => handleQuickView(product.id, e)}
                        >
                          {getTranslation('btn_quick_view', currentLanguage)}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="product-info">
                    <span className="product-category">{product.category}</span>
                    <h3 className="product-name">{product.name}</h3>

                    <div className="product-rating">
                      <div className="stars">
                        {[...Array(5)].map((_, i) => (
                          <FaStar
                            key={i}
                            className={`star ${i < Math.floor(product.rating) ? 'filled' : ''}`}
                          />
                        ))}
                      </div>
                      <span className="rating-value">({product.rating})</span>
                    </div>

                    <div className="product-price">
                      <span className="price">{product.price}</span>
                      <button
                        className="wishlist-btn"
                        onClick={(e) => handleAddToCart(product.id, e)}
                      >
                        <FaHeart />
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ProductSlider;