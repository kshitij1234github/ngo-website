import { CheckCircle2, Heart } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SectionTitle from '../components/SectionTitle';
import Icon from '../components/Icon';
import Button from '../components/Button';
import CTASection from '../components/CTASection';
import programs from '../data/programs';
import images from '../data/images';
import { TrainingsSection, ProgrammesSection, WorkingAreaSection } from '../components/WorkSections';

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

      <TrainingsSection />
      <ProgrammesSection />
      <WorkingAreaSection />

      <CTASection />
    </>
  );
}
