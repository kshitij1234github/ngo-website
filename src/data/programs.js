/**
 * Areas of Work — edit titles, descriptions and focus points here.
 * `slug` is used for page anchors (e.g. /our-work#education).
 * Activities listed are DRAFT descriptions of the kind of work the
 * organisation undertakes; adjust them to match actual programmes.
 */
import images from './images';

const programs = [
  {
    slug: 'education',
    icon: 'GraduationCap',
    title: 'Education & Learning',
    description:
      'Helping children and youth access quality learning, stay in school and build a foundation for a better future.',
    image: images.education,
    details:
      'Education is one of the most powerful tools for breaking the cycle of poverty. We work to keep children — particularly girls and first-generation learners — engaged in learning.',
    activities: ['After-school learning support', 'Distribution of books and study materials', 'Awareness on school enrolment and attendance', 'Digital and basic literacy sessions'],
  },
  {
    slug: 'healthcare',
    icon: 'Stethoscope',
    title: 'Healthcare & Wellness',
    description:
      'Promoting health awareness, hygiene and access to basic healthcare for families in underserved areas.',
    image: images.healthcare,
    details:
      'Good health enables everything else. We focus on prevention, awareness and connecting families with available public health services.',
    activities: ['Health and hygiene awareness sessions', 'Support for health check-up camps', 'Menstrual hygiene awareness', 'Guidance on government health schemes'],
  },
  {
    slug: 'women-empowerment',
    icon: 'Users',
    title: 'Women Empowerment',
    description:
      'Supporting women with skills, confidence and opportunities to lead, earn and participate in decision-making.',
    image: images.womenEmpowerment,
    details:
      'When women are empowered, entire families and communities benefit. We support women to gain skills, financial awareness and a stronger voice.',
    activities: ['Skill development and vocational training', 'Self-help group support', 'Financial literacy and rights awareness', 'Leadership and confidence building'],
  },
  {
    slug: 'community-development',
    icon: 'Home',
    title: 'Community Development',
    description:
      'Working with local communities to strengthen participation, infrastructure awareness and collective well-being.',
    image: images.community,
    details:
      'Sustainable change is led by communities themselves. We help people come together, identify priorities and access opportunities.',
    activities: ['Community meetings and needs assessment', 'Awareness on welfare schemes and entitlements', 'Youth engagement and volunteering', 'Sanitation and clean-village drives'],
  },
  {
    slug: 'food-support',
    icon: 'HandHeart',
    title: 'Food & Social Support',
    description:
      'Extending timely food and essential support to vulnerable families, elders and people in difficult circumstances.',
    image: images.foodSupport,
    details:
      'No one should go hungry. We mobilise community support to reach families and individuals facing hardship, especially during emergencies.',
    activities: ['Food and ration support drives', 'Support for elders and persons with disabilities', 'Relief during emergencies and disasters', 'Clothing and essentials collection'],
  },
  {
    slug: 'environment',
    icon: 'Leaf',
    title: 'Environment & Sustainability',
    description:
      'Encouraging environmental responsibility through plantation, awareness and sustainable everyday practices.',
    image: images.environment,
    details:
      'A healthy environment is essential for future generations. True to our name, we promote greener, cleaner and more sustainable communities.',
    activities: ['Tree plantation drives', 'Plastic-free and cleanliness campaigns', 'Water conservation awareness', 'Environmental education for children'],
  },
];

export default programs;
