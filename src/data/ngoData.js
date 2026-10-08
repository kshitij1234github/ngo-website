/**
 * ============================================================
 *  GREEN OF SOCIAL SOCIETY — CENTRAL CONTENT FILE
 * ============================================================
 *  Edit organisation details, registrations, statistics and
 *  page copy here. Changes appear across the whole website.
 *
 *  OFFICIAL DATA  -> `ngo`, `registrations`, `contact`
 *  DRAFT / SAMPLE -> everything marked "SAMPLE" or "DRAFT"
 *  Replace sample values with verified figures before launch.
 * ============================================================
 */

/* ---------- OFFICIAL ORGANISATION DETAILS ---------- */
export const ngo = {
  name: 'Green of Social Society',
  nameUpper: 'GREEN OF SOCIAL SOCIETY',
  shortName: 'GOSS',
  tagline: 'Working together for a stronger and more inclusive society.',
  workingArea: 'All India',
  foundedYear: 2018, // date of incorporation 05/09/2018 (Udyam certificate)
  currentWebsite: 'https://greenofsocialsociety.wipto.in/our-team/',
  copyrightYear: 2026,
};

export const contact = {
  addressLines: ['Karchala, Lahrapur,', 'District Auraiya,', 'Uttar Pradesh - 206246, India'],
  addressInline: 'Karchala, Lahrapur, District Auraiya, Uttar Pradesh - 206246, India',
  email: 'ngogreenofsocialsociety1@gmail.com',
  phone: '8448134718',
  phoneDisplay: '+91 84481 34718',
  phoneHref: 'tel:+918448134718',
  email2: 'jabiralivaris786@gmail.com',
  phone2: '7982050673',
  phone2Display: '+91 79820 50673',
  phone2Href: 'tel:+917982050673',
  whatsapp: '7982050673',
  whatsappDisplay: '+91 79820 50673',
  whatsappHref: 'https://wa.me/917982050673',
  mapQuery: 'Lahrapur, Auraiya, Uttar Pradesh 206246',
  officeHours: '', // e.g. 'Monday – Saturday, 10:00 AM – 6:00 PM' — leave empty to hide
};

/* Exactly as provided by the organisation. Do not add unverified items. */
export const registrations = [
  { key: 'registration', label: 'Registration No.', value: '04001', note: 'Society Registration' },
  { key: 'renewal', label: 'Renewal', value: 'K-455', note: 'Registration Renewal' },
  { key: 'pan', label: 'PAN', value: 'AADTG1646B', note: 'Permanent Account Number' },
  { key: '12a', label: '12A', value: 'AADTG1646BE20241', note: 'Income Tax Act, 1961' },
  { key: '80g', label: '80G', value: 'AADTG1646BE20251', note: 'Income Tax Act, 1961' },
  { key: 'darpan', label: 'NGO Darpan', value: 'UP/2018/0213496', note: 'NITI Aayog NGO Darpan' },
  { key: 'csr', label: 'CSR Registration', value: 'CSR00091400', note: 'Ministry of Corporate Affairs · 03-05-2025' },
  { key: 'iso', label: 'ISO 9001:2015', value: 'QMS/0621', note: 'Quality Management System' },
  { key: 'udyam', label: 'Udyam (MSME)', value: 'UDYAM-UP-06-0027546', note: 'Ministry of MSME · Services' },
  { key: 'established', label: 'Established', value: '2018', note: 'Incorporated 05/09/2018' },
  { key: 'area', label: 'Working Area', value: 'All India', note: 'Operational Reach' },
];

