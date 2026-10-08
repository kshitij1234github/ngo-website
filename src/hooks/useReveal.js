import { useEffect } from 'react';

/**
 * Scroll-reveal animations, applied site-wide without touching page markup.
 *
 * Each rule is [CSS selector, animation variant, stagger?]. Matching elements
 * start hidden and animate in once they scroll into view. Variants are styled
 * in index.css under "Scroll reveal": up | left | right | zoom | image.
 * Add or remove selectors here to change what animates.
 */
const RULES = [
  ['.section-title', 'up'],
  ['.page-header__inner > *', 'up', true],
  ['.split__content > *, .featured__content > *, .program-row__content > *, .cta__inner > *', 'up', true],
  ['.split__media img, .featured__media img, .program-row__media img, .article__image, .donate-info__image', 'image'],
  ['.card-grid > *, .values-grid > *, .involve-grid > *, .goals-grid > *, .mv-grid > *, .impact-areas > *', 'up', true],
  ['.stats__item, .timeline__step', 'up', true],
  ['.compliance__item, .transparency-notes > *, .program-list > *', 'up', true],
  ['.form-card, .donate-card, .contact-grid > *, .map-section, .article > p, .notice', 'up'],
  ['.featured__badge', 'zoom'],
  ['.footer-grid > *', 'up', true],
];

const STAGGER_MS = 90;
const MAX_STAGGER_STEPS = 5;
const DURATION_MS = 900;

const finished = new WeakSet();

export default function useReveal(routeKey) {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const timers = new Set();

    // Once an element has animated in, remove the reveal styles so its own
    // hover transitions (card lifts, etc.) work normally again.
    const cleanUp = (el) => {
      finished.add(el);
      el.classList.remove('is-revealed');
      el.removeAttribute('data-reveal');
      el.style.removeProperty('--reveal-delay');
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          io.unobserve(el);
          el.classList.add('is-revealed');
          const delay = parseInt(el.style.getPropertyValue('--reveal-delay'), 10) || 0;
          const t = setTimeout(() => { timers.delete(t); cleanUp(el); }, DURATION_MS + delay + 100);
          timers.add(t);
        });
      },
      { threshold: 0, rootMargin: '0px 0px -10% 0px' },
    );

    const prepare = () => {
      RULES.forEach(([selector, variant, stagger]) => {
        document.querySelectorAll(selector).forEach((el) => {
          if (finished.has(el) || el.classList.contains('is-revealed')) return;
          if (!el.dataset.reveal) {
            el.dataset.reveal = variant;
            if (stagger && el.parentElement) {
              const i = Array.prototype.indexOf.call(el.parentElement.children, el);
              el.style.setProperty('--reveal-delay', `${Math.min(i, MAX_STAGGER_STEPS) * STAGGER_MS}ms`);
            }
          }
          io.observe(el);
        });
      });
    };

    prepare();

    // Pick up content that appears later (form success screens, etc.)
    let frame = 0;
    const mo = new MutationObserver(() => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(prepare);
    });
    mo.observe(document.getElementById('root') || document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
      cancelAnimationFrame(frame);
      // Never leave anything stuck invisible between route changes
      timers.forEach(clearTimeout);
      document.querySelectorAll('.is-revealed').forEach(cleanUp);
    };
  }, [routeKey]);
}
