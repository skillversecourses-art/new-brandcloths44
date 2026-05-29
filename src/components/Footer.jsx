import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-logo">
            <span>Berry</span><span className="gold">lush</span>
          </div>
          <p>Premium dark fashion for the bold and the refined. Wear your identity.</p>
          <div className="footer-socials">
            {['Instagram', 'Twitter', 'Facebook', 'Pinterest'].map(s => (
              <a key={s} href="#" className="social-chip">{s[0]}</a>
            ))}
          </div>
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
            <li><a href="#">Men's Collection</a></li>
            <li><a href="#">Women's Collection</a></li>
            <li><a href="#">Accessories</a></li>
            <li><a href="#">New Arrivals</a></li>
            <li><a href="#">Sale</a></li>
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

      <div className="footer-bottom">
        <div className="footer-legal-info" style={{ textAlign: 'left', marginBottom: '1rem', fontSize: '0.85rem', color: '#888' }}>
          <p><strong>Legal Name:</strong> SUREHBEEL</p>
          <p><strong>GST No.:</strong> 09QEEPS8747Q1ZW</p>
          <p><strong>Address:</strong> BUILDING NO. 161, GAUTAMBUDDHA NAGAR, UTTAR PARDESH, 201301</p>
        </div>
        <p>&copy; 2024 Berrylush. All rights reserved.</p>
        <div className="footer-bottom-links">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-conditions">Terms of Service</Link>
          <Link to="/returns">Returns</Link>
        </div>
      </div>
    </footer>
  )
}
