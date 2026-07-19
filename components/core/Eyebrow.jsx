import './Eyebrow.css';

/**
 * Tracked uppercase section label. Appears above nearly every section headline
 * across the site — extracted as a component because the pattern (10px /
 * 500 weight / 0.24em tracking / uppercase) repeats identically everywhere,
 * only the color context (light vs. dark section) changes.
 *
 * tone: 'light' (brand blue, for light-context sections) | 'dark' (accent blue,
 * for dark-context sections) | 'muted' (gray, e.g. "Works with" label)
 */
export default function Eyebrow({ tone = 'light', as: Tag = 'div', children }) {
  return <Tag className={`mba-eyebrow mba-eyebrow--${tone}`}>{children}</Tag>;
}
