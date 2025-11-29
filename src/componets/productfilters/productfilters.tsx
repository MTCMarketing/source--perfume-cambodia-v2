import React from 'react'
import { FaStar } from 'react-icons/fa'
import './productfilters.css'

interface FilterProps {
  filters: {
    category: string
    priceRange: string
    rating: number
    sortBy: string
  }
  setFilters: (filters: any) => void
}

const ProductFilters: React.FC<FilterProps> = ({ filters, setFilters }) => {
  const categories = ['All', 'Eau de Parfum', 'Eau de Toilette', 'Parfum', 'Cologne']
  const priceRanges = ['All', '$0-$100', '$100-$200', '$200-$300', '$300+']

  const handleFilterChange = (key: string, value: any) => {
    setFilters({ ...filters, [key]: value })
  }

  return (
    <div className="product-filters">
      <h3>Filter Products</h3>
      
      <div className="filter-group">
        <h4>Category</h4>
        {categories.map(category => (
          <label key={category} className="filter-option">
            <input
              type="radio"
              name="category"
              value={category === 'All' ? '' : category}
              checked={filters.category === (category === 'All' ? '' : category)}
              onChange={(e) => handleFilterChange('category', e.target.value)}
            />
            {category}
          </label>
        ))}
      </div>

      <div className="filter-group">
        <h4>Price Range</h4>
        {priceRanges.map(range => (
          <label key={range} className="filter-option">
            <input
              type="radio"
              name="priceRange"
              value={range === 'All' ? '' : range}
              checked={filters.priceRange === (range === 'All' ? '' : range)}
              onChange={(e) => handleFilterChange('priceRange', e.target.value)}
            />
            {range}
          </label>
        ))}
      </div>

      <div className="filter-group">
        <h4>Minimum Rating</h4>
        <div className="rating-filter">
          {[1, 2, 3, 4, 5].map(rating => (
            <button
              key={rating}
              className={`rating-btn ${filters.rating >= rating ? 'active' : ''}`}
              onClick={() => handleFilterChange('rating', rating)}
            >
              <FaStar />
            </button>
          ))}
        </div>
      </div>

      <div className="filter-group">
        <h4>Sort By</h4>
        <select
          value={filters.sortBy}
          onChange={(e) => handleFilterChange('sortBy', e.target.value)}
          className="sort-select"
        >
          <option value="name">Name</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Rating</option>
          <option value="newest">Newest</option>
        </select>
      </div>
    </div>
  )
}

export default ProductFilters