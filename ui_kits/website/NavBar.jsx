import Nav from '../../components/core/Nav';
import logo from '../../assets/logo.png';

const LINKS = [
  { label: 'Services', href: '/services' },
  { label: 'Technology', href: '/technology' },
  { label: 'Team', href: '/team' },
  { label: 'Contact', href: '/contact' },
];

const SCHEDULE_URL = 'https://calendar.app.google/MGAEMQz4kc5kvxrK8';

export default function NavBar({ active }) {
  return (
    <Nav
      brandName="Modern Builder Accounting"
      logo={logo}
      links={LINKS}
      activeLabel={active}
      ctaLabel="Schedule a call"
      ctaHref={SCHEDULE_URL}
    />
  );
}
