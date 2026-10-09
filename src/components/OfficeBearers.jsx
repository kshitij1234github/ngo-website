import { ArrowRight } from 'lucide-react';
import Button from './Button';
import images from '../data/images';
import { team } from '../data/ngoData';

// `members` limits the office bearers shown (by image key); omit it to show everyone.
export default function OfficeBearers({ members, showAllLink = false }) {
  const shown = members ? team.filter((m) => members.includes(m.image)) : team;
  if (shown.length === 0) return null;
  return (
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
  );
}
