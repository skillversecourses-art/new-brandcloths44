import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-glow" />
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="f-logo-mark">BC</span>
            <span>BrandCloths<span className="f-logo-44">44</span></span>
          </div>
          <p>Premium fashion for the bold and the refined. Wear your identity.</p>
        </div>

        <div className="footer-col">
          <h4>Navigation</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Categories</h4>
          <ul>
            <li><Link to="/shop">Men's Collection</Link></li>
            <li><Link to="/shop">Women's Collection</Link></li>
            <li><Link to="/shop">Accessories</Link></li>
            <li><Link to="/shop">New Arrivals</Link></li>
            <li><Link to="/shop">Sale</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Newsletter</h4>
          <p className="nl-text">Get exclusive deals & new arrivals.</p>
          <form className="nl-form" onSubmit={e => e.preventDefault()}>
            <input type="email" placeholder="Your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Payment Methods & Trust Badges */}
      <div className="footer-payment-strip">
        <div className="footer-payment-methods">
          <span className="footer-payment-label">We Accept</span>
          <div className="footer-payment-badges">
            <span className="f-pay-badge">Visa</span>
            <span className="f-pay-badge">Mastercard</span>
            <span className="f-pay-badge">RuPay</span>
            <span className="f-pay-badge">UPI</span>
            <span className="f-pay-badge">GPay</span>
            <span className="f-pay-badge">PhonePe</span>
            <span className="f-pay-badge">Net Banking</span>
          </div>
        </div>
        <div className="footer-secured-by">
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
          <span>Secured by <strong>Razorpay & Cashfree</strong></span>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-legal-info">
          <p><strong>Legal Name:</strong> Punit (Proprietor, Brand Clothes 44)</p>
          <p><strong>GST No.:</strong> 29JCLPP1285E1Z3</p>
          <p><strong>Address:</strong> Building No. 161, Bengaluru Bellary Road, Bengaluru, Karnataka – 560001</p>
        </div>
        <p>&copy; 2026 BrandCloths44. All rights reserved.</p>
        <div className="footer-bottom-links">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-conditions">Terms of Service</Link>
          <Link to="/shipping-policy">Shipping Policy</Link>
          <Link to="/returns">Cancellation & Refunds</Link>
        </div>
      </div>
    </footer>
  )
}
