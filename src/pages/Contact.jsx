import { useSearchParams } from 'react-router-dom';
import { MapPin, Mail, Phone, Globe, Clock, MessageCircle } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import images from '../data/images';
import ContactForm from '../components/ContactForm';
import { ngo, contact, getRegistration } from '../data/ngoData';

export default function Contact() {
  const [params] = useSearchParams();

  const details = [
    { label: 'PAN', value: getRegistration('pan') },
    { label: 'Registration No.', value: getRegistration('registration') },
    { label: 'NGO Darpan', value: getRegistration('darpan') },
    { label: 'CSR Registration', value: getRegistration('csr') },
  ];

  return (
    <>
      <PageHeader
        title="Contact Us"
        text="We would love to hear from you — whether you want to donate, volunteer, partner or simply learn more."
        image={images.aboutCommunity}
        crumb="Contact"
      />

      <section className="section">
        <div className="container contact-grid">
          <aside className="contact-card" aria-labelledby="org-name">
            <h2 id="org-name">{ngo.nameUpper}</h2>
            <ul className="contact-list">
              <li>
                <span className="contact-list__icon"><MapPin size={20} aria-hidden="true" /></span>
                <div>
                  <small>Address</small>
                  <address>{contact.addressLines.map((l) => <span key={l}>{l}</span>)}</address>
                </div>
              </li>
              <li>
                <span className="contact-list__icon"><Mail size={20} aria-hidden="true" /></span>
                <div>
                  <small>Email</small>
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                  <a href={`mailto:${contact.email2}`}>{contact.email2}</a>
                </div>
              </li>
              <li>
                <span className="contact-list__icon"><Phone size={20} aria-hidden="true" /></span>
                <div>
                  <small>Phone</small>
                  <a href={contact.phoneHref}>{contact.phone}</a>
                </div>
              </li>
              <li>
                <span className="contact-list__icon"><MessageCircle size={20} aria-hidden="true" /></span>
                <div>
                  <small>WhatsApp</small>
                  <a href={contact.whatsappHref} target="_blank" rel="noopener noreferrer">{contact.whatsapp}</a>
                </div>
              </li>
              {contact.officeHours && (
                <li>
                  <span className="contact-list__icon"><Clock size={20} aria-hidden="true" /></span>
                  <div>
                    <small>Office Hours</small>
                    <span>{contact.officeHours}</span>
                  </div>
                </li>
              )}
              <li>
                <span className="contact-list__icon"><Globe size={20} aria-hidden="true" /></span>
                <div>
                  <small>Working Area</small>
                  <span>{ngo.workingArea}</span>
                </div>
              </li>
            </ul>
            <dl className="contact-reg">
              {details.map((d) => (
                <div key={d.label}>
                  <dt>{d.label}</dt>
                  <dd className="mono">{d.value}</dd>
                </div>
              ))}
            </dl>
          </aside>

          <ContactForm initialSubject={params.get('subject') || ''} />
        </div>
      </section>

      <section className="map-section" aria-label="Location map">
        <iframe
          title={`Map showing our head office: ${contact.addressInline}`}
          src={`https://www.google.com/maps?q=${encodeURIComponent(contact.mapQuery)}&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}
