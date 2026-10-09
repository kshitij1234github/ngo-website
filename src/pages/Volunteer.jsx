import { useState } from 'react';
import { CheckCircle2, Send, GraduationCap, Megaphone, Laptop, HeartPulse } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SectionTitle from '../components/SectionTitle';
import images from '../data/images';
import { contact } from '../data/ngoData';
import { sendForm } from '../utils/sendForm';

const roles = [
  { icon: GraduationCap, title: 'Teaching & Mentoring', text: 'Support children with learning, reading and life skills.' },
  { icon: HeartPulse, title: 'Health Awareness', text: 'Help organise hygiene and health awareness sessions.' },
  { icon: Megaphone, title: 'Community Drives', text: 'Join plantation, cleanliness and relief drives on the ground.' },
  { icon: Laptop, title: 'Skills-Based', text: 'Contribute design, writing, IT, finance or social media skills remotely.' },
];

const interests = ['Education', 'Healthcare', 'Women Empowerment', 'Community Development', 'Food & Social Support', 'Environment'];
const initial = { name: '', email: '', phone: '', city: '', availability: 'Weekends', interests: [], message: '' };

export default function Volunteer() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState('');

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  const toggleInterest = (i) =>
    setForm((f) => ({ ...f, interests: f.interests.includes(i) ? f.interests.filter((x) => x !== i) : [...f.interests, i] }));

  const onSubmit = async (e) => {
    e.preventDefault();
    const err = {};
    if (!form.name.trim()) err.name = 'Please enter your full name.';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) err.email = 'Please enter a valid email address.';
    if (form.phone.replace(/\D/g, '').length < 10) err.phone = 'Please enter a valid phone number.';
    setErrors(err);
    if (Object.keys(err).length) return;
    setSending(true);
    setSendError('');
    try {
      await sendForm(`New volunteer: ${form.name}`, {
        Name: form.name,
        Email: form.email,
        Phone: form.phone,
        City: form.city || '—',
        Availability: form.availability,
        Interests: form.interests.join(', ') || '—',
        Message: form.message || '—',
      });
      setSent(true);
    } catch {
      setSendError(`Sorry, your application could not be sent. Please email us at ${contact.formsEmail} or call ${contact.phone}.`);
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <PageHeader
        title="Become a Volunteer"
        text="Give your time and skills to help communities across India."
        image={images.volunteer}
        crumb="Volunteer"
      />

      <section className="section" aria-labelledby="roles-title">
        <div className="container">
          <SectionTitle
            eyebrow="Volunteer With Us"
            title={<span id="roles-title">Ways You Can Help</span>}
            text="Students, professionals and retirees — everyone has something valuable to offer."
          />
          <ul className="values-grid values-grid--4">
            {roles.map(({ icon: I, title, text }) => (
              <li key={title} className="value-card">
                <span className="value-card__icon"><I size={26} strokeWidth={1.75} aria-hidden="true" /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--tint" aria-labelledby="form-title">
        <div className="container form-layout">
          <div>
            <span className="eyebrow">Register Interest</span>
            <h2 id="form-title">Volunteer Registration</h2>
            <p className="lead">Fill in the form and our team will get in touch to discuss opportunities that match your interests and availability.</p>
            <ul className="check-list">
              <li><CheckCircle2 size={19} aria-hidden="true" /> Flexible on-ground and remote roles</li>
              <li><CheckCircle2 size={19} aria-hidden="true" /> Orientation before you begin</li>
              <li><CheckCircle2 size={19} aria-hidden="true" /> Roles matched to your skills and interests</li>
            </ul>
          </div>

          <div className="form-card">
            {sent ? (
              <div className="form-success" role="status">
                <CheckCircle2 size={44} aria-hidden="true" />
                <h3>Thank you for registering, {form.name.split(' ')[0]}!</h3>
                <p>We have received your details and will contact you soon.</p>
                <button type="button" className="link-button" onClick={() => { setForm(initial); setSent(false); }}>
                  Submit another response
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="form-grid">
                <div className="field">
                  <label htmlFor="v-name">Full Name</label>
                  <input id="v-name" name="name" value={form.name} onChange={update} autoComplete="name" aria-invalid={!!errors.name} />
                  {errors.name && <p className="field-error">{errors.name}</p>}
                </div>
                <div className="field">
                  <label htmlFor="v-email">Email</label>
                  <input id="v-email" name="email" type="email" value={form.email} onChange={update} autoComplete="email" aria-invalid={!!errors.email} />
                  {errors.email && <p className="field-error">{errors.email}</p>}
                </div>
                <div className="field">
                  <label htmlFor="v-phone">Phone</label>
                  <input id="v-phone" name="phone" type="tel" value={form.phone} onChange={update} autoComplete="tel" aria-invalid={!!errors.phone} />
                  {errors.phone && <p className="field-error">{errors.phone}</p>}
                </div>
                <div className="field">
                  <label htmlFor="v-city">City / District</label>
                  <input id="v-city" name="city" value={form.city} onChange={update} autoComplete="address-level2" />
                </div>
                <div className="field field--full">
                  <label htmlFor="v-avail">Availability</label>
                  <select id="v-avail" name="availability" value={form.availability} onChange={update}>
                    <option>Weekends</option>
                    <option>Weekdays</option>
                    <option>Flexible</option>
                    <option>Remote only</option>
                  </select>
                </div>
                <fieldset className="field--full chips-field">
                  <legend>Areas of interest</legend>
                  <div className="chip-group">
                    {interests.map((i) => (
                      <button
                        key={i}
                        type="button"
                        className={`chip${form.interests.includes(i) ? ' is-active' : ''}`}
                        aria-pressed={form.interests.includes(i)}
                        onClick={() => toggleInterest(i)}
                      >
                        {i}
                      </button>
                    ))}
                  </div>
                </fieldset>
                <div className="field field--full">
                  <label htmlFor="v-msg">Tell us about yourself (optional)</label>
                  <textarea id="v-msg" name="message" rows="4" value={form.message} onChange={update} />
                </div>
                {sendError && <p className="field-error field--full" role="alert">{sendError}</p>}
                <button type="submit" className="btn btn--primary btn--lg field--full" disabled={sending}>
                  <span>{sending ? 'Sending…' : 'Submit Registration'}</span> <Send size={18} aria-hidden="true" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
