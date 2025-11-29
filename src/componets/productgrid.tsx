import React, { useState, useMemo } from 'react'
import { Link } from 'gatsby'
import { FaShoppingBag, FaHeart, FaStar } from 'react-icons/fa'
import './productgrid.css'

interface Product {
  id: number
  name: string
  price: number
  rating: number
  image: string
  category: string
  isNew?: boolean
  isBestSeller?: boolean
  description: string
}

interface ProductGridProps {
  filters: {
    category: string
    priceRange: string
    rating: number
    sortBy: string
  }
}

const ProductGrid: React.FC<ProductGridProps> = ({ filters }) => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)

  const allProducts: Product[] = [
    {
      id: 1,
      name: "Noir Essentiel",
      price: 185,
      rating: 4.9,
      image: "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/1.webp",
      category: "Eau de Parfum",
      isNew: true,
      description: "A sophisticated blend of dark florals and warm spices"
    },
    {
      id: 2,
      name: "Lumière Blanche",
      price: 165,
      rating: 4.8,
      image: "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/1.webp",
      category: "Eau de Toilette",
      isBestSeller: true,
      description: "Fresh and luminous with white floral notes"
    },
    {
      id: 3,
      name: "Rose Éternelle",
      price: 195,
      rating: 4.9,
      image: "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/1.webp",
      category: "Eau de Parfum",
      description: "Timeless rose with modern sophistication"
    },
    {
      id: 4,
      name: "Oud Imperial",
      price: 225,
      rating: 5.0,
      image: "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/1.webp",
      category: "Parfum",
      isBestSeller: true,
      description: "Rich and luxurious oud with royal elegance"
    },
    {
      id: 5,
      name: "Jardin Secret",
      price: 175,
      rating: 4.7,
      image: "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/1.webp",
      category: "Eau de Parfum",
      isNew: true,
      description: "Mysterious garden blooms with hidden depths"
    },
    {
      id: 6,
      name: "Ambre Nuit",
      price: 205,
      rating: 4.8,
      image: "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/2.webp",
      category: "Eau de Parfum",
      description: "Warm amber embraced by midnight mystery"
    }
  ]

  const filteredProducts = useMemo(() => {
    let filtered = allProducts

    if (filters.category) {
      filtered = filtered.filter(product => product.category === filters.category)
    }

    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-').map(p => parseInt(p.replace(/[^0-9]/g, '')))
      if (filters.priceRange === '$300+') {
        filtered = filtered.filter(product => product.price >= 300)
      } else {
        filtered = filtered.filter(product => product.price >= min && product.price <= max)
      }
    }

    if (filters.rating > 0) {
      filtered = filtered.filter(product => product.rating >= filters.rating)
    }

    switch (filters.sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case 'newest':
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0))
        break
      default:
        filtered.sort((a, b) => a.name.localeCompare(b.name))
    }

    return filtered
  }, [filters])

  return (
    <div className="product-grid-container">
      <div className="grid-header">
        <h2>Products ({filteredProducts.length})</h2>
      </div>
      
      <div className="product-grid">
        {filteredProducts.map(product => (
          <div
            key={product.id}
            className="product-card"
            onMouseEnter={() => setHoveredProduct(product.id)}
            onMouseLeave={() => setHoveredProduct(null)}
          >
            <Link to={`/product/${product.id}`} className="product-link">
              <div className="product-image-container">
                <img src={product.image} alt={product.name} />
                
                <div className="product-badges">
                  {product.isNew && <span className="badge new">New</span>}
                  {product.isBestSeller && <span className="badge bestseller">Bestseller</span>}
                </div>

                <div className={`product-actions ${hoveredProduct === product.id ? 'visible' : ''}`}>
                  <button className="action-btn cart-btn">
                    <FaShoppingBag />
                  </button>
                  <button className="action-btn wishlist-btn">
                    <FaHeart />
                  </button>
                </div>
              </div>

              <div className="product-info">
                <span className="product-category">{product.category}</span>
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                
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
                  <span className="price">${product.price}.00</span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductGrid