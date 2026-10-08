import { Info } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SectionTitle from '../components/SectionTitle';
import StoryCard from '../components/StoryCard';
import CTASection from '../components/CTASection';
import stories from '../data/stories';
import images from '../data/images';

export default function Stories() {
  const hasSamples = stories.some((s) => s.isSample);

  return (
    <>
      <PageHeader
        title="Stories of Change"
        text="Stories that reflect the people, communities and change at the heart of our work."
        image={images.storyFarming}
        crumb="Stories"
      />

      <section className="section" aria-labelledby="stories-title">
        <div className="container">
          <SectionTitle
            eyebrow="From the Ground"
            title={<span id="stories-title">Change, One Community at a Time</span>}
            text="Every initiative begins with listening. These stories show what collective action can make possible."
          />
          {hasSamples && (
            <p className="notice" role="note">
              <Info size={18} aria-hidden="true" />
              Stories marked “Illustrative” describe the type of work we undertake and are not accounts of specific individuals.
            </p>
          )}
          <div className="card-grid card-grid--2">
            {stories.map((s) => <StoryCard key={s.slug} story={s} />)}
          </div>
        </div>
      </section>

      <CTASection
        title="Help Write the Next Story"
        text="Your support can help bring meaningful change to more families and communities."
        primary={{ label: 'Donate Now', to: '/donate' }}
        secondary={{ label: 'Become a Volunteer', to: '/volunteer' }}
      />
    </>
  );
}
