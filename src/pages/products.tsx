import React, { useState, useEffect, useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Grid } from 'swiper/modules';
import { FaSearch, FaFilter, FaTimes, FaStar, FaHeart, FaShoppingBag, FaEye, FaChevronDown, FaChevronUp, FaList, FaTh, FaSort, FaTruck, FaShieldAlt, FaFire, FaTag, FaCheck, FaTimesCircle, FaShoppingCart } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/grid';
import './products.css';
import Navigationbar from '../componets/Navbar/nav';
import Footer from '../componets/footer/footer';
import { LanguageProvider, useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../data/translations';
import CollisionButton from '../componets/hero/CollisionButton';

interface Product {
  id: number;
  name: string;
  category: string;
  subcategory: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  badge?: 'new' | 'bestseller' | 'sale' | 'limited';
  inStock: boolean;
  isFeatured: boolean;
  fragranceNotes: string[];
  size: string;
  description: string;
}

const ProductsPageContent: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [addedToCart, setAddedToCart] = useState<number | null>(null);

  // Filter states
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
  const [minRating, setMinRating] = useState(0);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [selectedBadges, setSelectedBadges] = useState<string[]>([]);

  // Mock data - In real app, this would come from an API
  useEffect(() => {
    const mockProducts: Product[] = [
  {
    id: 1,
    name: "Nocturne Elixir",
    category: "For Him",
    subcategory: "Oud",
    price: 285,
    originalPrice: 320,
    rating: 4.9,
    reviewCount: 142,
    image: "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/1.webp",
    badge: "new",
    inStock: true,
    isFeatured: true,
    fragranceNotes: ["Oud", "Amber", "Leather"],
    size: "50ml",
    description: "A sophisticated blend of rare oud and warm amber notes."
  },
  {
    id: 2,
    name: "Lumière d'Or",
    category: "Unisex",
    subcategory: "Amber",
    price: 265,
    rating: 4.8,
    reviewCount: 89,
    image: "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/1.webp",
    badge: "bestseller",
    inStock: true,
    isFeatured: true,
    fragranceNotes: ["Saffron", "Rose", "Vanilla"],
    size: "50ml",
    description: "Golden amber and saffron create a warm, inviting scent."
  },
  {
    id: 3,
    name: "Éternel",
    category: "For Her",
    subcategory: "Floral",
    price: 295,
    originalPrice: 340,
    rating: 5.0,
    reviewCount: 203,
    image: "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/1.webp",
    badge: "sale",
    inStock: true,
    isFeatured: false,
    fragranceNotes: ["White Musk", "Oud", "Sandalwood"],
    size: "100ml",
    description: "Eternal elegance with white musk and sandalwood."
  },
  {
    id: 4,
    name: "Oasis Royal",
    category: "Unisex",
    subcategory: "Woody",
    price: 275,
    rating: 4.7,
    reviewCount: 67,
    image: "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/1.webp",
    badge: "limited",
    inStock: false,
    isFeatured: true,
    fragranceNotes: ["Rose", "Saffron", "Oud"],
    size: "30ml",
    description: "Desert rose meets precious saffron in this exotic blend."
  },
  {
    id: 5,
    name: "Velvet Noir",
    category: "For Her",
    subcategory: "Oriental",
    price: 305,
    rating: 4.9,
    reviewCount: 156,
    image: "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/1.webp",
    badge: "bestseller",
    inStock: true,
    isFeatured: false,
    fragranceNotes: ["Black Orchid", "Patchouli", "Vanilla"],
    size: "50ml",
    description: "Mysterious black orchid with warm vanilla undertones."
  },
  {
    id: 6,
    name: "Ambre Supreme",
    category: "For Him",
    subcategory: "Amber",
    price: 255,
    originalPrice: 290,
    rating: 4.6,
    reviewCount: 78,
    image: "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/2.webp",
    badge: "sale",
    inStock: true,
    isFeatured: false,
    fragranceNotes: ["Amber", "Vanilla", "Tonka Bean"],
    size: "100ml",
    description: "Rich amber blended with sweet vanilla and tonka bean."
  },
  {
    id: 7,
    name: "Rose Éternelle",
    category: "For Her",
    subcategory: "Floral",
    price: 285,
    rating: 4.8,
    reviewCount: 134,
    image: "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/2.webp",
    badge: "new",
    inStock: true,
    isFeatured: true,
    fragranceNotes: ["Rose", "Peony", "Musk"],
    size: "50ml",
    description: "Timeless rose bouquet with peony and clean musk."
  },
  {
    id: 8,
    name: "Bois de Santal",
    category: "For Him",
    subcategory: "Woody",
    price: 295,
    rating: 4.7,
    reviewCount: 91,
    image: "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/2.webp",
    inStock: true,
    isFeatured: false,
    fragranceNotes: ["Sandalwood", "Cedar", "Vetiver"],
    size: "50ml",
    description: "Premium sandalwood with cedar and vetiver accents."
  },
  {
    id: 9,
    name: "Citron Vert",
    category: "Unisex",
    subcategory: "Fresh",
    price: 235,
    originalPrice: 270,
    rating: 4.5,
    reviewCount: 63,
    image: "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/2.webp",
    badge: "sale",
    inStock: true,
    isFeatured: false,
    fragranceNotes: ["Lime", "Bergamot", "Green Tea"],
    size: "30ml",
    description: "Zesty lime and bergamot with green tea freshness."
  },
  {
    id: 10,
    name: "Vanille Noire",
    category: "For Her",
    subcategory: "Gourmand",
    price: 275,
    rating: 4.9,
    reviewCount: 187,
    image: "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/3.webp",
    badge: "bestseller",
    inStock: true,
    isFeatured: true,
    fragranceNotes: ["Vanilla", "Caramel", "Amber"],
    size: "100ml",
    description: "Dark vanilla with caramel and warm amber notes."
  },
  {
    id: 11,
    name: "Cuir de Russie",
    category: "For Him",
    subcategory: "Leather",
    price: 315,
    rating: 4.8,
    reviewCount: 112,
    image: "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/3.webp",
    badge: "limited",
    inStock: true,
    isFeatured: false,
    fragranceNotes: ["Leather", "Tobacco", "Birch"],
    size: "50ml",
    description: "Russian leather with tobacco and birch wood."
  },
  {
    id: 12,
    name: "Fleur d'Oranger",
    category: "For Her",
    subcategory: "Floral",
    price: 265,
    rating: 4.6,
    reviewCount: 74,
    image: "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/3.webp",
    inStock: false,
    isFeatured: false,
    fragranceNotes: ["Orange Blossom", "Neroli", "White Flowers"],
    size: "50ml",
    description: "Sun-kissed orange blossom with neroli purity."
  }
];

    setProducts(mockProducts);
    setFilteredProducts(mockProducts);
    setLoading(false);
  }, []);

  // Extract filter options
  const categories = useMemo(() => {
    return [...new Set(products.map(p => p.category))];
  }, [products]);

  const subcategories = useMemo(() => {
    return [...new Set(products.map(p => p.subcategory))];
  }, [products]);

  const sizes = useMemo(() => {
    return [...new Set(products.map(p => p.size))];
  }, [products]);

  const badges = useMemo(() => {
    return [...new Set(products.map(p => p.badge).filter(Boolean))] as string[];
  }, [products]);

  // Apply filters
  useEffect(() => {
    let filtered = products;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.fragranceNotes.some(note => note.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Category filter
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(product => selectedCategories.includes(product.category));
    }

    // Subcategory filter
    if (selectedSubcategories.length > 0) {
      filtered = filtered.filter(product => selectedSubcategories.includes(product.subcategory));
    }

    // Price range filter
    filtered = filtered.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Rating filter
    if (minRating > 0) {
      filtered = filtered.filter(product => product.rating >= minRating);
    }

    // Size filter
    if (selectedSizes.length > 0) {
      filtered = filtered.filter(product => selectedSizes.includes(product.size));
    }

    // Stock filter
    if (inStockOnly) {
      filtered = filtered.filter(product => product.inStock);
    }

    // Badge filter
    if (selectedBadges.length > 0) {
      filtered = filtered.filter(product => product.badge && selectedBadges.includes(product.badge));
    }

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.sort((a, b) => b.id - a.id);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default: // featured
        filtered.sort((a, b) => {
          if (a.isFeatured && !b.isFeatured) return -1;
          if (!a.isFeatured && b.isFeatured) return 1;
          return b.rating - a.rating;
        });
    }

    setFilteredProducts(filtered);
    setCurrentPage(1);
  }, [
    products, searchTerm, selectedCategories, selectedSubcategories, priceRange,
    minRating, selectedSizes, inStockOnly, selectedBadges, sortBy
  ]);

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  // Filter handlers
  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const toggleSubcategory = (subcategory: string) => {
    setSelectedSubcategories(prev =>
      prev.includes(subcategory)
        ? prev.filter(s => s !== subcategory)
        : [...prev, subcategory]
    );
  };

  const toggleSize = (size: string) => {
    setSelectedSizes(prev =>
      prev.includes(size)
        ? prev.filter(s => s !== size)
        : [...prev, size]
    );
  };

  const toggleBadge = (badge: string) => {
    setSelectedBadges(prev =>
      prev.includes(badge)
        ? prev.filter(b => b !== badge)
        : [...prev, badge]
    );
  };

  const clearAllFilters = () => {
    setSelectedCategories([]);
    setSelectedSubcategories([]);
    setPriceRange([0, 500]);
    setMinRating(0);
    setSelectedSizes([]);
    setInStockOnly(false);
    setSelectedBadges([]);
    setSearchTerm('');
  };

  const handleAddToCart = (productId: number) => {
    setAddedToCart(productId);
    setTimeout(() => setAddedToCart(null), 2000);
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <FaStar 
        key={index} 
        className={`star ${index < Math.floor(rating) ? 'filled' : ''}`}
      />
    ));
  };

  if (loading) {
    return (
      <div className="products-page loading">
        <div className="loading-spinner"></div>
        <p>{getTranslation('loading_fragrances', currentLanguage)}</p>
      </div>
    );
  }

  return (
    <div className="products-page">
      <Navigationbar />

      {/* Header */}
      <section className="products-header newcontent">
        <div className="container">
          <div className="header-content12">
            <h1>{getTranslation('featured_subtitle', currentLanguage)}</h1>
            <p>{getTranslation('hero_description', currentLanguage)}</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="products-container">
        <div className="container">
          <div className="products-layout">
            
            {/* Filters Sidebar */}
            <aside className={`filters-sidebar ${showFilters ? 'active' : ''}`}>
              <div className="filters-header">
                <h3>{getTranslation('products_filter', currentLanguage)}</h3>
                <button 
                  className="close-filters"
                  onClick={() => setShowFilters(false)}
                >
                  <FaTimes />
                </button>
              </div>

              <div className="filters-content">
                {/* Search */}
                <div className="filter-group">
                  <label className="filter-label">{getTranslation('products_search', currentLanguage)}</label>
                  <div className="search-box">
                    <FaSearch className="search-icon" />
                    <input
                      type="text"
                      placeholder={getTranslation('products_search', currentLanguage)}
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>

                {/* Categories */}
                <div className="filter-group">
                  <label className="filter-label">{getTranslation('products_categories', currentLanguage)}</label>
                  <div className="filter-options">
                    {categories.map(category => (
                      <label key={category} className="filter-option">
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(category)}
                          onChange={() => toggleCategory(category)}
                        />
                        <span className="checkmark"></span>
                        {category}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Subcategories */}
                <div className="filter-group">
                  <label className="filter-label">{getTranslation('products_categories', currentLanguage)}</label>
                  <div className="filter-options">
                    {subcategories.map(subcategory => (
                      <label key={subcategory} className="filter-option">
                        <input
                          type="checkbox"
                          checked={selectedSubcategories.includes(subcategory)}
                          onChange={() => toggleSubcategory(subcategory)}
                        />
                        <span className="checkmark"></span>
                        {subcategory}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div className="filter-group">
                  <label className="filter-label">
                    {getTranslation('products_price_range', currentLanguage)}: ${priceRange[0]} - ${priceRange[1]}
                  </label>
                  <div className="price-slider">
                    <input
                      type="range"
                      min="0"
                      max="500"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                      className="slider"
                    />
                    <input
                      type="range"
                      min="0"
                      max="500"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                      className="slider"
                    />
                  </div>
                </div>

                {/* Rating */}
                <div className="filter-group">
                  <label className="filter-label">{getTranslation('products_rating', currentLanguage)}</label>
                  <div className="rating-options">
                    {[4, 3, 2, 1].map(rating => (
                      <label key={rating} className="rating-option">
                        <input
                          type="radio"
                          name="rating"
                          checked={minRating === rating}
                          onChange={() => setMinRating(rating)}
                        />
                        <span className="stars">
                          {renderStars(rating)}
                        </span>
                        <span className="rating-text">& up</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Size */}
                <div className="filter-group">
                  <label className="filter-label">{getTranslation('products_size', currentLanguage)}</label>
                  <div className="size-options">
                    {sizes.map(size => (
                      <button
                        key={size}
                        className={`size-option ${selectedSizes.includes(size) ? 'selected' : ''}`}
                        onClick={() => toggleSize(size)}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Availability */}
                <div className="filter-group">
                  <label className="filter-option">
                    <input
                      type="checkbox"
                      checked={inStockOnly}
                      onChange={() => setInStockOnly(!inStockOnly)}
                    />
                    <span className="checkmark"></span>
                    {getTranslation('products_in_stock', currentLanguage)}
                  </label>
                </div>

                {/* Badges */}
                <div className="filter-group">
                  <label className="filter-label">{getTranslation('products_badges', currentLanguage)}</label>
                  <div className="badge-options">
                    {badges.map(badge => (
                      <button
                        key={badge}
                        className={`badge-option ${selectedBadges.includes(badge) ? 'selected' : ''}`}
                        onClick={() => toggleBadge(badge)}
                      >
                        {badge === 'new' && <span className="badge new">{getTranslation('badge_new', currentLanguage)}</span>}
                        {badge === 'bestseller' && <span className="badge bestseller">{getTranslation('badge_bestseller', currentLanguage)}</span>}
                        {badge === 'sale' && <span className="badge sale">Sale</span>}
                        {badge === 'limited' && <span className="badge limited">{getTranslation('badge_limited', currentLanguage)}</span>}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                <button className="clear-filters" onClick={clearAllFilters}>
                  {getTranslation('products_clear_filters', currentLanguage)}
                </button>
              </div>
            </aside>

            {/* Products Area */}
            <main className="products-main">
              {/* Toolbar */}
              <div className="products-toolbar">
                <div className="toolbar-left">
                  <button 
                    className="filter-toggle"
                    onClick={() => setShowFilters(!showFilters)}
                  >
                    <FaFilter />
                    {getTranslation('products_filter', currentLanguage)}
                  </button>
                  <span className="product-count">
                    {filteredProducts.length} {getTranslation('products_results', currentLanguage)}
                  </span>
                </div>

                <div className="toolbar-right">
                  <div className="view-toggle">
                    <button
                      className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                      onClick={() => setViewMode('grid')}
                    >
                      <FaTh />
                    </button>
                    <button
                      className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                      onClick={() => setViewMode('list')}
                    >
                      <FaList />
                    </button>
                  </div>

                  <div className="sort-select">
                    <FaSort className="sort-icon" />
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                    >
                      <option value="featured">{getTranslation('products_sort_featured', currentLanguage)}</option>
                      <option value="price-low">{getTranslation('products_sort_price_low', currentLanguage)}</option>
                      <option value="price-high">{getTranslation('products_sort_price_high', currentLanguage)}</option>
                      <option value="rating">{getTranslation('products_sort_rating', currentLanguage)}</option>
                      <option value="newest">{getTranslation('products_sort_newest', currentLanguage)}</option>
                      <option value="name">Name: A to Z</option>
                    </select>
                  </div>

                  <div className="items-per-page">
                    <select
                      value={itemsPerPage}
                      onChange={(e) => setItemsPerPage(Number(e.target.value))}
                    >
                      <option value={12}>12 {getTranslation('products_per_page', currentLanguage)}</option>
                      <option value={24}>24 {getTranslation('products_per_page', currentLanguage)}</option>
                      <option value={36}>36 {getTranslation('products_per_page', currentLanguage)}</option>
                      <option value={48}>48 {getTranslation('products_per_page', currentLanguage)}</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Active Filters */}
              {(selectedCategories.length > 0 || selectedSubcategories.length > 0 || 
                minRating > 0 || selectedSizes.length > 0 || inStockOnly || 
                selectedBadges.length > 0 || priceRange[0] > 0 || priceRange[1] < 500) && (
                <div className="active-filters">
                  <span className="active-filters-label">{getTranslation('products_filter', currentLanguage)}:</span>
                  <div className="active-filter-tags">
                    {selectedCategories.map(category => (
                      <span key={category} className="filter-tag">
                        {category}
                        <button onClick={() => toggleCategory(category)}>
                          <FaTimes />
                        </button>
                      </span>
                    ))}
                    {selectedSubcategories.map(subcategory => (
                      <span key={subcategory} className="filter-tag">
                        {subcategory}
                        <button onClick={() => toggleSubcategory(subcategory)}>
                          <FaTimes />
                        </button>
                      </span>
                    ))}
                    {minRating > 0 && (
                      <span className="filter-tag">
                        {minRating}+ stars
                        <button onClick={() => setMinRating(0)}>
                          <FaTimes />
                        </button>
                      </span>
                    )}
                    {selectedSizes.map(size => (
                      <span key={size} className="filter-tag">
                        {size}
                        <button onClick={() => toggleSize(size)}>
                          <FaTimes />
                        </button>
                      </span>
                    ))}
                    {inStockOnly && (
                      <span className="filter-tag">
                        In Stock
                        <button onClick={() => setInStockOnly(false)}>
                          <FaTimes />
                        </button>
                      </span>
                    )}
                    {selectedBadges.map(badge => (
                      <span key={badge} className="filter-tag">
                        {badge}
                        <button onClick={() => toggleBadge(badge)}>
                          <FaTimes />
                        </button>
                      </span>
                    ))}
                    {(priceRange[0] > 0 || priceRange[1] < 500) && (
                      <span className="filter-tag">
                        ${priceRange[0]} - ${priceRange[1]}
                        <button onClick={() => setPriceRange([0, 500])}>
                          <FaTimes />
                        </button>
                      </span>
                    )}
                    <button className="clear-all-filters" onClick={clearAllFilters}>
                      {getTranslation('products_clear_filters', currentLanguage)}
                    </button>
                  </div>
                </div>
              )}

              {/* Products Grid/List */}
              <div className={`products-display ${viewMode}`}>
                {currentProducts.length === 0 ? (
                  <div className="no-products">
                    <FaTimesCircle className="no-products-icon" />
                    <h3>{getTranslation('products_no_results', currentLanguage)}</h3>
                    <p>Try adjusting your filters or search terms</p>
                    <button className="clear-filters-btn" onClick={clearAllFilters}>
                      {getTranslation('products_clear_filters', currentLanguage)}
                    </button>
                  </div>
                ) : (
                  currentProducts.map(product => (
                    <div key={product.id} className="product-card12">
                      <div className="product-image12">
                        <img src={product.image} alt={product.name} />
                        {product.badge && (
                          <span className={`product-badge ${product.badge}`}>
                            {product.badge === 'new' && getTranslation('badge_new', currentLanguage)}
                            {product.badge === 'bestseller' && getTranslation('badge_bestseller', currentLanguage)}
                            {product.badge === 'sale' && 'Sale'}
                            {product.badge === 'limited' && getTranslation('badge_limited', currentLanguage)}
                          </span>
                        )}
                        {!product.inStock && (
                          <span className="out-of-stock">{getTranslation('products_out_of_stock', currentLanguage)}</span>
                        )}
                        
                        <div className="product-actions">
                          <button 
                            className="action-btn wishlist-btn"
                            title={getTranslation('products_add_to_wishlist', currentLanguage)}
                          >
                            <FaHeart />
                          </button>
                          <button 
                            className="action-btn wishlist-btn"
                            onClick={() => setQuickViewProduct(product)}
                            title={getTranslation('products_quick_view', currentLanguage)}
                          >
                            <FaEye />
                          </button>
                        </div>

                        {addedToCart === product.id && (
                          <div className="added-to-cart-message">
                            <FaShoppingCart />
                            {getTranslation('btn_add_to_cart', currentLanguage)}!
                          </div>
                        )}
                      </div>

                      <div className="product-info">
                        <div className="product-category">{product.category}</div>
                        <h3 className="product-name">{product.name}</h3>
                        <p className="product-description">{product.description}</p>
                        
                        <div className="product-rating">
                          <div className="stars">
                            {renderStars(product.rating)}
                          </div>
                          <span className="rating-count">({product.reviewCount})</span>
                        </div>

                        <div className="fragrance-notes">
                          {product.fragranceNotes.slice(0, 3).map((note, index) => (
                            <span key={index} className="note-tag">{note}</span>
                          ))}
                        </div>

                        <div className="product-size">{product.size}</div>

                        <div className="product-price">
                          <span className="current-price">${product.price}</span>
                          {product.originalPrice && product.originalPrice > product.price && (
                            <span className="original-price">${product.originalPrice}</span>
                          )}
                        </div>

                        <div onClick={() => handleAddToCart(product.id)}>
                          <CollisionButton 
                            label={product.inStock ? getTranslation('btn_add_to_cart', currentLanguage) : getTranslation('products_out_of_stock', currentLanguage)}
                          />
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="pagination">
                  <button
                    className="pagination-btn"
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(currentPage - 1)}
                  >
                    {getTranslation('spotlight_prev', currentLanguage)}
                  </button>
                  
                  {[...Array(totalPages)].map((_, index) => (
                    <button
                      key={index + 1}
                      className={`pagination-btn ${currentPage === index + 1 ? 'active' : ''}`}
                      onClick={() => setCurrentPage(index + 1)}
                    >
                      {index + 1}
                    </button>
                  ))}
                  
                  <button
                    className="pagination-btn"
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(currentPage + 1)}
                  >
                    {getTranslation('spotlight_next', currentLanguage)}
                  </button>
                </div>
              )}
            </main>
          </div>
        </div>
      </div>

      {/* Quick View Modal */}
      {quickViewProduct && (
        <div className="quick-view-modal">
          <div className="modal-content">
            <button 
              className="modal-close"
              onClick={() => setQuickViewProduct(null)}
            >
              <FaTimes />
            </button>
            
            <div className="modal-body">
              <div className="modal-image">
                <img src={quickViewProduct.image} alt={quickViewProduct.name} />
              </div>
              
              <div className="modal-details">
                <h2>{quickViewProduct.name}</h2>
                <p className="modal-category">{quickViewProduct.category}</p>
                
                <div className="modal-rating">
                  <div className="stars">
                    {renderStars(quickViewProduct.rating)}
                  </div>
                  <span>({quickViewProduct.reviewCount} {getTranslation('products_reviews', currentLanguage)})</span>
                </div>

                <p className="modal-description">{quickViewProduct.description}</p>

                <div className="modal-notes">
                  <h4>Fragrance Notes:</h4>
                  <div className="notes-list">
                    {quickViewProduct.fragranceNotes.map((note, index) => (
                      <span key={index} className="note-tag">{note}</span>
                    ))}
                  </div>
                </div>

                <div className="modal-size">
                  <strong>{getTranslation('products_size', currentLanguage)}:</strong> {quickViewProduct.size}
                </div>

                <div className="modal-price">
                  <span className="current-price">${quickViewProduct.price}</span>
                  {quickViewProduct.originalPrice && (
                    <span className="original-price">${quickViewProduct.originalPrice}</span>
                  )}
                </div>

                <div onClick={() => {
                    handleAddToCart(quickViewProduct.id);
                    setQuickViewProduct(null);
                  }}>
                  <CollisionButton 
                    label={quickViewProduct.inStock ? getTranslation('btn_add_to_cart', currentLanguage) : getTranslation('products_out_of_stock', currentLanguage)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Filter Overlay */}
      {showFilters && (
        <div 
          className="filters-overlay"
          onClick={() => setShowFilters(false)}
        ></div>
      )}
      
    <Footer/>
    </div>
  );
};

const ProductsPage: React.FC = () => {
  return (
    <LanguageProvider>
      <ProductsPageContent />
    </LanguageProvider>
  );
};

export default ProductsPage;