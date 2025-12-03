import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaPlay, FaPause } from 'react-icons/fa';
import './herobanner.css';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  image: string;
  mobileImage?: string;
  badge?: string;
  discount?: string;
  timer?: boolean;
}

const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides: Slide[] = [
   {
      id: 1,
      title: "CLEARANCE",
      subtitle: "Last Chance to Buy",
      description: "Final clearance sale on last season's models. Massive discounts while stocks last!",
      buttonText: "Grab Deal →",
      buttonLink: "/clearance",
      image: "https://ik.imagekit.io/dloitl7fd8/Untitled%20design.png",
      mobileImage: "https://ik.imagekit.io/dloitl7fd8/tj456jrtyjyrtk.png",
      badge: "CLEARANCE",
      discount: "60% OFF"
    },
    {
      id: 2,
      title: "NEW ARRIVALS",
      subtitle: "Latest Tech Gadgets",
      description: "Discover the newest smartphones, laptops, and smart devices with exclusive launch prices.",
      buttonText: "Explore New →",
      buttonLink: "/new-arrivals",
      image: "https://ik.imagekit.io/dloitl7fd8/profitable.png?updatedAt=1764760887257",
      mobileImage: "https://ik.imagekit.io/dloitl7fd8/ikmage%20rweswdfef.png",
      badge: "NEW",
      discount: "30% OFF"
    },
     {
      id: 3,
      title: "FLASH SALE",
      subtitle: "Up to 70% OFF",
      description: "Limited time offer on premium smartphones. Don't miss out on these incredible deals!",
      buttonText: "Shop Now →",
      buttonLink: "/flash-sale",
      image: "https://ik.imagekit.io/dloitl7fd8/Exclusive%20Deals.png",
      mobileImage: "https://ik.imagekit.io/dloitl7fd8/image.png",
      badge: "HOT DEAL",
      discount: "70% OFF",
      timer: true
    },
    {
      id: 4,
      title: "ELECTRONICS",
      subtitle: "Tech Trends",
      description: "Stay ahead of the curve with the latest tech gadgets and accessories.",
      buttonText: "Discover More →",
      buttonLink: "/electronics",
      image: "https://ik.imagekit.io/dloitl7fd8/PhotoshopExtension_Image.png",
      mobileImage: "https://ik.imagekit.io/dloitl7fd8/rtjgrnethg4wt436y.png",
      badge: "TRENDING",
      discount: "50% OFF"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide, isAutoPlay]);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay);
  };

  const getResponsiveImage = (slide: Slide) => {
    if (window.innerWidth <= 768 && slide.mobileImage) {
      return slide.mobileImage;
    }
    return slide.image;
  };

  // Countdown timer for first slide
  const [timeLeft, setTimeLeft] = useState({
    hours: 4,
    minutes: 30,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const { hours, minutes, seconds } = prev;
        if (seconds > 0) {
          return { ...prev, seconds: seconds - 1 };
        } else if (minutes > 0) {
          return { ...prev, minutes: minutes - 1, seconds: 59 };
        } else if (hours > 0) {
          return { hours: hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 0, minutes: 0, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero-slider">
      {/* Slider Container */}
      <div className="slider-container">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === currentSlide ? 'active' : ''} ${
              index === currentSlide - 1 || (currentSlide === 0 && index === slides.length - 1)
                ? 'prev'
                : ''
            } ${
              index === currentSlide + 1 || (currentSlide === slides.length - 1 && index === 0)
                ? 'next'
                : ''
            }`}
            style={{ backgroundImage: `url(${getResponsiveImage(slide)})` }}
          >
            {/* Slide Content */}
            <div className="slide-content">
              {/* CTA Button */}
              <div className="slide-actions">
                <button 
                  className="cta-button primary"
                  onClick={() => window.location.href = slide.buttonLink}
                >
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button className="slider-nav-op prev" onClick={prevSlide}>
          <FaChevronLeft />
        </button>
        <button className="slider-nav-op next" onClick={nextSlide}>
          <FaChevronRight />
        </button>

        {/* Auto-play Toggle */}
        <button className="autoplay-toggle" onClick={toggleAutoPlay}>
          {isAutoPlay ? <FaPause /> : <FaPlay />}
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="pagination">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`pagination-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          >
            <span className="dot-progress"></span>
          </button>
        ))}
      </div>

      {/* Slide Counter */}
      <div className="slide-counter">
        <span className="current-slide">{(currentSlide + 1).toString().padStart(2, '0')}</span>
        <span className="counter-separator">/</span>
        <span className="total-slides">{slides.length.toString().padStart(2, '0')}</span>
      </div>
    </div>
  );
};

export default HeroSlider;