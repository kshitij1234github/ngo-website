import { ArrowRight } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SectionTitle from '../components/SectionTitle';
import MissionVision from '../components/MissionVision';
import ValuesGrid from '../components/ValuesGrid';
import ProcessTimeline from '../components/ProcessTimeline';
import ComplianceTable from '../components/ComplianceTable';
import CTASection from '../components/CTASection';
import FounderSection from '../components/FounderSection';
import Button from '../components/Button';
import images from '../data/images';
import { about, ngo } from '../data/ngoData';

export default function About() {
  return (
    <>
      <PageHeader
        title="About Us"
        text="Our story, our purpose and the values that guide our work with communities across India."
        image={images.fields}
      />

      <section className="section" aria-labelledby="story-title">
        <div className="container split">
          <div className="split__content">
            <span className="eyebrow">Our Story</span>
            <h2 id="story-title">Rooted in Community, Working for India</h2>
            <h3 className="subhead">Who We Are</h3>
            <p>{about.whoWeAre}</p>
            <h3 className="subhead">Why We Exist</h3>
            <p>{about.whyWeExist}</p>
            <p>
              Based in Karchala, Lahrapur in District Auraiya, Uttar Pradesh, {ngo.name} works with an{' '}
              <strong>All India</strong> mandate — supporting communities wherever our help is needed.
            </p>
          </div>
          <div className="split__media">
            <img src={images.aboutCommunity} alt="Community members and volunteers gathered together" loading="lazy" />
            <div className="split__accent" aria-hidden="true" />
          </div>
        </div>
      </section>

      <FounderSection />

      <section className="section" aria-labelledby="mv-title">
        <div className="container">
          <SectionTitle eyebrow="Purpose" title={<span id="mv-title">Mission &amp; Vision</span>} />
          <MissionVision />
        </div>
      </section>

      <section className="section section--tint" aria-labelledby="values-title">
        <div className="container">
          <SectionTitle
            eyebrow="What Guides Us"
            title={<span id="values-title">Our Values</span>}
            text="Six principles shape how we work with communities, volunteers and partners."
          />
          <ValuesGrid />
        </div>
      </section>

      <section className="section" aria-labelledby="how-title">
        <div className="container">
          <SectionTitle eyebrow="Our Approach" title={<span id="how-title">How We Work</span>} />
          <ProcessTimeline />
        </div>
      </section>

      <section className="section section--tint" aria-labelledby="compliance-title">
        <div className="container">
          <SectionTitle
            eyebrow="Transparency"
            title={<span id="compliance-title">NGO Registration &amp; Compliance</span>}
            text="We believe trust is built through openness. Our statutory registrations are listed below."
          />
          <ComplianceTable />
          <div className="center-actions">
            <Button to="/transparency" variant="outline" icon={ArrowRight}>View Transparency Page</Button>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
