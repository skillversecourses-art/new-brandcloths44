import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import './Checkout.css'

const STEPS = ['Shipping', 'Payment', 'Review', 'Confirmation']

function generateOrderId() {
  return 'BC44-' + Date.now().toString(36).toUpperCase() + '-' + Math.random().toString(36).substring(2, 6).toUpperCase()
}

export default function Checkout() {
  const { items, cartTotal, cartCount, clearCart } = useCart()
  const navigate = useNavigate()
  const [step, setStep] = useState(0)
  const [orderId, setOrderId] = useState('')
  const [processing, setProcessing] = useState(false)

  // Shipping form
  const [shipping, setShipping] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    address: '', city: '', state: '', pincode: '', country: 'India',
    notes: ''
  })

  // Payment
  const [paymentMethod, setPaymentMethod] = useState('card')
  const [card, setCard] = useState({
    number: '', name: '', expiry: '', cvv: ''
  })

  // Validation errors
  const [errors, setErrors] = useState({})

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [step])

  // Pricing
  const shipping_cost = cartTotal >= 2000 ? 0 : 149
  const tax = Math.round(cartTotal * 0.05)
  const total = cartTotal + shipping_cost + tax

  // ── Validation ──
  function validateShipping() {
    const errs = {}
    if (!shipping.firstName.trim()) errs.firstName = 'First name is required'
    if (!shipping.lastName.trim()) errs.lastName = 'Last name is required'
    if (!shipping.email.trim()) errs.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(shipping.email)) errs.email = 'Enter a valid email'
    if (!shipping.phone.trim()) errs.phone = 'Phone number is required'
    else if (!/^\d{10}$/.test(shipping.phone.replace(/\s/g, ''))) errs.phone = 'Enter a 10-digit number'
    if (!shipping.address.trim()) errs.address = 'Address is required'
    if (!shipping.city.trim()) errs.city = 'City is required'
    if (!shipping.state.trim()) errs.state = 'State is required'
    if (!shipping.pincode.trim()) errs.pincode = 'Pincode is required'
    else if (!/^\d{6}$/.test(shipping.pincode)) errs.pincode = 'Enter a valid 6-digit pincode'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  function validatePayment() {
    if (paymentMethod !== 'card') return true
    const errs = {}
    const num = card.number.replace(/\s/g, '')
    if (!num) errs.cardNumber = 'Card number is required'
    else if (!/^\d{16}$/.test(num)) errs.cardNumber = 'Enter a valid 16-digit card number'
    if (!card.name.trim()) errs.cardName = 'Cardholder name is required'
    if (!card.expiry.trim()) errs.cardExpiry = 'Expiry is required'
    else if (!/^\d{2}\/\d{2}$/.test(card.expiry)) errs.cardExpiry = 'Use MM/YY format'
    if (!card.cvv.trim()) errs.cardCvv = 'CVV is required'
    else if (!/^\d{3,4}$/.test(card.cvv)) errs.cardCvv = 'Enter a valid CVV'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  function handleNext() {
    if (step === 0 && !validateShipping()) return
    if (step === 1 && !validatePayment()) return
    if (step === 2) {
      // Place order
      setProcessing(true)
      setTimeout(() => {
        setOrderId(generateOrderId())
        setProcessing(false)
        setStep(3)
        clearCart()
      }, 2200)
      return
    }
    setErrors({})
    setStep(s => s + 1)
  }

  function handleBack() {
    setErrors({})
    setStep(s => s - 1)
  }

  function updateShipping(field, value) {
    setShipping(prev => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors(prev => { const n = { ...prev }; delete n[field]; return n })
  }

  function updateCard(field, value) {
    if (field === 'number') {
      value = value.replace(/\D/g, '').substring(0, 16)
      value = value.replace(/(\d{4})/g, '$1 ').trim()
    }
    if (field === 'expiry') {
      value = value.replace(/\D/g, '').substring(0, 4)
      if (value.length >= 3) value = value.substring(0, 2) + '/' + value.substring(2)
    }
    if (field === 'cvv') value = value.replace(/\D/g, '').substring(0, 4)
    setCard(prev => ({ ...prev, [field]: value }))
  }

  // ── Empty cart guard ──
  if (items.length === 0 && step < 3) {
    return (
      <div className="checkout-page">
        <div className="checkout-container">
          <div className="checkout-empty">
            <svg width="64" height="64" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24" style={{ color: 'var(--text-muted)', marginBottom: 20 }}>
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 01-8 0"/>
            </svg>
            <h2>Your Cart is Empty</h2>
            <p>Add some premium pieces before checking out.</p>
            <Link to="/shop" className="btn-primary">Browse Shop</Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="checkout-page">
      <div className="checkout-container">
        {/* Header */}
        <div className="checkout-header">
          <p className="section-label">Checkout</p>
          <h1>{step < 3 ? 'Complete Your Order' : 'Order Confirmed'}</h1>
        </div>

        {/* Stepper */}
        <div className="checkout-stepper">
          {STEPS.map((label, i) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center' }}>
              <div className={`step-item ${i === step ? 'active' : ''} ${i < step ? 'completed' : ''}`}>
                <div className="step-number">
                  {i < step ? '✓' : i + 1}
                </div>
                <span className="step-label">{label}</span>
              </div>
              {i < STEPS.length - 1 && (
                <div className={`step-line ${i < step ? 'filled' : ''}`} />
              )}
            </div>
          ))}
        </div>

        {/* Confirmation — full-width */}
        {step === 3 ? (
          <div className="checkout-form-panel">
            <div className="confirmation">
              <div className="confirmation-icon">
                <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <h2>Thank You for Your Order!</h2>
              <p className="order-id">Order ID: <strong>{orderId}</strong></p>
              <p>
                Your order has been placed successfully. We'll send a confirmation
                email to <strong>{shipping.email}</strong> with tracking details
                once your order ships.
              </p>

              <div className="confirmation-details">
                <div className="confirmation-details-row">
                  <span>Shipping To</span>
                  <span>{shipping.firstName} {shipping.lastName}</span>
                </div>
                <div className="confirmation-details-row">
                  <span>Address</span>
                  <span>{shipping.city}, {shipping.state} — {shipping.pincode}</span>
                </div>
                <div className="confirmation-details-row">
                  <span>Payment</span>
                  <span>
                    {paymentMethod === 'card' ? `Card •••• ${card.number.replace(/\s/g, '').slice(-4)}` :
                     paymentMethod === 'upi' ? 'UPI' : 'Cash on Delivery'}
                  </span>
                </div>
                <div className="confirmation-details-row">
                  <span>Total Paid</span>
                  <span style={{ color: 'var(--accent)', fontWeight: 800 }}>₹{total.toLocaleString()}</span>
                </div>
              </div>

              <div className="confirmation-actions" style={{ marginTop: 32 }}>
                <Link to="/shop" className="btn-primary">Continue Shopping</Link>
                <Link to="/" className="btn-outline">Back to Home</Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="checkout-body">
            {/* Left — Form */}
            <div>
              {/* STEP 0: Shipping */}
              {step === 0 && (
                <div className="checkout-form-panel" key="shipping">
                  <h2 className="form-section-title">
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    Shipping Information
                  </h2>

                  <div className="form-row">
                    <div className={`form-group ${errors.firstName ? 'error' : ''}`}>
                      <label>First Name</label>
                      <input value={shipping.firstName} onChange={e => updateShipping('firstName', e.target.value)} placeholder="Aryan" />
                      {errors.firstName && <span className="form-error">{errors.firstName}</span>}
                    </div>
                    <div className={`form-group ${errors.lastName ? 'error' : ''}`}>
                      <label>Last Name</label>
                      <input value={shipping.lastName} onChange={e => updateShipping('lastName', e.target.value)} placeholder="Mehta" />
                      {errors.lastName && <span className="form-error">{errors.lastName}</span>}
                    </div>
                  </div>

                  <div className="form-row">
                    <div className={`form-group ${errors.email ? 'error' : ''}`}>
                      <label>Email</label>
                      <input type="email" value={shipping.email} onChange={e => updateShipping('email', e.target.value)} placeholder="aryan@example.com" />
                      {errors.email && <span className="form-error">{errors.email}</span>}
                    </div>
                    <div className={`form-group ${errors.phone ? 'error' : ''}`}>
                      <label>Phone</label>
                      <input type="tel" value={shipping.phone} onChange={e => updateShipping('phone', e.target.value)} placeholder="9876543210" />
                      {errors.phone && <span className="form-error">{errors.phone}</span>}
                    </div>
                  </div>

                  <div className="form-row full">
                    <div className={`form-group ${errors.address ? 'error' : ''}`}>
                      <label>Address</label>
                      <input value={shipping.address} onChange={e => updateShipping('address', e.target.value)} placeholder="123 Street Name, Area" />
                      {errors.address && <span className="form-error">{errors.address}</span>}
                    </div>
                  </div>

                  <div className="form-row">
                    <div className={`form-group ${errors.city ? 'error' : ''}`}>
                      <label>City</label>
                      <input value={shipping.city} onChange={e => updateShipping('city', e.target.value)} placeholder="Mumbai" />
                      {errors.city && <span className="form-error">{errors.city}</span>}
                    </div>
                    <div className={`form-group ${errors.state ? 'error' : ''}`}>
                      <label>State</label>
                      <select value={shipping.state} onChange={e => updateShipping('state', e.target.value)}>
                        <option value="">Select State</option>
                        {['Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Delhi','Goa','Gujarat','Haryana','Himachal Pradesh','Jharkhand','Karnataka','Kerala','Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Punjab','Rajasthan','Sikkim','Tamil Nadu','Telangana','Tripura','Uttar Pradesh','Uttarakhand','West Bengal'].map(s => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                      {errors.state && <span className="form-error">{errors.state}</span>}
                    </div>
                  </div>

                  <div className="form-row">
                    <div className={`form-group ${errors.pincode ? 'error' : ''}`}>
                      <label>Pincode</label>
                      <input value={shipping.pincode} onChange={e => updateShipping('pincode', e.target.value.replace(/\D/g, '').substring(0, 6))} placeholder="400001" />
                      {errors.pincode && <span className="form-error">{errors.pincode}</span>}
                    </div>
                    <div className="form-group">
                      <label>Country</label>
                      <select value={shipping.country} onChange={e => updateShipping('country', e.target.value)}>
                        <option value="India">India</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-row full">
                    <div className="form-group">
                      <label>Order Notes (Optional)</label>
                      <textarea value={shipping.notes} onChange={e => updateShipping('notes', e.target.value)} placeholder="Special delivery instructions..." />
                    </div>
                  </div>

                  <div className="checkout-nav">
                    <Link to="/shop" className="btn-checkout-back" onClick={() => {}}>
                      ← Back to Shop
                    </Link>
                    <button className="btn-checkout-next" onClick={handleNext}>
                      Continue to Payment →
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 1: Payment */}
              {step === 1 && (
                <div className="checkout-form-panel" key="payment">
                  <h2 className="form-section-title">
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
                      <line x1="1" y1="10" x2="23" y2="10"/>
                    </svg>
                    Payment Method
                  </h2>

                  <div className="payment-methods">
                    {[
                      { id: 'card', label: 'Credit / Debit Card', desc: 'Visa, Mastercard, RuPay', icon: '💳' },
                      { id: 'upi', label: 'UPI Payment', desc: 'Google Pay, PhonePe, Paytm', icon: '📱' },
                      { id: 'cod', label: 'Cash on Delivery', desc: 'Pay when your order arrives', icon: '💵' },
                    ].map(m => (
                      <div
                        key={m.id}
                        className={`payment-method ${paymentMethod === m.id ? 'selected' : ''}`}
                        onClick={() => setPaymentMethod(m.id)}
                      >
                        <div className="payment-radio">
                          <div className="payment-radio-inner" />
                        </div>
                        <div className="payment-method-info">
                          <h4>{m.label}</h4>
                          <p>{m.desc}</p>
                        </div>
                        <span className="payment-method-icon">{m.icon}</span>
                      </div>
                    ))}
                  </div>

                  {paymentMethod === 'card' && (
                    <>
                      <div className="form-row full card-number-group">
                        <div className={`form-group ${errors.cardNumber ? 'error' : ''}`}>
                          <label>Card Number</label>
                          <input
                            value={card.number}
                            onChange={e => updateCard('number', e.target.value)}
                            placeholder="1234 5678 9012 3456"
                            maxLength={19}
                          />
                          {errors.cardNumber && <span className="form-error">{errors.cardNumber}</span>}
                        </div>
                      </div>
                      <div className="form-row full">
                        <div className={`form-group ${errors.cardName ? 'error' : ''}`}>
                          <label>Cardholder Name</label>
                          <input
                            value={card.name}
                            onChange={e => updateCard('name', e.target.value)}
                            placeholder="ARYAN MEHTA"
                          />
                          {errors.cardName && <span className="form-error">{errors.cardName}</span>}
                        </div>
                      </div>
                      <div className="card-row">
                        <div className={`form-group ${errors.cardExpiry ? 'error' : ''}`}>
                          <label>Expiry</label>
                          <input
                            value={card.expiry}
                            onChange={e => updateCard('expiry', e.target.value)}
                            placeholder="MM/YY"
                            maxLength={5}
                          />
                          {errors.cardExpiry && <span className="form-error">{errors.cardExpiry}</span>}
                        </div>
                        <div className={`form-group ${errors.cardCvv ? 'error' : ''}`}>
                          <label>CVV</label>
                          <input
                            type="password"
                            value={card.cvv}
                            onChange={e => updateCard('cvv', e.target.value)}
                            placeholder="•••"
                            maxLength={4}
                          />
                          {errors.cardCvv && <span className="form-error">{errors.cardCvv}</span>}
                        </div>
                        <div className="form-group" />
                      </div>
                    </>
                  )}

                  {paymentMethod === 'upi' && (
                    <div className="form-row full">
                      <div className="form-group">
                        <label>UPI ID</label>
                        <input placeholder="yourname@upi" />
                      </div>
                    </div>
                  )}

                  {paymentMethod === 'cod' && (
                    <div className="secure-badge" style={{ background: 'rgba(201,168,76,0.06)', borderColor: 'rgba(201,168,76,0.15)', color: 'var(--accent)' }}>
                      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10"/>
                        <line x1="12" y1="8" x2="12" y2="12"/>
                        <line x1="12" y1="16" x2="12.01" y2="16"/>
                      </svg>
                      An additional charge of ₹49 may apply for Cash on Delivery orders.
                    </div>
                  )}

                  <div className="secure-badge">
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                      <path d="M7 11V7a5 5 0 0110 0v4"/>
                    </svg>
                    Your payment information is encrypted and secure. We never store your card details.
                  </div>

                  <div className="checkout-nav">
                    <button className="btn-checkout-back" onClick={handleBack}>
                      ← Shipping
                    </button>
                    <button className="btn-checkout-next" onClick={handleNext}>
                      Review Order →
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: Review */}
              {step === 2 && (
                <div className="checkout-form-panel" key="review">
                  <h2 className="form-section-title">
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                      <polyline points="14 2 14 8 20 8"/>
                      <line x1="16" y1="13" x2="8" y2="13"/>
                      <line x1="16" y1="17" x2="8" y2="17"/>
                      <polyline points="10 9 9 9 8 9"/>
                    </svg>
                    Review Your Order
                  </h2>

                  {/* Shipping Review */}
                  <div className="review-section">
                    <div className="review-section-header">
                      <h3>
                        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                        Shipping
                      </h3>
                      <button className="review-edit-btn" onClick={() => setStep(0)}>Edit</button>
                    </div>
                    <div className="review-card">
                      <p>
                        <strong>{shipping.firstName} {shipping.lastName}</strong><br />
                        {shipping.address}<br />
                        {shipping.city}, {shipping.state} — {shipping.pincode}<br />
                        {shipping.email} · {shipping.phone}
                      </p>
                    </div>
                  </div>

                  {/* Payment Review */}
                  <div className="review-section">
                    <div className="review-section-header">
                      <h3>
                        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
                        Payment
                      </h3>
                      <button className="review-edit-btn" onClick={() => setStep(1)}>Edit</button>
                    </div>
                    <div className="review-card">
                      <p>
                        {paymentMethod === 'card' && (
                          <><strong>Credit/Debit Card</strong><br />
                          •••• •••• •••• {card.number.replace(/\s/g, '').slice(-4)}<br />
                          {card.name}</>
                        )}
                        {paymentMethod === 'upi' && <strong>UPI Payment</strong>}
                        {paymentMethod === 'cod' && <strong>Cash on Delivery</strong>}
                      </p>
                    </div>
                  </div>

                  {/* Items Review */}
                  <div className="review-section">
                    <div className="review-section-header">
                      <h3>
                        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
                        Items ({cartCount})
                      </h3>
                    </div>
                    <div className="review-card">
                      <div className="review-items-list">
                        {items.map(item => (
                          <div key={item.id} className="review-item">
                            <div className="review-item-img">
                              <img src={item.img} alt={item.name} />
                            </div>
                            <div className="review-item-info">
                              <span>{item.name}</span>
                              <small>Qty: {item.qty}</small>
                            </div>
                            <span className="review-item-price">₹{(item.price * item.qty).toLocaleString()}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="checkout-nav">
                    <button className="btn-checkout-back" onClick={handleBack}>
                      ← Payment
                    </button>
                    <button className="btn-checkout-next" onClick={handleNext} disabled={processing}>
                      {processing ? (
                        <>Processing...</>
                      ) : (
                        <>Place Order — ₹{total.toLocaleString()} →</>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Right — Order Summary Sidebar */}
            <aside className="order-summary">
              <div className="order-summary-header">
                Order Summary <span>{cartCount}</span>
              </div>

              <div className="summary-items">
                {items.map(item => (
                  <div key={item.id} className="summary-item">
                    <div className="summary-item-img">
                      <img src={item.img} alt={item.name} />
                    </div>
                    <div className="summary-item-details">
                      <span className="summary-item-name">{item.name}</span>
                      <span className="summary-item-qty">Qty: {item.qty}</span>
                    </div>
                    <span className="summary-item-price">₹{(item.price * item.qty).toLocaleString()}</span>
                  </div>
                ))}
              </div>

              <div className="summary-pricing">
                <div className="summary-row">
                  <span>Subtotal</span>
                  <span>₹{cartTotal.toLocaleString()}</span>
                </div>
                <div className="summary-row">
                  <span>Shipping</span>
                  <span>{shipping_cost === 0 ? 'FREE' : `₹${shipping_cost}`}</span>
                </div>
                <div className="summary-row">
                  <span>Tax (GST 5%)</span>
                  <span>₹{tax.toLocaleString()}</span>
                </div>
                {cartTotal >= 2000 && (
                  <div className="summary-row discount">
                    <span>Free Shipping</span>
                    <span>-₹149</span>
                  </div>
                )}
                <div className="summary-row total">
                  <span>Total</span>
                  <span>₹{total.toLocaleString()}</span>
                </div>
              </div>
            </aside>
          </div>
        )}
      </div>
    </div>
  )
}
