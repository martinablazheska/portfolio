type headerLinkType = {
  id: number;
  title: string;
  scrollTo: string;
};

export const headerLinks: headerLinkType[] = [
  { id: 1, title: "home", scrollTo: "root" },
  { id: 2, title: "skills", scrollTo: "skills" },
  { id: 3, title: "projects", scrollTo: "projects" },
  { id: 4, title: "about", scrollTo: "about" },
  { id: 5, title: "contact", scrollTo: "about" },
];
