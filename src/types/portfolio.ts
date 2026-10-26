export interface SkillItem {
  id: string;
  title: string;
  icon: string;
  desc: string;
  enabled?: boolean;
}

export interface ProjectItem {
  id: string;
  category: 'installations' | 'distribution' | 'maintenance' | 'control' | 'efficiency' | 'design' | string;
  categoryLabel: string;
  title: string;
  description: string;
  role: string;
  tech: string;
  outcome: string;
  image?: string;
}

export interface JourneyMilestone {
  id: string;
  year: string;
  type: string;
  title: string;
  organization: string;
  desc: string;
}

export interface SocialLinks {
  instagram: string;
  facebook: string;
  linkedin: string;
  github: string;
}

export interface UserProfileState {
  name: string;
  profession: string;
  currentLocation: string;
  nationality: string;
  homeRegion: string;
  locality: string;
  localityDetail: string;
  photoUrl: string;
  heroDescription: string;
  aboutIntro: string;
  email: string;
  whatsapp: string;
  social: SocialLinks;
  skills: SkillItem[];
  projects: ProjectItem[];
  journey: JourneyMilestone[];
}
