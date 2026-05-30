import { Link } from 'react-router-dom'
import './Home.css'
import { useCart } from '../context/CartContext'

const UNS = 'https://images.unsplash.com/photo-'
const Q   = '?w=500&h=600&fit=crop&q=82&auto=format'
const QC  = '?w=700&h=460&fit=crop&q=82&auto=format'

const featured = [
  { id: 1, name: 'Classic Oversized Tee',  price: 1299, tag: 'New',  img: UNS+'1521572163474-6864f9cf17ab'+Q },
  { id: 2, name: 'Urban Cargo Pants',      price: 2899, tag: 'Hot',  img: UNS+'1542272454315-4c01d7abdf4a'+Q },
  { id: 3, name: 'Premium Bomber Jacket',  price: 4499, tag: 'Sale', img: UNS+'1551028719-00167b16eac5'+Q   },
  { id: 4, name: 'Slim Linen Shirt',       price: 1799, tag: 'New',  img: UNS+'1602810318383-e386cc2a3ccf'+Q },
]

const categories = [
  { name: "Men's Wear",   count: 48, img: UNS+'1521572163474-6864f9cf17ab'+QC   },
  { name: "Women's Wear", count: 56, img: UNS+'1595777457583-95e059d581b8'+QC   },
  { name: 'Accessories',  count: 32, img: UNS+'1553062407-98eeb64c6a62'+QC      },
  { name: 'Outerwear',    count: 24, img: UNS+'1539109136881-3be0616acf4b'+QC   },
]

const testimonials = [
  { name: 'Aryan S.', text: 'Best fashion brand I\'ve found. The quality is insane and delivery was super fast.', stars: 5 },
  { name: 'Priya M.', text: 'The bomber jacket is literally perfect. Minimal, fits great. Will order again!', stars: 5 },
  { name: 'Rahul K.', text: 'Berrylush has ruined other brands for me. Nothing compares.', stars: 5 },
]

