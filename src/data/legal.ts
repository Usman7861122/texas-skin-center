export const LEGAL_UPDATED = 'November 5, 2026';

export interface LegalSection { h: string; p?: string[]; ul?: string[] }
export interface LegalDoc { slug: string; title: string; short: string; desc: string; intro: string; sections: LegalSection[] }

const contact: LegalSection = {
  h: 'Contact us',
  p: ['Questions about this page? Call 346-888-4400 or write to us through the Contact page. You can also visit any clinic in Pearland, Houston or Kingwood, TX.'],
};

export const legal: LegalDoc[] = [
  {
    slug: 'privacy-policy',
    title: 'Privacy Policy',
    short: 'Privacy',
    desc: 'How Texas Skin Center collects, uses and protects information from visitors to this website.',
    intro: 'This policy explains what information we collect on this website, why we collect it and the choices you have. It covers the website only. How we handle your medical records is described in our Notice of Privacy Practices.',
    sections: [
      { h: 'Information we collect', p: ['We collect only what we need to run the site and answer you.'], ul: [
        'Details you give us, such as your name, email, phone number and message when you use the contact form.',
        'Technical details, such as your browser, device, pages visited and approximate location, if you allow analytics cookies.',
        'Your cookie choices, which we save so we do not ask you again.'] },
      { h: 'Please keep medical details off forms', p: ['Our website forms are not a secure way to share health information. Do not send diagnoses, photos or test results through them. Call us or use the patient portal your clinic gives you.'] },
      { h: 'How we use information', ul: [
        'To reply to your questions and help you book a visit.',
        'To keep the site secure and working well.',
        'To understand which pages are helpful, if you allow analytics.',
        'To meet legal duties.'] },
      { h: 'Sharing', p: ['We do not sell your personal information. We share it only with service providers who help us run the site (for example hosting, email and analytics), and only as needed. We may also share it when the law requires.'] },
      { h: 'Cookies', p: ['We use cookies as described in our Cookie Policy. You can change your choices at any time with the Cookie settings button in the footer.'] },
      { h: 'Your choices', ul: [
        'Ask us what personal information from this website we hold about you, or ask us to correct or delete it.',
        'Opt out of analytics and marketing cookies in Cookie settings.',
        'Use a browser setting or Global Privacy Control signal. We treat it as a request to reject non-essential cookies.'] },
      { h: 'Keeping information safe', p: ['We use reasonable technical and organizational safeguards. No website can promise perfect security.'] },
      { h: 'Children', p: ['This website is for adults, including parents and guardians who book care for a child. We do not knowingly collect information from children through the site.'] },
      { h: 'Changes', p: ['We may update this policy. The date at the top shows the latest version.'] },
      contact,
    ],
  },
  {
    slug: 'terms-condition',
    title: 'Terms & Conditions',
    short: 'Terms',
    desc: 'The terms for using the Texas Skin Center website.',
    intro: 'By using this website you agree to these terms. If you do not agree, please do not use the site.',
    sections: [
      { h: 'For information only', p: ['Content on this site is general information. It is not medical advice and does not create a doctor and patient relationship. Only a visit with one of our providers can do that.'] },
      { h: 'In an emergency', p: ['If you think you have a medical emergency, call 911 or go to the nearest emergency room. Do not use this site or its forms for urgent needs.'] },
      { h: 'Results vary', p: ['Photos, stories and testimonials show individual experiences. Your results can be different, and every treatment has risks that your provider will explain.'] },
      { h: 'Appointments and online payments', p: ['Booking and bill payment use separate services. Their own terms apply on those pages. Please check your appointment details with the clinic.'] },
      { h: 'Using the site', ul: [
        'Do not misuse the site, try to break into it or collect data from it with automated tools.',
        'Do not post or send anything unlawful, harmful or untrue.'] },
      { h: 'Our content', p: ['The text, images, logo and design on this site belong to Texas Skin Center or our licensors. You may view and print pages for personal use. Please ask before you copy or reuse them.'] },
      { h: 'Links to other sites', p: ['We link to other sites for your convenience. We do not control them and are not responsible for what they say or do.'] },
      { h: 'No warranty and limits on liability', p: ['The site is provided "as is". To the fullest extent the law allows, Texas Skin Center is not liable for harm that comes from using the site.'] },
      { h: 'Governing law', p: ['These terms are governed by the laws of the State of Texas. Any dispute will be handled in the courts of Texas.'] },
      { h: 'Changes', p: ['We may update these terms. Using the site after a change means you accept the new version.'] },
      contact,
    ],
  },
  {
    slug: 'cookie-policy',
    title: 'Cookie Policy',
    short: 'Cookies',
    desc: 'The cookies Texas Skin Center uses and how to control them.',
    intro: 'Cookies are small files a website saves on your device. This page explains the kinds we use. You are in control: change your choices at any time.',
    sections: [
      { h: 'Types of cookies', ul: [
        'Strictly necessary: keep the site secure, make forms work and remember your cookie choice. These are always on.',
        'Preferences: remember settings you pick. Off until you allow them.',
        'Analytics: show us how the site is used so we can improve it. Off until you allow them.',
        'Marketing: help measure ads and show relevant information. Off until you allow them.'] },
      { h: 'Our cookie choice', p: ['We save your choice for 180 days in your browser, in a cookie and in local storage, both named tsc-consent-v1. After that we will ask again.'] },
      { h: 'Third parties', p: ['Google Maps on our clinic pages and any booking or payment pages may set their own cookies. Please read their policies.'] },
      { h: 'Change your choices', p: ['Use the Cookie settings button at the bottom of any page. You can also delete cookies in your browser settings, or turn on Global Privacy Control, which we treat as a request to reject non-essential cookies.'] },
      contact,
    ],
  },
  {
    slug: 'notice-of-privacy-practices',
    title: 'Notice of Privacy Practices',
    short: 'HIPAA notice',
    desc: 'How medical information about you may be used and shared, and how you can get access to it.',
    intro: 'This notice describes how medical information about you may be used and shared, and how you can get access to this information. Please review it carefully. It applies to all Texas Skin Center clinics.',
    sections: [
      { h: 'Our duties', ul: [
        'We keep your health information private and secure.',
        'We tell you if a breach puts your information at risk.',
        'We follow the practices in this notice and give you a copy on request.'] },
      { h: 'How we may use and share your information', ul: [
        'Treatment: with other providers who care for you, such as a lab or a specialist.',
        'Payment: to bill you or your insurance company.',
        'Health care operations: to run our clinics, train staff and improve quality.',
        'As required by law: for public health, safety, court orders and similar duties.'] },
      { h: 'Other uses need your permission', p: ['For uses such as marketing, or sharing notes about counseling, we ask for your written permission first. You can cancel that permission at any time in writing.'] },
      { h: 'Your rights', ul: [
        'See and get a copy of your record.',
        'Ask us to correct information you think is wrong.',
        'Ask us to contact you in a certain way or place.',
        'Ask us to limit what we share. You may restrict sharing with your health plan if you pay in full for a service yourself.',
        'Receive a list of certain times we have shared your information.',
        'Get a paper copy of this notice.',
        'Choose someone to act for you.'] },
      { h: 'Complaints', p: ['If you think your rights were not respected, tell us. You can also file a complaint with the U.S. Department of Health and Human Services Office for Civil Rights. We will not punish you for filing a complaint.'] },
      { h: 'Changes to this notice', p: ['We may change this notice and the new terms will apply to all information we hold. The current version is posted at each clinic and on this page.'] },
      { h: 'Privacy contact', p: ['To use your rights or ask a question, call 346-888-4400 or ask at the front desk of any clinic.'] },
    ],
  },
  {
    slug: 'accessibility-statement',
    title: 'Accessibility Statement',
    short: 'Accessibility',
    desc: 'Texas Skin Center works to make this website usable for everyone.',
    intro: 'We want everyone to use our website, including people who use screen readers, keyboards or other tools. We aim to follow the Web Content Accessibility Guidelines (WCAG) 2.1 level AA.',
    sections: [
      { h: 'What we do', ul: [
        'Use clear headings, labels and link text.',
        'Make menus, forms and buttons work with a keyboard.',
        'Show a visible focus outline.',
        'Add text descriptions to images.',
        'Respect the reduced motion setting on your device.',
        'Keep text readable against its background.'] },
      { h: 'Known limits', p: ['Some content we link to, such as the booking service, the payment page and embedded maps, is run by other companies. We cannot control all of its accessibility.'] },
      { h: 'Tell us if you have trouble', p: ['If something on this site is hard to use, please tell us. We will help you by phone or in person, and we will work to fix the problem.'] },
      contact,
    ],
  },
];
export const legalBySlug = Object.fromEntries(legal.map((l) => [l.slug, l]));
