export interface ServiceCard {
  title: string;
  description: string;
  icon: string;
  href?: string;
}

export interface DictionaryTerm {
  term: string;
  category: string;
  definition: string;
  href?: string;
}

export const featureStrip = [
  {
    title: 'Technical SEO',
    description: 'Structural cleanup, crawl paths, indexing, metadata, and steadier site health.',
    icon: 'tabler:binary-tree-2',
  },
  {
    title: 'Content ecosystems',
    description: 'Service pages, clusters, internal links, and content that compounds instead of sprawling.',
    icon: 'tabler:hierarchy-3',
  },
  {
    title: 'Provider transfers',
    description: 'Access inventory, redirects, DNS, hosting moves, and calmer migration planning.',
    icon: 'tabler:route-square-2',
  },
  {
    title: 'Plain-English reporting',
    description: 'Measurement and next steps explained clearly, without dashboard theater.',
    icon: 'tabler:chart-dots-3',
  },
];

export const serviceCards: ServiceCard[] = [
  {
    title: 'SEO Growth Audit',
    description: 'A clear map of where your search presence stands, what is holding it back, and what to fix first.',
    icon: 'tabler:map-search',
  },
  {
    title: 'Technical SEO Cleanup',
    description: 'Fix crawlability, indexing, metadata, redirects, internal links, performance, and site health issues.',
    icon: 'tabler:stethoscope',
  },
  {
    title: 'Content Ecosystem Buildout',
    description: 'Search-led content plans, service pages, topic clusters, briefs, and internal linking strategy.',
    icon: 'tabler:brand-pagekit',
  },
  {
    title: 'Local SEO Foundation',
    description: 'Google Business Profile, local pages, review strategy, citations, and location visibility.',
    icon: 'tabler:map-pin',
  },
  {
    title: 'Website Optimization',
    description: 'Improve page structure, messaging, CTAs, trust signals, and conversion paths.',
    icon: 'tabler:layout-dashboard',
  },
  {
    title: 'Analytics & Reporting',
    description: 'Measurement setup, Search Console review, dashboards, and plain-English reporting.',
    icon: 'tabler:chart-line',
  },
  {
    title: 'AI-Assisted Workflows',
    description: 'Research, ideation, drafting, analysis, and optimization with human judgment in charge.',
    icon: 'tabler:sparkles',
  },
  {
    title: 'SEO & Hosting Provider Transfer',
    description: 'Move away from old providers with access inventory, migration planning, DNS support, redirects, and QA.',
    icon: 'tabler:switch-2',
    href: '/services/provider-transfer/',
  },
  {
    title: 'Monthly Growth Retainer',
    description: 'Ongoing SEO, content, reporting, technical monitoring, and continuous improvement.',
    icon: 'tabler:calendar-stats',
  },
];

export const providerTransferSteps = [
  {
    title: 'Inventory',
    description: 'Find the actual accounts, platforms, logins, files, and vendors in the current stack.',
    icon: 'tabler:number-1',
  },
  {
    title: 'Preserve',
    description: 'Identify the URLs, analytics views, forms, and search signals that cannot be lost.',
    icon: 'tabler:number-2',
  },
  {
    title: 'Plan',
    description: 'Document redirects, DNS changes, hosting moves, timing, and ownership handoff responsibilities.',
    icon: 'tabler:number-3',
  },
  {
    title: 'Move',
    description: 'Execute the transfer carefully instead of improvising at the registrar or launch screen.',
    icon: 'tabler:number-4',
  },
  {
    title: 'Verify',
    description: 'Check traffic paths, redirects, Search Console, analytics, and page behavior after launch.',
    icon: 'tabler:number-5',
  },
  {
    title: 'Document',
    description: 'Leave the owner with clearer records after the move than before it.',
    icon: 'tabler:number-6',
  },
];

export const providerTransferFaqs = [
  {
    title: 'What if we only have part of the login trail?',
    description:
      'That is common. The first stage is often figuring out what exists, what is missing, and what matters first.',
  },
  {
    title: 'Can you work alongside our developer or host?',
    description:
      'Yes. Boho can keep the map for search, tracking, redirects, and handoff quality while other technical work moves in parallel.',
  },
  {
    title: 'Does this stop at launch?',
    description:
      'No. Transfer work is not finished until the search, tracking, and ownership layers are checked after the move.',
  },
];

