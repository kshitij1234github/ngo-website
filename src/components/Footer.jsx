import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ShieldCheck, MessageCircle } from 'lucide-react';
import { navLinks, involvedLinks, ngo, contact, getRegistration } from '../data/ngoData';
import images from '../data/images';

export default function Footer() {
  const compliance = [
    { label: 'NGO Darpan', value: getRegistration('darpan') },
    { label: 'CSR Reg.', value: getRegistration('csr') },
    { label: '12A', value: getRegistration('12a') },
    { label: '80G', value: getRegistration('80g') },
  ];

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" className="brand brand--footer" aria-label={`${ngo.name} — Home`}>
            <img src={images.logo} alt="" width="52" height="52" />
            <strong>{ngo.nameUpper}</strong>
          </Link>
          <p>{ngo.tagline}</p>
          <Link to="/transparency" className="footer-badge">
            <ShieldCheck size={18} aria-hidden="true" /> Registration &amp; Compliance
          </Link>
        </div>

        <div>
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            {navLinks.map((l) => (
              <li key={l.to}><Link to={l.to}>{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="footer-heading">Get Involved</h3>
          <ul className="footer-links">
            {involvedLinks.map((l) => (
              <li key={l.to}><Link to={l.to}>{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="footer-heading">Contact</h3>
          <ul className="footer-contact">
            <li>
              <MapPin size={18} aria-hidden="true" />
              <address>{contact.addressLines.map((line) => <span key={line}>{line}</span>)}</address>
            </li>
            <li>
              <Phone size={18} aria-hidden="true" />
              <span className="footer-contact__group">
                <a href={contact.phoneHref}>{contact.phone}</a>
                <a href={contact.phone2Href}>{contact.phone2}</a>
              </span>
            </li>
            <li>
              <MessageCircle size={18} aria-hidden="true" />
              <a href={contact.whatsappHref} target="_blank" rel="noopener noreferrer">WhatsApp: {contact.whatsapp}</a>
            </li>
            <li>
              <Mail size={18} aria-hidden="true" />
              <span className="footer-contact__group">
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
                <a href={`mailto:${contact.email2}`}>{contact.email2}</a>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container">
        <dl className="footer-compliance">
          {compliance.map((c) => (
            <div key={c.label}>
              <dt>{c.label}</dt>
              <dd>{c.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom__inner">
          <p>© {ngo.copyrightYear} {ngo.name}. All Rights Reserved.</p>
          <div>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
