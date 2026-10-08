import { useEffect, useRef, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { scrollToTop } from '../utils/smoothScroll';

/* Reading-progress bar at the top of the window and a floating "back to top" button. */
export default function ScrollExtras() {
  const barRef = useRef(null);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      if (barRef.current) barRef.current.style.transform = `scaleX(${p})`;
      setShowTop(window.scrollY > 700);
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <>
      <div className="scroll-progress" aria-hidden="true"><span ref={barRef} /></div>
      <button
        type="button"
        className={`back-to-top${showTop ? ' is-visible' : ''}`}
        onClick={() => scrollToTop()}
        aria-label="Back to top"
        tabIndex={showTop ? 0 : -1}
      >
        <ArrowUp size={20} aria-hidden="true" />
      </button>
    </>
  );
}
