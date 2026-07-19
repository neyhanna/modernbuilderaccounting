import NavBar from './NavBar';
import Footer from './Footer';

const SCHEDULE_URL = 'https://calendar.app.google/MGAEMQz4kc5kvxrK8';

const BOOKKEEPING_ITEMS = [
  'Job cost accounting setup & maintenance',
  'WIP schedule preparation',
  'Construction draw reconciliation',
  'Accounts payable management',
  'Bank & credit card reconciliation',
  'Monthly P&L, balance sheet & reporting',
  'Year-end prep & CPA coordination',
  'Ongoing support & Q&A',
];

const CONSULTING_ITEMS = [
  'Current system assessment',
  'Software selection & implementation (Adaptive, QBO, ProCore, BuilderTrend, JobTread)',
  'Chart of accounts setup for construction',
  'Process documentation & SOPs',
  'Team training on new systems',
  'Custom financial reporting setup',
];

const STEPS = [
  {
    n: '01',
    title: 'Free consultation',
    body: '30 minutes to assess your current situation, identify your biggest pain points, and outline a clear path forward. No obligation.',
  },
  {
    n: '02',
    title: 'Proposal & onboarding',
    body: 'We send a clear, itemized proposal. Once agreed, we handle the full onboarding (system access, historical cleanup, and setup) so you don’t have to manage it.',
  },
  {
    n: '03',
    title: 'Ongoing partnership',
    body: 'A consistent monthly cadence, clean reporting, and a team that’s always reachable. You focus on building. We handle the books.',
  },
];

