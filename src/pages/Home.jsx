import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Hero from '../components/Hero';
import TrustBadges from '../components/TrustBadges';
import FocusTicker from '../components/FocusTicker';
import ImpactStats from '../components/ImpactStats';
import SectionTitle from '../components/SectionTitle';
import ProgramCard from '../components/ProgramCard';
import StoryCard from '../components/StoryCard';
import FeaturedInitiative from '../components/FeaturedInitiative';
import ProcessTimeline from '../components/ProcessTimeline';
import CTASection from '../components/CTASection';
import Button from '../components/Button';
import FounderSection from '../components/FounderSection';
import OfficeBearers from '../components/OfficeBearers';
import PhotoGrid from '../components/PhotoGrid';
import { galleryPhotos } from '../data/galleryPhotos';
import programs from '../data/programs';
import stories from '../data/stories';
import images from '../data/images';
import { about } from '../data/ngoData';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBadges />

      <section className="section section--stats" aria-label="Our impact at a glance">
        <div className="container">
          <ImpactStats variant="dark" />
        </div>
      </section>

      <section className="section" aria-labelledby="who-we-are">
        <div className="container split">
          <div className="split__media">
            <img src={images.aboutCommunity} alt="Community volunteers standing together outside a village hall" loading="lazy" />
            <div className="split__accent" aria-hidden="true" />
          </div>
          <div className="split__content">
            <span className="eyebrow">About Us</span>
            <h2 id="who-we-are">Who We Are</h2>
            <p className="lead">{about.intro}</p>
            <p>Our work focuses on:</p>
            <ul className="check-list check-list--columns">
              {about.focusAreas.map((a) => (
                <li key={a}><CheckCircle2 size={19} aria-hidden="true" /> {a}</li>
              ))}
            </ul>
            <Button to="/about" variant="primary" icon={ArrowRight}>Learn More About Us</Button>
          </div>
        </div>
      </section>

      <section className="section section--tint" aria-labelledby="areas-title">
        <div className="container">
          <SectionTitle
            eyebrow="What We Do"
            title={<span id="areas-title">Our Areas of Work</span>}
            text="We focus on practical, community-led action across six key areas that shape everyday life and long-term well-being."
          />
          <div className="card-grid card-grid--3">
            {programs.map((p) => <ProgramCard key={p.slug} program={p} />)}
          </div>
        </div>
      </section>

      <FounderSection tint={false} showTeam={false} />

      <FocusTicker />

      <FeaturedInitiative />

      <section className="section section--tint" aria-labelledby="how-title">
        <div className="container">
          <SectionTitle
            eyebrow="Our Approach"
            title={<span id="how-title">How We Work</span>}
            text="A simple, accountable process that keeps communities at the centre of every decision."
          />
          <ProcessTimeline />
        </div>
      </section>

      <section className="section" aria-labelledby="stories-title">
        <div className="container">
          <div className="section-head-row">
            <SectionTitle
              align="left"
              eyebrow="Stories of Change"
              title={<span id="stories-title">Stories From the Ground</span>}
              text="A glimpse of the change that community-led action can create."
            />
            <Button to="/stories" variant="outline" icon={ArrowRight}>View All Stories</Button>
          </div>
          <div className="card-grid card-grid--3">
            {stories.slice(0, 3).map((s) => <StoryCard key={s.slug} story={s} />)}
          </div>
        </div>
      </section>

      <section className="section section--tint" aria-labelledby="gallery-title">
        <div className="container">
          <div className="section-head-row">
            <SectionTitle
              align="left"
              eyebrow="Gallery"
              title={<span id="gallery-title">Moments From Our Work</span>}
              text="Trainings, centre openings and community gatherings across our programmes."
            />
            <Button to="/gallery" variant="outline" icon={ArrowRight}>View Full Gallery</Button>
          </div>
          <PhotoGrid photos={galleryPhotos.slice(0, 8)} tiles />
        </div>
        <OfficeBearers members={['shafeekAhemad', 'mohdTariq', 'avnishPatel']} showAllLink />
      </section>

      <CTASection />
    </>
  );
}
