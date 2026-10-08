import { useState } from 'react';
import Lightbox from './Lightbox';

/* Masonry grid of photos (or equal square tiles with `tiles`); clicking one opens the full-screen viewer. */
export default function PhotoGrid({ photos, tiles = false }) {
  const [open, setOpen] = useState(null);

  return (
    <>
      <ul className={`photo-grid${tiles ? ' photo-grid--tiles' : ''}`}>
        {photos.map((p, i) => (
          <li key={p.thumb}>
            <button type="button" className="photo-grid__item" onClick={() => setOpen(i)} aria-label={`Open photo ${i + 1}`}>
              <img src={p.thumb} alt={p.alt} width={p.w} height={p.h} loading="lazy" decoding="async" />
            </button>
          </li>
        ))}
      </ul>
      {open !== null && <Lightbox photos={photos} index={open} onChange={setOpen} onClose={() => setOpen(null)} />}
    </>
  );
}
