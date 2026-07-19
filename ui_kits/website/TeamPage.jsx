import NavBar from './NavBar';
import Footer from './Footer';
import timPhoto from '../../assets/team-tim-savre.jpg';
import mattPhoto from '../../assets/team-matt-zimmer.jpg';

const SCHEDULE_URL = 'https://calendar.app.google/MGAEMQz4kc5kvxrK8';

function TeamMember({ photo, name, role, children }) {
  return (
    <div>
      <div className="mba-team-member__photo">
        <img src={photo} alt={name} />
      </div>
      <div className="mba-eyebrow mba-eyebrow--dark" style={{ marginBottom: 12 }}>{role}</div>
      <h2 className="mba-card-headline" style={{ fontSize: 52, color: 'var(--mba-navy)', marginBottom: 20 }}>{name}</h2>
      {children}
    </div>
  );
}

export default function TeamPage() {
  return (
    <div className="mba-page">
      <NavBar active="Team" />

      {/* HERO */}
      <section className="mba-hero--light" style={{ padding: '100px 80px 80px', borderBottom: '1px solid var(--mba-border)' }}>
        <div className="mba-eyebrow mba-eyebrow--dark">Meet the team</div>
        <h1 className="mba-headline" style={{ fontSize: 80, color: 'var(--mba-navy)', marginBottom: 28, maxWidth: 800 }}>
          Accounting built by people<br /><em>who know construction.</em>
        </h1>
        <p className="mba-body-lg" style={{ fontSize: 17, color: 'var(--mba-text-muted)', maxWidth: 520, margin: 0 }}>
          A focused practice built around one niche. Small by design, so every client gets senior-level attention from the people who built this firm.
        </p>
      </section>

      {/* TEAM MEMBERS */}
      <section className="mba-team-grid">
        <TeamMember photo={timPhoto} name="Tim Savre" role="Founder">
          <p style={{ fontFamily: 'var(--mba-font-body)', fontSize: 15, lineHeight: 1.85, color: 'var(--mba-text-muted)', marginBottom: 20 }}>
            Tim founded Modern Builder Accounting to help homebuilders and remodelers gain clarity through accurate job costing, WIP reporting, strong systems, and clean, reliable financials. His focus is building accounting systems that support better decisions as companies grow.
          </p>
          <p style={{ fontFamily: 'var(--mba-font-body)', fontSize: 15, lineHeight: 1.85, color: 'var(--mba-text-muted)', margin: 0 }}>
            Tim holds a degree in Accounting from St. Thomas University (MN). He is an active member of the CFMA Twin Cities Chapter and a Board Member for Project Echelon, a non-profit focused on serving veterans through sport.
          </p>
        </TeamMember>
        <TeamMember photo={mattPhoto} name="Matt Zimmer" role="Partner">
          <p style={{ fontFamily: 'var(--mba-font-body)', fontSize: 15, lineHeight: 1.85, color: 'var(--mba-text-muted)', marginBottom: 20 }}>
            Matt brings five years of construction accounting experience and a degree in Accounting and Finance from Lees-McRae College. Before his financial career, he spent five years as a professional cyclist and competed internationally. The discipline and focus that carried him through competition now defines his approach to financial management.
          </p>
          <p style={{ fontFamily: 'var(--mba-font-body)', fontSize: 15, lineHeight: 1.85, color: 'var(--mba-text-muted)', margin: 0 }}>
            Outside of work, Matt is a dedicated family man who enjoys cycling and spending time with his wife and two sons.
          </p>
        </TeamMember>
      </section>

      {/* WHY WE BUILT THIS */}
      <section style={{ background: 'var(--mba-navy-dark)', borderTop: '1px solid rgba(255,255,255,0.05)', padding: '100px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80 }}>
          <div>
            <div className="mba-eyebrow mba-eyebrow--dark">Our focus</div>
            <h2 className="mba-card-headline" style={{ fontSize: 48, color: 'var(--mba-cream)', margin: 0 }}>Why we built<br />this practice</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28, paddingTop: 4 }}>
            <p style={{ fontFamily: 'var(--mba-font-body)', fontSize: 15, lineHeight: 1.85, color: 'var(--mba-body-on-dark)', margin: 0 }}>
              Most accounting firms treat construction like any other industry. They don&rsquo;t understand job costing. They&rsquo;ve never reconciled a construction draw. They can&rsquo;t tell the difference between a WIP schedule and a balance sheet. For builders, that gap is costly.
            </p>
            <p style={{ fontFamily: 'var(--mba-font-body)', fontSize: 15, lineHeight: 1.85, color: 'var(--mba-body-on-dark)', margin: 0 }}>
              Modern Builder Accounting exists for builders who need a financial partner that keeps up with the pace and complexity of their business. We stay small by design so every client gets senior attention, not a junior associate.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mba-cta">
        <div className="mba-eyebrow mba-eyebrow--dark" style={{ display: 'inline-block' }}>Work with us</div>
        <h2 className="mba-headline" style={{ fontSize: 72, color: 'var(--mba-cream)', marginBottom: 24 }}>Let&rsquo;s build something together.</h2>
        <p style={{ fontFamily: 'var(--mba-font-body)', fontSize: 15, color: 'var(--mba-body-on-dark)', margin: '0 auto 52px', lineHeight: 1.8, maxWidth: 440 }}>
          Schedule a free 30-minute intro call to see if we&rsquo;re a fit for your business.
        </p>
        <a href={SCHEDULE_URL} className="mba-btn mba-btn--cta">Book a Free Consultation &rarr;</a>
      </section>

      <Footer />
    </div>
  );
}
