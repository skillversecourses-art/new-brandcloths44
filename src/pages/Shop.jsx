import { useState } from 'react'
import './Shop.css'
import { useCart } from '../context/CartContext'

const B = 'https://images.unsplash.com/photo-'
const Q = '?w=500&h=600&fit=crop&q=82&auto=format'

const allProducts = [
  { id: 1,  name: 'Classic Oversized Tee',   price: 1299, category: 'men',         tag: 'New',  img: B+'1521572163474-6864f9cf17ab'+Q },
  { id: 2,  name: 'Urban Cargo Pants',        price: 2899, category: 'men',         tag: 'Hot',  img: B+'1542272454315-4c01d7abdf4a'+Q },
  { id: 3,  name: 'Premium Bomber Jacket',    price: 4499, category: 'men',         tag: 'Sale', img: B+'1551028719-00167b16eac5'+Q    },
  { id: 4,  name: 'Slim Linen Shirt',         price: 1799, category: 'men',         tag: 'New',  img: B+'1602810318383-e386cc2a3ccf'+Q },
  { id: 5,  name: 'Flowy Wrap Dress',         price: 2299, category: 'women',       tag: 'Hot',  img: B+'1595777457583-95e059d581b8'+Q  },
  { id: 6,  name: 'Structured Blazer',        price: 3799, category: 'women',       tag: 'New',  img: B+'1507679799987-c73779587ccf'+Q  },
  { id: 7,  name: 'Modern Crop Top',          price:  999, category: 'women',       tag: 'Sale', img: B+'1554568218-0f1715e72254'+Q     },
  { id: 8,  name: 'Wide-Leg Palazzo',         price: 1999, category: 'women',       tag: 'New',  img: B+'1594938298603-b8b8c6e71073'+Q  },
  { id: 9,  name: 'Classic Chain Belt',       price:  699, category: 'accessories', tag: 'Hot',  img: B+'1553062407-98eeb64c6a62'+Q    },
  { id: 10, name: 'Minimal Cap',              price:  599, category: 'accessories', tag: 'New',  img: B+'1588850561407-ed78c282e89b'+Q },
  { id: 11, name: 'Leather Wallet',           price: 1199, category: 'accessories', tag: 'Sale', img: B+'1627123424574-724758594754'+Q },
  { id: 12, name: 'Classic Trench Coat',      price: 5999, category: 'outerwear',   tag: 'New',  img: B+'1539109136881-3be0616acf4b'+Q },
  { id: 13, name: 'Quilted Puffer Jacket',    price: 4299, category: 'outerwear',   tag: 'Hot',  img: B+'1591047139829-d91aecb6caea'+Q },
  { id: 14, name: 'Long Overcoat',            price: 6499, category: 'outerwear',   tag: 'Sale', img: B+'1608234808654-2a8875faa7fd'+Q },
  { id: 15, name: 'Essential Hoodie',         price: 1899, category: 'men',         tag: 'New',  img: B+'1556821840-3a63f15732ce'+Q    },
  { id: 16, name: 'Silk Scarf',               price:  899, category: 'accessories', tag: 'Hot',  img: B+'1520903920243-00d872a2d1c9'+Q },
]

const categories = ['all', 'men', 'women', 'accessories', 'outerwear']
const sortOptions = [
  { value: 'default',    label: 'Default' },
  { value: 'price-asc',  label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'name',       label: 'Name A-Z' },
]

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [sortBy, setSortBy] = useState('default')
  const [search, setSearch] = useState('')
  const [wishlist, setWishlist] = useState([])
  const [justAdded, setJustAdded] = useState([])

  const { addToCart, items: cartItems } = useCart()

  const filtered = allProducts
    .filter(p => activeCategory === 'all' || p.category === activeCategory)
    .filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === 'price-asc')  return a.price - b.price
      if (sortBy === 'price-desc') return b.price - a.price
      if (sortBy === 'name')       return a.name.localeCompare(b.name)
      return 0
    })

  const toggleWishlist = (id) => {
    setWishlist(w => w.includes(id) ? w.filter(x => x !== id) : [...w, id])
  }

  const handleAdd = (product) => {
    addToCart(product)
    setJustAdded(a => [...a, product.id])
    setTimeout(() => setJustAdded(a => a.filter(x => x !== product.id)), 1800)
  }

  const inCart = (id) => cartItems.some(i => i.id === id)

  return (
    <div className="shop-page">
      {/* HERO */}
      <section className="shop-hero">
        <div className="shop-hero-bg" />
        <div className="shop-hero-content">
          <p className="section-label">Collection 2026</p>
          <h1>The <span className="gold-text">Full</span> Collection</h1>
          <p>Every piece is a statement. Browse the complete range.</p>
        </div>
      </section>

      {/* TOOLBAR */}
      <div className="shop-toolbar">
        <div className="container">
          <div className="toolbar-inner">
            <div className="search-wrap">
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
            <div className="cats">
              {categories.map(c => (
                <button
                  key={c}
                  className={`cat-btn ${activeCategory === c ? 'active' : ''}`}
                  onClick={() => setActiveCategory(c)}
                >
                  {c.charAt(0).toUpperCase() + c.slice(1)}
                </button>
              ))}
            </div>
            <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="sort-select">
              {sortOptions.map(o => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>
          <p className="result-count">{filtered.length} product{filtered.length !== 1 ? 's' : ''} found</p>
        </div>
      </div>

      {/* PRODUCTS */}
      <section className="shop-products">
        <div className="container">
          {filtered.length === 0 ? (
            <div className="no-results">
              <span>No products found</span>
              <button onClick={() => { setSearch(''); setActiveCategory('all') }} className="btn-outline">Clear Filters</button>
            </div>
          ) : (
            <div className="shop-grid">
              {filtered.map(p => (
                <div key={p.id} className="shop-card">
                  <div className="shop-img">
                    <img src={p.img} alt={p.name} loading="lazy" />
                    <span className={`shop-tag tag-${p.tag.toLowerCase()}`}>{p.tag}</span>
                    <button
                      className={`wishlist-btn ${wishlist.includes(p.id) ? 'wishlisted' : ''}`}
                      onClick={() => toggleWishlist(p.id)}
                      aria-label="Wishlist"
                    >
                      {wishlist.includes(p.id) ? '♥' : '♡'}
                    </button>
                    <button
                      className={`quick-add-btn ${justAdded.includes(p.id) ? 'added' : ''}`}
                      onClick={() => handleAdd(p)}
                    >
                      {justAdded.includes(p.id) ? 'Added ✓' : 'Quick Add'}
                    </button>
                  </div>
                  <div className="shop-card-info">
                    <span className="shop-cat-label">{p.category}</span>
                    <h4>{p.name}</h4>
                    <div className="shop-card-bottom">
                      <span className="shop-price">₹{p.price.toLocaleString()}</span>
                      <span className="shop-tax-note">Incl. of all taxes</span>
                      <button
                        className={`add-to-cart ${inCart(p.id) ? 'added' : ''}`}
                        onClick={() => handleAdd(p)}
                        aria-label="Add to cart"
                        title={inCart(p.id) ? 'In cart' : 'Add to cart'}
                      >
                        {inCart(p.id) ? '✓' : '+'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
