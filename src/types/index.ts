export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: 'Data Science & ML' | 'UI/UX & Web';
  featured: boolean;
  image: string;
  tags: string[];
  duration: string;
  role: string;
  githubUrl?: string;
  liveUrl?: string;
  overview: string;
  problem: string;
  targetAudience: string[];
  keyFeatures: {
    title: string;
    description: string;
    icon?: string;
  }[];
  architecture: {
    overview: string;
    techStack: string[];
    details: string[];
  };
  myContributions: string[];
  designAndUX: {
    philosophy: string;
    decisions: string[];
    userFlows?: string[];
  };
  evaluationAndResults?: {
    metricsSummary?: string;
    metrics?: {
      label: string;
      value: string;
      subtext?: string;
    }[];
    observations: string[];
  };
  limitationsAndFuture: {
    limitations: string[];
    futureRoadmap: string[];
  };
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: string;
    experience: string;
    tags: string[];
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  badge?: string;
  description: string;
  responsibilities: string[];
  highlights: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: 'Certification' | 'Leadership' | 'Academic' | 'Competition';
  description: string;
  credentialUrl?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
