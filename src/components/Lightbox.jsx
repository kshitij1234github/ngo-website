import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { setScrollLocked } from '../utils/smoothScroll';

/* Full-screen photo viewer. Arrow keys / swipe to move, Esc to close. */
export default function Lightbox({ photos, index, onChange, onClose }) {
  const touchX = useRef(null);
  const total = photos.length;
  const prev = () => onChange((index - 1 + total) % total);
  const next = () => onChange((index + 1) % total);

  useEffect(() => {
    setScrollLocked(true);
    return () => setScrollLocked(false);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  // Preload neighbours so moving through photos feels instant.
  useEffect(() => {
    [index - 1, index + 1].forEach((i) => {
      const p = photos[(i + total) % total];
      if (p) new Image().src = p.full;
    });
  }, [index, photos, total]);

  const photo = photos[index];

  return createPortal(
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`Photo ${index + 1} of ${total}`}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 50) (dx > 0 ? prev : next)();
        touchX.current = null;
      }}
    >
      <button type="button" className="lightbox__close" onClick={onClose} aria-label="Close" autoFocus>
        <X size={26} aria-hidden="true" />
      </button>
      <button type="button" className="lightbox__nav lightbox__nav--prev" onClick={prev} aria-label="Previous photo">
        <ChevronLeft size={30} aria-hidden="true" />
      </button>
      <img key={photo.full} className="lightbox__img" src={photo.full} alt={photo.alt} />
      <button type="button" className="lightbox__nav lightbox__nav--next" onClick={next} aria-label="Next photo">
        <ChevronRight size={30} aria-hidden="true" />
      </button>
      <p className="lightbox__count">{index + 1} / {total}</p>
    </div>,
    document.body,
  );
}
