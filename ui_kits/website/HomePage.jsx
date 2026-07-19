import NavBar from './NavBar';
import Footer from './Footer';
import Badge from '../../components/core/Badge';
import ServiceCard from '../../components/core/ServiceCard';

const SCHEDULE_URL = 'https://calendar.app.google/MGAEMQz4kc5kvxrK8';

export default function HomePage() {
  return (
    <div className="mba-page">
      <NavBar active="Home" />

      {/* HERO */}
      <section className="mba-hero--light" style={{ padding: '140px 80px 124px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ marginBottom: 44 }}>
            <Badge>Adaptive Build Preferred Partner</Badge>
          </div>
          <h1 className="mba-hero" style={{ color: 'var(--mba-navy)', marginBottom: 36 }}>
            The accounting firm<br /><em>built for builders.</em>
          </h1>
          <p className="mba-body-lg" style={{ fontSize: 18, color: 'var(--mba-text-muted)', maxWidth: 560, margin: '0 auto 56px' }}>
            Bookkeeping and consulting for custom home builders and remodelers. Construction
            expertise combined with the best financial software in the industry.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20 }}>
            <a href={SCHEDULE_URL} className="mba-btn mba-btn--primary">Schedule a call</a>
            <span className="mba-small" style={{ color: 'var(--mba-text-light)' }}>30 min &middot; No commitment</span>
          </div>
        </div>
      </section>

      {/* WORKS WITH */}
      <section className="mba-works-with">
        <div className="mba-works-with__intro">
          <div className="mba-eyebrow mba-eyebrow--muted" style={{ marginBottom: 10 }}>Works with</div>
          <div style={{ fontFamily: 'var(--mba-font-display)', fontSize: 28, fontWeight: 300, color: 'var(--mba-navy)', lineHeight: 1.1 }}>
            Your tech<br />stack
          </div>
        </div>
        <div className="mba-works-with__items">
          <div>
            <div className="mba-works-with__item mba-works-with__item--featured">Adaptive Build</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginTop: 5 }}>
              <span style={{ color: 'var(--mba-blue)', fontSize: 10 }}>&#9733;</span>
              <span className="mba-small" style={{ fontWeight: 500, color: 'var(--mba-blue)', textTransform: 'uppercase' }}>Preferred Partner</span>
            </div>
          </div>
          <div className="mba-works-with__divider" />
          <div className="mba-works-with__item">QuickBooks Online</div>
          <div className="mba-works-with__divider" />
          <div className="mba-works-with__item">ProCore</div>
          <div className="mba-works-with__divider" />
          <div className="mba-works-with__item">BuilderTrend</div>
          <div className="mba-works-with__divider" />
          <div className="mba-works-with__item">JobTread</div>
        </div>
        <a href="/technology" style={{ fontFamily: 'var(--mba-font-body)', fontSize: 12, fontWeight: 500, color: 'var(--mba-navy)', borderBottom: '1px solid var(--mba-navy)', paddingBottom: 2, whiteSpace: 'nowrap', flexShrink: 0, marginLeft: 56, letterSpacing: '0.04em' }}>
          Full tech stack &rarr;
        </a>
      </section>

      {/* SERVICES */}
      <section className="mba-services-split">
        <ServiceCard
          eyebrow="01 / Bookkeeping"
          title={<>Monthly<br />Bookkeeping</>}
          bordered
          features={[
            'Job costing & WIP tracking',
            'Draw & lender reconciliation',
            'Monthly financial reporting',
            'Accounts payable management',
          ]}
        >
          Ongoing financial management tailored to construction: job costing, WIP schedules,
          draw reconciliation. Always know your true project margins.
        </ServiceCard>
        <ServiceCard
          eyebrow="02 / Consulting"
          title={<>Consulting<br />Engagements</>}
          features={[
            'System setup & implementation',
            'Process documentation',
            'Software training & support',
            'Financial reporting setup',
          ]}
        >
          30&ndash;90 day engagements that fix the foundation. We assess your current systems,
          identify what&rsquo;s broken, and build a setup that scales with your business.
        </ServiceCard>
      </section>

      {/* FAQ */}
      <section className="mba-faq">
        <div>
          <div className="mba-eyebrow mba-eyebrow--light">FAQ</div>
          <h2 className="mba-card-headline" style={{ fontSize: 48, color: 'var(--mba-navy)', margin: 0 }}>
            Common<br />questions
          </h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div className="mba-faq__item">
            <h3 className="mba-faq__q">Where do we begin?</h3>
            <p className="mba-faq__a">We start with a free 30-minute consultation to assess your accounting needs. We&rsquo;ll review your current situation, identify your biggest pain points, and outline a clear game plan.</p>
          </div>
          <div className="mba-faq__item">
            <h3 className="mba-faq__q">What is the cost?</h3>
            <p className="mba-faq__a">Our pricing is customized to fit your unique business needs, based on transaction volume, active projects, and level of service required. You only pay for what you need.</p>
          </div>
          <div className="mba-faq__item">
            <h3 className="mba-faq__q">How long does an engagement last?</h3>
            <p className="mba-faq__a">We offer ongoing monthly bookkeeping and consulting engagements. Consulting projects typically last 30&ndash;90 days. We&rsquo;ll discuss options during your intro call.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mba-cta">
        <div className="mba-eyebrow mba-eyebrow--dark" style={{ display: 'inline-block' }}>Get started</div>
        <h2 className="mba-headline" style={{ fontSize: 76, color: 'var(--mba-cream)', margin: '0 0 24px' }}>
          Ready to clean up your books?
        </h2>
        <p style={{ fontFamily: 'var(--mba-font-body)', fontSize: 15, color: 'var(--mba-body-on-dark)', margin: '0 auto 52px', lineHeight: 1.8, maxWidth: 440 }}>
          Schedule a free 30-minute intro call. We&rsquo;ll review your situation and outline a clear path forward. No obligation.
        </p>
        <a href={SCHEDULE_URL} className="mba-btn mba-btn--cta">Schedule a call &rarr;</a>
        <div style={{ marginTop: 48, fontFamily: 'var(--mba-font-body)', fontSize: 12, color: '#2E4460', letterSpacing: '0.08em' }}>
          info@modernbuilderaccounting.com &middot; Serving builders nationwide
        </div>
      </section>

      <Footer />
    </div>
  );
}
