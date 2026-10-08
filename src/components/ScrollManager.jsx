import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollToElement, scrollToTop } from '../utils/smoothScroll';

/* Scrolls to top on route change, or smoothly to the element matching the URL hash. */
export default function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      const timer = setTimeout(() => scrollToElement(document.getElementById(id)), 80);
      return () => clearTimeout(timer);
    }
    scrollToTop({ immediate: true });
    return undefined;
  }, [pathname, hash]);

  return null;
}
