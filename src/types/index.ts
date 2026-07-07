export interface Profile {
  name: string;
  title: string;
  subtitle: string;
  description: string;
  email: string;
  linkedin: string;
  github: string;
  heroImage: string;
}

export interface Skill {
  id: string;
  name: string;
  category: string;
  level: number;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
  technologies: string[];
  category: 'web' | 'mobile' | 'uiux' | 'data' | 'other';
  githubLink: string;
  demoLink: string;
}

export interface Contact {
  email: string;
  linkedin: string;
  github: string;
}

export interface BlogArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  category: string;
}
