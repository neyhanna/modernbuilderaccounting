import './Badge.css';

/**
 * Partner / status pill badge.
 * variant: 'pill' (light blue-tint, with dot) | 'solid' (brand-blue fill, no dot — e.g. "Most common")
 */
export default function Badge({ variant = 'pill', children }) {
  const className = `mba-badge${variant === 'solid' ? ' mba-badge--solid' : ''}`;

  return (
    <span className={className}>
      <span className="mba-badge__dot" />
      <span className="mba-badge__label">{children}</span>
    </span>
  );
}
