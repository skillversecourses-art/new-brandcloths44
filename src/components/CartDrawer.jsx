import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import './CartDrawer.css'

export default function CartDrawer() {
  const { items, removeFromCart, updateQty, clearCart, cartTotal, cartCount, drawerOpen, setDrawerOpen } = useCart()
  const navigate = useNavigate()

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [drawerOpen])

  return (
    <>
      {/* Backdrop */}
      <div
        className={`cart-backdrop ${drawerOpen ? 'open' : ''}`}
        onClick={() => setDrawerOpen(false)}
      />

      {/* Drawer */}
      <aside className={`cart-drawer ${drawerOpen ? 'open' : ''}`}>
        {/* Header */}
        <div className="cart-header">
          <div className="cart-title">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 01-8 0"/>
            </svg>
            <span>Your Cart</span>
            {cartCount > 0 && <span className="cart-count-badge">{cartCount}</span>}
          </div>
          <button className="cart-close" onClick={() => setDrawerOpen(false)} aria-label="Close cart">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {/* Body */}
        {items.length === 0 ? (
          <div className="cart-empty">
            <div className="empty-icon">
              <svg width="56" height="56" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24" opacity="0.3">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 01-8 0"/>
              </svg>
            </div>
            <h3>Your cart is empty</h3>
            <p>Add some premium pieces to get started.</p>
            <Link to="/shop" className="cart-shop-btn" onClick={() => setDrawerOpen(false)}>
              Browse Shop
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {items.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-img">
                    <img src={item.img} alt={item.name} />
                  </div>
                  <div className="cart-item-info">
                    <div className="cart-item-top">
                      <span className="cart-item-name">{item.name}</span>
                      <button className="cart-item-remove" onClick={() => removeFromCart(item.id)} aria-label="Remove">
                        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                        </svg>
                      </button>
                    </div>
                    <span className="cart-item-price">₹{item.price.toLocaleString()}</span>
                    <div className="cart-item-qty">
                      <button onClick={() => updateQty(item.id, item.qty - 1)}>−</button>
                      <span>{item.qty}</span>
                      <button onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
                    </div>
                    <span className="cart-item-subtotal">
                      Subtotal: <strong>₹{(item.price * item.qty).toLocaleString()}</strong>
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="cart-footer">
              <div className="cart-total-row">
                <span>Total ({cartCount} item{cartCount !== 1 ? 's' : ''})</span>
                <span className="cart-total-amount">₹{cartTotal.toLocaleString()}</span>
              </div>
              <div className="cart-promo">
                <input type="text" placeholder="Promo code (e.g. DARK20)" />
                <button>Apply</button>
              </div>
              <button className="cart-checkout-btn" onClick={() => { setDrawerOpen(false); navigate('/checkout') }}>
                Proceed to Checkout
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </button>
              <button className="cart-clear-btn" onClick={clearCart}>Clear Cart</button>
            </div>
          </>
        )}
      </aside>
    </>
  )
}
