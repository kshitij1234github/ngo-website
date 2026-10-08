/**
 * Smooth (inertia) scrolling powered by Lenis.
 * Disabled automatically for visitors who prefer reduced motion —
 * every helper below falls back to native scrolling in that case.
 */
import Lenis from 'lenis';

let lenis = null;

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function initSmoothScroll() {
  if (lenis || typeof window === 'undefined' || prefersReducedMotion()) return lenis;
  lenis = new Lenis({
    duration: 1.15,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
    smoothWheel: true,
    autoRaf: true,
  });
  return lenis;
}

export function destroySmoothScroll() {
  lenis?.destroy();
  lenis = null;
}

/* Height of the fixed/sticky header, so anchored sections aren't hidden under it. */
function headerOffset() {
  const header = document.querySelector('.site-header');
  const navbar = document.querySelector('.navbar');
  const fixed = header?.classList.contains('site-header--home');
  return ((fixed ? navbar?.offsetHeight : header?.offsetHeight) || 0) + 16;
}

export function scrollToTop({ immediate = false } = {}) {
  if (lenis) lenis.scrollTo(0, { immediate, force: true });
  else window.scrollTo({ top: 0, left: 0, behavior: immediate ? 'instant' : 'smooth' });
}

export function scrollToElement(el) {
  if (!el) return;
  // Exact pixel target (number targets ignore CSS scroll-margin/padding, which Lenis would add again)
  const target = () => el.getBoundingClientRect().top + window.scrollY - headerOffset();
  if (lenis) {
    lenis.resize(); // page height may have just changed (new route, images)
    lenis.scrollTo(target(), {
      duration: 1.3,
      force: true,
      // Correct for any layout shift that happened during the animation
      onComplete: () => {
        if (Math.abs(el.getBoundingClientRect().top - headerOffset()) > 4) {
          lenis?.scrollTo(target(), { duration: 0.5, force: true });
        }
      },
    });
  } else {
    window.scrollTo({ top: target(), behavior: prefersReducedMotion() ? 'instant' : 'smooth' });
  }
}

/* Pause / resume scrolling (used while the mobile menu is open). */
export function setScrollLocked(locked) {
  document.body.style.overflow = locked ? 'hidden' : '';
  if (!lenis) return;
  if (locked) lenis.stop();
  else lenis.start();
}
