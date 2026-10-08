import { Info } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SectionTitle from '../components/SectionTitle';
import ImpactStats from '../components/ImpactStats';
import Icon from '../components/Icon';
import CTASection from '../components/CTASection';
import images from '../data/images';
import { impactAreas, impactBreakdown, futureGoals, statsAreSample } from '../data/ngoData';

export default function Impact() {
  return (
    <>
      <PageHeader
        title="Our Impact"
        text="Measuring progress honestly helps us learn, improve and stay accountable to communities and supporters."
        image={images.community}
      />

      {statsAreSample && (
        <div className="container">
          <p className="notice" role="note">
            <Info size={18} aria-hidden="true" />
            Figures on this page are indicative and shown for illustration. Verified figures will be published following internal review.
          </p>
        </div>
      )}

      <section className="section" aria-labelledby="glance-title">
        <div className="container">
          <SectionTitle eyebrow="At a Glance" title={<span id="glance-title">Impact Statistics</span>} />
          <ImpactStats variant="light" />
        </div>
      </section>

      <section className="section section--tint" aria-labelledby="reach-title">
        <div className="container">
          <SectionTitle
            eyebrow="Our Reach"
            title={<span id="reach-title">Communities, People &amp; Partners</span>}
            text="Behind every number are people, families and communities working towards a better life."
          />
          <div className="impact-areas">
            {impactAreas.map((a) => (
              <article key={a.title} className="impact-area">
                <span className="impact-area__icon"><Icon name={a.icon} size={26} /></span>
                <div>
                  <span className="impact-area__value">{a.value}</span>
                  <h3>{a.title}</h3>
                  <p>{a.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="focus-title">
        <div className="container split split--top">
          <div className="split__content">
            <span className="eyebrow">Where Effort Goes</span>
            <h2 id="focus-title">Focus of Our Social Initiatives</h2>
            <p className="lead">
              An indicative view of how our initiatives are distributed across our six areas of work.
            </p>
            {statsAreSample && <p className="muted">Indicative distribution, shown for illustration.</p>}
          </div>
          <div className="bars" role="list">
            {impactBreakdown.map((b) => (
              <div key={b.label} className="bar" role="listitem">
                <div className="bar__label">
                  <span>{b.label}</span>
                  <strong>{b.percent}%</strong>
                </div>
                <div className="bar__track" aria-hidden="true">
                  <span className="bar__fill" style={{ width: `${b.percent}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tint" aria-labelledby="goals-title">
        <div className="container">
          <SectionTitle
            eyebrow="Looking Ahead"
            title={<span id="goals-title">Future Goals</span>}
            text="Priorities we are working towards as we grow our reach across India."
          />
          <div className="goals-grid">
            {futureGoals.map((g, i) => (
              <article key={g.title} className="goal-card">
                <span className="goal-card__num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{g.title}</h3>
                <p>{g.text}</p>
                <div className="goal-card__progress">
                  <div className="bar__track" aria-hidden="true">
                    <span className="bar__fill" style={{ width: `${g.progress}%` }} />
                  </div>
                  <small>{g.progress}% towards goal (indicative)</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Help Us Reach More Communities"
        text="Your contribution can help us expand our work and create lasting change."
        primary={{ label: 'Donate Now', to: '/donate' }}
        secondary={{ label: 'Partner With Us', to: '/get-involved#partner' }}
      />
    </>
  );
}
