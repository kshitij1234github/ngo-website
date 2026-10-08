import { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import Button from './Button';
import Icon from './Icon';
import heroSlides from '../data/heroSlides';
import { scrollToElement } from '../utils/smoothScroll';

const SLIDE_MS = 6500;

/* Full-screen auto-playing hero slider with Ken Burns zoom and swipe support. */
export default function Hero() {
  const total = heroSlides.length;
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(
    () => !window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );
  const [hovered, setHovered] = useState(false);
  const sectionRef = useRef(null);
  const touchX = useRef(null);

  const go = useCallback((i) => setIndex(((i % total) + total) % total), [total]);
  const next = useCallback(() => go(index + 1), [go, index]);
  const prev = useCallback(() => go(index - 1), [go, index]);

  const running = playing && !hovered;

  // Auto-advance
  useEffect(() => {
    if (!running) return undefined;
    const t = setTimeout(next, SLIDE_MS);
    return () => clearTimeout(t);
  }, [running, next]);

  // Parallax: fade and lift the text as the hero scrolls away
  useEffect(() => {
    const el = sectionRef.current;
    let frame = 0;
    const update = () => {
      const h = el.offsetHeight || 1;
      const p = Math.min(Math.max(window.scrollY / h, 0), 1);
      el.style.setProperty('--hero-scroll', p.toFixed(3));
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') next();
    if (e.key === 'ArrowLeft') prev();
  };
  const onTouchStart = (e) => { touchX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 50) (dx < 0 ? next : prev)();
    touchX.current = null;
  };

  return (
    <section
      ref={sectionRef}
      className={`hero${running ? ' is-playing' : ''}`}
      aria-roledescription="carousel"
      aria-label="Highlights"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onKeyDown={onKeyDown}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      style={{ '--slide-ms': `${SLIDE_MS}ms` }}
    >
      {heroSlides.map((slide, i) => {
        const active = i === index;
        const Heading = i === 0 ? 'h1' : 'h2';
        return (
          <div
            key={slide.title}
            className={`hero__slide${active ? ' is-active' : ''}`}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${total}`}
            aria-hidden={!active}
            inert={!active}
          >
            <div className="hero__media">
              <img
                className="hero__bg"
                src={slide.image}
                alt={slide.alt}
                fetchPriority={i === 0 ? 'high' : 'low'}
                decoding="async"
              />
            </div>
            <div className="hero__overlay" aria-hidden="true" />
            <div className="container hero__content">
              <span className="hero__eyebrow hero__anim" style={{ '--i': 0 }}>{slide.eyebrow}</span>
              <Heading className="hero__title hero__anim" style={{ '--i': 1 }}>{slide.title}</Heading>
              <p className="hero__anim" style={{ '--i': 2 }}>{slide.text}</p>
              <div className="hero__actions hero__anim" style={{ '--i': 3 }}>
                <Button
                  to={slide.primary.to}
                  variant="primary"
                  size="lg"
                  icon={(p) => <Icon name={slide.primary.icon} {...p} />}
                >
                  {slide.primary.label}
                </Button>
                <Button to={slide.secondary.to} variant="light-outline" size="lg" icon={ArrowRight}>
                  {slide.secondary.label}
                </Button>
              </div>
            </div>
          </div>
        );
      })}

      <button type="button" className="hero__arrow hero__arrow--prev" onClick={prev} aria-label="Previous slide">
        <ChevronLeft size={24} aria-hidden="true" />
      </button>
      <button type="button" className="hero__arrow hero__arrow--next" onClick={next} aria-label="Next slide">
        <ChevronRight size={24} aria-hidden="true" />
      </button>

      <div className="hero__controls">
        <div className="hero__dots">
          {heroSlides.map((slide, i) => (
            <button
              key={slide.title}
              type="button"
              className={`hero__dot${i === index ? ' is-active' : ''}`}
              onClick={() => go(i)}
              aria-label={`Go to slide ${i + 1}: ${slide.eyebrow}`}
              aria-current={i === index ? 'true' : undefined}
            >
              <span className="hero__dot-fill" />
            </button>
          ))}
        </div>
        <button
          type="button"
          className="hero__play"
          onClick={() => setPlaying((v) => !v)}
          aria-label={playing ? 'Pause slideshow' : 'Play slideshow'}
        >
          {playing ? <Pause size={14} aria-hidden="true" /> : <Play size={14} aria-hidden="true" />}
        </button>
      </div>

      <button
        type="button"
        className="scroll-indicator"
        aria-label="Scroll to content"
        onClick={() => scrollToElement(document.getElementById('trust'))}
      >
        <span>Scroll</span>
        <ChevronDown size={18} aria-hidden="true" />
      </button>
    </section>
  );
}
