import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import './productimagegallery.css'

interface ProductImageGalleryProps {
  images: string[]
  productName: string
}

const ProductImageGallery: React.FC<ProductImageGalleryProps> = ({ images, productName }) => {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="product-gallery">
      <div className="main-image-container">
        <img 
          src={images[currentImage]} 
          alt={`${productName} - Image ${currentImage + 1}`}
          className="main-image"
        />
        
        {images.length > 1 && (
          <>
            <button className="gallery-nav prev" onClick={prevImage}>
              <FaChevronLeft />
            </button>
            <button className="gallery-nav next" onClick={nextImage}>
              <FaChevronRight />
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="thumbnail-container">
          {images.map((image, index) => (
            <button
              key={index}
              className={`thumbnail ${index === currentImage ? 'active' : ''}`}
              onClick={() => setCurrentImage(index)}
            >
              <img src={image} alt={`${productName} thumbnail ${index + 1}`} />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default ProductImageGallery