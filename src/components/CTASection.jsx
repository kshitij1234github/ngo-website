import { ArrowRight, HandHeart } from 'lucide-react';
import Button from './Button';
import images from '../data/images';

export default function CTASection({
  title = 'Be a Part of the Change',
  text = 'Your time, skills and support can help create meaningful change in communities.',
  primary = { label: 'Become a Volunteer', to: '/volunteer' },
  secondary = { label: 'Get Involved', to: '/get-involved' },
  image = images.together,
}) {
  return (
    <section className="cta" aria-labelledby="cta-title" style={{ '--cta-image': `url(${image})` }}>
      <div className="container cta__inner">
        <h2 id="cta-title">{title}</h2>
        <p>{text}</p>
        <div className="cta__actions">
          <Button to={primary.to} variant="accent" size="lg" icon={HandHeart}>{primary.label}</Button>
          <Button to={secondary.to} variant="light-outline" size="lg" icon={ArrowRight}>{secondary.label}</Button>
        </div>
      </div>
    </section>
  );
}
