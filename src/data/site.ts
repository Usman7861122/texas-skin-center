// All site content lives here. Edit text, links and lists in one place.

export const BOOK_URL = 'https://l.klara.com/Gjmh3E7gcqC8FrpL';
export const PAY_URL = 'http://www.epayitonline.com';
export const PHONE = '346-888-4400';
export const PHONE_HREF = 'tel:3468884400';

const OLD = 'https://texasskincenter.com';

export const site = {
  name: 'Texas Skin Center',
  tagline: 'Trusted dermatology care serving Pearland, Houston & Kingwood, TX.',
  description:
    'Board-certified dermatologists in Pearland, Houston and Kingwood, TX. Medical, surgical and cosmetic skin care for every age, with same-day appointments.',
};

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about-us' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Acne', href: '/services/acne', desc: 'Clear, steady plans' },
      { label: 'Actinic Keratosis', href: '/services/actinic-keratosis', desc: 'Treat sun-damaged spots' },
      { label: 'Botox', href: '/services/botox', desc: 'Soften lines naturally' },
      { label: 'Chemical Peels', href: '/services/chemical-peels', desc: 'Renew tone and texture' },
      { label: 'Eczema', href: '/services/eczema', desc: 'Calm dry, itchy skin' },
      { label: 'Fillers', href: '/services/fillers', desc: 'Restore volume and folds' },
      { label: 'Fractionated Resurfacing', href: '/services/fractionated-resurfacing', desc: 'Smoother, firmer skin' },
      { label: 'Hair Loss (PRP)', href: '/services/hair-loss-prp', desc: 'Support thicker hair' },
      { label: 'IPL Treatment', href: '/services/ipl-treatment', desc: 'Even out redness and spots' },
      { label: 'Laser Skin Resurfacing', href: '/services/laser-skin-resurfacing', desc: 'Refresh sun-worn skin' },
      { label: 'Rosacea', href: '/services/rosacea', desc: 'Reduce flushing and redness' },
      { label: 'View More Services', href: '/services', desc: 'See every treatment' },
    ],
  },
  {
    label: 'Providers',
    href: '/providers',
    children: [
      { label: 'Joseph Sedrak, MD', href: '/providers/joseph-sedrak-md', desc: 'Dermatologist & Mohs Surgeon', img: '/images/DSC05714-scaled-e1761816920234.jpg' },
      { label: 'Jonathan Aldrete, MD', href: '/providers/jonathan-aldrete-md', desc: 'Dermatologist', img: '/images/providers/aldrete.png' },
      { label: 'Whitney Latin, MD, FAAD', href: '/providers/whitney-latin-md-faad', desc: 'Dermatologist, FAAD', img: '/images/providers/latin.png' },
      { label: 'Alex Harris, MS PA-C', href: '/providers/alex-harris-ms-pa-c', desc: 'Physician Assistant', img: '/images/DSC00585-scaled.jpg' },
      { label: 'Mayriel Oliver, FNP-C', href: '/providers/mayriel-oliver-fnp-c', desc: 'Nurse Practitioner', img: '/images/providers/oliver.png' },
    ],
  },
  { label: 'Telemedicine', href: '/telemedicine' },
  {
    label: 'Blog',
    href: '/blog',
    children: [{ label: 'Testimonials', href: '/testimonials' }],
  },
  {
    label: 'Locations',
    href: '/locations',
    children: [
      { label: 'Pearland', href: '/locations/pearland', desc: '3609 Business Center Drive, Suite 124', img: '/images/Reception-scaled-e1761820773898.jpg' },
      { label: 'Houston', href: '/locations/houston', desc: '4101 Greenbriar Drive, Suite 305', img: '/images/Reception2-scaled-e1761820757334.jpg' },
      { label: 'Kingwood', href: '/locations/kingwood', desc: '350 Kingwood Medical Drive, Suite 150', img: '/images/Reception3-scaled-e1761820954250.jpg' },
    ],
  },
];

export const heroLines = [
  { word: 'age', sub: 'From a child’s first rash to a lifelong skin check, one team cares for the whole family.' },
  { word: 'skin', sub: 'Medical, surgical and cosmetic treatments, planned around your skin and your goals.' },
  { word: 'family', sub: 'Three clinics across Pearland, Houston and Kingwood, with same-day appointments.' },
];

