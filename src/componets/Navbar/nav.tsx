import React, { useState, useEffect } from 'react';
import { FaUser, FaShoppingBag, FaTimes, FaBars, FaSearch, FaChevronDown } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';
import { getTranslation } from '../../data/translations';
import './Navbar.css';
import logo from '../../images/logo2.avif'

const Navigation: React.FC = () => {
  const { currentLanguage, setLanguage } = useLanguage();
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [expandedMobileCategory, setExpandedMobileCategory] = useState<string | null>(null);

  const currencies = [
    { code: 'USD', flag: '🇺🇸', name: 'US Dollar' },
    { code: 'EUR', flag: '🇪🇺', name: 'Euro' },
    { code: 'GBP', flag: '🇬🇧', name: 'British Pound' },
    { code: 'AED', flag: '🇦🇪', name: 'UAE Dirham' },
    { code: 'AUD', flag: '🇦🇺', name: 'Australian Dollar' }
  ];

  const languages = [
    { code: 'en', flag: '🇺🇸', name: 'English' },
    { code: 'km', flag: '🇰🇭', name: 'ខ្មែរ' },
    { code: 'vn', flag: '🇻🇳', name: 'Tiếng Việt' }
  ];

  const categoriesWithSubs = {
    "Men's Fragrances": [
      { name: 'Eau de Toilette', icon: '💧' },
      { name: 'Eau de Parfum', icon: '🌟' },
      { name: 'Cologne', icon: '🍃' },
      { name: 'Aftershave', icon: '✨' }
    ],
    "Women's Fragrances": [
      { name: 'Floral', icon: '🌸' },
      { name: 'Oriental', icon: '🌙' },
      { name: 'Fresh', icon: '🌊' },
      { name: 'Woody', icon: '🌳' }
    ],
    "Unisex Perfumes": [
      { name: 'Citrus', icon: '🍋' },
      { name: 'Spicy', icon: '🌶️' },
      { name: 'Aquatic', icon: '🌊' },
      { name: 'Green', icon: '🍀' }
    ],
    "Luxury Brands": [
      { name: 'Chanel', icon: '👑' },
      { name: 'Dior', icon: '💎' },
      { name: 'Tom Ford', icon: '🖤' },
      { name: 'Creed', icon: '⚜️' }
    ],
    "Niche Perfumes": [
      { name: 'Maison Margiela', icon: '🎭' },
      { name: 'Le Labo', icon: '🧪' },
      { name: 'Byredo', icon: '🌿' },
      { name: 'Diptyque', icon: '🕯️' }
    ],
    "Gift Sets": [
      { name: 'For Him', icon: '👨' },
      { name: 'For Her', icon: '👩' },
      { name: 'Travel Sets', icon: '✈️' },
      { name: 'Discovery Sets', icon: '🔍' }
    ],
    "Travel Size": [
      { name: '10ml', icon: '🧴' },
      { name: '15ml', icon: '💼' },
      { name: '30ml', icon: '🎒' },
      { name: 'Rollerballs', icon: '⚪' }
    ],
    "New Arrivals": [
      { name: 'This Week', icon: '🆕' },
      { name: 'This Month', icon: '📅' },
      { name: 'Limited Edition', icon: '⭐' },
      { name: 'Exclusive', icon: '💫' }
    ]
  };

  const categories = Object.keys(categoriesWithSubs);

  const quickLinks = [
    'Fragrance Guide',
    'Sample Program', 
    'Perfume Journal',
    'Special Offers',
    'Gift Guide'
  ];

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          const shouldBeScrolled = currentScrollY > 50;
          setIsScrolled(shouldBeScrolled);

          // Hide/show navbar based on scroll direction
          if (currentScrollY > lastScrollY && currentScrollY > 100) {
            // Scrolling down - hide navbar
            setIsNavVisible(false);
          } else if (currentScrollY < lastScrollY) {
            // Scrolling up - show navbar
            setIsNavVisible(true);
          }

          setLastScrollY(currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
    }
  };

  return (
    <header className={`nav-header ${isScrolled ? 'scrolled' : ''} ${!isNavVisible ? 'nav-hidden' : ''}`}>
      {/* Top Promise Bar */}
      <div className="promise-bar">
        <div className="promise-content">
          <div className="promise-links">
            <span>🌸 Free Samples with Every Order</span>
            <span>🚚 Free Shipping Over $50</span>
            <span>💎 Authentic Fragrances Only</span>
          </div>
          <div className="promise-right">
            <span>🎁 Gift Wrapping Available</span>
            <span className="black-friday">✨ Special Offers</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar">
        <div className="nav-content">
          {/* Mobile Menu Button - Left */}
          <div className="nav-mobile-left">
            <button
              className="mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Desktop Left - Logo */}
          <div className="nav-left">
            <img src={logo} alt="Perfume Cambodia" className="logo" />
          </div>

          {/* Mobile Center - Logo */}
          <div className="nav-mobile-center">
            <img src={logo} alt="Perfume Cambodia" className="logo" />
          </div>

          {/* Center - Search Bar */}
          <div className="nav-center">
            <div className="search-container">
              <form onSubmit={handleSearchSubmit} className="search-form">
                <div className="search-input-container">
                  <FaSearch className="search-icon12" />
                  <input
                    type="text"
                    placeholder="Search for perfumes, brands, or scents..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-input"
                  />
                </div>
                <button type="submit" className="search-submit">
                  Search
                </button>
              </form>
            </div>
          </div>

          {/* Right - Icons */}
          <div className="nav-right">
            <div className="language-selector">
              <button 
                className="language-current"
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              >
                <span className="language-flag">{languages.find(l => l.code === currentLanguage)?.flag}</span>
                <span className="language-code">{currentLanguage.toUpperCase()}</span>
                <FaChevronDown className="chevron-icon" />
              </button>

              {isLanguageOpen && (
                <div className="language-dropdown">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      className="language-option"
                      onClick={() => {
                        setLanguage(language.code as any);
                        setIsLanguageOpen(false);
                      }}
                    >
                      <span className="language-flag">{language.flag}</span>
                      <span className="language-name">{language.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <button className="nav-icon">
              <FaUser />
            </button>
            
            <button className="nav-icon cart-icon">
              <FaShoppingBag />
              <span className="cart-badge">0</span>
            </button>
          </div>

          {/* Mobile Right - Icons */}
          <div className="nav-mobile-right">
            <button className="nav-icon">
              <FaUser />
            </button>
            
            <button className="nav-icon cart-icon">
              <FaShoppingBag />
              <span className="cart-badge">0</span>
            </button>
          </div>
        </div>
        
        {/* Mobile Second Line - Language & Search */}
        <div className="mobile-second-line">
          <div className="mobile-lang-selector">
            <button 
              className="mobile-lang-current"
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
            >
              <span className="mobile-lang-flag">{languages.find(l => l.code === currentLanguage)?.flag}</span>
              <FaChevronDown className="mobile-lang-chevron" />
            </button>

            {isLanguageOpen && (
              <div className="mobile-lang-dropdown">
                {languages.map((language) => (
                  <button
                    key={language.code}
                    className="mobile-lang-option"
                    onClick={() => {
                      setLanguage(language.code as any);
                      setIsLanguageOpen(false);
                    }}
                  >
                    <span className="mobile-lang-flag">{language.flag}</span>
                    <span className="mobile-lang-name">{language.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
          
          <div className="mobile-search-bar">
            <div className="mobile-search-input-inline">
              <FaSearch className="mobile-search-icon" />
              <input
                type="text"
                placeholder="Search perfumes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="mobile-search-input-field"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleSearchSubmit(e as any);
                  }
                }}
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Categories Bar */}
      <div className="categories-bar">
        <div className="categories-content">
         
          
          <div className="categories-main">
            {categories.map((category, index) => (
              <div 
                key={index} 
                className="category-wrapper"
                onMouseEnter={() => setHoveredCategory(category)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <a href="/" className="category-item">
                  {category}
                </a>
                {hoveredCategory === category && (
                  <div className="category-mega-dropdown">
                    <div className="mega-dropdown-content">
                      <h4 className="mega-dropdown-title">{category}</h4>
                      <div className="mega-dropdown-grid">
                        {categoriesWithSubs[category].map((subcat, subIndex) => (
                          <a key={subIndex} href="/" className="mega-dropdown-item">
                            <span className="mega-item-icon">{subcat.icon}</span>
                            <span className="mega-item-text">{subcat.name}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-overlay ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-container">
          <button
            className="mobile-close-btn"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <FaTimes />
          </button>
          
          <div className="mobile-menu">
            {/* Mobile Categories */}
            <div className="mobile-categories">
              <h3>Categories</h3>
              <div className="mobile-categories-list">
                {categories.map((category, index) => (
                  <div key={index} className="mobile-category-wrapper">
                    <button 
                      className="mobile-category-btn"
                      onClick={() => setExpandedMobileCategory(
                        expandedMobileCategory === category ? null : category
                      )}
                    >
                      <span className="mobile-category-text">{category}</span>
                      <FaChevronDown className={`mobile-category-arrow ${
                        expandedMobileCategory === category ? 'expanded' : ''
                      }`} />
                    </button>
                    {expandedMobileCategory === category && (
                      <div className="mobile-subcategories">
                        {categoriesWithSubs[category].map((subcat, subIndex) => (
                          <a key={subIndex} href="/" className="mobile-subcategory-item">
                            <span className="mobile-subcat-icon">{subcat.icon}</span>
                            <span className="mobile-subcat-text">{subcat.name}</span>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Quick Links */}
            <div className="mobile-quick-links">
              <h3>Quick Links</h3>
              {quickLinks.map((link, index) => (
                <a key={index} href="/" className="mobile-quick-link">
                  {link}
                </a>
              ))}
            </div>

            <div className="mobile-menu-footer">
              <div className="mobile-contact-info">
                <p>Need help? <a href="tel:+855123456789">+855 12 345 6789</a></p>
                <p><a href="mailto:support@perfumecambodia.com">support@perfumecambodia.com</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blush Overlay */}
      <div className={`blush-overlay ${isMobileMenuOpen ? 'active' : ''}`}></div>
    </header>
  );
};

export default Navigation;