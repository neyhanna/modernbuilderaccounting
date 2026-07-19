import NavBar from './NavBar';
import Footer from './Footer';
import Badge from '../../components/core/Badge';
import adaptiveBadge from '../../assets/adaptive-advisor-badge.png';

const SCHEDULE_URL = 'https://calendar.app.google/MGAEMQz4kc5kvxrK8';

const TOOLS = [
  {
    category: 'Accounting',
    name: <>QuickBooks<br />Online</>,
    body: 'The bookkeeping backbone for most of our clients. We configure QBO specifically for construction: job costing, class tracking, and custom reporting that makes sense for builders.',
    items: ['Setup & configuration', 'Construction chart of accounts', 'Ongoing bookkeeping & support'],
    border: { borderTop: '2px solid rgba(255,255,255,0.04)' },
  },
  {
    category: 'Project management',
    name: 'ProCore',
    body: 'When your operation runs on ProCore, we make sure the financial side keeps pace. We connect ProCore to Adaptive financials so project data flows cleanly into your books automatically.',
    items: ['Adaptive + ProCore integration', 'Budget & cost code alignment', 'AP workflow optimization'],
    border: { borderLeft: '1px solid rgba(255,255,255,0.05)' },
  },
  {
    category: 'Construction management',
    name: 'BuilderTrend',
    body: 'BuilderTrend users often struggle to get clean financial data out of the platform. We connect BuilderTrend to Adaptive financials so your project data syncs to your books in real time.',
    items: ['Adaptive + BuilderTrend integration', 'Budget vs. actual reporting', 'Job cost tracking setup'],
    border: { borderTop: '2px solid rgba(255,255,255,0.04)' },
  },
  {
    category: 'Construction management',
    name: 'JobTread',
    body: 'A modern all-in-one construction management platform built for custom builders. We connect JobTread to Adaptive financials, giving you the project management tools you love with real-time financial visibility alongside them.',
    items: ['Adaptive + JobTread integration', 'Budget & job cost reporting', 'Financial data sync & reconciliation'],
    border: { borderTop: '2px solid rgba(255,255,255,0.04)', borderLeft: '1px solid rgba(255,255,255,0.05)' },
  },
];

