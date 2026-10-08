import { useEffect, useRef, useState } from 'react';
import Icon from './Icon';
import { impactStats, statsAreSample } from '../data/ngoData';

function useInView(ref) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);
  return inView;
}

function CountUp({ value, suffix, start }) {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    if (!start) return undefined;
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setDisplay(value);
      return undefined;
    }
    let frame;
    const duration = 1400;
    const t0 = performance.now();
    const tick = (now) => {
      const p = Math.min((now - t0) / duration, 1);
      setDisplay(Math.round(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [start, value]);

  return <>{display.toLocaleString('en-IN')}{suffix}</>;
}

export default function ImpactStats({ variant = 'dark', stats = impactStats }) {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <div ref={ref} className={`stats stats--${variant}`}>
      <ul className="stats__grid">
        {stats.map((s) => (
          <li key={s.label} className="stats__item">
            <span className="stats__icon"><Icon name={s.icon} size={26} /></span>
            <strong className="stats__value" aria-label={`${s.value.toLocaleString('en-IN')}${s.suffix}`}>
              <CountUp value={s.value} suffix={s.suffix} start={inView} />
            </strong>
            <span className="stats__label">{s.label}</span>
          </li>
        ))}
      </ul>
      {statsAreSample && (
        <p className="stats__note">Indicative figures for illustration. Updated figures will be published following internal review.</p>
      )}
    </div>
  );
}
