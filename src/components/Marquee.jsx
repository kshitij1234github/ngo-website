/**
 * Infinite horizontal marquee. Children are repeated so the loop is seamless
 * on wide screens; the copies are hidden from screen readers.
 * Pauses on hover and becomes a static, wrapped list for reduced-motion users.
 */
export default function Marquee({ children, speed = 40, reverse = false, repeat = 3, className = '', label }) {
  return (
    <div
      className={`marquee${reverse ? ' marquee--reverse' : ''} ${className}`.trim()}
      style={{ '--marquee-duration': `${speed}s`, '--marquee-shift': `${-100 / repeat}%` }}
      aria-label={label}
      role={label ? 'region' : undefined}
    >
      <div className="marquee__track">
        {Array.from({ length: repeat }, (_, i) => (
          <ul key={i} className="marquee__group" aria-hidden={i > 0 || undefined}>
            {children}
          </ul>
        ))}
      </div>
    </div>
  );
}
