import { Mail, Phone, MessageCircle, ArrowRight } from 'lucide-react';
import Button from './Button';
import images from '../data/images';
import { ngo, founder, team } from '../data/ngoData';

// `members` limits the office bearers shown (by image key); omit it to show everyone.
export default function FounderSection({ tint = true, members, showAllLink = false }) {
  const shown = members ? team.filter((m) => members.includes(m.image)) : team;
  return (
    <section className={`section${tint ? ' section--tint' : ''}`} aria-labelledby="founder-title">
      <div className="container founder">
        <figure className="founder__photo">
          <img src={images.founder} alt={`${founder.name}, ${founder.role} of ${ngo.name}`} width="640" height="798" loading="lazy" />
        </figure>
        <div className="founder__content">
          <span className="eyebrow">Our Leadership</span>
          <h2 id="founder-title">{founder.name}</h2>
          <p className="founder__role">{founder.role}, {ngo.name}</p>
          <p className="lead">
            {ngo.name} was founded under the leadership of {founder.name}, who guides the society’s work with
            communities across India.
          </p>
          <ul className="founder__contact">
            <li><a href={founder.phoneHref}><Phone size={18} aria-hidden="true" /> {founder.phone}</a></li>
            <li><a href={founder.whatsappHref} target="_blank" rel="noopener noreferrer"><MessageCircle size={18} aria-hidden="true" /> WhatsApp</a></li>
            <li><a href={`mailto:${founder.email}`}><Mail size={18} aria-hidden="true" /> {founder.email}</a></li>
          </ul>
        </div>
      </div>

      {shown.length > 0 && (
        <div className="container team">
          <h3 className="team__title">Our Office Bearers</h3>
          <ul className="team__grid">
            {shown.map((member) => (
              <li key={member.name} className="team-card">
                <img src={images[member.image]} alt={`${member.name}, ${member.role}`} loading="lazy" />
                <div className="team-card__body">
                  <strong>{member.name}</strong>
                  <span>{member.role}</span>
                </div>
              </li>
            ))}
          </ul>
          {showAllLink && (
            <div className="center-actions">
              <Button to="/about" variant="outline" icon={ArrowRight}>Meet All Office Bearers</Button>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
