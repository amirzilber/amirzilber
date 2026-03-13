import { BlogPost, DocSection, EnvironmentItem, PricingTier } from '@/lib/types';

export const pricingTiers: PricingTier[] = [
  {
    name: 'Starter',
    price: '$79',
    blurb: 'For solo creators validating ideas fast.',
    cta: 'Start free trial',
    features: ['5 AI generations / month', '2 active broadcast profiles', 'Marketplace access']
  },
  {
    name: 'Pro',
    price: '$249',
    blurb: 'For agencies and stream teams running weekly productions.',
    cta: 'Upgrade to Pro',
    highlighted: true,
    features: ['40 AI generations / month', 'Advanced broadcast layer presets', 'Priority render queue']
  },
  {
    name: 'Studio',
    price: '$699',
    blurb: 'For studios scaling multi-show pipelines.',
    cta: 'Talk to sales',
    features: ['Unlimited generations', 'Team seats + approval workflow', 'Custom deployment support']
  }
];

export const environments: EnvironmentItem[] = [
  { id: '1', title: 'Neon Tokyo Plaza', genre: 'Cyberpunk', useCase: 'Music Live Set', unrealVersion: '5.4', resolution: '8K LED', tags: ['Night', 'Rain', 'LED'], priceLabel: '$149', compat: ['OBS', 'NDI', 'Singular'], status: 'Ready' },
  { id: '2', title: 'Financial News Atrium', genre: 'Corporate', useCase: 'Broadcast News', unrealVersion: '5.3', resolution: '4K LED', tags: ['Daylight', 'Minimal'], priceLabel: 'Included in Pro', compat: ['OBS', 'vMix', 'NDI'], status: 'Generating' },
  { id: '3', title: 'Futuristic Arena Desk', genre: 'Esports', useCase: 'Tournament Desk', unrealVersion: '5.4', resolution: '6K LED', tags: ['Dynamic', 'Branded'], priceLabel: '$199', compat: ['OBS', 'vMix', 'Singular'], status: 'Ready' },
  { id: '4', title: 'Luxury EV Showroom', genre: 'Product Launch', useCase: 'Advertising', unrealVersion: '5.4', resolution: '8K LED', tags: ['Reflection', 'Automotive'], priceLabel: '$249', compat: ['OBS', 'NDI', 'Singular'], status: 'Needs Review' }
];

export const blogPosts: BlogPost[] = [
  { id: 'b1', title: 'Why virtual production is moving beyond Hollywood', excerpt: 'Live creators now demand cinematic environments without blockbuster timelines.', category: 'Industry', date: 'Mar 2026', readTime: '6 min read' },
  { id: 'b2', title: 'How to build faster broadcast environments', excerpt: 'A practical workflow for setting up lower-thirds, overlays, and failover outputs.', category: 'Broadcast', date: 'Feb 2026', readTime: '8 min read' },
  { id: 'b3', title: 'AI in Unreal Engine pipelines', excerpt: 'Using AI prompts to produce production-ready worlds with consistent art direction.', category: 'AI Pipeline', date: 'Jan 2026', readTime: '7 min read' },
  { id: 'b4', title: 'Best practices for LED volume content', excerpt: 'Color management, parallax, and lens sync tips for reliable live operation.', category: 'LED Volume', date: 'Dec 2025', readTime: '9 min read' }
];

export const docSections: DocSection[] = [
  { title: 'Getting Started', items: ['Workspace setup', 'Create your first environment', 'Team roles'] },
  { title: 'Broadcast Outputs', items: ['NDI routing', 'OBS scenes', 'vMix mix buses'] },
  { title: 'Integration Guides', items: ['Singular.live overlays', 'Webhooks', 'REST API auth'] },
  { title: 'Environment Specs', items: ['Polygon budget', 'Texture atlas guide', 'Frame pacing'] },
  { title: 'FAQ', items: ['Billing and credits', 'License usage', 'Data retention'] }
];