/* Certificate details shown on the Transparency page — as printed on each certificate. */
export const certifications = [
  {
    key: 'iso',
    title: 'ISO 9001:2015 — Quality Management System',
    issuer: 'QMS Certification Services',
    rows: [
      ['Certificate No.', 'QMS/0621'],
      ['Initial Registration', '10 March 2025'],
      ['First Surveillance Audit', 'On or before 11 March 2026'],
      ['Second Surveillance Audit', 'On or before 11 March 2027'],
      ['Re-certification Due', '11 March 2028'],
    ],
    scope:
      'Providing training and skill development in beauty, fashion, handicrafts and computer education. Conducting awareness programmes on health, environment and social issues. Organising sports activities and cultural events for youth empowerment.',
    verifyUrl: 'https://www.qmscertificat.in/p/verify-certificate.html',
  },
  {
    key: 'udyam',
    title: 'Udyam Registration',
    issuer: 'Ministry of Micro, Small & Medium Enterprises, Government of India',
    rows: [
      ['Udyam Registration No.', 'UDYAM-UP-06-0027546'],
      ['Enterprise Type', 'Micro (2026-27)'],
      ['Major Activity', 'Services'],
      ['Date of Incorporation', '05/09/2018'],
      ['Date of Udyam Registration', '23/07/2026'],
      ['Activities (NIC)', 'Social work (88100), Human health (86909), Education (85499)'],
    ],
    verifyUrl: 'https://udyamregistration.gov.in',
  },
  {
    key: 'csr',
    title: 'CSR Registration',
    issuer: 'Ministry of Corporate Affairs — Registrar of Companies, Delhi',
    rows: [
      ['Registration No.', 'CSR00091400'],
      ['Approval Date', '03-05-2025'],
      ['PAN', 'AADTG1646B'],
    ],
    note: 'Registered for undertaking CSR activities.',
  },
  {
    key: 'darpan',
    title: 'NGO Darpan Enrolment',
    issuer: 'NITI Aayog with National Informatics Centre, Government of India',
    rows: [['Unique ID', 'UP/2018/0213496']],
    verifyUrl: 'https://ngodarpan.gov.in',
  },
];

export const getRegistration = (key) => registrations.find((r) => r.key === key)?.value;

/* Trust strip shown below the hero */
export const trustBadges = [
  { icon: 'BadgeCheck', title: 'Registered NGO', detail: 'Reg. No. 04001' },
  { icon: 'Landmark', title: 'NGO Darpan Registered', detail: 'UP/2018/0213496' },
  { icon: 'FileCheck2', title: '12A Registered', detail: 'Income Tax Act' },
  { icon: 'Receipt', title: '80G Registered', detail: 'Income Tax Act' },
  { icon: 'Building2', title: 'CSR Registered', detail: 'CSR00091400' },
  { icon: 'ShieldCheck', title: 'ISO 9001:2015 Certified', detail: 'Cert. No. QMS/0621' },
  { icon: 'Briefcase', title: 'Udyam Registered', detail: 'Ministry of MSME' },
  { icon: 'MapPin', title: 'Working Across India', detail: 'Pan-India reach' },
];

/* ---------- NAVIGATION ---------- */
export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Our Work', to: '/our-work' },
  { label: 'Our Impact', to: '/impact' },
  { label: 'Stories', to: '/stories' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Get Involved', to: '/get-involved' },
  { label: 'Contact', to: '/contact' },
];

export const involvedLinks = [
  { label: 'Donate', to: '/donate' },
  { label: 'Volunteer', to: '/volunteer' },
  { label: 'Partner With Us', to: '/get-involved#partner' },
  { label: 'CSR Partnership', to: '/get-involved#csr' },
];

/* ---------- SAMPLE STATISTICS (EDIT BEFORE LAUNCH) ---------- */
export const statsAreSample = true; // set to false once figures are verified
export const impactStats = [
  { value: 10000, suffix: '+', label: 'Lives Reached', icon: 'HeartHandshake' },
  { value: 25, suffix: '+', label: 'Communities Supported', icon: 'Home' },
  { value: 50, suffix: '+', label: 'Volunteers', icon: 'Users' },
  { value: 15, suffix: '+', label: 'Social Initiatives', icon: 'Sprout' },
];

/* ---------- ABOUT / OUR STORY (DRAFT COPY) ---------- */
/* Bank details for donations — exactly as on the organisation's bank card. */
export const bank = {
  bankName: 'Bank of India',
  accountName: 'Green of Social Society',
  accountNumber: '733120110000240',
  ifsc: 'BKID0007331',
  micr: '206013202',
  regdOffice: 'Vill. Karchala, PO Lahrapur, Distt. Auraiya, Uttar Pradesh - 206246, India',
  regdOfficeHi: 'ग्राम करचला, पोस्ट लहरापुर, जनपद औरैया, उत्तर प्रदेश - 206246, भारत',
};

/* ---------- LEADERSHIP ---------- */
export const founder = {
  name: 'Jabir Ali Varis',
  role: 'Founder & Chairman',
  email: 'jabiralivaris786@gmail.com',
  phone: '7982050673',
  phoneHref: 'tel:+917982050673',
  whatsappHref: 'https://wa.me/917982050673',
};

/* Office bearers shown under the founder on the About page.
   `image` is a key from src/data/images.js. */
