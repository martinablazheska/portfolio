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
  description?: string;
  projects?: Projects[];
};

export type Projects = {
  name: string;
};
