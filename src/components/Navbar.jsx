import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Heart, Phone, Mail, MessageCircle } from 'lucide-react';
import { navLinks, ngo, contact } from '../data/ngoData';
import images from '../data/images';
import { setScrollLocked } from '../utils/smoothScroll';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const transparent = isHome && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu when the route changes
  useEffect(() => setOpen(false), [pathname]);

  // Lock body scroll and support Escape while the menu is open
  useEffect(() => {
    setScrollLocked(open);
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      setScrollLocked(false);
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <header
      className={`site-header${isHome ? ' site-header--home' : ''}${transparent ? ' is-transparent' : ''}${scrolled ? ' is-scrolled' : ''}${open ? ' menu-open' : ''}`}
    >
      <div className="topbar">
        <div className="container topbar__inner">
          <span>Registered NGO · NGO Darpan: UP/2018/0213496 · Working Across India</span>
          <div className="topbar__contact">
            <a href={contact.phoneHref}><Phone size={13} aria-hidden="true" /> {contact.phoneDisplay}</a>
            <a href={contact.whatsappHref} target="_blank" rel="noopener noreferrer"><MessageCircle size={13} aria-hidden="true" /> {contact.whatsappDisplay}</a>
            <a href={`mailto:${contact.email}`}><Mail size={13} aria-hidden="true" /> {contact.email}</a>
          </div>
        </div>
      </div>

      <nav className="navbar" aria-label="Main">
        <div className="container navbar__inner">
          <Link to="/" className="brand" aria-label={`${ngo.name} — Home`}>
            <img src={images.logo} alt="" width="46" height="46" />
            <span className="brand__text">
              <strong>Green of Social Society</strong>
              <small>Together for a better tomorrow</small>
            </span>
          </Link>

          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} end={link.to === '/'} className={({ isActive }) => (isActive ? 'active' : undefined)}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="navbar__actions">
            <Link to="/donate" className="btn btn--primary btn--sm nav-donate" aria-label="Donate Now">
              <Heart size={16} strokeWidth={2.2} aria-hidden="true" />
              <span>Donate Now</span>
            </Link>
            <button
              type="button"
              className="menu-toggle"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`mobile-menu${open ? ' is-open' : ''}`}
        aria-hidden={!open}
        inert={!open}
        data-lenis-prevent
      >
        <ul>
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} end={link.to === '/'} className={({ isActive }) => (isActive ? 'active' : undefined)}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <Link to="/donate" className="btn btn--primary btn--block">
          <Heart size={18} aria-hidden="true" /> <span>Donate Now</span>
        </Link>
        <div className="mobile-menu__contact">
          <a href={contact.phoneHref}><Phone size={16} aria-hidden="true" /> {contact.phoneDisplay}</a>
          <a href={contact.whatsappHref} target="_blank" rel="noopener noreferrer"><MessageCircle size={16} aria-hidden="true" /> WhatsApp {contact.whatsappDisplay}</a>
          <a href={`mailto:${contact.email}`}><Mail size={16} aria-hidden="true" /> {contact.email}</a>
          <a href={`mailto:${contact.email2}`}><Mail size={16} aria-hidden="true" /> {contact.email2}</a>
        </div>
      </div>
      {open && <div className="mobile-backdrop" onClick={() => setOpen(false)} aria-hidden="true" />}
    </header>
  );
}