export const team = [
  { name: 'Shafeek Ahemad', role: 'Vice Chairman', image: 'shafeekAhemad' },
  { name: 'Mohd. Tariq (Chhotu)', role: 'S.M. Women Leader', image: 'mohdTariq' },
  { name: 'Alshifa Bano', role: 'National Senior Women Chairman', image: 'alshifaBano' },
  { name: 'Kahkasha', role: 'Senior Central Women Chairman', image: 'kahkasha' },
  { name: 'Ashra', role: 'State Senior Women Chairman', image: 'ashra' },
  { name: 'Kajal Yadav', role: 'Uttar Pradesh Senior Women Chairman', image: 'kajalYadav' },
  { name: 'Khushboo Rajput', role: 'Uttarakhand Senior Women Chairman', image: 'khushbooRajput' },
  { name: 'Mushkan', role: 'Himachal Pradesh Senior Women Chairman', image: 'mushkan' },
  { name: 'Priyanka Soni', role: 'Chandigarh Senior Women Chairman', image: 'priyankaSoni' },
  { name: 'Parveen Bano', role: 'Rajasthan Senior Women Chairman', image: 'parveenBano' },
  { name: 'Juhi Rathore', role: 'Haryana Senior Women Chairman', image: 'juhiRathore' },
  { name: 'Hayanaj', role: 'Delhi Senior Women Chairman', image: 'hayanaj' },
  { name: 'Surani Simran', role: 'Gujarat Senior Women Chairman', image: 'suraniSimran' },
  { name: 'Suman Gupta', role: 'Maharashtra Senior Women Chairman', image: 'sumanGupta' },
  { name: 'Jahanvi Gupta', role: 'Kerala Senior Women Chairman', image: 'jahanviGupta' },
  { name: 'Anuradha Patel', role: 'Goa Senior Women Chairman', image: 'anuradhaPatel' },
  { name: 'Mantasha Musarrat Hussain', role: 'Dadra and Nagar Haveli and Daman and Diu Senior Women Chairman', image: 'mantashaMusarratHussain' },
  { name: 'Kajal Bano', role: 'Lakshadweep Women Chairman', image: 'kajalBano' },
  { name: 'Reshma Kadir Shaikh', role: 'Andaman and Nicobar Women Chairman', image: 'reshmaKadirShaikh' },
  { name: 'Rekha Tiwari', role: 'Karnataka Women Chairman', image: 'rekhaTiwari' },
  { name: 'Jaibun Bano', role: 'Tamil Nadu Women Chairman', image: 'jaibunBano' },
  { name: 'Simran Khatun', role: 'Ladakh Women Chairman', image: 'simranKhatun' },
  { name: 'Chandni Malik', role: 'Jammu and Kashmir Women Chairman', image: 'chandniMalik' },
  { name: 'Mukta', role: 'Punjab Senior Women Chairman', image: 'mukta' },
  { name: 'Poonam Tiwari', role: 'Bihar Senior Women Chairman', image: 'poonamTiwari' },
  { name: 'Palak Gupta', role: 'Jharkhand Senior Women Chairman', image: 'palakGupta' },
  { name: 'Hema Yadav', role: 'Madhya Pradesh Senior Women Chairman', image: 'hemaYadav' },
  { name: 'Madhu Patel', role: 'Chhattisgarh Senior Women Chairman', image: 'madhuPatel' },
  { name: 'Suman Lata Das', role: 'Odisha Senior Women Chairman', image: 'sumanLataDas' },
  { name: 'Sadhna Sinha', role: 'Nagaland, Sikkim & Tripura Senior Women Chairman', image: 'sadhnaSinha' },
  { name: 'Rimjhun Sinha', role: 'Manipur, Mizoram, Meghalaya & Arunachal Pradesh Senior Women Chairman', image: 'rimjhunSinha' },
  { name: 'Gudiya Bano', role: 'Puducherry Women Chairman', image: 'gudiyaBano' },
  { name: 'Manisha Deka', role: 'Assam Senior Women Chairman', image: 'manishaDeka' },
  { name: 'Samreen Naaj', role: 'West Bengal Senior Women Chairman', image: 'samreenNaaj' },
  { name: 'Himani', role: 'Mandal Senior Women Chairman', image: 'himani' },
  { name: 'Laxmi Gupta', role: 'District Senior Women Chairman', image: 'laxmiGupta' },
  { name: 'Avnish Patel (Sekhoo)', role: 'Member', image: 'avnishPatel' },
];

