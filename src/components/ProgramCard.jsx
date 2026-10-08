import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Icon from './Icon';

export default function ProgramCard({ program }) {
  return (
    <article className="program-card">
      <div className="program-card__media">
        <img src={program.image} alt="" loading="lazy" />
      </div>
      <div className="program-card__body">
        <span className="program-card__icon"><Icon name={program.icon} size={24} /></span>
        <h3>{program.title}</h3>
        <p>{program.description}</p>
        <Link to={`/our-work#${program.slug}`} className="text-link" aria-label={`Learn more about ${program.title}`}>
          Learn More <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