function WhatsIncluded({ items }) {
  return (
    <div style={{ borderTop: '1px solid var(--mba-border)', paddingTop: 40, marginBottom: 40 }}>
      <div className="mba-eyebrow" style={{ fontSize: 11, letterSpacing: '0.18em', color: 'var(--mba-text-light)' }}>What&rsquo;s included</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        {items.map((item) => (
          <div key={item} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
            <span style={{ color: 'var(--mba-blue-accent)', fontSize: 16, lineHeight: 1, flexShrink: 0, marginTop: 2 }}>&ndash;</span>
            <span style={{ fontFamily: 'var(--mba-font-body)', fontSize: 14, lineHeight: 1.6, color: '#374151' }}>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <div className="mba-page">
      <NavBar active="Services" />

      {/* HERO */}
      <section className="mba-hero--light" style={{ padding: '100px 80px 80px', borderBottom: '1px solid var(--mba-border)' }}>
        <div className="mba-eyebrow mba-eyebrow--dark">What we do</div>
        <h1 className="mba-headline" style={{ fontSize: 80, color: 'var(--mba-navy)', marginBottom: 28, maxWidth: 700 }}>
          Two ways to<br /><em>work with us.</em>
        </h1>
        <p className="mba-body-lg" style={{ fontSize: 17, color: 'var(--mba-text-muted)', maxWidth: 520, margin: 0 }}>
          Ongoing bookkeeping for builders who need accurate financials every month. Focused
          consulting engagements for builders whose systems are holding them back.
        </p>
      </section>

      {/* BOOKKEEPING */}
      <section style={{ background: 'var(--mba-white)', padding: 80, borderBottom: '1px solid var(--mba-border)', display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 80, alignItems: 'start' }}>
        <div style={{ position: 'sticky', top: 96 }}>
          <div className="mba-eyebrow mba-eyebrow--dark">01 / Bookkeeping</div>
          <h2 className="mba-card-headline" style={{ fontSize: 60, color: 'var(--mba-navy)', marginBottom: 24 }}>Monthly<br />Bookkeeping</h2>
          <p style={{ fontFamily: 'var(--mba-font-body)', fontSize: 15, lineHeight: 1.85, color: 'var(--mba-text-muted)', maxWidth: 340, marginBottom: 36 }}>
            An ongoing engagement for builders who need their financials handled with construction-specific expertise, every month without fail.
          </p>
          <a href={SCHEDULE_URL} style={{ fontFamily: 'var(--mba-font-body)', fontSize: 13, fontWeight: 500, color: 'var(--mba-navy)', borderBottom: '1px solid var(--mba-navy)', paddingBottom: 2, textDecoration: 'none' }}>Discuss bookkeeping &rarr;</a>
        </div>
        <div>
          <WhatsIncluded items={BOOKKEEPING_ITEMS} />
          <div style={{ background: 'var(--mba-bg-subtle)', borderRadius: 4, padding: 32, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
            <div>
              <div className="mba-eyebrow" style={{ fontSize: 11, letterSpacing: '0.16em', color: 'var(--mba-text-light)' }}>Best for</div>
              <p style={{ fontFamily: 'var(--mba-font-body)', fontSize: 14, lineHeight: 1.7, color: 'var(--mba-text-muted)', margin: 0 }}>Builders doing 3+ custom homes per year who want accurate, real-time financials without managing it themselves.</p>
            </div>
            <div>
              <div className="mba-eyebrow" style={{ fontSize: 11, letterSpacing: '0.16em', color: 'var(--mba-text-light)' }}>Pricing</div>
              <p style={{ fontFamily: 'var(--mba-font-body)', fontSize: 14, lineHeight: 1.7, color: 'var(--mba-text-muted)', margin: 0 }}>Custom, based on transaction volume, active projects, and level of service. We&rsquo;ll discuss this on your intro call.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONSULTING */}
      <section style={{ background: 'var(--mba-white)', padding: 80, borderBottom: '1px solid var(--mba-border)', display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 80, alignItems: 'start' }}>
        <div style={{ position: 'sticky', top: 96 }}>
          <div className="mba-eyebrow mba-eyebrow--dark">02 / Consulting</div>
          <h2 className="mba-card-headline" style={{ fontSize: 60, color: 'var(--mba-navy)', marginBottom: 24 }}>Consulting<br />Engagements</h2>
          <p style={{ fontFamily: 'var(--mba-font-body)', fontSize: 15, lineHeight: 1.85, color: 'var(--mba-text-muted)', maxWidth: 340, marginBottom: 36 }}>
            A focused engagement to fix the foundation: assess your current setup, implement the right tools, and document the processes that will scale with your business.
          </p>
          <a href={SCHEDULE_URL} style={{ fontFamily: 'var(--mba-font-body)', fontSize: 13, fontWeight: 500, color: 'var(--mba-navy)', borderBottom: '1px solid var(--mba-navy)', paddingBottom: 2, textDecoration: 'none' }}>Discuss consulting &rarr;</a>
        </div>
        <div>
          <WhatsIncluded items={CONSULTING_ITEMS} />
          <div style={{ background: 'var(--mba-bg-subtle)', borderRadius: 4, padding: 32, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
            <div>
              <div className="mba-eyebrow" style={{ fontSize: 11, letterSpacing: '0.16em', color: 'var(--mba-text-light)' }}>Duration</div>
              <p style={{ fontFamily: 'var(--mba-font-body)', fontSize: 14, lineHeight: 1.7, color: 'var(--mba-text-muted)', margin: 0 }}>Typically 30&ndash;90 days, depending on scope. We discuss and agree on the timeline before starting.</p>
            </div>
            <div>
              <div className="mba-eyebrow" style={{ fontSize: 11, letterSpacing: '0.16em', color: 'var(--mba-text-light)' }}>Pricing</div>
              <p style={{ fontFamily: 'var(--mba-font-body)', fontSize: 14, lineHeight: 1.7, color: 'var(--mba-text-muted)', margin: 0 }}>Project-based pricing scoped to your specific needs. We&rsquo;ll outline a clear proposal after the intro call.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ background: 'var(--mba-navy-dark)', padding: '100px 80px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="mba-eyebrow mba-eyebrow--dark">Process</div>
        <h2 className="mba-card-headline" style={{ fontSize: 56, color: 'var(--mba-cream)', marginBottom: 64 }}>How we get started</h2>
        <div className="mba-steps">
          {STEPS.map((step, i) => (
            <div key={step.n} className={`mba-step${i > 0 && i < STEPS.length - 1 ? '' : ''}`} style={i === 1 ? { borderLeft: '1px solid rgba(255,255,255,0.05)', borderRight: '1px solid rgba(255,255,255,0.05)' } : undefined}>
              <div className="mba-step__number">{step.n}</div>
              <h3 className="mba-step__title">{step.title}</h3>
              <p className="mba-step__body">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mba-cta">
        <div className="mba-eyebrow mba-eyebrow--dark" style={{ display: 'inline-block' }}>Get started</div>
        <h2 className="mba-headline" style={{ fontSize: 72, color: 'var(--mba-cream)', marginBottom: 24 }}>Ready to clean up your books?</h2>
        <p style={{ fontFamily: 'var(--mba-font-body)', fontSize: 15, color: 'var(--mba-body-on-dark)', margin: '0 auto 52px', lineHeight: 1.8, maxWidth: 440 }}>
          Schedule a free 30-minute intro call. We&rsquo;ll review your situation and outline a clear path forward.
        </p>
        <a href={SCHEDULE_URL} className="mba-btn mba-btn--cta">Schedule a call &rarr;</a>
      </section>

      <Footer />
    </div>
  );
}
