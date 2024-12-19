import { Technology } from "@/types/types";
import {
  SiJavascript as JavaScriptLogo,
  SiTypescript as TypeScriptLogo,
  SiReact as ReactLogo,
  SiNodedotjs as NodeLogo,
  SiTailwindcss as TailwindLogo,
  SiD3Dotjs as D3Logo,
  SiRedux as ReduxLogo,
  SiNextdotjs as NextLogo,
  SiExpress as ExpressLogo,
  SiMongodb as MongoDBLogo,
  SiMongoose as MongooseLogo,
  SiPostgresql as PostgresLogo,
  SiDrizzle as DrizzleLogo,
  SiMeilisearch as MeilisearchLogo,
  SiStrapi as StrapiLogo,
  SiApollographql as ApolloLogo,
  SiSocketdotio as SocketIoLogo,
  SiSpringboot as SpringBootLogo,
  SiKeycloak as KeycloakLogo,
} from "react-icons/si";
import { FaJava as JavaLogo } from "react-icons/fa6";

export const technologies: Technology[] = [
  {
    title: "JavaScript",
    progress: 98,
    icon: <JavaScriptLogo />,
    categories: ["Languages", "Frontend", "Backend", "Fullstack"],
    description:
      "Proficient in JavaScript, which I have used extensively to build interactive web applications and dynamic user interfaces. My expertise includes DOM manipulation, asynchronous programming, and working with APIs.",
  },
  {
    title: "TypeScript",
    progress: 98,
    icon: <TypeScriptLogo />,
    categories: ["Languages", "Frontend", "Backend", "Fullstack"],
    description:
      "Experienced with TypeScript to develop type-safe applications. I've utilized it in React and Node.js projects to ensure better maintainability and fewer runtime errors.",
  },
  {
    title: "React.js",
    progress: 98,
    icon: <ReactLogo />,
    categories: ["Frontend", "Libraries"],
    description:
      "Skilled in React.js for building reusable components and managing state effectively. I have built dashboards, interactive forms, and SPAs using React.",
  },
  {
    title: "TailwindCSS",
    progress: 98,
    icon: <TailwindLogo />,
    categories: ["Frontend", "Frameworks", "Styles"],
    description:
      "Expert in using TailwindCSS to style web applications efficiently. I've used it to create responsive designs and implement custom animations.",
  },
  {
    title: "Next.js",
    progress: 98,
    icon: <NextLogo />,
    categories: ["Frontend", "Fullstack", "Frameworks"],
    description:
      "Proficient in Next.js for server-side rendering and static site generation. I've built SEO-optimized applications and dynamic web platforms using this framework.",
  },
  {
    title: "Redux",
    progress: 88,
    icon: <ReduxLogo />,
    categories: ["Frontend", "State Management", "Libraries"],
    description:
      "Experienced in Redux for managing complex application state. I've implemented it in applications with multi-step forms and real-time data updates.",
  },
  {
    title: "d3.js",
    progress: 95,
    icon: <D3Logo />,
    categories: ["Frontend", "Libraries"],
    description:
      "Proficient in d3.js for creating data visualizations. I have built radar charts, bar graphs, and interactive dashboards for displaying complex datasets.",
  },
  {
    title: "Node.js",
    progress: 80,
    icon: <NodeLogo />,
    categories: ["Backend", "Frameworks"],
    description:
      "Skilled in Node.js for building scalable server-side applications. I've created REST APIs and real-time communication tools using this runtime.",
  },
  {
    title: "Express",
    progress: 80,
    icon: <ExpressLogo />,
    categories: ["Backend", "Frameworks"],
    description:
      "Experienced in Express.js for developing RESTful APIs and middleware. I've used it to handle authentication and data processing tasks.",
  },
  {
    title: "MongoDB",
    progress: 50,
    icon: <MongoDBLogo />,
    categories: ["Backend", "Databases"],
    description:
      "Familiar with MongoDB for managing NoSQL databases. I've used it in projects requiring flexible schemas and efficient query performance.",
  },
  {
    title: "Mongoose",
    progress: 50,
    icon: <MongooseLogo />,
    categories: ["Backend", "Databases"],
    description:
      "Skilled in Mongoose for object data modeling with MongoDB. I have utilized it for defining schemas and performing data validation.",
  },
  {
    title: "PostgreSQL",
    progress: 50,
    icon: <PostgresLogo />,
    categories: ["Backend", "Databases"],
    description:
      "Proficient in PostgreSQL for relational database management. I've used it in applications requiring structured data and complex queries.",
  },
  {
    title: "DrizzleORM",
    progress: 50,
    icon: <DrizzleLogo />,
    categories: ["Backend", "Databases"],
    description:
      "Familiar with DrizzleORM for managing database interactions in TypeScript applications. I've used it for defining models and handling migrations.",
  },
  {
    title: "meilisearch",
    progress: 80,
    icon: <MeilisearchLogo />,
    categories: ["Backend", "Databases"],
    description:
      "Experienced with Meilisearch for building search functionalities. I have implemented it in applications for real-time indexing and fast search capabilities.",
  },
  {
    title: "Strapi",
    progress: 80,
    icon: <StrapiLogo />,
    categories: ["Backend", "Databases", "Frameworks", "CMS"],
    description:
      "Proficient in Strapi for creating headless CMS solutions. I have used it for managing content and integrating APIs in full-stack applications.",
  },
  {
    title: "Apollo GraphQL",
    progress: 80,
    icon: <ApolloLogo />,
    categories: ["State Management", "API", "Libraries", "Backend", "Frontend"],
    description:
      "Skilled in Apollo GraphQL for managing GraphQL APIs. I've used it to query and cache data efficiently in full-stack applications.",
  },
  {
    title: "Socket.IO",
    progress: 80,
    icon: <SocketIoLogo />,
    categories: ["Backend", "Frontend", "API", "Libraries"],
    description:
      "Experienced in Socket.IO for real-time communication. I've implemented it for chat applications and collaborative tools.",
  },
  {
    title: "Keycloak",
    progress: 90,
    icon: <KeycloakLogo />,
    categories: ["Backend", "Frontend", "Identity Management"],
    description:
      "Skilled in Keycloak for identity and access management. I've used it to handle authentication and user roles in secure applications.",
  },
  {
    title: "Java",
    progress: 60,
    icon: <JavaLogo />,
    categories: ["Backend", "Languages"],
    description:
      "Familiar with Java for developing backend systems. I have used it in academic and small-scale projects requiring object-oriented design.",
  },
  {
    title: "Spring Boot",
    progress: 50,
    icon: <SpringBootLogo />,
    categories: ["Backend", "API", "Frameworks"],
    description:
      "Experienced with Spring Boot for building APIs and microservices. I've utilized it for dependency injection and handling complex workflows.",
  },
];
