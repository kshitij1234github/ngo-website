import images from '../data/images';
import { team } from '../data/ngoData';

export default function OfficeBearers() {
  if (team.length === 0) return null;
  return (
    <div className="container team">
      <h3 className="team__title">Our Office Bearers</h3>
      <ul className="team__grid">
        {team.map((member) => (
          <li key={member.name} className="team-card">
            <img src={images[member.image]} alt={`${member.name}, ${member.role}`} loading="lazy" />
            <div className="team-card__body">
              <strong>{member.name}</strong>
              <span>{member.role}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
