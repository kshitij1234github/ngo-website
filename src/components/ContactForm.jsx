import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { contact } from '../data/ngoData';
import { sendForm } from '../utils/sendForm';

/* "Send Us a Message" form — submissions are emailed to contact.formsEmail. */
export default function ContactForm({ initialSubject = '' }) {
  const initial = { name: '', email: '', phone: '', subject: initialSubject, message: '' };
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

  return (
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
  );
}
