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
      "A versatile language that powers modern web development. From building interactive user interfaces to running server-side applications, JavaScript's ecosystem and flexibility make it an essential tool for creating dynamic web experiences.",
  },
  {
    title: "TypeScript",
    progress: 98,
    icon: <TypeScriptLogo />,
    categories: ["Languages", "Frontend", "Backend", "Fullstack"],
    description:
      "A powerful superset of JavaScript that brings static typing to the language. Particularly valuable for large-scale applications where type safety and improved tooling can significantly reduce runtime errors and enhance code maintainability.",
  },
  {
    title: "React.js",
    progress: 98,
    icon: <ReactLogo />,
    categories: ["Frontend", "Libraries"],
    description:
      "The UI library that changed how I think about frontend development. Love breaking down complex interfaces into reusable pieces and watching them come together. State management and component architecture are particular strong points.",
  },
  {
    title: "TailwindCSS",
    progress: 98,
    icon: <TailwindLogo />,
    categories: ["Frontend", "Frameworks", "Styles"],
    description:
      "Changed my mind completely about CSS frameworks. What started as skepticism turned into genuine appreciation for its utility-first approach. Now it's my secret weapon for rapidly prototyping and building polished UIs.",
  },
  {
    title: "Next.js",
    progress: 98,
    icon: <NextLogo />,
    categories: ["Frontend", "Fullstack", "Frameworks"],
    description:
      "My framework of choice for React applications. The built-in optimizations and server-side capabilities have been game-changers for project performance. Really appreciate how it streamlines the development process while maintaining flexibility.",
  },
  {
    title: "Redux",
    progress: 88,
    icon: <ReduxLogo />,
    categories: ["Frontend", "State Management", "Libraries"],
    description:
      "While not always necessary for smaller projects, Redux has been invaluable for managing state in larger applications. The predictable state container pattern has helped me tackle complex data flows with confidence.",
  },
  {
    title: "d3.js",
    progress: 95,
    icon: <D3Logo />,
    categories: ["Frontend", "Libraries"],
    description:
      "My trusted companion for data visualization challenges. While the learning curve was steep, mastering D3 has opened up endless possibilities for creating custom, interactive visualizations that tell compelling stories with data.",
  },
  {
    title: "Node.js",
    progress: 80,
    icon: <NodeLogo />,
    categories: ["Backend", "Frameworks"],
    description:
      "The runtime that made me fall in love with backend development. Being able to use JavaScript across the full stack has been incredibly powerful, especially for building real-time applications and APIs.",
  },
  {
    title: "Express",
    progress: 80,
    icon: <ExpressLogo />,
    categories: ["Backend", "Frameworks"],
    description:
      "My preferred lightweight framework for Node.js applications. Its minimalist approach and middleware system make it perfect for building custom APIs. Have used it extensively for both small and large-scale projects.",
  },
  {
    title: "MongoDB",
    progress: 50,
    icon: <MongoDBLogo />,
    categories: ["Backend", "Databases"],
    description:
      "Started working with MongoDB when I needed more flexibility than traditional SQL databases could offer. Its document-based structure has proved perfect for projects with evolving data requirements.",
  },
  {
    title: "Mongoose",
    progress: 50,
    icon: <MongooseLogo />,
    categories: ["Backend", "Databases"],
    description:
      "The natural companion to MongoDB in my Node.js projects. Appreciate how it brings structure to MongoDB through schemas while maintaining the flexibility that makes NoSQL databases great.",
  },
  {
    title: "PostgreSQL",
    progress: 50,
    icon: <PostgresLogo />,
    categories: ["Backend", "Databases"],
    description:
      "My go-to choice when projects demand rock-solid data integrity and complex relationships. The robust feature set and reliability make it perfect for applications where data consistency is crucial.",
  },
  {
    title: "DrizzleORM",
    progress: 50,
    icon: <DrizzleLogo />,
    categories: ["Backend", "Databases"],
    description:
      "A relatively new addition to my toolkit that's quickly becoming indispensable. The type-safe approach to database operations fits perfectly with my TypeScript-first development style.",
  },
  {
    title: "meilisearch",
    progress: 80,
    icon: <MeilisearchLogo />,
    categories: ["Backend", "Databases"],
    description:
      "Discovered this gem when looking for a more lightweight alternative to Elasticsearch. Its lightning-fast search capabilities and easy setup have made it my preferred choice for adding search functionality.",
  },
  {
    title: "Strapi",
    progress: 80,
    icon: <StrapiLogo />,
    categories: ["Backend", "Databases", "Frameworks", "CMS"],
    description:
      "Found my sweet spot for content management with Strapi. The customizable admin panel and API-first approach have saved countless hours on projects requiring a robust backend without starting from scratch.",
  },
  {
    title: "Apollo GraphQL",
    progress: 80,
    icon: <ApolloLogo />,
    categories: ["State Management", "API", "Libraries", "Backend", "Frontend"],
    description:
      "Diving into Apollo changed how I think about API design and data fetching. The declarative approach to managing data flow and built-in caching capabilities have been crucial for building sophisticated applications.",
  },
  {
    title: "Socket.IO",
    progress: 80,
    icon: <SocketIoLogo />,
    categories: ["Backend", "Frontend", "API", "Libraries"],
    description:
      "My trusted solution for adding real-time features to applications. The elegant handling of WebSocket connections with fallbacks has made implementing live updates and chat features a breeze.",
  },
  {
    title: "Keycloak",
    progress: 90,
    icon: <KeycloakLogo />,
    categories: ["Backend", "Frontend", "Identity Management"],
    description:
      "When security and authentication requirements get serious, Keycloak is my first choice. Its comprehensive identity management features have proven invaluable for enterprise-level applications.",
  },
  {
    title: "Java",
    progress: 60,
    icon: <JavaLogo />,
    categories: ["Backend", "Languages"],
    description:
      "Cut my teeth on Java during my early programming days. While not my primary language now, the solid foundation in OOP principles and static typing has influenced how I approach software design across all platforms.",
  },
  {
    title: "Spring Boot",
    progress: 50,
    icon: <SpringBootLogo />,
    categories: ["Backend", "API", "Frameworks"],
    description:
      "My exploration into the Java ecosystem wouldn't be complete without Spring Boot. Its convention-over-configuration approach has helped me appreciate the robustness of Java-based backend solutions.",
  },
];
