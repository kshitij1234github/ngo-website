import { Leaf } from 'lucide-react';
import Marquee from './Marquee';
import programs from '../data/programs';

/* Large scrolling band listing the areas of work. */
export default function FocusTicker() {
  return (
    <section className="ticker" aria-label="Our areas of work">
      <Marquee speed={35} reverse>
        {programs.map((p) => (
          <li key={p.slug} className="ticker__item">
            <span>{p.title}</span>
            <Leaf size={26} strokeWidth={1.5} aria-hidden="true" />
          </li>
        ))}
      </Marquee>
    </section>
  );
}
