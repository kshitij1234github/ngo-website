import { CheckCircle2, Heart, MapPin } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SectionTitle from '../components/SectionTitle';
import Icon from '../components/Icon';
import Button from '../components/Button';
import CTASection from '../components/CTASection';
import programs from '../data/programs';
import images from '../data/images';
import { trainings, programmes, states } from '../data/activities';
import { contact } from '../data/ngoData';

export default function Programs() {
  return (
    <>
      <PageHeader
        title="Our Work"
        text="Community-led action across education, health, livelihoods, social support and the environment."
        image={images.education}
      />

      <section className="section" aria-labelledby="areas-title">
        <div className="container">
          <SectionTitle
            eyebrow="Areas of Work"
            title={<span id="areas-title">Where We Focus Our Efforts</span>}
            text="Each area is shaped by what communities tell us they need most."
          />
          <nav className="chip-nav" aria-label="Jump to area of work">
            {programs.map((p) => (
              <a key={p.slug} href={`#${p.slug}`} className="chip">
                <Icon name={p.icon} size={16} /> {p.title}
              </a>
            ))}
          </nav>

          <div className="program-list">
            {programs.map((p, i) => (
              <article key={p.slug} id={p.slug} className={`program-row${i % 2 ? ' program-row--reverse' : ''}`}>
                <div className="program-row__media">
                  <img src={p.image} alt="" loading="lazy" />
                </div>
                <div className="program-row__content">
                  <span className="program-card__icon"><Icon name={p.icon} size={24} /></span>
                  <h2>{p.title}</h2>
                  <p className="lead">{p.description}</p>
                  <p>{p.details}</p>
                  <h3 className="subhead">Focus activities</h3>
                  <ul className="check-list check-list--columns">
                    {p.activities.map((a) => (
                      <li key={a}><CheckCircle2 size={19} aria-hidden="true" /> {a}</li>
                    ))}
                  </ul>
                  <Button to="/donate" variant="primary" size="sm" icon={Heart}>Support This Work</Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tint" aria-labelledby="training-title">
        <div className="container">
          <SectionTitle
            eyebrow="Skill Training"
            title={<span id="training-title">Shows, Seminars, Competitions &amp; Training</span>}
            text={<span lang="hi">संस्था द्वारा संचालित शो, सेमिनार, प्रतियोगिता व प्रशिक्षण</span>}
          />
          <ul className="training-grid">
            {trainings.map(({ en, hi, icon: I, note }) => (
              <li key={en} className={`training-card${note ? ' training-card--wide' : ''}`}>
                <span className="training-card__icon"><I size={22} strokeWidth={1.75} aria-hidden="true" /></span>
                <div>
                  <strong>{en}</strong>
                  <span lang="hi">{hi}</span>
                  {note && (
                    <p>
                      {note.en}
                      <br />
                      <span lang="hi">{note.hi}</span>
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="programmes-title">
        <div className="container">
          <SectionTitle
            eyebrow="Health, Sports & Awareness"
            title={<span id="programmes-title">Programmes &amp; Campaigns</span>}
            text={<span lang="hi">स्वास्थ्य, खेल एवं जागरूकता कार्यक्रम</span>}
          />
          <ul className="programme-list">
            {programmes.map(({ en, hi, icon: I }) => (
              <li key={en}>
                <span className="training-card__icon"><I size={22} strokeWidth={1.75} aria-hidden="true" /></span>
                <div>
                  <strong>{en}</strong>
                  <span lang="hi">{hi}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--tint" aria-labelledby="area-title">
        <div className="container">
          <SectionTitle
            eyebrow="Working Area · कार्य क्षेत्र"
            title={<span id="area-title">All India — Rural &amp; Urban Areas</span>}
            text={
              <>
                <span lang="hi">सम्पूर्ण भारत — ग्रामीण एवं शहरी क्षेत्र समस्त।</span> Head office: {contact.addressInline}
              </>
            }
          />
          <ul className="state-grid">
            {states.map((s) => (
              <li key={s.en}>
                <MapPin size={16} aria-hidden="true" />
                <div>
                  <strong>{s.en}</strong>
                  <span lang="hi">{s.hi}</span>
                </div>
              </li>
            ))}
          </ul>
          <p className="state-grid__note">28 States and 8 Union Territories · <span lang="hi">28 राज्य एवं 8 केंद्र शासित प्रदेश</span></p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
