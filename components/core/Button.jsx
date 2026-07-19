import './Button.css';

/**
 * variant: 'primary' (navy, light context) | 'cta' (brand blue, dark context) | 'secondary' (outline)
 */
export default function Button({ variant = 'primary', href, onClick, children, type = 'button' }) {
  const className = `mba-btn mba-btn--${variant}`;

  if (href) {
    return (
      <a className={className} href={href}>
        {children}
      </a>
    );
  }

  return (
    <button className={className} type={type} onClick={onClick}>
      {children}
    </button>
  );
}
