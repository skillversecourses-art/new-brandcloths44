import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './PrivacyPolicy.css'

const sections = [
  {
    title: 'Order Cancellation',
    content: [
      'We understand that you may change your mind. Orders can be cancelled before they are dispatched.',
    ],
    list: [
      'To cancel an order, log in to your account, go to "My Orders", and click "Cancel Order".',
      'Alternatively, you can email us at hasin6637@gmail.com within 24 hours of placing the order.',
      'If the order has already been shipped, it cannot be cancelled. You will need to wait for delivery and then initiate a return.',
      'For prepaid cancelled orders, the full amount will be refunded to the original payment method within 5-7 business days.',
    ],
  },
  {
    title: 'Return Eligibility',
    content: [
      'We want you to love every piece you buy from BrandCloths44. If something doesn\'t work out, here\'s what qualifies for a return:',
    ],
    list: [
      'Items must be returned within 7 days of delivery',
      'Products must be in original, unworn condition with all tags and packaging intact',
      'Items must not be washed, altered, or damaged by the customer',
      'Proof of purchase (order confirmation or receipt) is required',
    ],
    highlight: 'Sale items, customized products, innerwear, and accessories (belts, wallets, jewellery) are non-returnable.',
  },
  {
    title: 'How to Initiate a Return',
    content: [
      'Returning an item is simple. Follow these steps:',
    ],
    list: [
      'Log in to your BrandCloths44 account and navigate to "My Orders"',
      'Select the order containing the item you wish to return',
      'Click "Request Return" and provide a reason for the return',
      'You will receive a confirmation email with return instructions and a shipping label',
      'Pack the item securely and ship it within 3 days of receiving the return confirmation',
    ],
  },
  {
    title: 'Exchange Policy',
    content: [
      'We offer exchanges for size and color variations, subject to availability:',
    ],
    list: [
      'Exchanges must be requested within 7 days of delivery',
      'The replacement item will be shipped after we receive and inspect the returned product',
      'If the requested size or color is unavailable, we will issue a full refund',
      'Exchange shipping is free for the first exchange per order',
    ],
  },
  {
    title: 'Refund Process',
    content: [
      'Once we receive and inspect your returned item, here\'s what happens:',
    ],
    list: [
      'You will receive an email notification confirming receipt and inspection',
      'Approved refunds are processed within 7-10 business days',
      'Refunds are credited to the original payment method used during purchase',
      'Bank processing times may add 3-5 additional business days for the amount to reflect',
    ],
    highlight: 'Original shipping charges are non-refundable unless the return is due to a defective or incorrect item.',
  },
  {
    title: 'Damaged or Defective Items',
    content: [
      'If you receive a damaged or defective product, we sincerely apologize. Here\'s how we\'ll make it right:',
    ],
    list: [
      'Contact us within 48 hours of delivery with photos of the damage',
      'We will arrange a free pickup for the defective item',
      'You can choose between a full refund or a replacement',
      'Replacement items are shipped on priority at no additional cost',
    ],
  },
  {
    title: 'International Returns',
    content: [
      'For international orders, the following conditions apply:',
    ],
    list: [
      'Return shipping costs are the customer\'s responsibility',
      'Items must be shipped within 14 days of delivery',
      'Import duties and taxes paid during purchase are non-refundable',
      'Refunds will be processed after the item clears customs and reaches our warehouse',
    ],
  },
]

export default function Returns() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="legal-page">
      <section className="legal-hero">
        <div className="legal-hero-content">
          <p className="section-label">Support</p>
          <h1>
            Cancellations & <span className="gold-text">Refunds</span>
          </h1>
          <p className="legal-updated">Last updated: May 30, 2026</p>
        </div>
      </section>

      <div className="legal-body">
        <div className="legal-section">
          <p>
            At BrandCloths44, your satisfaction is our priority. We stand behind
            the quality of every piece we create. If for any reason you're not
            completely happy with your purchase, our hassle-free cancellation, return and
            exchange policy is here to help.
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
                  <strong>Please Note: </strong>
                  {s.highlight}
                </p>
              </div>
            )}
          </div>
        ))}

        <hr className="legal-divider" />

        <div className="legal-contact-card">
          <h3>Need Help With a Return?</h3>
          <p>
            Our support team is here to assist you. Reach out on{' '}
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