export const services = [
  {
    title: 'Mohs Surgery',
    desc: 'Precise skin cancer removal that protects healthy tissue.',
    href: '/services/mohs-surgery',
    img: '/images/stock/mohs.jpg',
  },
  {
    title: 'Acne',
    desc: 'Clear, steady plans for teens and adults.',
    href: '/services/acne',
    img: '/images/stock/acne.jpg',
  },
  {
    title: 'Botox',
    desc: 'Soften lines while you still look like you.',
    href: '/services/botox',
    img: '/images/stock/botox.jpg',
  },
  {
    title: 'Fillers',
    desc: 'Restore volume and smooth deeper folds.',
    href: '/services/fillers',
    img: '/images/stock/fillers.jpg',
  },
  {
    title: 'Chemical Peels',
    desc: 'Renew tone, texture and glow.',
    href: '/services/chemical-peels',
    img: '/images/stock/peels.jpg',
  },
  {
    title: 'Pediatric Dermatology',
    desc: 'Gentle skin care for babies, kids and teens.',
    href: '/services/pediatric-dermatology',
    img: '/images/pediatric-dermatology/a.jpg',
  },
];

export const providers = [
  {
    name: 'Joseph Sedrak, MD',
    short: 'Dr. Sedrak',
    role: 'Board Certified Dermatologist & Board Certified Mohs Surgeon',
    note: 'Over 10 years of experience and more than 10,000 skin cancers treated.',
    badges: ['Board Certified', 'Mohs Surgeon', 'Fellow, AAD & ACMS'],
    href: '/providers/joseph-sedrak-md',
    img: '/images/DSC05714-scaled-e1761816920234.jpg',
    pos: '50% 18%',
  },
  {
    name: 'Jonathan Aldrete, MD',
    short: 'Dr. Aldrete',
    role: 'Board-Certified Dermatologist',
    note: 'Medical and cosmetic dermatology for adults and children.',
    badges: ['Board Certified', 'Dermatology'],
    href: '/providers/jonathan-aldrete-md',
    img: '/images/providers/aldrete.png',
    pos: '50% 15%',
  },
  {
    name: 'Whitney Latin, MD, FAAD',
    short: 'Dr. Latin',
    role: 'Board Certified Dermatologist & Fellow of the American Academy of Dermatology',
    note: 'Comprehensive medical, surgical and cosmetic skin care.',
    badges: ['Board Certified', 'Fellow, AAD'],
    href: '/providers/whitney-latin-md-faad',
    img: '/images/providers/latin.png',
    pos: '50% 15%',
  },
  {
    name: 'Alex Harris, MS PA-C',
    short: 'Alex Harris',
    role: 'Certified Physician Assistant',
    note: 'Skin checks, acne care and everyday dermatology.',
    badges: ['PA-C', 'Physician Assistant'],
    href: '/providers/alex-harris-ms-pa-c',
    img: '/images/DSC00585-scaled.jpg',
    pos: '50% 18%',
  },
  {
    name: 'Mayriel Oliver, FNP-C',
    short: 'Mayriel Oliver',
    role: 'Certified Family Nurse Practitioner',
    note: 'Friendly, whole-family dermatology care.',
    badges: ['FNP-C', 'Nurse Practitioner'],
    href: '/providers/mayriel-oliver-fnp-c',
    img: '/images/providers/oliver.png',
    pos: '50% 15%',
  },
];

// 15 insurance logos from the current website (saved in /public/insurance)
export const insuranceIds = [
  '2614660', '2272134', '2194885', '2206449', '1779364',
  '1771875', '1771832', '2724921', '1789377', '1789416',
  '1790953', '1771774', '1771704', '2503723', '1778060',
];
export const insuranceLogos = insuranceIds.map((id) => `/insurance/${id}.png`);

export const testimonials = [
  { quote: 'The Doctor was very knowledgeable and professional. He treated my issue immediately which put me at ease.', name: 'Sandra R.' },
  { quote: 'The first time I fully understood dermatology lingo. I have been to many others & they just come in & say big words & take this medicine & I’m on my way. Best Visit!', name: 'Elizabeth S.' },
  { quote: 'The doctor & his staff are first class. Very professional & considerate. Very helpful with any questions and concerns. Highly recommend!', name: 'Mike C.' },
  { quote: 'Best experience by far for a medical appt. Scheduling was quick and easy. The shortest wait time. Alex and all the women there are super sweet! 10/10 would recommend to all family and friends!', name: 'Samantha S.' },
];

