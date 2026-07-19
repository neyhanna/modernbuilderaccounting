import NavBar from './NavBar';
import Footer from './Footer';

const SCHEDULE_URL = 'https://calendar.app.google/MGAEMQz4kc5kvxrK8';

const STEPS = [
  {
    n: '01',
    title: 'You share your situation',
    body: 'Tell us about your business: how many homes you build per year, your current accounting setup, and the biggest pain points you’re dealing with.',
  },
  {
    n: '02',
    title: 'We identify the gaps',
    body: 'We ask the right questions and use our construction accounting expertise to pinpoint exactly what’s not working and why, not just symptoms but root causes.',
  },
  {
    n: '03',
    title: 'We outline a path forward',
    body: 'You leave the call with a clear picture of what better accounting looks like for your business and what it would take to get there. No obligation to move forward.',
  },
];

export default function ContactPage() {
  return (
    <div className="mba-page">
      <NavBar active="Contact" />

      {/* HERO */}
      <section className="mba-hero--light" style={{ padding: '100px 80px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'end', paddingBottom: 80, borderBottom: '1px solid var(--mba-border)' }}>
          <div>
            <div className="mba-eyebrow mba-eyebrow--dark">Get in touch</div>
            <h1 className="mba-hero" style={{ fontSize: 88, lineHeight: 0.95, color: 'var(--mba-navy)', marginBottom: 28 }}>
              Let&rsquo;s<br /><em>talk.</em>
            </h1>
            <p className="mba-body-lg" style={{ fontSize: 17, color: 'var(--mba-text-muted)', maxWidth: 440, margin: 0 }}>
              Schedule a free 30-minute intro call. No pressure, no pitch. Just an honest conversation about your business and whether we&rsquo;re the right fit.
            </p>
          </div>
          <div style={{ background: 'var(--mba-navy)', borderRadius: 4, padding: 56, textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--mba-font-body)', fontSize: 11, fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#4E6A84', marginBottom: 20 }}>
              Free &middot; 30 minutes &middot; No commitment
            </div>
            <h2 style={{ fontFamily: 'var(--mba-font-display)', fontSize: 44, fontWeight: 300, color: 'var(--mba-cream)', margin: '0 0 12px', lineHeight: 1.05 }}>
              Book a consultation
            </h2>
            <p style={{ fontFamily: 'var(--mba-font-body)', fontSize: 14, lineHeight: 1.75, color: 'var(--mba-body-on-dark)', marginBottom: 36 }}>
              Choose a time that works for you. Tim or Matt will reach out to confirm the call.
            </p>
            <a href={SCHEDULE_URL} className="mba-btn mba-btn--cta" style={{ width: '100%' }}>Schedule a call &rarr;</a>
            <div style={{ fontFamily: 'var(--mba-font-body)', fontSize: 12, color: 'var(--mba-footer-fine)', marginTop: 20 }}>
              Or email us directly at<br />
              <a href="mailto:info@modernbuilderaccounting.com" style={{ color: 'var(--mba-blue-accent)', textDecoration: 'none' }}>info@modernbuilderaccounting.com</a>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section style={{ background: 'var(--mba-white)', padding: 80 }}>
        <div className="mba-eyebrow mba-eyebrow--dark">What to expect</div>
        <h2 className="mba-card-headline" style={{ fontSize: 52, color: 'var(--mba-navy)', marginBottom: 56 }}>On the call</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 2 }}>
          {STEPS.map((step, i) => (
            <div
              key={step.n}
              style={{
                background: 'var(--mba-bg-subtle)',
                padding: '48px 40px',
                borderTop: '3px solid var(--mba-blue)',
                ...(i === 1 ? { borderLeft: '1px solid var(--mba-border)', borderRight: '1px solid var(--mba-border)' } : {}),
              }}
            >
              <div style={{ fontFamily: 'var(--mba-font-display)', fontSize: 56, fontWeight: 300, color: 'rgba(27,103,242,0.2)', lineHeight: 1, marginBottom: 20 }}>{step.n}</div>
              <h3 style={{ fontFamily: 'var(--mba-font-body)', fontSize: 15, fontWeight: 500, color: 'var(--mba-navy)', margin: '0 0 12px' }}>{step.title}</h3>
              <p style={{ fontFamily: 'var(--mba-font-body)', fontSize: 14, lineHeight: 1.8, color: 'var(--mba-text-muted)', margin: 0 }}>{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
