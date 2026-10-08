import { ArrowRight } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SectionTitle from '../components/SectionTitle';
import Icon from '../components/Icon';
import Button from '../components/Button';
import images from '../data/images';
import { contact } from '../data/ngoData';

const options = [
  {
    id: 'donate',
    icon: 'HandHeart',
    title: 'Donate',
    text: 'Support our initiatives.',
    detail: 'Your contribution helps fund education, health, livelihood and environmental initiatives. Eligible donations may qualify for tax benefits under Section 80G.',
    image: images.donate,
    cta: { label: 'Donate Now', to: '/donate' },
  },
  {
    id: 'volunteer',
    icon: 'Users',
    title: 'Volunteer',
    text: 'Give your time and skills.',
    detail: 'Teach, mentor, organise awareness drives or lend your professional skills. Volunteer on-ground or remotely, based on your availability.',
    image: images.volunteer,
    cta: { label: 'Become a Volunteer', to: '/volunteer' },
  },
  {
    id: 'partner',
    icon: 'Handshake',
    title: 'Partner With Us',
    text: 'Collaborate with Green of Social Society.',
    detail: 'NGOs, institutions, schools and community groups can partner with us on joint programmes, awareness campaigns and outreach.',
    image: images.partner,
    cta: { label: 'Start a Conversation', to: '/contact?subject=Partnership' },
  },
  {
    id: 'csr',
    icon: 'Briefcase',
    title: 'CSR Partnership',
    text: 'Explore opportunities for corporate social responsibility collaboration.',
    detail: 'We are registered for CSR (CSR00091400) and welcome collaboration with companies seeking to create measurable, community-led social impact.',
    image: images.csr,
    cta: { label: 'Discuss CSR Partnership', to: '/contact?subject=CSR%20Partnership' },
  },
];

export default function GetInvolved() {
  return (
    <>
      <PageHeader
        title="Get Involved"
        text="There are many ways to be part of the change — choose the one that fits you best."
        image={images.together}
      />

      <section className="section" aria-labelledby="ways-title">
        <div className="container">
          <SectionTitle
            eyebrow="Join Us"
            title={<span id="ways-title">Ways to Make a Difference</span>}
            text="Whether you give, volunteer or partner with us, your support helps communities move forward."
          />
          <div className="involve-grid">
            {options.map((o) => (
              <article key={o.id} id={o.id} className="involve-card">
                <div className="involve-card__media">
                  <img src={o.image} alt="" loading="lazy" />
                  <span className="involve-card__icon"><Icon name={o.icon} size={26} /></span>
                </div>
                <div className="involve-card__body">
                  <h2>{o.title}</h2>
                  <p className="involve-card__lead">{o.text}</p>
                  <p>{o.detail}</p>
                  <Button to={o.cta.to} variant="primary" size="sm" icon={ArrowRight}>{o.cta.label}</Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container contact-band">
          <div>
            <h2>Have a question about getting involved?</h2>
            <p>Write to us or call — our team will be glad to guide you.</p>
          </div>
          <div className="contact-band__actions">
            <Button href={`mailto:${contact.email}`} variant="outline">Email Us</Button>
            <Button href={contact.whatsappHref} variant="outline" target="_blank" rel="noopener noreferrer">WhatsApp {contact.whatsapp}</Button>
            <Button href={contact.phoneHref} variant="primary">Call {contact.phone}</Button>
          </div>
        </div>
      </section>
    </>
  );
}
