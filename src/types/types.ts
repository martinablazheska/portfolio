export type Skill = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

export type Technology = {
  title: string;
  progress: number;
  icon: React.ReactNode;
  categories?: string[];
  description: string;
  projects?: Project[];
};

export type Project = {
  name: string;
  description: string;
  challenge: string | string[];
  solution: string | string[];
  technologies: string[];
  skills: string[];
  repository?: string;
  deployment?: string;
  images?: string[];
};

export type Experience = {
  company: string;
  position: string;
  start: string;
  end: string;
  description: string;
  skills?: string[];
  projects?: string[];
  technologies?: string[];
};

export type Testimonial = {
  name: string;
  title: string;
  company: string;
  testimonial: string;
  image: string;
};

export type ContactLink = {
  name: string;
  link: string;
  icon: React.ReactNode;
  download?: string;
};