export default function TechnologyPage() {
  return (
    <div className="mba-page">
      <NavBar active="Technology" />

      {/* HERO — dark, inverted from other pages */}
      <section className="mba-hero--dark" style={{ padding: '100px 80px 80px' }}>
        <div className="mba-eyebrow mba-eyebrow--dark">Our tech stack</div>
        <h1 className="mba-headline" style={{ fontSize: 80, color: 'var(--mba-cream)', marginBottom: 28, maxWidth: 780 }}>
          We know the platforms<br /><em>builders trust.</em>
        </h1>
        <p className="mba-body-lg" style={{ fontSize: 17, color: 'var(--mba-body-on-dark)', maxWidth: 540, margin: 0 }}>
          Being tech-forward isn&rsquo;t a tagline. We&rsquo;re certified experts in the tools that run modern construction businesses, and we know how to make them work together.
        </p>
      </section>

      {/* ADAPTIVE FEATURED */}
      <section style={{ background: 'var(--mba-white)', padding: 80, borderTop: '4px solid var(--mba-blue)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80, alignItems: 'start' }}>
          <div>
            <div style={{ marginBottom: 28 }}>
              <Badge>Preferred Partner</Badge>
            </div>
            <h2 className="mba-card-headline" style={{ fontSize: 64, color: 'var(--mba-navy)', marginBottom: 20 }}>Adaptive<br />Build</h2>
            <p style={{ fontFamily: 'var(--mba-font-body)', fontSize: 15, lineHeight: 1.85, color: 'var(--mba-text-muted)', marginBottom: 32 }}>
              Adaptive is an AI-powered financial management platform built specifically for construction. It connects your project data, contracts, and financials in real time, giving builders the kind of visibility that used to require a full-time CFO.
            </p>
            <p style={{ fontFamily: 'var(--mba-font-body)', fontSize: 15, lineHeight: 1.85, color: 'var(--mba-text-muted)', margin: 0 }}>
              As a named Adaptive preferred partner, we&rsquo;re among a select group of firms certified to implement, configure, and support the platform for construction clients.
            </p>
            <a href="https://referrals.adaptive.build/uW8cdiFU" target="_blank" rel="noopener" style={{ display: 'inline-flex', alignItems: 'center', background: 'var(--mba-white)', borderRadius: 8, padding: '14px 22px', marginTop: 32 }}>
              <img src={adaptiveBadge} alt="Adaptive Advisor" style={{ width: 180, height: 'auto', display: 'block' }} />
            </a>
          </div>
          <div style={{ borderRadius: 4, overflow: 'hidden', border: '1px solid var(--mba-border)' }}>
            <div style={{ background: 'var(--mba-bg-subtle)', padding: '36px 40px', borderBottom: '2px solid var(--mba-border)' }}>
              <div style={{ fontFamily: 'var(--mba-font-body)', fontSize: 10, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--mba-text-light)', marginBottom: 12 }}>Approach 1 &mdash; Standalone</div>
              <div style={{ fontFamily: 'var(--mba-font-body)', fontSize: 15, fontWeight: 500, color: 'var(--mba-navy)', marginBottom: 10 }}>Adaptive as the complete platform</div>
              <p style={{ fontFamily: 'var(--mba-font-body)', fontSize: 13, lineHeight: 1.75, color: 'var(--mba-text-muted)', marginBottom: 20 }}>Some builders use Adaptive for both project management and financials: one platform for everything. We handle full implementation, ongoing bookkeeping, and support within the platform.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {['Full setup & configuration', 'Ongoing bookkeeping inside Adaptive', 'Migration & team training'].map((t) => (
                  <div key={t} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                    <span style={{ color: 'var(--mba-blue)', flexShrink: 0, fontSize: 16, lineHeight: 0 }}>&ndash;</span>
                    <span style={{ fontFamily: 'var(--mba-font-body)', fontSize: 13, color: 'var(--mba-text-muted)' }}>{t}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: 'var(--mba-blue-tint)', padding: '36px 40px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                <div style={{ fontFamily: 'var(--mba-font-body)', fontSize: 10, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--mba-blue)' }}>Approach 2 &mdash; Integration</div>
                <span style={{ fontFamily: 'var(--mba-font-body)', fontSize: 10, fontWeight: 600, color: 'var(--mba-white)', background: 'var(--mba-blue)', padding: '2px 10px', borderRadius: 'var(--mba-radius-pill)', letterSpacing: '0.04em', whiteSpace: 'nowrap' }}>Most common</span>
              </div>
              <div style={{ fontFamily: 'var(--mba-font-body)', fontSize: 15, fontWeight: 500, color: 'var(--mba-navy)', marginBottom: 10 }}>Adaptive financials + your PM tool</div>
              <p style={{ fontFamily: 'var(--mba-font-body)', fontSize: 13, lineHeight: 1.75, color: '#374151', marginBottom: 20 }}>Most clients keep their preferred project management platform and connect Adaptive as the financial layer. Project data flows into your books in real time, with full financial visibility without changing how you manage jobs.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {['Adaptive + ProCore', 'Adaptive + BuilderTrend', 'Adaptive + JobTread'].map((t) => (
                  <div key={t} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                    <span style={{ color: 'var(--mba-blue)', flexShrink: 0, fontSize: 16, lineHeight: 0 }}>&ndash;</span>
                    <span style={{ fontFamily: 'var(--mba-font-body)', fontSize: 13, color: '#374151' }}>{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OTHER TOOLS */}
      <section style={{ background: 'var(--mba-navy-dark)', padding: 80, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="mba-eyebrow mba-eyebrow--dark">Also expert in</div>
        <h2 className="mba-card-headline" style={{ fontSize: 52, color: 'var(--mba-cream)', marginBottom: 56 }}>The full stack</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
          {TOOLS.map((tool) => (
            <div key={tool.category + tool.name} style={{ background: 'var(--mba-navy-section)', padding: '48px 40px', ...tool.border }}>
              <div className="mba-eyebrow mba-eyebrow--dark" style={{ fontSize: 10, letterSpacing: '0.22em' }}>{tool.category}</div>
              <h3 style={{ fontFamily: 'var(--mba-font-display)', fontSize: 36, fontWeight: 300, color: 'var(--mba-cream)', margin: '0 0 16px', lineHeight: 1.05 }}>{tool.name}</h3>
              <p style={{ fontFamily: 'var(--mba-font-body)', fontSize: 14, lineHeight: 1.8, color: 'var(--mba-body-on-dark)', marginBottom: 24 }}>{tool.body}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {tool.items.map((item) => (
                  <div key={item} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                    <span style={{ color: 'var(--mba-blue-accent)', fontSize: 14, lineHeight: 0 }}>&ndash;</span>
                    <span style={{ fontFamily: 'var(--mba-font-body)', fontSize: 13, color: 'var(--mba-body-on-dark)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY TECH MATTERS */}
      <section style={{ background: 'var(--mba-navy-dark)', padding: 80, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80 }}>
          <div>
            <div className="mba-eyebrow mba-eyebrow--dark">Why it matters</div>
            <h2 className="mba-card-headline" style={{ fontSize: 48, color: 'var(--mba-cream)', margin: 0 }}>The right tools<br />change everything</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28, paddingTop: 4 }}>
            <p style={{ fontFamily: 'var(--mba-font-body)', fontSize: 15, lineHeight: 1.85, color: 'var(--mba-body-on-dark)', margin: 0 }}>
              Builders running on spreadsheets or generic accounting software are flying blind. They don&rsquo;t know their true job costs until a project is finished, sometimes not until the tax return. By then, the margin is already gone.
            </p>
            <p style={{ fontFamily: 'var(--mba-font-body)', fontSize: 15, lineHeight: 1.85, color: 'var(--mba-body-on-dark)', margin: 0 }}>
              The right construction accounting technology, properly implemented and maintained, gives you real-time visibility into every project. You know where you stand on every job, every month. That&rsquo;s how you make better bids, catch cost overruns early, and grow with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mba-cta">
        <div className="mba-eyebrow mba-eyebrow--dark" style={{ display: 'inline-block' }}>Get started</div>
        <h2 className="mba-headline" style={{ fontSize: 68, color: 'var(--mba-cream)', marginBottom: 24 }}>Ready to modernize your stack?</h2>
        <p style={{ fontFamily: 'var(--mba-font-body)', fontSize: 15, color: 'var(--mba-body-on-dark)', margin: '0 auto 52px', lineHeight: 1.8, maxWidth: 440 }}>
          Book a free 30-minute call. We&rsquo;ll assess your current tools and tell you exactly what would make the biggest difference.
        </p>
        <a href={SCHEDULE_URL} className="mba-btn mba-btn--cta">Schedule a call &rarr;</a>
      </section>

      <Footer />
    </div>
  );
}
