export interface ProviderPageData {
  slug: string;
  eyebrow: string;
  titleAccent: string;
  lead: string;
  imgA: { src: string; alt: string; pos: string };
  imgB?: { src: string; alt: string; pos: string };
  ctaLabel: string;
  stats?: { n: string; l: string }[];
  bioTitle: string;
  bio: string[];
  creds: { icon: 'stethoscope' | 'microscope' | 'award' | 'cap' | 'sparkle' | 'users'; tag: string; t: string; d: string }[];
  treats: { label: string; slug: string; d: string }[];
  mohs?: { title: string; intro: string; steps: { t: string; d: string }[] };
  metaDescription: string;
}

export const providerPages: ProviderPageData[] = [
  {
    slug: 'joseph-sedrak-md',
    ctaLabel: 'About Dr. Sedrak',
    eyebrow: 'Lead physician',
    titleAccent: 'Dermatologist & Mohs surgeon.',
    lead: 'Board certified in dermatology and Mohs surgery, with more than 10 years of experience and over 10,000 skin cancers treated.',
    imgA: { src: '/images/providers/sedrak-1.jpg', alt: 'Portrait of Dr. Joseph Sedrak in his Texas Skin Center scrubs', pos: '50% 22%' },
    imgB: { src: '/images/providers/sedrak-2.jpg', alt: 'Dr. Sedrak talking with a team member in the clinic hallway', pos: '30% 30%' },
    stats: [
      { n: '10+', l: 'Years of experience' },
      { n: '10,000+', l: 'Skin cancers treated' },
      { n: '2', l: 'Fellowships: AAD & ACMS' },
    ],
    bioTitle: 'Skin cancer expertise, with a caring hand',
    bio: [
      'Dr. Joseph Sedrak leads the team at Texas Skin Center. He is a board certified dermatologist and a board certified Mohs surgeon.',
      'He is a Fellow of the American Academy of Dermatology and a Fellow of the American College of Mohs Surgery. Over more than 10 years, he has treated over 10,000 skin cancers.',
      'Patients can expect clear answers, careful treatment and a plan that makes sense to them.',
    ],
    creds: [
      { icon: 'stethoscope', tag: 'Dermatology', t: 'Board certified dermatologist', d: 'Medical care for skin, hair and nails.' },
      { icon: 'microscope', tag: 'Mohs surgery', t: 'Board certified Mohs surgeon', d: 'Specialist training in precise skin cancer removal.' },
      { icon: 'award', tag: 'Fellowship', t: 'Fellow, American Academy of Dermatology', d: 'Recognized by the AAD (FAAD).' },
      { icon: 'cap', tag: 'Fellowship', t: 'Fellow, American College of Mohs Surgery', d: 'Recognized by the ACMS.' },
    ],
    treats: [
      { label: 'Actinic keratosis', slug: 'actinic-keratosis', d: 'Check and treat sun-damaged spots.' },
      { label: 'Acne', slug: 'acne', d: 'Clear, steady plans for teens and adults.' },
      { label: 'Rosacea', slug: 'rosacea', d: 'Reduce flushing and redness.' },
      { label: 'Eczema', slug: 'eczema', d: 'Calm dry, itchy skin.' },
      { label: 'Laser skin resurfacing', slug: 'laser-skin-resurfacing', d: 'Refresh sun-worn skin.' },
      { label: 'Botox', slug: 'botox', d: 'Soften lines naturally.' },
    ],
    mohs: {
      title: 'What is Mohs surgery?',
      intro: 'Mohs surgery is a careful way to remove certain skin cancers while saving as much healthy skin as possible.',
      steps: [
        { t: 'Remove a thin layer', d: 'The surgeon takes out the visible cancer with a very thin layer of skin around it.' },
        { t: 'Check it right away', d: 'The layer is studied under a microscope while you wait, so edges are checked on the same day.' },
        { t: 'Repeat if needed', d: 'If cancer cells remain, only that spot is treated again. Healthy skin is left alone.' },
        { t: 'Repair the area', d: 'When the edges are clear, the site is closed or healed in the way that suits it best.' },
      ],
    },
    metaDescription: 'Meet Joseph Sedrak, MD, board certified dermatologist and Mohs surgeon at Texas Skin Center in Pearland, Houston and Kingwood, TX. Over 10 years of experience and more than 10,000 skin cancers treated.',
  },
  {
    slug: 'jonathan-aldrete-md',
    eyebrow: 'Dermatologist',
    ctaLabel: 'About Dr. Aldrete',
    titleAccent: 'Board-certified dermatologist.',
    lead: 'Medical and cosmetic dermatology for adults and children, with clear answers and care that fits your life.',
    imgA: { src: '/images/providers/aldrete.png', alt: 'Portrait of Dr. Jonathan Aldrete in a white coat', pos: '50% 15%' },
    imgB: { src: '/images/providers/team.jpg', alt: 'The Texas Skin Center team gathered together in the clinic', pos: '50% 30%' },
    bioTitle: 'Skin care for the whole family',
    bio: [
      'Dr. Jonathan Aldrete is a board-certified dermatologist at Texas Skin Center.',
      'He provides medical and cosmetic dermatology for adults and children, from everyday skin concerns to treatments that help you feel more like yourself.',
      'Patients can expect a calm visit, plain-language answers and a plan they understand.',
    ],
    creds: [
      { icon: 'stethoscope', tag: 'Dermatology', t: 'Board-certified dermatologist', d: 'Medical care for skin, hair and nails.' },
      { icon: 'sparkle', tag: 'Cosmetic care', t: 'Medical and cosmetic dermatology', d: 'Care that supports both skin health and how you feel about your skin.' },
      { icon: 'users', tag: 'All ages', t: 'Adults and children', d: 'Gentle, patient care for every member of the family.' },
    ],
    treats: [
      { label: 'Acne', slug: 'acne', d: 'Clear, steady plans for teens and adults.' },
      { label: 'Eczema', slug: 'eczema', d: 'Calm dry, itchy skin.' },
      { label: 'Rosacea', slug: 'rosacea', d: 'Reduce flushing and redness.' },
      { label: 'Botox', slug: 'botox', d: 'Soften lines naturally.' },
      { label: 'Fillers', slug: 'fillers', d: 'Restore volume and folds.' },
      { label: 'Chemical peels', slug: 'chemical-peels', d: 'Renew tone and texture.' },
    ],
    metaDescription: 'Meet Jonathan Aldrete, MD, board-certified dermatologist at Texas Skin Center in Pearland, Houston and Kingwood, TX. Medical and cosmetic dermatology for adults and children.',
  },
  {
    slug: 'whitney-latin-md-faad',
    eyebrow: 'Dermatologist',
    ctaLabel: 'About Dr. Latin',
    titleAccent: 'Dermatologist & AAD Fellow.',
    lead: 'Comprehensive medical, surgical and cosmetic skin care from a board certified dermatologist.',
    imgA: { src: '/images/providers/latin.png', alt: 'Portrait of Dr. Whitney Latin in a white coat', pos: '50% 15%' },
    imgB: { src: '/images/providers/team.jpg', alt: 'The Texas Skin Center team gathered together in the clinic', pos: '50% 30%' },
    bioTitle: 'Complete skin care, from checks to cosmetics',
    bio: [
      'Dr. Whitney Latin is a board certified dermatologist and a Fellow of the American Academy of Dermatology (FAAD).',
      'She offers comprehensive medical, surgical and cosmetic skin care at Texas Skin Center.',
      'Patients can expect careful listening, clear explanations and treatment that suits their goals.',
    ],
    creds: [
      { icon: 'stethoscope', tag: 'Dermatology', t: 'Board certified dermatologist', d: 'Medical care for skin, hair and nails.' },
      { icon: 'award', tag: 'Fellowship', t: 'Fellow, American Academy of Dermatology', d: 'Recognized by the AAD (FAAD).' },
      { icon: 'sparkle', tag: 'Full-range care', t: 'Medical, surgical and cosmetic', d: 'One provider for skin health and skin goals.' },
    ],
    treats: [
      { label: 'Actinic keratosis', slug: 'actinic-keratosis', d: 'Check and treat sun-damaged spots.' },
      { label: 'Acne', slug: 'acne', d: 'Clear, steady plans for teens and adults.' },
      { label: 'Botox', slug: 'botox', d: 'Soften lines naturally.' },
      { label: 'Fillers', slug: 'fillers', d: 'Restore volume and folds.' },
      { label: 'Laser skin resurfacing', slug: 'laser-skin-resurfacing', d: 'Refresh sun-worn skin.' },
      { label: 'IPL treatment', slug: 'ipl-treatment', d: 'Even out redness and spots.' },
    ],
    metaDescription: 'Meet Whitney Latin, MD, FAAD, board certified dermatologist at Texas Skin Center in Pearland, Houston and Kingwood, TX. Medical, surgical and cosmetic skin care.',
  },
  {
    slug: 'alex-harris-ms-pa-c',
    eyebrow: 'Physician assistant',
    ctaLabel: 'About Alex',
    titleAccent: 'Certified physician assistant.',
    lead: 'Skin checks, acne care and everyday dermatology from a friendly, certified physician assistant.',
    imgA: { src: '/images/providers/harris.jpg', alt: 'Portrait of Alex Harris, physician assistant, in clinic scrubs', pos: '50% 20%' },
    imgB: { src: '/images/providers/team.jpg', alt: 'The Texas Skin Center team gathered together in the clinic', pos: '50% 30%' },
    bioTitle: 'Everyday skin care, done well',
    bio: [
      'Alex Harris, MS, PA-C, is a certified physician assistant at Texas Skin Center.',
      'Alex helps patients with skin checks, acne care and many other everyday skin concerns, and works closely with the dermatologists on the team.',
      'Patients can expect a warm visit and clear next steps.',
    ],
    creds: [
      { icon: 'award', tag: 'Certification', t: 'Certified Physician Assistant (PA-C)', d: 'A licensed provider who diagnoses and treats skin conditions.' },
      { icon: 'cap', tag: 'Education', t: 'Master of Science (MS)', d: 'Advanced training in medicine and patient care.' },
      { icon: 'stethoscope', tag: 'Focus', t: 'Skin checks and everyday dermatology', d: 'Acne, rashes, spots and other common concerns.' },
    ],
    treats: [
      { label: 'Acne', slug: 'acne', d: 'Clear, steady plans for teens and adults.' },
      { label: 'Actinic keratosis', slug: 'actinic-keratosis', d: 'Check and treat sun-damaged spots.' },
      { label: 'Eczema', slug: 'eczema', d: 'Calm dry, itchy skin.' },
      { label: 'Rosacea', slug: 'rosacea', d: 'Reduce flushing and redness.' },
      { label: 'Chemical peels', slug: 'chemical-peels', d: 'Renew tone and texture.' },
      { label: 'Hair loss (PRP)', slug: 'hair-loss-prp', d: 'Support thicker hair.' },
    ],
    metaDescription: 'Meet Alex Harris, MS, PA-C, certified physician assistant at Texas Skin Center in Pearland, Houston and Kingwood, TX. Skin checks, acne care and everyday dermatology.',
  },
  {
    slug: 'mayriel-oliver-fnp-c',
    eyebrow: 'Nurse practitioner',
    ctaLabel: 'About Mayriel',
    titleAccent: 'Family nurse practitioner.',
    lead: 'Friendly, whole-family dermatology care from a certified family nurse practitioner.',
    imgA: { src: '/images/providers/oliver.png', alt: 'Portrait of Mayriel Oliver, nurse practitioner, in a white coat', pos: '50% 15%' },
    imgB: { src: '/images/providers/team.jpg', alt: 'The Texas Skin Center team gathered together in the clinic', pos: '50% 30%' },
    bioTitle: 'Care for every age at home',
    bio: [
      'Mayriel Oliver, FNP-C, is a certified family nurse practitioner at Texas Skin Center.',
      'Mayriel offers friendly, whole-family dermatology care and works as part of our team of dermatologists and providers.',
      'Patients can expect time to ask questions and a plan that is easy to follow.',
    ],
    creds: [
      { icon: 'award', tag: 'Certification', t: 'Certified Family Nurse Practitioner (FNP-C)', d: 'A licensed provider trained to care for patients of all ages.' },
      { icon: 'users', tag: 'Whole family', t: 'Care for all ages', d: 'Skin care for children, teens and adults.' },
      { icon: 'stethoscope', tag: 'Dermatology', t: 'Everyday skin concerns', d: 'Rashes, acne, spots and more, with clear follow-up.' },
    ],
    treats: [
      { label: 'Eczema', slug: 'eczema', d: 'Calm dry, itchy skin.' },
      { label: 'Acne', slug: 'acne', d: 'Clear, steady plans for teens and adults.' },
      { label: 'Rosacea', slug: 'rosacea', d: 'Reduce flushing and redness.' },
      { label: 'Actinic keratosis', slug: 'actinic-keratosis', d: 'Check and treat sun-damaged spots.' },
      { label: 'Botox', slug: 'botox', d: 'Soften lines naturally.' },
      { label: 'Fillers', slug: 'fillers', d: 'Restore volume and folds.' },
    ],
    metaDescription: 'Meet Mayriel Oliver, FNP-C, certified family nurse practitioner at Texas Skin Center in Pearland, Houston and Kingwood, TX. Friendly, whole-family dermatology care.',
  },
];
