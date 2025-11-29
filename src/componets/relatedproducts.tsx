import React from 'react'
import { Link } from 'gatsby'
import { FaStar, FaShoppingBag } from 'react-icons/fa'
import './relatedproducts.css'

interface RelatedProductsProps {
  currentProductId: number
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({ currentProductId }) => {
  const relatedProducts = [
    {
      id: 2,
      name: "Lumière Blanche",
      price: 165,
      rating: 4.8,
      image: "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/1.webp",
      category: "Eau de Toilette"
    },
    {
      id: 3,
      name: "Rose Éternelle",
      price: 195,
      rating: 4.9,
      image: "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/1.webp",
      category: "Eau de Parfum"
    },
    {
      id: 4,
      name: "Oud Imperial",
      price: 225,
      rating: 5.0,
      image: "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/1.webp",
      category: "Parfum"
    },
    {
      id: 5,
      name: "Jardin Secret",
      price: 175,
      rating: 4.7,
      image: "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/1.webp",
      category: "Eau de Parfum"
    }
  ].filter(product => product.id !== currentProductId)

  return (
    <section className="related-products">
      <div className="container">
        <h2>You Might Also Like</h2>
        
        <div className="related-grid">
          {relatedProducts.map(product => (
            <Link key={product.id} to={`/product`} className="related-product-card">
              <div className="related-image">
                <img src={product.image} alt={product.name} />
                <button className="quick-add-btn">
                  <FaShoppingBag />
                </button>
              </div>
              
              <div className="related-info">
                <span className="related-category">{product.category}</span>
                <h3 className="related-name">{product.name}</h3>
                
                <div className="related-rating">
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
                
                <div className="related-price">
                  <span className="price">${product.price}.00</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RelatedProducts