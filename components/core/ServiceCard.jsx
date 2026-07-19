import './ServiceCard.css';

export default function ServiceCard({ eyebrow, title, children, features = [], bordered = false }) {
  return (
    <div className={`mba-service-card${bordered ? ' mba-service-card--bordered' : ''}`}>
      <div className="mba-service-card__eyebrow">{eyebrow}</div>
      <h2 className="mba-service-card__title">{title}</h2>
      <p className="mba-service-card__body">{children}</p>
      <ul className="mba-service-card__list">
        {features.map((feature) => (
          <li key={feature} className="mba-service-card__list-item">{feature}</li>
        ))}
      </ul>
    </div>
  );
}
