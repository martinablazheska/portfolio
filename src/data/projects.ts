export type projectType = {
  id: number;
  name: string;
  description: string;
  repository: string;
  website: string;
  imgSrc: string;
  imgAlt: string;
};

const projects: projectType[] = [
  {
    id: 1,
    name: "Multi-step Form",
    description:
      "Exercise project to practice form-building skills, complex interactions and responsiveness, built using React, Formik and Yup.",
    repository: "https://github.com/martinablazheska/multi-step-form",
    website: "https://martinablazheska.github.io/multi-step-form/",
    imgSrc: "projects/multi-step-form.jpg",
    imgAlt: "Screenshot of Multi-step Form website",
  },
  {
    id: 2,
    name: "Entertainment Web App",
    description:
      "Entertainment app project that resembles a streaming platform built by leveraging  React, React Router, React Redux, and React Redux Toolkit. ",
    repository: "https://github.com/martinablazheska/entertainment-app",
    website: "https://martinablazheska.github.io/entertainment-app/",
    imgSrc: "projects/ent-app.jpg",
    imgAlt: "Screenshot of Web Entertainment App website",
  },
  {
    id: 3,
    name: "Countries Page",
    description:
      "Practice project, focusing on honing skills in managing data from a REST API within a React setting, implementing React Router and integrating a dynamic color theme switcher.",
    repository: "https://github.com/martinablazheska/countries",
    website: "https://martinablazheska.github.io/countries/",
    imgSrc: "projects/countries.jpg",
    imgAlt: "Screenshot of Countries website",
  },
  {
    id: 4,
    name: "Splitter",
    description:
      "Bill splitting app that allows the user to enter a bill amount, tip amount and number of persons, built with React as a practice project to refine user input and dynamic output skills. ",
    repository: "https://github.com/martinablazheska/splitter",
    website: "https://martinablazheska.github.io/splitter/",
    imgSrc: "projects/splitter.jpg",
    imgAlt: "Screenshot of Tip Splitting App website",
  },
  {
    id: 5,
    name: "Newsletter Sign Up Page",
    description:
      "Newsletter sign up form with a success message upon submission, to practice form-building and handling user input.",
    repository: "https://github.com/martinablazheska/newsletter-signup",
    website: "https://martinablazheska.github.io/newsletter-signup/",
    imgSrc: "projects/newsletter.jpg",
    imgAlt: "Screenshot of Newsletter Sign Up website",
  },
  {
    id: 6,
    name: "Sneakers Product Page",
    description:
      "Entirely built using Vanilla JS, this project was a first brush with DOM manipulation, interactive elements and functionalities such as cart actions, product count and swiping images. ",
    repository: "https://github.com/martinablazheska/ecommerce-product-page",
    website: "https://martinablazheska.github.io/ecommerce-product-page",
    imgSrc: "projects/product-page.jpg",
    imgAlt: "Screenshot of Ecommerce Product website",
  },
  {
    id: 7,
    name: "Advice Generator",
    description:
      "Short practice project that uses Vanilla JS to fetch data from an advice generating API and dynamically update the content when the user requests a new advice.",
    repository: "https://github.com/martinablazheska/advice-generator",
    website: "https://martinablazheska.github.io/advice-generator/",
    imgSrc: "projects/advice-generator.jpg",
    imgAlt: "Screenshot of Advice Generator website",
  },
];

export default projects;
