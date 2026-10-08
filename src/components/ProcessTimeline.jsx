import { processSteps } from '../data/ngoData';

export default function ProcessTimeline() {
  return (
    <ol className="timeline">
      {processSteps.map((s) => (
        <li key={s.step} className="timeline__step">
          <span className="timeline__num" aria-hidden="true">{s.step}</span>
          <h3>{s.title}</h3>
          <p>{s.text}</p>
        </li>
      ))}
    </ol>
  );
}
