import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './PrivacyPolicy.css'

const sections = [
  {
    title: 'Processing Time',
    content: [
      'All orders are processed within 1-2 business days (excluding weekends and holidays) after receiving your order confirmation email.',
      'You will receive another notification when your order has shipped.'
    ],
    highlight: 'During high volume periods or sales, processing may take an additional 1-2 days. We appreciate your patience.',
  },
  {
    title: 'Domestic Shipping Rates and Estimates',
    content: [
      'We offer flat rate shipping across India. Shipping charges for your order will be calculated and displayed at checkout.',
    ],
    list: [
      'Standard Shipping (3-5 business days): ₹50 (Free for orders over ₹999)',
      'Express Shipping (1-2 business days): ₹150',
    ],
  },
  {
    title: 'International Shipping',
    content: [
      'We currently ship to select international destinations including UAE, UK, USA, and Singapore.',
    ],
    list: [
      'International shipping rates are calculated dynamically at checkout based on weight and destination.',
      'Delivery typically takes 7-14 business days depending on the destination country.',
      'Your order may be subject to import duties and taxes (including VAT), which are incurred once a shipment reaches your destination country. BrandCloths44 is not responsible for these charges if they are applied and are your responsibility as the customer.',
    ],
  },
  {
    title: 'How do I check the status of my order?',
    content: [
      'When your order has shipped, you will receive an email notification from us which will include a tracking number you can use to check its status. Please allow 24 hours for the tracking information to become available.',
      'If you haven’t received your order within the estimated delivery time of receiving your shipping confirmation email, please contact us at hasin6637@gmail.com with your name and order number, and we will look into it for you.',
    ],
  },
  {
    title: 'Shipping to P.O. boxes',
    content: [
      'Some carriers have limitations around shipping to P.O. Boxes. If one of your carriers falls into this group, please ensure you provide a valid residential or commercial address.',
    ],
  },
  {
    title: 'Refunds, returns, and exchanges',
    content: [
      'We accept returns up to 7 days after delivery, if the item is unused and in its original condition.',
    ],
    highlight: 'Please refer to our dedicated Cancellation & Refund Policy for full details.',
  },
]

export default function ShippingPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="legal-page">
      <section className="legal-hero">
        <div className="legal-hero-content">
          <p className="section-label">Legal</p>
          <h1>
            Shipping & <span className="gold-text">Delivery</span>
          </h1>
          <p className="legal-updated">Last updated: May 30, 2026</p>
        </div>
      </section>

      <div className="legal-body">
        <div className="legal-section">
          <p>
            At BrandCloths44, we are committed to delivering your orders quickly and securely. 
            This Shipping & Delivery Policy outlines our processing times, shipping rates, 
            and delivery procedures to ensure a smooth shopping experience.
          </p>
        </div>

        {sections.map((s, i) => (
          <div key={i} className="legal-section">
            <div className="legal-section-header">
              <span className="legal-section-number">{i + 1}</span>
              <h2>{s.title}</h2>
            </div>
            {s.content.map((p, j) => (
              <p key={j}>{p}</p>
            ))}
            {s.list && (
              <ul>
                {s.list.map((item, k) => (
                  <li key={k}>{item}</li>
                ))}
              </ul>
            )}
            {s.highlight && (
              <div className="legal-highlight">
                <p>
                  <strong>Note: </strong>
                  {s.highlight}
                </p>
              </div>
            )}
          </div>
        ))}

        <hr className="legal-divider" />

        <div className="legal-contact-card">
          <h3>Need Help With Delivery?</h3>
          <p>
            If you have any questions about your shipment, feel free
            to reach out at{' '}
            <Link to="/contact">our contact page</Link> or email us at{' '}
            <a href="mailto:hasin6637@gmail.com">
              hasin6637@gmail.com
            </a>
          </p>
        </div>

        <div className="legal-back-top">
          <a href="#" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
            Back to Top ↑
          </a>
        </div>
      </div>
    </div>
  )
}
