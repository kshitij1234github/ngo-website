import { Mail, Phone, MessageCircle, MapPin } from 'lucide-react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import ComplianceTable from '../components/ComplianceTable';
import { TrainingsSection, ProgrammesSection, WorkingAreaSection } from '../components/WorkSections';
import FounderSection from '../components/FounderSection';
import BankDetails from '../components/BankDetails';
import ContactForm from '../components/ContactForm';
import images from '../data/images';
import { ngo, contact } from '../data/ngoData';

/* Section order follows the organisation's brief:
   logo, name & registrations → work → working area → management →
   contact → bank account → enquiry form. */
export default function Home() {
  const contactCards = [
    { icon: Mail, en: 'Email', hi: 'ईमेल', lines: [contact.email, contact.email2].map((e) => ({ text: e, href: `mailto:${e}` })) },
    { icon: Phone, en: 'Mobile', hi: 'मोबाइल', lines: [{ text: contact.phoneDisplay, href: contact.phoneHref }] },
    {
      icon: MessageCircle,
      en: 'WhatsApp',
      hi: 'व्हाट्सएप',
      lines: [{ text: contact.whatsappDisplay, href: contact.whatsappHref, external: true }],
    },
    { icon: MapPin, en: 'Head Office', hi: 'प्रधान कार्यालय', lines: [{ text: contact.addressInline }] },
  ];

  return (
    <>
      <Hero />

      <section className="section" aria-labelledby="identity-title">
        <div className="container">
          <div className="identity">
            <img src={images.logo} alt={`${ngo.name} logo`} width="120" height="120" className="identity__logo" />
            <h2 id="identity-title" className="identity__name">{ngo.name}</h2>
            <p className="identity__name-hi" lang="hi">ग्रीन ऑफ सोशल सोसाइटी</p>
            <p className="identity__tagline">Registered Non-Profit Organisation · <span lang="hi">पंजीकृत सामाजिक संस्था</span></p>
          </div>
          <ComplianceTable />
        </div>
      </section>

      <TrainingsSection tint />
      <ProgrammesSection tint={false} />
      <WorkingAreaSection tint />

      <FounderSection tint={false} eyebrow="Management · प्रबंधन" />

      <section className="section section--tint" aria-labelledby="sampark-title">
        <div className="container">
          <SectionTitle
            eyebrow="Contact · सम्पर्क"
            title={<span id="sampark-title">Get in Touch</span>}
            text={<span lang="hi">ईमेल, मोबाइल या व्हाट्सएप पर हमसे सम्पर्क करें।</span>}
          />
          <ul className="sampark-grid">
            {contactCards.map(({ icon: I, en, hi, lines }) => (
              <li key={en} className="sampark-card">
                <span className="sampark-card__icon"><I size={22} strokeWidth={1.75} aria-hidden="true" /></span>
                <strong>{en} <span lang="hi">/ {hi}</span></strong>
                {lines.map((l) =>
                  l.href ? (
                    <a key={l.text} href={l.href} {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{l.text}</a>
                  ) : (
                    <span key={l.text}>{l.text}</span>
                  ),
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="account-title">
        <div className="container">
          <SectionTitle
            eyebrow="Bank Account · खाता विवरण"
            title={<span id="account-title">Account Details &amp; Enquiry Form</span>}
            text={<span lang="hi">दान हेतु बैंक खाता विवरण, और हमें संदेश भेजने के लिए फ़ॉर्म।</span>}
          />
          <div className="contact-grid">
            <BankDetails />
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
