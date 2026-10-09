import { Mail, Phone, MessageCircle } from 'lucide-react';
import OfficeBearers from './OfficeBearers';
import images from '../data/images';
import { ngo, founder } from '../data/ngoData';

export default function FounderSection({ tint = true, showTeam = true }) {
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

      {showTeam && <OfficeBearers />}
    </section>
  );
}
