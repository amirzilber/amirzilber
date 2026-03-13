export type PricingTier = {
  name: string;
  price: string;
  blurb: string;
  cta: string;
  features: string[];
  highlighted?: boolean;
};

export type EnvironmentItem = {
  id: string;
  title: string;
  genre: string;
  useCase: string;
  unrealVersion: string;
  resolution: string;
  tags: string[];
  priceLabel: string;
  compat: ('OBS' | 'vMix' | 'NDI' | 'Singular')[];
  status?: 'Ready' | 'Generating' | 'Needs Review';
};

export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
};

export type DocSection = {
  title: string;
  items: string[];
};