export const about = {
  intro:
    'Green of Social Society is a social organisation working to create positive and sustainable change in communities. Rooted in Uttar Pradesh and working across India, we partner with people at the grassroots to address everyday challenges with dignity and care.',
  focusAreas: [
    'Community development',
    'Social welfare',
    'Education',
    'Health awareness',
    'Women empowerment',
    'Support for underprivileged communities',
    'Environmental responsibility',
  ],
  whoWeAre:
    'We are a registered, non-profit society of committed individuals, volunteers and well-wishers who believe that lasting change begins within communities. Our work brings together local knowledge, collective effort and transparent practice.',
  whyWeExist:
    'Across India, many families still face barriers to quality education, basic healthcare, livelihood and a clean environment. We exist to help close these gaps — by listening to communities, connecting them with resources and supporting them as they build better futures.',
  mission:
    'To work with communities and partners to create opportunities, promote social well-being and contribute towards a more equitable and sustainable society.',
  vision:
    'A stronger, inclusive and sustainable India where every individual has the opportunity to live with dignity and hope.',
};

export const values = [
  { icon: 'Heart', title: 'Compassion', text: 'We lead with empathy and respect for every person and community we serve.' },
  { icon: 'ShieldCheck', title: 'Integrity', text: 'We act honestly and ethically, and we keep the commitments we make.' },
  { icon: 'Eye', title: 'Transparency', text: 'We are open about our work, our registrations and how resources are used.' },
  { icon: 'Scale', title: 'Equality', text: 'We work for fair opportunity regardless of gender, caste, religion or income.' },
  { icon: 'Leaf', title: 'Sustainability', text: 'We favour long-term solutions that protect people and the planet.' },
  { icon: 'ClipboardCheck', title: 'Accountability', text: 'We take responsibility for outcomes and report back to those we serve.' },
];

export const processSteps = [
  { step: '01', title: 'Understand', text: 'Understand community needs and challenges.' },
  { step: '02', title: 'Collaborate', text: 'Work together with communities, volunteers and partners.' },
  { step: '03', title: 'Act', text: 'Implement meaningful social initiatives.' },
  { step: '04', title: 'Measure', text: 'Track outcomes and improve our approach.' },
];

/* ---------- FEATURED INITIATIVE (SAMPLE) ---------- */
export const featuredInitiative = {
  eyebrow: 'Featured Initiative',
  title: 'Creating Change Where It Matters Most',
  story:
    'In many villages, children walk long distances to school and families struggle to afford books and supplies. Through community learning support, volunteers help children keep up with their studies, encourage regular attendance and work with parents to value education — especially for girls.',
  points: [
    'After-school learning support led by local volunteers',
    'Study materials for children from low-income families',
    'Parent awareness meetings on the value of education',
  ],
  impactLabel: 'Sample focus',
  impactValue: 'Rural children & families',
  isSample: true,
};

/* ---------- IMPACT PAGE (SAMPLE — EDIT BEFORE LAUNCH) ---------- */
export const impactBreakdown = [
  { label: 'Education & Learning', percent: 30 },
  { label: 'Healthcare & Wellness', percent: 20 },
  { label: 'Women Empowerment', percent: 15 },
  { label: 'Community Development', percent: 15 },
  { label: 'Food & Social Support', percent: 12 },
  { label: 'Environment', percent: 8 },
];

export const impactAreas = [
  {
    icon: 'Home',
    title: 'Communities',
    value: '25+',
    text: 'Villages and urban neighbourhoods where we work alongside local leaders and families.',
  },
  {
    icon: 'HeartHandshake',
    title: 'Beneficiaries',
    value: '10,000+',
    text: 'Children, women, elders and families reached through our initiatives and awareness drives.',
  },
  {
    icon: 'Users',
    title: 'Volunteers',
    value: '50+',
    text: 'Students, professionals and community members who give their time and skills.',
  },
  {
    icon: 'Sprout',
    title: 'Social Initiatives',
    value: '15+',
    text: 'Programmes and campaigns across education, health, livelihoods and environment.',
  },
];

export const futureGoals = [
  { title: 'Expand learning support', text: 'Reach more rural children with after-school learning and study materials.', progress: 40 },
  { title: 'Strengthen health awareness', text: 'Organise regular health and hygiene awareness sessions in partner communities.', progress: 30 },
  { title: 'Grow women-led livelihoods', text: 'Support self-help groups with skills training and market linkages.', progress: 25 },
  { title: 'Plant and protect trees', text: 'Run community plantation drives and promote environmental responsibility.', progress: 35 },
];
