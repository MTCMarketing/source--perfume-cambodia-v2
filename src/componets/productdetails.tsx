import React, { useState } from 'react'
import { FaStar, FaShoppingBag, FaHeart, FaShare } from 'react-icons/fa'
import './productdetails.css'

interface ProductDetailsProps {
  product: {
    id: number
    name: string
    price: number
    rating: number
    category: string
    isNew?: boolean
    description: string
    longDescription: string
    notes: {
      top: string[]
      middle: string[]
      base: string[]
    }
    sizes: Array<{ size: string; price: number }>
    inStock: boolean
    reviews: number
  }
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState(product.sizes[2])
  const [quantity, setQuantity] = useState(1)

  const handleAddToCart = () => {
    console.log('Added to cart:', { product: product.id, size: selectedSize.size, quantity })
  }

  return (
    <div className="product-details">
      <div className="product-header">
        <span className="product-category">{product.category}</span>
        {product.isNew && <span className="new-badge">New</span>}
        
        <h1 className="product-title">{product.name}</h1>
        
        <div className="product-rating">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={`star ${i < Math.floor(product.rating) ? 'filled' : ''}`}
              />
            ))}
          </div>
          <span className="rating-text">({product.rating}) • {product.reviews} reviews</span>
        </div>

        <p className="product-description">{product.description}</p>
      </div>

      <div className="product-options">
        <div className="size-selection">
          <h3>Size</h3>
          <div className="size-options">
            {product.sizes.map((sizeOption) => (
              <button
                key={sizeOption.size}
                className={`size-option ${selectedSize.size === sizeOption.size ? 'active' : ''}`}
                onClick={() => setSelectedSize(sizeOption)}
              >
                <span className="size">{sizeOption.size}</span>
                <span className="size-price">${sizeOption.price}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="quantity-selection">
          <h3>Quantity</h3>
          <div className="quantity-controls">
            <button 
              className="qty-btn"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
              -
            </button>
            <span className="quantity">{quantity}</span>
            <button 
              className="qty-btn"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div className="product-price">
        <span className="current-price">${selectedSize.price * quantity}.00</span>
        {quantity > 1 && (
          <span className="unit-price">${selectedSize.price} each</span>
        )}
      </div>

      <div className="product-actions">
        <button 
          className="add-to-cart-btn"
          onClick={handleAddToCart}
          disabled={!product.inStock}
        >
          <FaShoppingBag />
          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
        </button>
        
        <button className="wishlist-btn">
          <FaHeart />
        </button>
        
        <button className="share-btn">
          <FaShare />
        </button>
      </div>

      <div className="product-notes">
        <h3>Fragrance Notes</h3>
        <div className="notes-section">
          <div className="note-group">
            <h4>Top Notes</h4>
            <p>{product.notes.top.join(', ')}</p>
          </div>
          <div className="note-group">
            <h4>Middle Notes</h4>
            <p>{product.notes.middle.join(', ')}</p>
          </div>
          <div className="note-group">
            <h4>Base Notes</h4>
            <p>{product.notes.base.join(', ')}</p>
          </div>
        </div>
      </div>

      <div className="product-description-full">
        <h3>About This Fragrance</h3>
        <p>{product.longDescription}</p>
      </div>
    </div>
  )
}

export default ProductDetails