import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Services',
      links: [
        {
          text: 'Services overview',
          href: getPermalink('/services'),
        },
        {
          text: 'Provider transfer',
          href: getPermalink('/services/provider-transfer'),
        },
      ],
    },
    {
      text: 'Ask the Owl',
      href: getPermalink('/ask-the-owl'),
    },
    {
      text: 'Field Guide',
      href: getPermalink('/bad-seo-field-guide'),
    },
    {
      text: 'Impact',
      href: getPermalink('/impact'),
    },
    {
      text: 'Work',
      href: getPermalink('/work'),
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
  actions: [{ text: 'Get a Growth Audit', href: getPermalink('/contact') }],
};

export const footerData = {
  links: [
    {
      title: 'Services',
      links: [
        { text: 'Services overview', href: getPermalink('/services') },
        { text: 'Provider transfer', href: getPermalink('/services/provider-transfer') },
        { text: 'Pricing', href: getPermalink('/pricing') },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
    {
      title: 'Learn',
      links: [
        { text: 'Ask the Owl', href: getPermalink('/ask-the-owl') },
        { text: 'Dictionary', href: getPermalink('/ask-the-owl/dictionary') },
        { text: 'Bad SEO Field Guide', href: getPermalink('/bad-seo-field-guide') },
        { text: 'Impact', href: getPermalink('/impact') },
      ],
    },
    {
      title: 'Studio',
      links: [
        { text: 'Work', href: getPermalink('/work') },
        { text: 'About', href: getPermalink('/about') },
        { text: 'Email hello@bohodigitalservices.com', href: 'mailto:hello@bohodigitalservices.com' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [],
  footNote: `
    Bohemian creativity. Search-engine precision. Organic growth, engineered beautifully.
  `,
};
