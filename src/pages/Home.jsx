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
  { id: 15, name: 'Essential Hoodie',      price: 1899, tag: 'Hot',  img: UNS+'1556821840-3a63f15732ce'+Q   },
  { id: 5,  name: 'Flowy Wrap Dress',      price: 2299, tag: 'New',  img: UNS+'1595777457583-95e059d581b8'+Q },
]

const categories = [
  { name: "Men's Wear",   count: 48, img: UNS+'1521572163474-6864f9cf17ab'+QC },
  { name: "Women's Wear", count: 56, img: UNS+'1595777457583-95e059d581b8'+QC },
  { name: 'Accessories',  count: 32, img: UNS+'1553062407-98eeb64c6a62'+QC },
  { name: 'Outerwear',    count: 24, img: UNS+'1539109136881-3be0616acf4b'+QC },
]

const testimonials = [
  { name: 'Aryan S.', text: 'Best fashion brand I\'ve found. The quality is insane and delivery was super fast.', stars: 5 },
  { name: 'Priya M.', text: 'The bomber jacket is literally perfect. Minimal, fits great. Will order again!', stars: 5 },
  { name: 'Rahul K.', text: 'BrandCloths44 has ruined other brands for me. Nothing compares.', stars: 5 },
]

export default function Home() {
  const { addToCart } = useCart()

  return (
    <div className="home">
      {/* HERO — full-bleed immersive */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-orb hero-orb-1" />
          <div className="hero-orb hero-orb-2" />
          <div className="hero-noise" />
        </div>
        <div className="hero-inner">
          <div className="hero-eyebrow">
            <span className="eyebrow-dot" />
            New Collection — 2024
          </div>
          <h1 className="hero-title">
            Fashion That<br />
            <span className="gradient-text">Speaks Loud.</span>
          </h1>
          <p className="hero-subtitle">
            Curated for those who speak through style. Refined fabrics,
            sharp silhouettes, and timeless design — unapologetically you.
          </p>
          <div className="hero-ctas">
            <Link to="/shop" className="btn-gradient">Shop Now</Link>
            <Link to="/about" className="btn-ghost">Our Story →</Link>
          </div>
          <div className="hero-stats">
            <div className="stat-pill">
              <span>2K+</span>
              <p>Happy Clients</p>
            </div>
            <div className="stat-pill">
              <span>150+</span>
              <p>Styles</p>
            </div>
            <div className="stat-pill">
              <span>4.9</span>
              <p>Rating</p>
            </div>
          </div>
        </div>
        {/* Floating geometric shapes */}
        <div className="hero-float hero-float-1">◆</div>
        <div className="hero-float hero-float-2">○</div>
        <div className="hero-float hero-float-3">△</div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-wrap">
        <div className="marquee-track">
          {Array(3).fill(['NEW ARRIVALS', 'PREMIUM QUALITY', 'FRESH STYLES', 'EXCLUSIVE DROPS', 'FREE SHIPPING']).flat().map((t, i) => (
            <span key={i}>{t} <span className="mx">✦</span></span>
          ))}
        </div>
      </div>

      {/* CATEGORIES — Bento Grid */}
      <section className="section categories-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Explore</span>
            <h2>Shop by Category</h2>
          </div>
          <div className="bento-grid">
            {categories.map((cat, i) => (
              <Link
                to="/shop"
                key={i}
                className={`bento-card bento-${i}`}
                style={{ backgroundImage: `url(${cat.img})`, backgroundSize: 'cover', backgroundPosition: 'center top' }}
              >
                <div className="bento-overlay" />
                <div className="bento-content">
                  <span className="bento-count">{cat.count} items</span>
                  <h3>{cat.name}</h3>
                  <span className="bento-arrow">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED — Staggered Grid */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Handpicked</span>
            <h2>Featured Pieces</h2>
          </div>
          <div className="stagger-grid">
            {featured.map((p, i) => (
              <div key={p.id} className={`stagger-card stagger-${i}`}>
                <div className="stagger-img">
                  <img src={p.img} alt={p.name} loading="lazy" />
                  <span className={`stagger-tag tag-${p.tag.toLowerCase()}`}>{p.tag}</span>
                  <button className="stagger-quick" onClick={() => addToCart(p)}>Quick Add</button>
                </div>
                <div className="stagger-info">
                  <h4>{p.name}</h4>
                  <div className="stagger-bottom">
                    <span className="stagger-price">₹{p.price.toLocaleString()}</span>
                    <span className="stagger-tax-note">Incl. of all taxes</span>
                    <button className="stagger-cart-btn" onClick={() => addToCart(p)}>+</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/shop" className="btn-gradient">View All Products</Link>
          </div>
        </div>
      </section>

      {/* PROMO BANNER — Mesh gradient */}
      <section className="promo-banner">
        <div className="promo-mesh" />
        <div className="banner-content">
          <span className="section-tag">Limited Time</span>
          <h2>Get 20% Off Your First Order</h2>
          <p>Use code <strong>BC44FIRST</strong> at checkout. Minimum order ₹999.</p>
          <Link to="/shop" className="btn-gradient">Claim Offer</Link>
        </div>
      </section>

      {/* TESTIMONIALS — Glassmorphic */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Reviews</span>
            <h2>What Customers Say</h2>
          </div>
          <div className="testi-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="testi-card">
                <div className="testi-quote">"</div>
                <p className="testi-text">{t.text}</p>
                <div className="testi-footer">
                  <div className="testi-avatar">{t.name[0]}</div>
                  <div>
                    <span className="testi-name">{t.name}</span>
                    <div className="testi-stars">{'★'.repeat(t.stars)}</div>
                  </div>
                </div>
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
              <div key={i} className="feature-card">
                <span className="feature-icon">{f.icon}</span>
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
