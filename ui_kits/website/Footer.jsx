import adaptiveBadge from '../../assets/adaptive-advisor-badge.png';

const LINKS = [
  { label: 'Services', href: '/services' },
  { label: 'Technology', href: '/technology' },
  { label: 'Team', href: '/team' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="mba-footer">
      <div>
        <a href="/" className="mba-footer__brand">Modern Builder Accounting</a>
        <div className="mba-footer__fine">&copy; 2026 &middot; Serving builders nationwide</div>
      </div>
      <div className="mba-footer__links">
        {LINKS.map((link) => (
          <a key={link.href} href={link.href} className="mba-footer__link">{link.label}</a>
        ))}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '14px' }}>
        <a
          href="https://referrals.adaptive.build/uW8cdiFU"
          target="_blank"
          rel="noopener"
          className="mba-footer__badge"
        >
          <img src={adaptiveBadge} alt="Adaptive Advisor" />
        </a>
        <a href="mailto:info@modernbuilderaccounting.com" className="mba-footer__link">
          info@modernbuilderaccounting.com
        </a>
      </div>
    </footer>
  );
}
