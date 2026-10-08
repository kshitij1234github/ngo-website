import { Target, Compass } from 'lucide-react';
import { about } from '../data/ngoData';

export default function MissionVision() {
  return (
    <div className="mv-grid">
      <article className="mv-card">
        <span className="mv-card__icon"><Target size={28} strokeWidth={1.75} aria-hidden="true" /></span>
        <h3>Our Mission</h3>
        <p>{about.mission}</p>
      </article>
      <article className="mv-card mv-card--dark">
        <span className="mv-card__icon"><Compass size={28} strokeWidth={1.75} aria-hidden="true" /></span>
        <h3>Our Vision</h3>
        <p>{about.vision}</p>
      </article>
    </div>
  );
}