export default function Home() {
  const { addToCart } = useCart()

  return (
    <div className="home">
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-gradient" />
          <div className="hero-grid" />
        </div>
        <div className="hero-inner">
          {/* LEFT — text */}
          <div className="hero-content">
            <div className="hero-eyebrow">
              <span className="dot" />
              Premium Fashion — 2024 Collection
            </div>
            <h1 className="hero-title">
              Dress With <span className="gold-text">Intent.</span><br />
              Wear The Bold.
            </h1>
            <p className="hero-subtitle">
              Curated for those who speak through style. Refined fabrics,
              sharp silhouettes, and timeless design — unapologetically you.
            </p>
            <div className="hero-ctas">
              <Link to="/shop" className="btn-primary">Shop Now</Link>
              <Link to="/about" className="btn-outline">Our Story</Link>
            </div>
            <div className="hero-stats">
              <div className="stat"><span>2K+</span><p>Happy Clients</p></div>
              <div className="stat-divider" />
              <div className="stat"><span>150+</span><p>Styles</p></div>
              <div className="stat-divider" />
              <div className="stat"><span>4.9</span><p>Rating</p></div>
            </div>
          </div>

          {/* RIGHT — premium clothing visual */}
          <div className="hero-visual">
            <div className="hero-badge-spin">
              <div className="badge-ring">
                <span className="badge-text">BERRYLUSH • EST 2020 • PREMIUM •</span>
              </div>
            </div>
            <div className="clothing-card">
              <div className="clothing-card-glow" />
              <div className="clothing-label">
                <span className="cl-tag">NEW DROP</span>
                <span className="cl-season">AW 2024</span>
              </div>
              <div className="clothing-figure">
                <img
                  src={`${UNS}1551028719-00167b16eac5?w=600&h=700&fit=crop&q=85&auto=format`}
                  alt="Premium Bomber Jacket"
                  className="hero-clothing-img"
                />
              </div>
              <div className="clothing-details">
                <div className="cd-row">
                  <span className="cd-name">Premium Bomber Jacket</span>
                  <span className="cd-price">₹4,499</span>
                </div>
                <div className="cd-bottom-row">
                  <div className="cd-colors">
                    <span className="color-dot active" style={{background:'#1a1a1a'}} />
                    <span className="color-dot" style={{background:'#2c3e50'}} />
                    <span className="color-dot" style={{background:'#4a3728'}} />
                  </div>
                  <button
                    className="cd-add-btn"
                    onClick={() => addToCart({ id: 3, name: 'Premium Bomber Jacket', price: 4499, img: UNS+'1551028719-00167b16eac5'+Q })}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            {/* Floating tags */}
            <div className="float-tag float-tag-1">
              <span>Premium Fabric</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <div className="float-tag float-tag-2">
              <span>Free Shipping</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-wrap">
        <div className="marquee-track">
          {Array(3).fill(['NEW ARRIVALS', 'PREMIUM QUALITY', 'FRESH STYLES', 'EXCLUSIVE DROPS', 'FREE SHIPPING']).flat().map((t, i) => (
            <span key={i}>{t} <span className="mx">✦</span></span>
          ))}
        </div>
      </div>

      {/* CATEGORIES */}
      <section className="section categories-section">
        <div className="container">
          <div className="section-header">
            <p className="section-label">Explore</p>
            <h2>Shop by Category</h2>
          </div>
          <div className="categories-grid">
            {categories.map((cat, i) => (
              <Link
                to="/shop"
                key={i}
                className="cat-card"
                style={{ backgroundImage: `url(${cat.img})`, backgroundSize: 'cover', backgroundPosition: 'center top' }}
              >
                <div className="cat-overlay" />
                <div className="cat-content">
                  <span className="cat-count">{cat.count} items</span>
                  <h3>{cat.name}</h3>
                  <span className="cat-arrow">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="section-label">Handpicked</p>
            <h2>Featured Pieces</h2>
          </div>
          <div className="products-grid">
            {featured.map(p => (
              <div key={p.id} className="product-card">
                <div className="product-img">
                  <img src={p.img} alt={p.name} loading="lazy" />
                  <span className={`product-tag tag-${p.tag.toLowerCase()}`}>{p.tag}</span>
                  <button className="product-quick" onClick={() => addToCart(p)}>Quick Add</button>
                </div>
                <div className="product-info">
                  <h4>{p.name}</h4>
                  <div className="product-bottom">
                    <span className="product-price">₹{p.price.toLocaleString()}</span>
                    <button className="product-cart-btn" onClick={() => addToCart(p)}>+</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/shop" className="btn-primary">View All Products</Link>
          </div>
        </div>
      </section>

      {/* BANNER */}
      <section className="promo-banner">
        <div className="banner-content">
          <p className="section-label">Limited Time</p>
          <h2>Get 20% Off Your First Order</h2>
          <p>Use code <strong>BC44FIRST</strong> at checkout. Minimum order ₹999.</p>
          <Link to="/shop" className="btn-primary">Claim Offer</Link>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="section-label">Reviews</p>
            <h2>What Customers Say</h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="testi-card">
                <div className="testi-stars">{'★'.repeat(t.stars)}</div>
                <p className="testi-text">"{t.text}"</p>
                <span className="testi-name">— {t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section features-section">
        <div className="container">
          <div className="features-grid">
            {[
              { icon: '🚚', title: 'Free Shipping',    desc: 'On all orders above ₹999' },
              { icon: '↩️', title: 'Easy Returns',     desc: '7-day hassle-free returns' },
              { icon: '🔒', title: 'Secure Payments',  desc: 'UPI, Cards, COD available' },
              { icon: '✨', title: 'Premium Quality',  desc: 'Handpicked fabrics & crafts' },
            ].map((f, i) => (
              <div key={i} className="feature-item">
                <span className="feature-icon">{f.icon}</span>
                <div>
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
