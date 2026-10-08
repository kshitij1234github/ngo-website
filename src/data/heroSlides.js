/**
 * Home page hero slider — one object per slide.
 * Swap images in src/data/images.js, and edit wording / buttons here.
 * `icon` is any Lucide icon name (see src/components/Icon.jsx).
 */
import images from './images';

const heroSlides = [
  {
    image: images.hero,
    alt: 'Smiling children from a community in India',
    eyebrow: 'Green of Social Society',
    title: 'Together We Can Create a Better Tomorrow',
    text: 'Working with communities across India to create meaningful opportunities, empower lives and build a stronger and more sustainable society.',
    primary: { label: 'Donate Now', to: '/donate', icon: 'Heart' },
    secondary: { label: 'Our Work', to: '/our-work' },
  },
  {
    image: images.education,
    alt: 'Children studying together in a classroom',
    eyebrow: 'Education & Learning',
    title: 'Every Child Deserves the Chance to Learn',
    text: 'Helping children and youth access quality learning, stay in school and build a foundation for a better future.',
    primary: { label: 'Support Education', to: '/donate', icon: 'Heart' },
    secondary: { label: 'Learn More', to: '/our-work#education' },
  },
  {
    image: images.womenEmpowerment,
    alt: 'Women from a community group working together',
    eyebrow: 'Women Empowerment',
    title: 'Empowered Women Build Stronger Communities',
    text: 'Supporting women with skills, confidence and opportunities to lead, earn and participate in decision-making.',
    primary: { label: 'Get Involved', to: '/get-involved', icon: 'HandHeart' },
    secondary: { label: 'Learn More', to: '/our-work#women-empowerment' },
  },
  {
    image: images.environment,
    alt: 'Green fields and trees in rural India',
    eyebrow: 'Environment',
    title: 'Growing a Greener, Healthier Planet',
    text: 'Encouraging environmental responsibility through plantation, awareness and sustainable everyday practices.',
    primary: { label: 'Volunteer With Us', to: '/volunteer', icon: 'HandHeart' },
    secondary: { label: 'Learn More', to: '/our-work#environment' },
  },
];

export default heroSlides;
