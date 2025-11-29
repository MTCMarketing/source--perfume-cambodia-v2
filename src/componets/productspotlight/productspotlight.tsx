import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaShoppingBag, FaHeart, FaShare } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';
import { getTranslation } from '../../data/translations';
import './productspotlight.css';

interface Product {
  id: number;
  name: string;
  subtitle: string;
  price: string;
  description: string;
  image: string;
  thumbnail: string;
}

const ProductSpotlight: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHoveringThumbnail, setIsHoveringThumbnail] = useState(false);

  const products: Product[] = [
  {
    id: 1,
    name: "Delightful",
    subtitle: "Delicious Perfume",
    price: "$25.00",
    description:
      "Aliquam malesuada bibendum arcu vitae elementum curabitur. Sedipiscing diam doneciam isadipiscing tristique risus necin egestas erat imperdiet sed. feugiat auseulismod in.",
    image:
      "https://ik.imagekit.io/dloitl7fd8/image-removebg-preview%20(1).png",
    thumbnail:
      "https://pk.afnan.com/cdn/shop/files/DeliciousBouquet2048x2048.png?v=1753268227&width=800"
  },
  {
    id: 2,
    name: "Lumière",
    subtitle: "Eternal Elegance",
    price: "$28.00",
    description:
      "Experience the essence of timeless elegance with our signature fragrance. Crafted with rare ingredients and masterful blending techniques for those who appreciate true luxury.",
    image:
      "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/1.webp",
    thumbnail:
      "https://pk.afnan.com/cdn/shop/files/06_PureMusk.jpg?v=1753267749&width=800"
  },
  {
    id: 3,
    name: "Noir",
    subtitle: "Mysterious Allure",
    price: "$32.00",
    description:
      "Dive into the depths of mystery with this captivating blend. Dark, sophisticated notes create an unforgettable impression that lingers throughout the day.",
    image:
      "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/1.webp",
    thumbnail:
      "https://pk.afnan.com/cdn/shop/files/Untitled_design_-_2025-05-17T124553.468.png?v=1753268507&width=600"
  }
];


  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % products.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);

  return (
    <section className="product-spotlight-exact">
      <div className="spotlight-container-exact">
        {/* Left Side - Product Image */}
        <div className="product-image-side">
          <div className="main-image-container">
            <img 
              src={products[currentSlide].image} 
              alt={products[currentSlide].subtitle}
              className="main-product-image"
            />
            <div className="image-shadow"></div>
          </div>
          
          {/* Small Thumbnail */}
          <div 
            className="thumbnail-container"
            onMouseEnter={() => setIsHoveringThumbnail(true)}
            onMouseLeave={() => setIsHoveringThumbnail(false)}
          >
            <img 
              src={products[currentSlide].thumbnail} 
              alt={products[currentSlide].subtitle}
              className="thumbnail-image"
            />
            {isHoveringThumbnail && (
              <div className="thumbnail-fullview">
                <img 
                  src={products[currentSlide].thumbnail} 
                  alt={products[currentSlide].subtitle}
                  className="fullview-image"
                />
              </div>
            )}
          </div>
        </div>

        {/* Right Side - Product Info */}
        <div className="product-info-side">
          <div className="product-content">
            {/* Headers */}
            <h1 className="product-title">{getTranslation('spotlight_title', currentLanguage)}</h1>
            <h2 className="product-subtitle">{getTranslation('spotlight_subtitle', currentLanguage)}</h2>

            {/* Description */}
            <div className="product-description">
              <p>{products[currentSlide].description}</p>
            </div>

            {/* First Divider */}
            <div className="divider"></div>

            {/* Price */}
            <div className="price-section">
              <strong className="price-text">{products[currentSlide].price}</strong>
            </div>

            {/* Second Divider */}
            <div className="divider"></div>

            {/* Navigation */}
            <div className="navigation-section">
              <div className="nav-buttons">
                <button className="nav-button prev-button" onClick={prevSlide}>
                  <span>{getTranslation('spotlight_prev', currentLanguage)}</span>
                </button>
                
                <div className="slide-indicators">
                  <div className="slide-numbers">
                    <span className="current-slide">{currentSlide + 1}/{products.length}</span>
                  </div>
                  <div className="slide-dots">
                    {products.map((_, index) => (
                      <button 
                        key={index}
                        className={`slide-dot ${currentSlide === index ? 'active' : ''}`}
                        onClick={() => setCurrentSlide(index)}
                      >
                        <span className="dot-number">{index + 1}</span>
                      </button>
                    ))}
                  </div>
                </div>
                
                <button className="nav-button next-button" onClick={nextSlide}>
                  <span>{getTranslation('spotlight_next', currentLanguage)}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSpotlight;