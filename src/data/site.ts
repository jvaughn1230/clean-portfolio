export type Project = {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  liveUrl?: string;
  repoUrl?: string;
  technologies: string[];
};

export const site = {
  name: "Jeffrey Vaughn",
  tagline:
    "Full-Stack Software Engineer | React, React Native, Next.js & Node.js.",
  email: "hello@example.com",
  linkedin: "https://linkedin.com",
  github: "https://github.com",
  about: [
    "Hi! I’m a full-stack software engineer focused on building reliable, intuitive web and mobile applications. I work primarily with JavaScript and TypeScript, using technologies like React, React Native, Next.js, Node.js, and MongoDB to build products from the user interface through the backend.",
    "In my professional work, I’ve helped develop and improve production applications across mobile, web, and backend systems, including authentication flows, notifications, event management, reporting tools, administrative dashboards, and performance-focused backend features. I enjoy taking complicated requirements, breaking them into manageable problems, and turning them into clean, practical solutions.",
    "What I enjoy most about software development is the combination of problem-solving and creativity. I’m always looking for ways to make applications faster, easier to use, and more maintainable while continuing to expand my skills and take on increasingly complex engineering challenge.",
  ],
};

export type Skill = {
  name: string;
  icon: string;
};

export type SkillGroup = {
  title: string;
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Core Languages",
    skills: [
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "C#", icon: "csharp" },
      { name: "HTML5", icon: "html5" },
      { name: "CSS3", icon: "css3" },
      { name: "SQL", icon: "sql" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: "react" },
      { name: "React Native", icon: "react" },
      { name: "Next.js", icon: "nextdotjs" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
      { name: "Redux", icon: "redux" },
      { name: "Redux Toolkit", icon: "redux" },
      { name: "React Hook Form", icon: "reacthookform" },
      { name: "PrimeReact", icon: "primereact" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: "nodedotjs" },
      { name: "Express.js", icon: "express" },
      { name: ".NET", icon: "dotnet" },
      { name: "REST APIs", icon: "rest" },
      { name: "Moleculer", icon: "moleculer" },
      { name: "Microservices", icon: "microservices" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: "mongodb" },
      { name: "Mongoose", icon: "mongoose" },
      { name: "PostgreSQL", icon: "postgresql" },
    ],
  },
  {
    title: "Mobile",
    skills: [
      { name: "Expo", icon: "expo" },
      { name: "Firebase Cloud Messaging", icon: "firebase" },
      { name: "Notifee", icon: "notifee" },
    ],
  },
  {
    title: "Cloud / Services",
    skills: [
      { name: "AWS", icon: "amazonwebservices" },
      { name: "Amazon S3", icon: "amazons3" },
      { name: "Firebase", icon: "firebase" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "Bitbucket", icon: "bitbucket" },
      { name: "Docker", icon: "docker" },
      { name: "Postman", icon: "postman" },
      { name: "npm", icon: "npm" },
      { name: "VS Code", icon: "visualstudiocode" },
      { name: "Android Studio", icon: "androidstudio" },
    ],
  },
  {
    title: "Testing",
    skills: [{ name: "Jest", icon: "jest" }],
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Simple Scanner",
    description:
      "A no-frills scanner that does what it needs to do. The landing page leads with a clear promise — protect yourself, it’s simple — and walks through features, a live demo, pricing, and the team.",
    thumbnail: "/projects/simplescan1.png",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 2,
    title: "Dino Beach",
    description:
      "A playful web development studio site for creating fun digital experiences. The landing page introduces a team that specializes in fast, unique websites, with about, services, blog, and contact.",
    thumbnail: "/projects/dinobeach.png",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 3,
    title: "Palm Leaf",
    description:
      "A beachwear shop with a clean category grid for hats, sunglasses, sandals, and women’s and men’s collections. Shop, sign in, and cart sit in a simple header so the photography can lead.",
    thumbnail: "/projects/palmleaf.png",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 4,
    title: "Project Four",
    description: "Place Holder Project Text",
    thumbnail: "/placeholders/project-4.svg",
    repoUrl: "#",
    technologies: ["HTML", "CSS"],
  },
];
