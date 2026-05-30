import { Link } from 'react-router-dom'
import './About.css'

const team = [
  { name: 'Aryan Mehta', role: 'Founder & Creative Director', initials: 'AM' },
  { name: 'Sana Qureshi', role: 'Head of Design', initials: 'SQ' },
  { name: 'Dev Sharma', role: 'Brand Strategist', initials: 'DS' },
]

const milestones = [
  { year: '2020', event: 'BrandCloths44 launched from a small studio in Mumbai.' },
  { year: '2021', event: 'Crossed 5,000 orders. Launched the first premium winter collection.' },
  { year: '2022', event: 'Opened flagship store. Expanded to 12 cities across India.' },
  { year: '2023', event: 'Launched international shipping to 8 countries.' },
  { year: '2024', event: 'Released the "Dark Signature" exclusive line.' },
]

export default function About() {
  return (
    <div className="about-page">
      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero-bg" />
        <div className="about-hero-content">
          <p className="section-label">Our Story</p>
          <h1>
            Born in the Dark.<br />
            <span className="gold-text">Built to Last.</span>
          </h1>
          <p>
            BrandCloths44 is not just a fashion label — it's a manifesto.
            We design for those who don't follow trends. They set them.
          </p>
        </div>
      </section>

      {/* MISSION */}
      <section className="about-mission">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-text">
              <p className="section-label">Who We Are</p>
              <h2>Dark Fashion for the <span className="gold-text">Unapologetic.</span></h2>
              <p>
                Founded in 2020 in Mumbai, BrandCloths44 was created with a single vision:
                to give dark fashion a premium home in India. We believe that clothing is
                armor — every piece you wear should amplify who you are.
              </p>
              <p>
                We source only the finest fabrics — Japanese cotton, Korean blends, artisan
                leather — and cut every pattern by hand. No shortcuts. No compromises.
              </p>
              <div className="mission-values">
                {['Quality First', 'Bold Design', 'Sustainable Craft', 'Dark Aesthetics'].map(v => (
                  <span key={v} className="value-tag">{v}</span>
                ))}
              </div>
            </div>
            <div className="mission-visual">
              <div className="visual-box">
                <div className="visual-inner">
                  <span className="visual-number">44</span>
                  <span className="visual-sub">Brand<br />Cloths44</span>
                </div>
              </div>
              <div className="visual-stats-col">
                {[['4+', 'Years'], ['150+', 'Styles'], ['20K+', 'Orders'], ['98%', 'Satisfaction']].map(([n, l]) => (
                  <div key={l} className="v-stat">
                    <span>{n}</span>
                    <p>{l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="about-timeline">
        <div className="container">
          <div className="section-header">
            <p className="section-label">Journey</p>
            <h2>Our Milestones</h2>
          </div>
          <div className="timeline">
            {milestones.map((m, i) => (
              <div key={i} className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline-dot" />
                <div className="timeline-card">
                  <span className="timeline-year">{m.year}</span>
                  <p>{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="about-team">
        <div className="container">
          <div className="section-header">
            <p className="section-label">The Minds</p>
            <h2>Meet the Team</h2>
          </div>
          <div className="team-grid">
            {team.map((m, i) => (
              <div key={i} className="team-card">
                <div className="team-avatar">
                  <span>{m.initials}</span>
                </div>
                <div className="team-info">
                  <h4>{m.name}</h4>
                  <span>{m.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="container">
          <div className="cta-box">
            <p className="section-label">Ready?</p>
            <h2>Explore the Collection</h2>
            <p>Step into the dark side of fashion. You belong here.</p>
            <Link to="/shop" className="btn-primary">Shop Now</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
