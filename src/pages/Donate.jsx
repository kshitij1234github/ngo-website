import { useRef, useState } from 'react';
import { Heart, ShieldCheck, Lock, Target, Receipt, Mail, Phone, CheckCircle2, IndianRupee } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import BankDetails from '../components/BankDetails';
import images from '../data/images';
import { contact, getRegistration, ngo } from '../data/ngoData';
import { startDonation } from '../utils/payment';

const presetAmounts = [500, 1000, 2500, 5000];
const formatINR = (n) => `₹${Number(n).toLocaleString('en-IN')}`;

const trustPoints = [
  { icon: ShieldCheck, title: 'Transparent', text: 'Registered NGO with publicly listed registrations.' },
  { icon: Lock, title: 'Secure', text: 'Payments will be processed only via a trusted, secure gateway.' },
  { icon: Target, title: 'Impact Focused', text: 'Contributions are directed to community initiatives.' },
];

export default function Donate() {
  const [frequency, setFrequency] = useState('once');
  const [selected, setSelected] = useState(1000);
  const [custom, setCustom] = useState('');
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const [errors, setErrors] = useState({});
  const [result, setResult] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const cardRef = useRef(null);
  const amount = selected === 'custom' ? Number(custom) || 0 : selected;

  const update = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
  };

  const validate = () => {
    const err = {};
    if (amount < 100) err.amount = 'Please enter an amount of at least ₹100.';
    if (!form.name.trim()) err.name = 'Please enter your full name.';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) err.email = 'Please enter a valid email address.';
    if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\D/g, '').slice(-10))) err.phone = 'Please enter a valid 10-digit mobile number.';
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    const res = await startDonation({ amount, frequency, ...form });
    setSubmitting(false);
    setResult(res);
    cardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <PageHeader
        title="Support a Cause. Change a Life."
        text="Every contribution can help support meaningful social initiatives."
        image={images.donate}
        crumb="Donate"
      />

      <section className="section">
        <div className="container donate-grid">
          <div className="donate-info">
            <span className="eyebrow">Why Give</span>
            <h2>Your support creates opportunity</h2>
            <p className="lead">
              Every contribution can help support meaningful social initiatives — from learning support for children to
              health awareness, women’s livelihoods and environmental action.
            </p>
            <img src={images.womenEmpowerment} alt="A schoolgirl writing on a classroom blackboard" className="donate-info__image" loading="lazy" />
            <ul className="trust-list">
              {trustPoints.map(({ icon: I, title, text }) => (
                <li key={title}>
                  <span className="trust-list__icon"><I size={22} strokeWidth={1.75} aria-hidden="true" /></span>
                  <span><strong>{title}</strong>{text}</span>
                </li>
              ))}
            </ul>
            <BankDetails />
            <div className="tax-note">
              <Receipt size={20} aria-hidden="true" />
              <p>
                {ngo.name} is registered under Section 12A ({getRegistration('12a')}) and Section 80G (
                {getRegistration('80g')}) of the Income Tax Act. Eligible donations may qualify for tax benefits under 80G.
              </p>
            </div>
          </div>

          <div className="donate-card" ref={cardRef}>
            {result ? (
              <div className="donate-result" role="status">
                <CheckCircle2 size={44} aria-hidden="true" />
                <h2>Thank you, {form.name.split(' ')[0]}!</h2>
                <p>
                  Your pledge of <strong>{formatINR(amount)}</strong>
                  {frequency === 'monthly' ? ' per month' : ''} means a lot to us.
                </p>
                <p>
                  Online payments are being set up. To complete your donation now, please transfer the amount using the
                  bank details on this page, then contact us so we can send your receipt.
                </p>
                <div className="donate-result__contact">
                  <a href={`mailto:${contact.email}?subject=Donation%20of%20${amount}`} className="btn btn--primary btn--block">
                    <Mail size={18} aria-hidden="true" /> <span>Email Us</span>
                  </a>
                  <a href={contact.phoneHref} className="btn btn--outline btn--block">
                    <Phone size={18} aria-hidden="true" /> <span>Call Us</span>
                  </a>
                </div>
                <p className="donate-result__details">
                  {contact.email}
                  <br />
                  {contact.email2}
                  <br />
                  {contact.phone} · {contact.phone2} (WhatsApp)
                </p>
                <button type="button" className="link-button" onClick={() => setResult(null)}>Make another pledge</button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate>
                <h2 className="donate-card__title">Make a Donation</h2>

                <div className="segmented" role="radiogroup" aria-label="Donation frequency">
                  {[['once', 'One-time'], ['monthly', 'Monthly']].map(([val, label]) => (
                    <button
                      key={val}
                      type="button"
                      role="radio"
                      aria-checked={frequency === val}
                      className={frequency === val ? 'is-active' : ''}
                      onClick={() => setFrequency(val)}
                    >
                      {label}
                    </button>
                  ))}
                </div>

                <fieldset className="amounts">
                  <legend>Select an amount</legend>
                  <div className="amounts__grid">
                    {presetAmounts.map((a) => (
                      <button
                        key={a}
                        type="button"
                        className={`amount${selected === a ? ' is-active' : ''}`}
                        aria-pressed={selected === a}
                        onClick={() => setSelected(a)}
                      >
                        {formatINR(a)}
                      </button>
                    ))}
                    <button
                      type="button"
                      className={`amount amount--custom${selected === 'custom' ? ' is-active' : ''}`}
                      aria-pressed={selected === 'custom'}
                      onClick={() => setSelected('custom')}
                    >
                      Custom Amount
                    </button>
                  </div>
                  {selected === 'custom' && (
                    <div className="field field--icon">
                      <label htmlFor="custom-amount" className="sr-only">Custom amount in rupees</label>
                      <IndianRupee size={18} aria-hidden="true" />
                      <input
                        id="custom-amount"
                        type="number"
                        inputMode="numeric"
                        min="100"
                        step="1"
                        placeholder="Enter amount"
                        value={custom}
                        onChange={(e) => setCustom(e.target.value)}
                        autoFocus
                      />
                    </div>
                  )}
                  {errors.amount && <p className="field-error">{errors.amount}</p>}
                </fieldset>

                <div className="form-grid">
                  <div className="field field--full">
                    <label htmlFor="d-name">Full Name</label>
                    <input id="d-name" name="name" value={form.name} onChange={update} autoComplete="name" aria-invalid={!!errors.name} />
                    {errors.name && <p className="field-error">{errors.name}</p>}
                  </div>
                  <div className="field">
                    <label htmlFor="d-email">Email</label>
                    <input id="d-email" name="email" type="email" value={form.email} onChange={update} autoComplete="email" aria-invalid={!!errors.email} />
                    {errors.email && <p className="field-error">{errors.email}</p>}
                  </div>
                  <div className="field">
                    <label htmlFor="d-phone">Mobile</label>
                    <input id="d-phone" name="phone" type="tel" value={form.phone} onChange={update} autoComplete="tel" aria-invalid={!!errors.phone} />
                    {errors.phone && <p className="field-error">{errors.phone}</p>}
                  </div>
                </div>

                <button type="submit" className="btn btn--primary btn--block btn--lg" disabled={submitting}>
                  <Heart size={18} aria-hidden="true" />
                  <span>
                    {submitting ? 'Please wait…' : `Donate ${amount ? formatINR(amount) : ''}${frequency === 'monthly' ? ' / month' : ''}`}
                  </span>
                </button>
                <p className="donate-card__secure">
                  <Lock size={14} aria-hidden="true" /> Your information is kept confidential.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