export const dictionaryTerms: DictionaryTerm[] = [
  {
    term: 'SEO',
    category: 'SEO Basics',
    definition: 'The practice of improving how easily the right people can find your site in search.',
  },
  {
    term: 'Technical SEO',
    category: 'SEO Basics',
    definition: 'The under-the-hood setup that helps search engines crawl, understand, and trust a website.',
  },
  {
    term: 'Crawlability',
    category: 'SEO Basics',
    definition: 'How easily search engines can discover and move through your pages.',
  },
  {
    term: 'Indexing',
    category: 'SEO Basics',
    definition: 'The step where a search engine decides a page is worth storing and showing in results.',
  },
  {
    term: 'Content cluster',
    category: 'Content Strategy',
    definition: 'A group of related pages that support a core topic or service from different angles.',
  },
  {
    term: 'Search intent',
    category: 'Content Strategy',
    definition: 'The reason someone is making a search in the first place, beyond the literal words used.',
  },
  {
    term: 'Google Search Console',
    category: 'Analytics & Reporting',
    definition: "Google's own visibility and indexing dashboard for site owners.",
  },
  {
    term: 'Vanity metrics',
    category: 'Analytics & Reporting',
    definition: 'Numbers that look impressive without helping a team make better decisions.',
  },
  {
    term: 'DNS',
    category: 'Provider Transfers',
    definition: 'The routing layer that connects your domain name to the services that actually run your website and email.',
  },
  {
    term: 'Hosting provider',
    category: 'Provider Transfers',
    definition: 'The company that serves your website files or application to visitors.',
  },
  {
    term: 'Redirect map',
    category: 'Provider Transfers',
    definition: 'A list showing which old URLs should point to which new URLs during a migration.',
  },
  {
    term: 'SEO migration',
    category: 'Provider Transfers',
    definition: 'The planning work that protects visibility while a site changes platforms, structure, or providers.',
  },
  {
    term: 'Provider lock-in',
    category: 'Provider Transfers',
    definition: 'When a vendor makes it unnecessarily hard to leave, transfer, or access your own setup.',
    href: '/services/provider-transfer/',
  },
  {
    term: 'AI-assisted workflow',
    category: 'AI & Digital Tools',
    definition: 'A workflow that uses automation and language tools to reduce drag around research, drafting, sorting, or analysis.',
  },
  {
    term: 'Link farm',
    category: 'Bad SEO / Fox Traps',
    definition: 'A low-quality network created mainly to manufacture backlinks instead of real trust.',
  },
  {
    term: 'Guaranteed rankings',
    category: 'Bad SEO / Fox Traps',
    definition: 'A promise of search outcomes nobody can honestly control.',
  },
  {
    term: 'Black-box SEO',
    category: 'Bad SEO / Fox Traps',
    definition: 'SEO work described so vaguely that no one can tell what is being done or why.',
  },
  {
    term: 'Private blog network',
    category: 'Bad SEO / Fox Traps',
    definition: 'A network of sites built mainly to pass authority signals rather than publish trustworthy content.',
  },
  {
    term: 'Climate-aware workflow',
    category: 'Climate & Digital Footprint',
    definition: 'A workflow that aims to reduce unnecessary digital waste while staying honest about the footprint of modern tools.',
  },
];

export const warningCards = [
  {
    title: 'Guaranteed rankings',
    description: 'Search engines do not sell fixed outcomes to agencies, so this promise should trigger questions immediately.',
  },
  {
    title: 'Link farms',
    description: 'Artificial backlink schemes create fake-looking authority signals that can damage trust instead of building it.',
  },
  {
    title: 'Vanity metrics',
    description: 'If a report is full of sparkle and short on decisions, it is performance theater, not stewardship.',
  },
  {
    title: 'Provider lock-in',
    description: 'If leaving feels strangely difficult, the vendor relationship is already carrying unnecessary risk.',
  },
  {
    title: 'Black-box SEO',
    description: 'Vague language about strategy often hides the absence of a real plan or useful documentation.',
  },
  {
    title: 'Private blog networks',
    description: 'Manufactured authority shortcuts are still shortcuts, even when they arrive wearing technical vocabulary.',
  },
];
