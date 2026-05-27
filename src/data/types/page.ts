export type PageSection = 
  | { type: 'Hero'; data: HeroSectionData }
  | { type: 'Technologies'; data: TechnologiesSectionData }
  | { type: 'GenericSection'; data: GenericSectionData }
  | { type: 'MyRole'; data: MyRoleSectionData }
  | { type: 'Gallery'; data: GallerySectionData }
  | { type: 'Videos'; data: VideosSectionData }


export interface HeroSectionData {
  image: string;
  title: string;
  description: string;
  roles: string[];
}

export interface TechnologiesSectionData {
  technologies: string[];
}


export interface MyRoleSectionData {
  content: string;
  variant?: 'default' | 'gradient' | 'card';
}

export interface GallerySectionData {
  images: string[];
  title: string;
}

export interface VideosSectionData {
  videos: Array<{
    videoId: string;
    title: string;
    icon?: string;
  }>;
}

export interface GenericSectionData {
  title: string;
  content: string[];
  icon?: string;
}