export const posts = [
  {
    title: 'Where to Get Juvederm Lip Fillers in Pearland 77584: Expert Lip Augmentation',
    date: 'August 17, 2026',
    href: `${OLD}/where-to-get-juvederm-lip-fillers-in-pearland-77584-expert-lip-augmentation/`,
    img: `${OLD}/wp-content/uploads/2026/08/pexels-farhadirani-34775440-scaled.jpg`,
  },
  {
    title: 'How Long Does It Take to Get a Dermatologist Appointment in Texas?',
    date: 'May 29, 2026',
    href: `${OLD}/how-long-does-it-take-to-get-a-dermatologist-appointment-in-texas/`,
    img: '/images/DSC05723-1-scaled-e1761843955868.jpg',
  },
  {
    title: 'Who Is the Best Dermatologist Near Me Who Takes My Insurance?',
    date: 'May 29, 2026',
    href: `${OLD}/who-is-the-best-dermatologist-near-me-who-takes-my-insurance/`,
    img: '/images/DSC00616-scaled-1-e1768836927658.jpg',
  },
];

export const locations = [
  {
    id: 'pearland',
    city: 'Pearland',
    line1: '3609 Business Center Drive, Suite 124',
    line2: 'Pearland, TX 77584',
    img: '/images/Reception-scaled-e1761820773898.jpg',
  },
  {
    id: 'houston',
    city: 'Houston',
    line1: '4101 Greenbriar Drive, Suite 305',
    line2: 'Houston, TX 77098',
    img: '/images/Reception2-scaled-e1761820757334.jpg',
  },
  {
    id: 'kingwood',
    city: 'Kingwood',
    line1: '350 Kingwood Medical Drive, Suite 150',
    line2: 'Kingwood, TX 77339',
    img: '/images/Reception3-scaled-e1761820954250.jpg',
  },
];

export const media = {
  logo: '/images/logo-e1760456309989.png',
  aboutMain: '/images/DSC00535-scaled.jpg',
  aboutSmall: '/images/DSC00474-scaled-e1768574676783.jpg',
  parallax: '/images/DSC05785-2-scaled-e1761828647427.jpg',
  group: '/images/DSC00535-scaled.jpg',
  texas: '/images/stock/texas.jpg',
  heroVideo: '/videos/hero-web.mp4',
  heroPoster: '/videos/hero-poster.jpg',
};

export const gallery = [
  { image: '/images/gallery/g4.jpg', title: 'A warm welcome', description: 'Friendly faces greet you at every visit.', badge: 'Our team', pos: '50% 22%' },
  { image: '/images/gallery/g5.jpg', title: 'Careful skin checks', description: 'Unhurried exams with time for your questions.', badge: 'Patient care', pos: '50% 35%' },
  { image: '/images/gallery/g1.jpg', title: 'Planning your care', description: 'Every plan starts with a team conversation.', badge: 'Behind the scenes', pos: '25% 30%' },
  { image: '/images/gallery/g6.jpg', title: 'Clear explanations', description: 'We walk you through each step, in plain words.', badge: 'Exam room', pos: '40% 35%' },
  { image: '/images/gallery/g3.jpg', title: 'Precise and gentle', description: 'Careful work, from sample to result.', badge: 'In the clinic', pos: '60% 30%' },
  { image: '/images/gallery/g2.jpg', title: 'Working together', description: 'Doctors and staff share one chart and one goal.', badge: 'Teamwork', pos: '50% 30%' },
  { image: '/images/gallery/g7.jpg', title: 'Easy check-in', description: 'Quick scheduling and a short wait.', badge: 'Front desk', pos: '50% 30%' },
  { image: '/images/gallery/g8.jpg', title: 'Here to help', description: 'Questions answered, in person or by phone.', badge: 'Support', pos: '50% 25%' },
];

// Nearby areas are a draft: please have the practice confirm them.
export const acneNearby: Record<string, string> = {
  pearland: 'Patients are welcome from across Friendswood, Alvin, Manvel, Brookside Village, Webster and the greater Brazoria County area.',
  houston: 'Patients are welcome from across River Oaks, Montrose, Rice Village, Bellaire, West University Place and the greater Harris County area.',
  kingwood: 'Patients are welcome from across Humble, Atascocita, Porter, New Caney, Huffman and the greater Harris County area.',
};

export const generalNearby = 'Serving patients across Pearland, Houston and Kingwood, including Friendswood, Alvin, Bellaire, River Oaks, Humble, Atascocita and the greater Houston area.';

// Clinic hours (from public business listings, please confirm with the practice)
export const CLINIC_TZ = 'America/Chicago';
export const clinicHours = [
  { day: 'Monday', open: '08:00', close: '17:00' },
  { day: 'Tuesday', open: '08:00', close: '17:00' },
  { day: 'Wednesday', open: '08:00', close: '17:00' },
  { day: 'Thursday', open: '08:00', close: '17:00' },
  { day: 'Friday', open: '08:00', close: '17:00' },
  { day: 'Saturday', open: null, close: null },
  { day: 'Sunday', open: null, close: null },
] as { day: string; open: string | null; close: string | null }[];
