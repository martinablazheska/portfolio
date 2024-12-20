import { Mail, Linkedin, Github, FileDown } from "lucide-react";

export const links = [
  {
    name: "Email",
    link: "mailto:blazheska.martina@gmail.com",
    icon: <Mail />,
  },
  {
    name: "LinkedIn",
    link: "https://linkedin.com/in/martina-blazheska",
    icon: <Linkedin />,
  },
  {
    name: "Github",
    link: "https://github.com/martinablazheska",
    icon: <Github />,
  },
  {
    name: "Resume",
    link: "resume/Martina_Blazheska_CV.pdf",
    icon: <FileDown />,
    download: "MartinaBlazheskaResume.pdf",
  },
];
