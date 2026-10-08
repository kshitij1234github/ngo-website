import Icon from './Icon';
import { values } from '../data/ngoData';

export default function ValuesGrid() {
  return (
    <ul className="values-grid">
      {values.map((v) => (
        <li key={v.title} className="value-card">
          <span className="value-card__icon"><Icon name={v.icon} size={26} /></span>
          <h3>{v.title}</h3>
          <p>{v.text}</p>
        </li>
      ))}
    </ul>
  );
}
