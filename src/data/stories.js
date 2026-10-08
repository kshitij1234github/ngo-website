/**
 * Stories of Change — SAMPLE / ILLUSTRATIVE CONTENT.
 * These stories are placeholders that show how real stories will look.
 * Replace them with verified stories (with consent) before launch,
 * then set `isSample: false` to remove the "Illustrative" label.
 */
import images from './images';

const stories = [
  {
    slug: 'learning-beyond-the-classroom',
    category: 'Education',
    title: 'Learning Beyond the Classroom',
    excerpt:
      'How after-school learning support can help children in rural communities build confidence and stay in school.',
    image: images.storyLearning,
    isSample: true,
    body: [
      'In many rural communities, children are often the first in their families to attend school. Without support at home, many fall behind and eventually drop out.',
      'Community learning circles, led by local volunteers, give children a safe space to revise lessons, ask questions and complete homework. Volunteers also meet parents regularly to encourage consistent attendance.',
      'This illustrative story shows the kind of change that learning support aims to create: more confident children who see school as a path to a better future.',
    ],
  },
  {
    slug: 'nourishing-families-in-need',
    category: 'Food & Social Support',
    title: 'Nourishing Families in Need',
    excerpt:
      'Community food support can bring relief to families facing hardship, so that children never have to learn on an empty stomach.',
    image: images.storyMeals,
    isSample: true,
    body: [
      'Hunger affects a child’s ability to learn, grow and stay healthy. During difficult times, many daily-wage families struggle to put meals on the table.',
      'Food and ration support drives, organised with volunteers and local donors, aim to reach families who need it most — identified with the help of community members.',
      'This illustrative story represents how collective effort can bring timely relief and restore a sense of security.',
    ],
  },
  {
    slug: 'growing-a-greener-village',
    category: 'Environment',
    title: 'Growing a Greener Village',
    excerpt:
      'Plantation and awareness drives can help communities protect their land, water and future.',
    image: images.storyFarming,
    isSample: true,
    body: [
      'Farming communities are among the first to feel the effects of a changing climate — from erratic rain to declining soil health.',
      'Tree plantation drives and conversations on water conservation encourage villagers, schools and youth groups to take ownership of their local environment.',
      'This illustrative story reflects our belief that small, collective actions can grow into lasting environmental change.',
    ],
  },
  {
    slug: 'health-awareness-at-the-doorstep',
    category: 'Healthcare',
    title: 'Health Awareness at the Doorstep',
    excerpt:
      'Simple awareness on hygiene and preventive care can make a real difference to family health.',
    image: images.storyHealth,
    isSample: true,
    body: [
      'Many common illnesses can be prevented through basic hygiene, nutrition and timely check-ups — yet access to information remains limited in remote areas.',
      'Health awareness sessions and support for check-up camps aim to bring knowledge and services closer to families, especially women and elders.',
      'This illustrative story shows how awareness can empower families to make healthier choices.',
    ],
  },
];

export default stories;
