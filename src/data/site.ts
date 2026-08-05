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
    "Software engineer building reliable, human-centered products.",
  email: "hello@example.com",
  linkedin: "https://linkedin.com",
  github: "https://github.com",
  about: [
    "Hi! I'm a full-stack engineer and a maker at heart. I build software because I love figuring out how things work and then making them work better.",
    "Background goes here — previous roles, the problems I care about, and what I'm focused on now.",
    "Across my work, I've owned products from concept to deployment by bridging backend architecture, frontend design, and user needs.",
  ],
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Project One",
    description: "Place Holder Project Text",
    thumbnail: "/placeholders/project-1.svg",
    liveUrl: "#",
    repoUrl: "#",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "Project Two",
    description: "Place Holder Project Text",
    thumbnail: "/placeholders/project-2.svg",
    liveUrl: "#",
    repoUrl: "#",
    technologies: ["React", "Node.js"],
  },
  {
    id: 3,
    title: "Project Three",
    description: "Place Holder Project Text",
    thumbnail: "/placeholders/project-3.svg",
    technologies: ["React Native", "JavaScript"],
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
