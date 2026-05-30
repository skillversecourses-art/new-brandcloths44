import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './PrivacyPolicy.css'

const sections = [
  {
    title: 'Acceptance of Terms',
    content: [
      'By accessing and using the BrandCloths44 website, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please discontinue use of our website immediately.',
    ],
  },
  {
    title: 'Account Registration',
    content: [
      'When creating an account with BrandCloths44, you agree to the following:',
    ],
    list: [
      'You must be at least 18 years of age or have parental consent',
      'All information provided must be accurate and current',
      'You are responsible for maintaining the confidentiality of your account credentials',
      'You are responsible for all activities that occur under your account',
      'You must notify us immediately of any unauthorized use of your account',
    ],
    highlight: 'BrandCloths44 reserves the right to suspend or terminate accounts that violate these terms or engage in fraudulent activity.',
  },
  {
    title: 'Products & Pricing',
    content: [
      'We make every effort to display our products accurately. However, please note:',
    ],
    list: [
      'Product colors may vary slightly due to monitor settings and lighting conditions',
      'All prices are listed in INR (Indian Rupees) and include applicable taxes unless stated otherwise',
      'We reserve the right to modify prices at any time without prior notice',
      'Promotional discounts and offers are subject to specific terms and expiration dates',
      'Product availability is subject to change without notice',
    ],
  },
  {
    title: 'Orders & Payment',
    content: [
      'When you place an order on our website, you are making an offer to purchase. We reserve the right to accept or reject any order for any reason.',
    ],
    list: [
      'Orders are confirmed only after successful payment processing',
      'We accept major credit cards, debit cards, UPI, and net banking',
      'All payment transactions are processed through secure, encrypted payment gateways',
      'In case of payment failure, your order will not be processed',
      'You will receive an order confirmation email upon successful placement',
    ],
  },
  {
    title: 'Shipping & Delivery',
    content: [
      'BrandCloths44 ships across India and to select international destinations. Please review the following shipping terms:',
    ],
    list: [
      'Estimated delivery times are indicative and may vary based on location and availability',
      'Shipping charges, if applicable, will be displayed at checkout before order confirmation',
      'Risk of loss and title for items purchased pass to you upon delivery to the carrier',
      'We are not responsible for delays caused by customs, weather, or carrier issues',
      'International orders may be subject to import duties and taxes, which are the buyer\'s responsibility',
    ],
  },
  {
    title: 'Returns & Exchanges',
    content: [
      'We want you to be completely satisfied with your purchase. Our return and exchange policy is as follows:',
    ],
    list: [
      'Items may be returned within 7 days of delivery in original, unworn condition with tags attached',
      'Exchanges are subject to product availability',
      'Sale items and customized products are non-returnable',
      'Return shipping costs are the customer\'s responsibility unless the item is defective',
      'Refunds will be processed within 7-10 business days after receiving the returned item',
    ],
    highlight: 'Please visit our Returns page for detailed instructions on how to initiate a return or exchange.',
  },
  {
    title: 'Intellectual Property',
    content: [
      'All content on the BrandCloths44 website, including but not limited to text, graphics, logos, images, product designs, and software, is the property of BrandCloths44 and is protected by applicable intellectual property laws.',
    ],
    list: [
      'You may not reproduce, distribute, or create derivative works from our content without written permission',
      'Our brand name, logo, and product names are registered trademarks',
      'Unauthorized use of our intellectual property may result in legal action',
    ],
  },
  {
    title: 'Limitation of Liability',
    content: [
      'BrandCloths44 shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our website or purchase of our products. Our total liability shall not exceed the amount paid by you for the specific product in question.',
    ],
  },
  {
    title: 'Governing Law',
    content: [
      'These Terms and Conditions are governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra.',
    ],
  },
  {
    title: 'Changes to Terms',
    content: [
      'BrandCloths44 reserves the right to update or modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on this page. Continued use of our website after any modifications constitutes acceptance of the updated terms.',
    ],
  },
]

export default function TermsConditions() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="legal-page">
      <section className="legal-hero">
        <div className="legal-hero-content">
          <p className="section-label">Legal</p>
          <h1>
            Terms & <span className="gold-text">Conditions</span>
          </h1>
          <p className="legal-updated">Last updated: May 27, 2026</p>
        </div>
      </section>

      <div className="legal-body">
        <div className="legal-section">
          <p>
            Welcome to BrandCloths44. These Terms and Conditions govern your use
            of our website and the purchase of products from our online store.
            Please read them carefully before using our services.
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
          <h3>Need Clarification?</h3>
          <p>
            If you have any questions about these Terms and Conditions, feel free
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
