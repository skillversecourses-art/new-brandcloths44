import { useState } from 'react'
import './Contact.css'

const faqs = [
  { q: 'What is your return policy?', a: 'We offer hassle-free 7-day returns. Items must be unused with original tags.' },
  { q: 'How long does shipping take?', a: 'Standard delivery takes 3-5 business days. Express 1-2 days.' },
  { q: 'Do you ship internationally?', a: 'Yes! We ship to 8 countries including UAE, UK, USA, Singapore, and more.' },
  { q: 'How do I track my order?', a: 'You\'ll receive a tracking link via email & SMS once your order is dispatched.' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [openFaq, setOpenFaq] = useState(null)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setSubmitting(true)
    setError('')
    try {
      const res = await fetch('https://formspree.io/f/xpfhdabc', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setSubmitted(true)
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        setError('Failed to send. Please email us at hasin6637@gmail.com')
      }
    } catch {
      setError('Failed to send. Please email us at hasin6637@gmail.com')
    }
    setSubmitting(false)
  }

  return (
    <div className="contact-page">
      {/* HERO */}
      <section className="contact-hero">
        <div className="contact-hero-bg" />
        <div className="contact-hero-content">
          <p className="section-label">Get in Touch</p>
          <h1>We're Here to <span className="gold-text">Help.</span></h1>
          <p>Questions, feedback, collaborations — we read every message.</p>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* INFO */}
            <div className="contact-info">
              <h3>Reach Us Directly</h3>
              <div className="info-items">
                {[
                  { icon: '📍', label: 'Address', value: 'Building No. 161, Bengaluru Bellary Road, Bengaluru, Karnataka – 560001' },
                  { icon: '🧾', label: 'GST No.', value: '29JCLPP1285E1Z3' },
                  { icon: '📧', label: 'Email', value: 'hasin6637@gmail.com' },
                  { icon: '📞', label: 'Phone', value: '+91 9217807543' },
                  { icon: '🕐', label: 'Hours', value: 'Mon–Sat: 10am – 8pm IST' },
                ].map((item, i) => (
                  <div key={i} className="info-item">
                    <span className="info-icon">{item.icon}</span>
                    <div>
                      <span className="info-label">{item.label}</span>
                      <p>{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* FORM */}
            <div className="contact-form-wrap">
              {submitted ? (
                <div className="success-msg">
                  <span className="success-icon">✓</span>
                  <h3>Message Sent!</h3>
                  <p>We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Full Name</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Email Address</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Subject</label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="What's this about?"
                      value={form.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Message</label>
                    <textarea
                      name="message"
                      placeholder="Tell us everything..."
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  {error && <p className="form-error-msg">{error}</p>}
                  <button type="submit" className="submit-btn" disabled={submitting}>
                    {submitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <p className="section-label">FAQ</p>
            <h2>Common Questions</h2>
          </div>
          <div className="faq-list">
            {faqs.map((f, i) => (
              <div key={i} className={`faq-item ${openFaq === i ? 'open' : ''}`}>
                <button className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{f.q}</span>
                  <span className="faq-icon">{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && <div className="faq-a"><p>{f.a}</p></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAP PLACEHOLDER */}
      <div className="map-placeholder">
        <div className="map-inner">
          <span className="map-pin">📍</span>
          <p>Building No. 161, Bengaluru Bellary Road, Bengaluru, Karnataka – 560001</p>
        </div>
      </div>
    </div>
  )
}
