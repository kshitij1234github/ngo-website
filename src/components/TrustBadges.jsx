import { Link } from 'react-router-dom';
import Icon from './Icon';
import Marquee from './Marquee';
import { trustBadges } from '../data/ngoData';

export default function TrustBadges() {
  return (
    <section id="trust" className="trust-strip" aria-label="Registrations and legitimacy">
      <Marquee speed={45}>
        {trustBadges.map((b) => (
          <li key={b.title} className="trust-badge">
            <span className="trust-strip__icon"><Icon name={b.icon} size={22} /></span>
            <span>
              <strong>{b.title}</strong>
              <small>{b.detail}</small>
            </span>
          </li>
        ))}
      </Marquee>
      <div className="container">
        <p className="trust-strip__link">
          <Link to="/transparency">View full registration &amp; compliance details →</Link>
        </p>
      </div>
    </section>
  );
}
