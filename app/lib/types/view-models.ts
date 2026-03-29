export type LinkData = {
  label: string;
  href: string;
};

export type HeroData = {
  title: string;
  subtitle?: string;
  primaryCta?: LinkData;
  secondaryCta?: LinkData;
};

export type ArtworkCardData = {
  id: string;
  title: string;
  imageUrl: string;
};

export type CollectionCardData = {
  id: string;
  title: string;
  description?: string;
};

export type SectionHeadingData = {
  title: string;
  subtitle?: string;
};

export type CTABlockData = {
  title: string;
  text?: string;
  primaryCta?: LinkData;
  secondaryCta?: LinkData;
};

export type HomePageViewData = {
  hero: HeroData;

  featuredArtworksSection?: {
    heading: SectionHeadingData;
    artworks: ArtworkCardData[];
  };

  symbolicExplanationSection?: {
    heading: SectionHeadingData;
    body?: string;
  };

  collectionsSection?: {
    heading: SectionHeadingData;
    collections: CollectionCardData[];
  };

  customCtaSection?: CTABlockData;
  contactCtaSection?: CTABlockData;
};