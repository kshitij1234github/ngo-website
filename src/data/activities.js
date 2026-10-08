/**
 * Trainings, campaigns and working area — as provided by the organisation,
 * shown in English and Hindi on the Our Work page.
 */
import {
  Sparkles, Hand, Scissors, Palette, Gem, Flower2, PersonStanding, Shirt, Brush, Music,
  Spool, Ribbon, Baby, Monitor, Soup, Trophy, HeartPulse, Dumbbell, Drama, Clapperboard,
  Leaf, BookOpen,
} from 'lucide-react';

/* संस्था द्वारा संचालित शो, सेमिनार, प्रतियोगिता व प्रशिक्षण */
export const trainings = [
  { en: 'Beauty Parlour', hi: 'ब्यूटी पार्लर', icon: Sparkles },
  { en: 'Mehndi', hi: 'मेहंदी', icon: Hand },
  { en: 'Hair Styling', hi: 'हेयर', icon: Scissors },
  { en: 'Make-up', hi: 'मेकअप', icon: Palette },
  { en: 'Jewellery Making', hi: 'ज्वेलरी मेकिंग', icon: Gem },
  { en: 'Beauty Care', hi: 'सौंदर्य', icon: Flower2 },
  { en: 'Modelling', hi: 'मॉडलिंग', icon: PersonStanding },
  { en: 'Fashion Designing', hi: 'फ़ैशन डिज़ाइनिंग', icon: Shirt },
  { en: 'Painting', hi: 'पेंटिंग', icon: Brush },
  { en: 'Dance', hi: 'डांस', icon: Music },
  { en: 'Tailoring', hi: 'सिलाई', icon: Spool },
  { en: 'Embroidery', hi: 'कढ़ाई', icon: Ribbon },
  { en: 'Knitting', hi: 'बुनाई', icon: Ribbon },
  { en: 'Teddy Bear Making', hi: 'टेडी बियर', icon: Baby },
  { en: 'Computer', hi: 'कम्प्यूटर', icon: Monitor },
  {
    en: 'Food & Fruit Preservation',
    hi: 'खाद्य और फल संरक्षण',
    icon: Soup,
    note: {
      en: 'Making papad, pickles, incense sticks, candles, soap, cream and facial cream — methods and training.',
      hi: 'पापड़, आचार, अगरबत्ती, मोमबत्ती, साबुन, क्रीम, फेशियल क्रीम बनाने की विधि व प्रशिक्षण।',
    },
  },
];

/* अन्य कार्यक्रम */
export const programmes = [
  {
    icon: Dumbbell,
    en: 'Health Care, Gym & Yoga Training Programmes',
    hi: 'हेल्थ केयर, जिम व योगा ट्रेनिंग प्रोग्राम',
  },
  {
    icon: Trophy,
    en: 'Tournaments & Training — Football, Badminton, Cricket',
    hi: 'टूर्नामेंट व प्रशिक्षण — फ़ुटबॉल, बैडमिंटन, क्रिकेट',
  },
  {
    icon: HeartPulse,
    en: 'Disease Control — HIV/AIDS, Leprosy, Cancer, TB, Diabetes and more',
    hi: 'एच.आई.वी., एड्स नियंत्रण, कुष्ठ, कैंसर, टी.बी., मधुमेह आदि रोग नियंत्रण',
  },
  {
    icon: Drama,
    en: 'Street Play (Nukkad Natak) Camps & Training',
    hi: 'नुक्कड़ नाटक कैम्प व प्रशिक्षण',
  },
  {
    icon: Clapperboard,
    en: 'Hindi & Bhojpuri Film Acting Course',
    hi: 'हिन्दी, भोजपुरी फ़िल्म एक्टिंग कोर्स',
  },
  {
    icon: Leaf,
    en: 'Environmental Pollution Awareness & De-addiction Centre',
    hi: 'पर्यावरण प्रदूषण, नशा मुक्ति केन्द्र',
  },
  {
    icon: BookOpen,
    en: 'Education for All (Sarva Shiksha) & Spoken English Course',
    hi: 'सर्व शिक्षा, स्पीकिंग कोर्स',
  },
];

/* कार्य क्षेत्र — ग्रामीण एवं शहरी क्षेत्र समस्त (28 states + 8 union territories) */
export const states = [
  { en: 'Uttar Pradesh', hi: 'उत्तर प्रदेश' },
  { en: 'Uttarakhand', hi: 'उत्तराखण्ड' },
  { en: 'Delhi', hi: 'दिल्ली', ut: true },
  { en: 'Haryana', hi: 'हरियाणा' },
  { en: 'Chandigarh', hi: 'चंडीगढ़', ut: true },
  { en: 'Punjab', hi: 'पंजाब' },
  { en: 'Rajasthan', hi: 'राजस्थान' },
  { en: 'Himachal Pradesh', hi: 'हिमाचल प्रदेश' },
  { en: 'Jammu & Kashmir', hi: 'जम्मू व कश्मीर', ut: true },
  { en: 'Ladakh', hi: 'लद्दाख', ut: true },
  { en: 'Karnataka', hi: 'कर्नाटक' },
  { en: 'Tamil Nadu', hi: 'तमिलनाडु' },
  { en: 'Andaman & Nicobar Islands', hi: 'अण्डमान एवं निकोबार', ut: true },
  { en: 'Gujarat', hi: 'गुजरात' },
  { en: 'Madhya Pradesh', hi: 'मध्य प्रदेश' },
  { en: 'Chhattisgarh', hi: 'छत्तीसगढ़' },
  { en: 'Bihar', hi: 'बिहार' },
  { en: 'Jharkhand', hi: 'झारखण्ड' },
  { en: 'Maharashtra', hi: 'महाराष्ट्र' },
  { en: 'Kerala', hi: 'केरल' },
  { en: 'Goa', hi: 'गोवा' },
  { en: 'Andhra Pradesh', hi: 'आंध्र प्रदेश' },
  { en: 'Telangana', hi: 'तेलंगाना' },
  { en: 'Dadra & Nagar Haveli and Daman & Diu', hi: 'दादरा एवं नगर हवेली और दमन एवं दीव', ut: true },
  { en: 'Lakshadweep', hi: 'लक्षद्वीप', ut: true },
  { en: 'Assam', hi: 'असम' },
  { en: 'Meghalaya', hi: 'मेघालय' },
  { en: 'Mizoram', hi: 'मिज़ोरम' },
  { en: 'Arunachal Pradesh', hi: 'अरुणाचल प्रदेश' },
  { en: 'Manipur', hi: 'मणिपुर' },
  { en: 'Puducherry', hi: 'पुडुचेरी', ut: true },
  { en: 'Nagaland', hi: 'नागालैंड' },
  { en: 'Sikkim', hi: 'सिक्किम' },
  { en: 'Tripura', hi: 'त्रिपुरा' },
  { en: 'West Bengal', hi: 'पश्चिम बंगाल' },
  { en: 'Odisha', hi: 'ओडिशा' },
];
