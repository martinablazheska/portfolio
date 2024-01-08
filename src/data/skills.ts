type skillType = {
  id: number;
  name: string;
  description: string;
  imgSrc: string;
  imgAlt: string;
  highlightColor: string;
};

const skills: skillType[] = [
  {
    id: 1,
    name: "HTML, CSS & SCSS",
    description:
      "Proficiency in HTML for creating structured and accessible content. Translating concepts into visually appealing and responsive designs using CSS. Leveraging the power of SCSS for modular, maintainable, and efficient stylesheets, contributing to seamless and modern web development.",
    imgSrc: "browser-icon.svg",
    imgAlt: "HTML, CSS & SCSS icon",
    highlightColor: "#B15760",
  },
  {
    id: 2,
    name: "JavaScript",
    description:
      "Skill set defined by a comprehensive command of Vanilla JavaScript, facilitating the development of dynamic and interactive user interfaces. Proficiency in tasks such as DOM manipulation, event handling, and asynchronous programming.",
    imgSrc: "javascript-logo.svg",
    imgAlt: "JavaScript logo",
    highlightColor: "#D96D3F",
  },
  {
    id: 3,
    name: "React.js",
    description:
      "Keen focus on creating modular and maintainable web applications and optimizing performance through the Virtual DOM. Proficient in state management (using Context API or React Redux with React Redux Toolkit), React Router, and seamless third-party integrations (Formik, Yup, Material UI, Chakra UI...).",
    imgSrc: "react-logo.svg",
    imgAlt: "React.js logo",
    highlightColor: "#483e75",
  },
  {
    id: 4,
    name: "TypeScript",
    description:
      "Leveraging TypeScript in React development to enhance type safety and scalability of codebases, as well as to benefit from early error detection, improved code maintainability and  developer experience.",
    imgSrc: "typescript-logo.svg",
    imgAlt: "TypeScript logo",
    highlightColor: "#599bbc",
  },
];

export default skills;
