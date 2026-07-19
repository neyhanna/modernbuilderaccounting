import './Nav.css';

/**
 * Sticky navigation bar. Always white/light — the brief never puts nav on a
 * dark section — with a logo or text brand mark, a link set, and a CTA button.
 *
 * logo: optional image src. Falls back to a tracked-uppercase text wordmark
 * when omitted (matches the original design canvas pages, which shipped
 * before the logo asset existed).
 */
export default function Nav({ brandName, brandHref = '/', logo, links = [], activeLabel, ctaLabel, ctaHref }) {
  return (
    <nav className="mba-nav">
      <a href={brandHref} className="mba-nav__brand">
        {logo ? (
          <img src={logo} alt={brandName} />
        ) : (
          <span className="mba-nav__brand--text">{brandName}</span>
        )}
      </a>
      <div className="mba-nav__links">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`mba-nav__link${activeLabel === link.label ? ' mba-nav__link--active' : ''}`}
          >
            {link.label}
          </a>
        ))}
        {ctaLabel && (
          <a href={ctaHref} className="mba-nav__cta">
            {ctaLabel}
          </a>
        )}
      </div>
    </nav>
  );
}
