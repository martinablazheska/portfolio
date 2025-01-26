export const projects = [
  {
    id: 1,
    name: "Code Dojo",
    description:
      "Code Dojo is a real-time collaborative coding platform where users can create and join coding rooms. It supports multiple programming languages and provides features like live code editing, code execution, and room management.",
    challenge: [
      "Develop a platform enabling real-time code collaboration and execution.",
      "Implement secure user authentication for both public and private coding rooms.",
      "Ensure a seamless and intuitive interface for users across multiple devices.",
      "Integrate support for multiple programming languages and manage efficient communication between the frontend and backend.",
    ],
    solution: [
      "Built the frontend with React, TypeScript, and Vite for modularity and performance.",
      "Implemented real-time code synchronization using Yjs and Socket.IO.",
      "Integrated Monaco Editor for a robust coding experience, styled with NextUI and Tailwind CSS.",
      "Secured authentication with JWT and structured the backend with Node.js, Express.js, and PostgreSQL using Drizzle ORM.",
      "Used the Judge0 API for executing and displaying code output, providing seamless multi-language support.",
    ],
    technologies: [
      "TypeScript",
      "React.js",
      "TailwindCSS",
      "Node.js",
      "Express",
      "PostgreSQL",
      "DrizzleORM",
      "Socket.IO",
    ],
    skills: [
      "Frontend Architecture",
      "UI/UX & Responsiveness",
      "Real-Time Features",
      "Backend Development",
      "Database Design & Management",
      "Authentication & Authorization",
      "Git & Version Control",
    ],
    repository: "https://github.com/martinablazheska/code-playground",
    images: [
      "/public/projects/code-dojo/unauthenticated.png",
      "/public/projects/code-dojo/login.png",
      "/public/projects/code-dojo/create-room.png",
      "/public/projects/code-dojo/join-room.png",
      "/public/projects/code-dojo/execute-code.png",
    ],
  },
];
