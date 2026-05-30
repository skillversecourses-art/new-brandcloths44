import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './PrivacyPolicy.css'

const sections = [
  {
    title: 'Information We Collect',
    content: [
      'We collect information you provide directly when you create an account, place an order, or contact us. This includes:',
    ],
    list: [
      'Personal details (name, email address, phone number)',
      'Shipping and billing addresses',
      'Payment information (processed securely through third-party payment gateways)',
      'Order history and product preferences',
      'Communication preferences and feedback',
    ],
  },
  {
    title: 'How We Use Your Information',
    content: [
      'Your personal information is used to deliver the premium experience you expect from BrandCloths44:',
    ],
    list: [
      'Processing and fulfilling your orders',
      'Sending order confirmations and shipping updates',
      'Providing customer support and resolving issues',
      'Personalizing your shopping experience and product recommendations',
      'Sending promotional offers and new collection announcements (with your consent)',
      'Improving our website, products, and services',
    ],
  },
  {
    title: 'Information Sharing',
    content: [
      'We respect your privacy and do not sell your personal information to third parties. We may share your data only in the following circumstances:',
    ],
    list: [
      'With trusted service providers who assist in order fulfillment, shipping, and payment processing',
      'With analytics partners to improve our website performance (anonymized data only)',
      'When required by law or to protect our legal rights',
      'In connection with a business transfer, merger, or acquisition',
    ],
    highlight: 'All third-party service providers are contractually obligated to protect your data and use it only for the purposes we specify.',
  },
  {
    title: 'Cookies & Tracking',
    content: [
      'We use cookies and similar technologies to enhance your browsing experience. These help us remember your preferences, analyze site traffic, and deliver relevant content.',
      'You can control cookie preferences through your browser settings. Disabling cookies may limit some features of our website.',
    ],
  },
  {
    title: 'Data Security',
    content: [
      'We implement industry-standard security measures to protect your personal information, including SSL encryption, secure payment gateways, and regular security audits.',
    ],
    highlight: 'While we strive to protect your data, no method of transmission over the internet is 100% secure. We encourage you to use strong passwords and keep your account credentials confidential.',
  },
  {
    title: 'Your Rights',
    content: ['As a valued customer, you have the right to:'],
    list: [
      'Access and review the personal information we hold about you',
      'Request corrections to inaccurate or incomplete data',
      'Request deletion of your personal data (subject to legal obligations)',
      'Opt-out of marketing communications at any time',
      'Withdraw consent for data processing where applicable',
    ],
  },
  {
    title: 'Data Retention',
    content: [
      'We retain your personal information for as long as your account is active or as needed to provide you services. We may also retain data as necessary to comply with legal obligations, resolve disputes, and enforce our agreements.',
    ],
  },
  {
    title: 'Changes to This Policy',
    content: [
      'We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.',
    ],
  },
]

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="legal-page">
      <section className="legal-hero">
        <div className="legal-hero-content">
          <p className="section-label">Legal</p>
          <h1>
            Privacy <span className="gold-text">Policy</span>
          </h1>
          <p className="legal-updated">Last updated: May 27, 2026</p>
        </div>
      </section>

      <div className="legal-body">
        <div className="legal-section">
          <p>
            At BrandCloths44, we are committed to protecting your privacy and
            ensuring the security of your personal information. This Privacy
            Policy explains how we collect, use, and safeguard your data when
            you visit our website and make purchases.
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
                  <strong>Important: </strong>
                  {s.highlight}
                </p>
              </div>
            )}
          </div>
        ))}

        <hr className="legal-divider" />

        <div className="legal-contact-card">
          <h3>Questions About Your Privacy?</h3>
          <p>
            If you have any questions or concerns about this Privacy Policy or
            your personal data, please contact us at{' '}
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
