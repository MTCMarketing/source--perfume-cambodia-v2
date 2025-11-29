import React from "react";
import { FaCheck, FaStar, FaQuoteLeft, FaUser, FaBriefcase, FaShoppingBag } from "react-icons/fa";

const FloatingTestimonials: React.FC = () => {
  return (
    <section className="ft-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
        .ft-section {
          background: #ffffff;
          padding: 100px 0;
          display: flex;
          justify-content: center;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          color: #1a202c;
        }

        .ft-container {
          width: 90%;
          max-width: 1300px;
        }

        .ft-title-area {
          text-align: center;
          margin-bottom: 60px;
        }

        .ft-title {
          font-size: 48px;
          font-weight: 800;
          color: #1a202c;
          margin-bottom: 20px;
          letter-spacing: -0.03em;
          line-height: 1.1;
          background: linear-gradient(135deg, #1a202c 0%, #2d3748 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .ft-subtitle {
          font-size: 20px;
          color: #64748b;
          font-weight: 500;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .ft-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .ft-col {
          height: 600px;
          overflow: hidden;
          border-radius: 24px;
          -webkit-mask-image: linear-gradient(to bottom, transparent, white 15%, white 85%, transparent);
          mask-image: linear-gradient(to bottom, transparent, white 15%, white 85%, transparent);
        }

        @keyframes scrollColDown {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }

        @keyframes scrollColUp {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }

        .scroll-down {
          animation: scrollColDown 60s linear infinite;
        }

        .scroll-up {
          animation: scrollColUp 60s linear infinite;
        }

        .ft-card {
          background: linear-gradient(145deg, #ffffff 0%, #f8fafc 100%);
          border: 1.5px solid #f1f5f9;
          padding: 32px;
          border-radius: 24px;
          margin-bottom: 28px;
          box-shadow: 0 8px 40px rgba(0, 0, 0, 0.08);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          backdrop-filter: blur(10px);
        }

        .ft-card:hover {
          transform: translateY(-12px) scale(1.02);
          box-shadow: 0 32px 64px rgba(0, 0, 0, 0.15);
          border-color: #e2e8f0;
          background: linear-gradient(145deg, #ffffff 0%, #fefefe 100%);
        }

        .ft-quote-icon {
          position: absolute;
          top: 24px;
          right: 24px;
          color: #f1f5f9;
          font-size: 48px;
          z-index: 0;
        }

        .ft-rating {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
          position: relative;
          z-index: 1;
        }
        
        .ft-stars {
          display: flex;
          gap: 4px;
          color: #f59e0b;
          font-size: 18px;
        }
        
        .ft-rating-text {
          font-size: 16px;
          font-weight: 700;
          color: #1e293b;
          background: #fef3c7;
          padding: 4px 12px;
          border-radius: 20px;
        }

        .ft-text {
          font-size: 17px;
          line-height: 1.7;
          color: #334155;
          margin-bottom: 24px;
          position: relative;
          z-index: 1;
          font-weight: 500;
        }

        .ft-user-info {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 24px;
          position: relative;
          z-index: 1;
        }
        
        .ft-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 700;
          font-size: 16px;
          flex-shrink: 0;
          overflow: hidden;
          border: 2px solid #e2e8f0;
        }
        
        .ft-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .ft-user-details {
          flex: 1;
          min-width: 0;
        }
        
        .ft-user {
          font-size: 16px;
          font-weight: 700;
          color: #1e293b;
          margin: 0;
          display: flex;
          align-items: center;
          gap: 8px;
          line-height: 1.3;
        }
        
        .ft-verified {
          color: #10b981;
          font-size: 14px;
          display: flex;
          align-items: center;
        }

        .ft-meta {
          font-size: 14px;
          color: #64748b;
          margin: 6px 0 0 0;
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }
        
        .ft-meta-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-weight: 500;
        }
        
        .ft-meta-icon {
          color: #94a3b8;
          font-size: 12px;
        }

        .ft-product-tag {
          background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
          color: #0369a1;
          padding: 6px 12px;
          border-radius: 16px;
          font-size: 13px;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: 8px;
          border: 1px solid #bae6fd;
        }

        /* Responsive Design */
        @media(max-width: 1200px) {
          .ft-container { width: 95%; }
          .ft-grid { gap: 25px; }
        }

        @media(max-width: 1024px) {
          .ft-grid { grid-template-columns: repeat(2, 1fr); }
          .ft-title { font-size: 42px; }
          .ft-col { height: 550px; }
          .ft-card { padding: 28px; }
        }

        @media(max-width: 768px) {
          .ft-section { padding: 60px 0; }
          .ft-grid { 
            grid-template-columns: 1fr; 
            gap: 20px;
          }
          .ft-title { 
            font-size: 36px;
            line-height: 1.2;
          }
          .ft-subtitle { 
            font-size: 18px;
            line-height: 1.5;
          }
          .ft-col { 
            height: auto;
            overflow: visible;
            -webkit-mask-image: none;
            mask-image: none;
          }
          .scroll-down, .scroll-up {
            animation: none;
          }
          .ft-card {
            margin-bottom: 20px;
            padding: 24px;
          }
          .ft-text {
            font-size: 16px;
            line-height: 1.6;
          }
          .ft-user-info {
            gap: 12px;
          }
          .ft-avatar {
            width: 44px;
            height: 44px;
          }
          .ft-user {
            font-size: 15px;
          }
          .ft-meta {
            font-size: 13px;
          }
          .ft-product-tag {
            font-size: 12px;
            padding: 5px 10px;
          }
        }

        @media(max-width: 480px) {
          .ft-section { padding: 40px 0; }
          .ft-container { width: 95%; }
          .ft-title-area { margin-bottom: 40px; }
          .ft-title { 
            font-size: 28px;
            margin-bottom: 16px;
          }
          .ft-subtitle { 
            font-size: 16px;
            padding: 0 10px;
          }
          .ft-card { 
            padding: 20px;
            border-radius: 16px;
          }
          .ft-text { 
            font-size: 15px;
            line-height: 1.6;
          }
          .ft-user-info {
            gap: 10px;
          }
          .ft-avatar {
            width: 40px;
            height: 40px;
            font-size: 14px;
          }
          .ft-user {
            font-size: 14px;
            white-space: normal;
          }
          .ft-meta {
            font-size: 12px;
            flex-wrap: wrap;
          }
          .ft-meta-item {
            font-size: 12px;
          }
          .ft-product-tag {
            font-size: 11px;
            padding: 4px 8px;
            margin-top: 6px;
          }
          .ft-rating-text {
            font-size: 14px;
            padding: 3px 8px;
          }
          .ft-stars {
            font-size: 16px;
          }
          .ft-quote-icon {
            font-size: 36px;
            top: 16px;
            right: 16px;
          }
        }

        @media(max-width: 360px) {
          .ft-title { font-size: 24px; }
          .ft-subtitle { font-size: 15px; }
          .ft-card { padding: 16px; }
          .ft-text { font-size: 14px; }
        }
      `}</style>

      <div className="ft-container">
        <div className="ft-title-area">
          <h2 className="ft-title">What Our Customers Say</h2>
          <p className="ft-subtitle">Loved by fragrance enthusiasts worldwide for exceptional quality and value</p>
        </div>

        <div className="ft-grid">

          {/* Column 1 - Fragrances */}
          <div className="ft-col">
            <div className="scroll-down">
              {[
                {
                  name: "Emily Thompson",
                  role: "Perfume Collector",
                  product: "Afnan Turathi Blue",
                  rating: 5,
                  text: "This fragrance is absolutely stunning! The blue bottle design matches the fresh aquatic scent perfectly. Lasts all day with amazing projection!",
                  time: "3 days ago",
                  verified: true,
                  avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
                },
                {
                  name: "Michael Chen",
                  role: "Fragrance Reviewer",
                  product: "Supremacy Not Only Intense",
                  rating: 5,
                  text: "Outstanding complexity and depth in this fragrance. The intensity is perfect for evening wear and special occasions. Highly recommended!",
                  time: "1 week ago",
                  verified: true,
                  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
                },
                {
                  name: "Alex Rodriguez",
                  role: "Scent Enthusiast",
                  product: "Afnan Modest Pour Homme",
                  rating: 5,
                  text: "Flawless masculine fragrance with incredible longevity. The woody notes are perfectly balanced with fresh citrus. Will definitely buy again!",
                  time: "2 weeks ago",
                  verified: true,
                  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                }
              ].map((review, i) => (
                <div key={i} className="ft-card">
                  <FaQuoteLeft className="ft-quote-icon" />
                  <div className="ft-rating">
                    <div className="ft-stars">
                      {[...Array(review.rating)].map((_, starIndex) => (
                        <FaStar key={starIndex} />
                      ))}
                    </div>
                    <span className="ft-rating-text">{review.rating}.0 Rating</span>
                  </div>
                  <p className="ft-text">{review.text}</p>
                  <div className="ft-user-info">
                    <div className="ft-avatar">
                      {review.avatar ? (
                        <img src={review.avatar} alt={review.name} />
                      ) : (
                        review.name.split(' ').map(n => n[0]).join('')
                      )}
                    </div>
                    <div className="ft-user-details">
                      <p className="ft-user">
                        {review.name}
                        {review.verified && (
                          <span className="ft-verified">
                            <FaCheck />
                          </span>
                        )}
                      </p>
                      <div className="ft-meta">
                        <span className="ft-meta-item">
                          <FaBriefcase className="ft-meta-icon" />
                          {review.role}
                        </span>
                        <span className="ft-meta-item">•</span>
                        <span className="ft-meta-item">{review.time}</span>
                      </div>
                      <div className="ft-product-tag">
                        <FaShoppingBag />
                        {review.product}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2 - Fragrances */}
          <div className="ft-col">
            <div className="scroll-up">
              {[
                {
                  name: "Jason Miller",
                  product: "Afnan 9PM",
                  text: "Absolutely incredible fragrance that guarantees compliments everywhere you go. Beats designer perfumes costing three times as much!",
                  rating: 5,
                  role: "Fragrance Enthusiast",
                  verified: true,
                  avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
                },
                {
                  name: "Sophia Rodriguez",
                  product: "Supremacy Silver",
                  text: "The longevity and projection are absolutely phenomenal. Received countless compliments every time I wear this masterpiece!",
                  rating: 5,
                  role: "Beauty Influencer",
                  verified: true,
                  avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
                },
                {
                  name: "Adam Johnson",
                  product: "Rare Reef",
                  text: "Fresh, captivating aquatic scent that lasts throughout the entire day. Perfect for both summer vibes and professional settings.",
                  rating: 5,
                  role: "Marine Biologist",
                  verified: true,
                  avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face"
                },
                {
                  name: "Lina Park",
                  product: "Historic Sahara",
                  text: "Rich, warm, and incredibly sophisticated fragrance that makes me feel confident and elegant on every occasion.",
                  rating: 5,
                  role: "Art Director",
                  verified: true,
                  avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
                }
              ].map((review, i) => (
                <div key={i} className="ft-card">
                  <FaQuoteLeft className="ft-quote-icon" />
                  <div className="ft-rating">
                    <div className="ft-stars">
                      {[...Array(review.rating)].map((_, starIndex) => (
                        <FaStar key={starIndex} />
                      ))}
                    </div>
                    <span className="ft-rating-text">{review.rating}.0 Rating</span>
                  </div>
                  <p className="ft-text">{review.text}</p>
                  <div className="ft-user-info">
                    <div className="ft-avatar">
                      {review.avatar ? (
                        <img src={review.avatar} alt={review.name} />
                      ) : (
                        review.name.split(' ').map(n => n[0]).join('')
                      )}
                    </div>
                    <div className="ft-user-details">
                      <p className="ft-user">
                        {review.name}
                        {review.verified && (
                          <span className="ft-verified">
                            <FaCheck />
                          </span>
                        )}
                      </p>
                      <div className="ft-meta">
                        <span className="ft-meta-item">
                          <FaUser className="ft-meta-icon" />
                          {review.role}
                        </span>
                        <span className="ft-meta-item">•</span>
                        <span className="ft-meta-item">Verified Buyer</span>
                      </div>
                      <div className="ft-product-tag">
                        <FaShoppingBag />
                        {review.product}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3 - Fragrances */}
          <div className="ft-col">
            <div className="scroll-down">
              {[
                {
                  name: "David Kim",
                  product: "Afnan 9PM",
                  text: "9PM delivers an insanely luxurious scent profile that rivals high-end designer fragrances. Exceptional longevity with powerful projection!",
                  rating: 5,
                  role: "Fashion Blogger",
                  verified: true,
                  avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face"
                },
                {
                  name: "Sarah Wilson",
                  product: "Supremacy Silver",
                  text: "Clean, fresh, and remarkably modern scent that adapts perfectly from daily office wear to special evening occasions.",
                  rating: 5,
                  role: "Marketing Director",
                  verified: true,
                  avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face"
                },
                {
                  name: "Carlos Martinez",
                  product: "Rare Reef",
                  text: "Unique aquatic blend that truly stands out from typical mass-market fragrances. The complexity and depth are absolutely phenomenal!",
                  rating: 5,
                  role: "Architect",
                  verified: true,
                  avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face"
                },
                {
                  name: "Emma Davis",
                  product: "Historic Sahara",
                  text: "Warm, spicy, and utterly captivating fragrance that tells an incredible story with every single spray. Absolute masterpiece!",
                  rating: 5,
                  role: "Creative Director",
                  verified: true,
                  avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face"
                }
              ].map((review, i) => (
                <div key={i} className="ft-card">
                  <FaQuoteLeft className="ft-quote-icon" />
                  <div className="ft-rating">
                    <div className="ft-stars">
                      {[...Array(review.rating)].map((_, starIndex) => (
                        <FaStar key={starIndex} />
                      ))}
                    </div>
                    <span className="ft-rating-text">{review.rating}.0 Rating</span>
                  </div>
                  <p className="ft-text">{review.text}</p>
                  <div className="ft-user-info">
                    <div className="ft-avatar">
                      {review.avatar ? (
                        <img src={review.avatar} alt={review.name} />
                      ) : (
                        review.name.split(' ').map(n => n[0]).join('')
                      )}
                    </div>
                    <div className="ft-user-details">
                      <p className="ft-user">
                        {review.name}
                        {review.verified && (
                          <span className="ft-verified">
                            <FaCheck />
                          </span>
                        )}
                      </p>
                      <div className="ft-meta">
                        <span className="ft-meta-item">
                          <FaBriefcase className="ft-meta-icon" />
                          {review.role}
                        </span>
                        <span className="ft-meta-item">•</span>
                        <span className="ft-meta-item">Top Reviewer</span>
                      </div>
                      <div className="ft-product-tag">
                        <FaShoppingBag />
                        {review.product}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FloatingTestimonials;