import { CheckCircle2, ArrowRight, MapPin } from 'lucide-react';
import Button from './Button';
import images from '../data/images';
import { featuredInitiative as f } from '../data/ngoData';

export default function FeaturedInitiative() {
  return (
    <section className="section featured" aria-labelledby="featured-title">
      <div className="container featured__grid">
        <div className="featured__media">
          <img src={images.featured} alt="Children taking part in a community learning activity" loading="lazy" />
          <div className="featured__badge">
            <MapPin size={18} aria-hidden="true" />
            <span>
              <small>{f.impactLabel}</small>
              <strong>{f.impactValue}</strong>
            </span>
          </div>
        </div>
        <div className="featured__content">
          <span className="eyebrow">{f.eyebrow}</span>
          <h2 id="featured-title">{f.title}</h2>
          <p className="lead">{f.story}</p>
          <ul className="check-list">
            {f.points.map((p) => (
              <li key={p}><CheckCircle2 size={20} aria-hidden="true" /> {p}</li>
            ))}
          </ul>
          <div className="featured__actions">
            <Button to="/donate" variant="primary" icon={ArrowRight}>Support This Initiative</Button>
            <Button to="/our-work#education" variant="outline">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
