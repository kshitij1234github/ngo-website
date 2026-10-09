import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MapPin, Mail, Phone, Globe, Send, CheckCircle2, Clock, MessageCircle } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import images from '../data/images';
import { sendForm } from '../utils/sendForm';
import { ngo, contact, getRegistration } from '../data/ngoData';

export default function Contact() {
  const [params] = useSearchParams();
  const initial = { name: '', email: '', phone: '', subject: params.get('subject') || '', message: '' };
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState('');

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    const err = {};
    if (!form.name.trim()) err.name = 'Please enter your full name.';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) err.email = 'Please enter a valid email address.';
    if (form.phone && form.phone.replace(/\D/g, '').length < 10) err.phone = 'Please enter a valid phone number.';
    if (!form.subject.trim()) err.subject = 'Please add a subject.';
    if (form.message.trim().length < 10) err.message = 'Please write a short message (at least 10 characters).';
    setErrors(err);
    if (Object.keys(err).length) return;
    setSending(true);
    setSendError('');
    try {
      await sendForm(`Website enquiry: ${form.subject}`, {
        Name: form.name,
        Email: form.email,
        Phone: form.phone || '—',
        Subject: form.subject,
        Message: form.message,
      });
      setSent(true);
    } catch {
      setSendError(`Sorry, your message could not be sent. Please email us at ${contact.formsEmail} or call ${contact.phone}.`);
    } finally {
      setSending(false);
    }
  };

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

          <div className="form-card">
            {sent ? (
              <div className="form-success" role="status">
                <CheckCircle2 size={44} aria-hidden="true" />
                <h3>Thank you, {form.name.split(' ')[0]}!</h3>
                <p>Your message has been received. Our team will get back to you shortly.</p>
                <button type="button" className="link-button" onClick={() => { setForm({ ...initial, subject: '' }); setSent(false); }}>
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="form-grid">
                <h2 className="form-card__title field--full">Send Us a Message</h2>
                <div className="field">
                  <label htmlFor="c-name">Full Name</label>
                  <input id="c-name" name="name" value={form.name} onChange={update} autoComplete="name" aria-invalid={!!errors.name} />
                  {errors.name && <p className="field-error">{errors.name}</p>}
                </div>
                <div className="field">
                  <label htmlFor="c-email">Email</label>
                  <input id="c-email" name="email" type="email" value={form.email} onChange={update} autoComplete="email" aria-invalid={!!errors.email} />
                  {errors.email && <p className="field-error">{errors.email}</p>}
                </div>
                <div className="field">
                  <label htmlFor="c-phone">Phone</label>
                  <input id="c-phone" name="phone" type="tel" value={form.phone} onChange={update} autoComplete="tel" aria-invalid={!!errors.phone} />
                  {errors.phone && <p className="field-error">{errors.phone}</p>}
                </div>
                <div className="field">
                  <label htmlFor="c-subject">Subject</label>
                  <input id="c-subject" name="subject" value={form.subject} onChange={update} aria-invalid={!!errors.subject} />
                  {errors.subject && <p className="field-error">{errors.subject}</p>}
                </div>
                <div className="field field--full">
                  <label htmlFor="c-message">Message</label>
                  <textarea id="c-message" name="message" rows="6" value={form.message} onChange={update} aria-invalid={!!errors.message} />
                  {errors.message && <p className="field-error">{errors.message}</p>}
                </div>
                {sendError && <p className="field-error field--full" role="alert">{sendError}</p>}
                <button type="submit" className="btn btn--primary btn--lg field--full" disabled={sending}>
                  <span>{sending ? 'Sending…' : 'Send Message'}</span> <Send size={18} aria-hidden="true" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="map-section" aria-label="Location map">
        <iframe
          title={`Map showing ${contact.mapQuery}`}
          src={`https://www.google.com/maps?q=${encodeURIComponent(contact.mapQuery)}&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}
