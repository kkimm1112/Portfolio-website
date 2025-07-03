
type Project = {
  id: string;
  imageSrc: string;
  title: string;
  category: string;
  type: string[];
  projectLink: string;
};

export const projectsData: Project[] = [
  // ... โปรเจกต์เดิมของคุณ
  {
    id: "project-alpha",
    imageSrc: "/images/webpageSeniorProject.jpg",
    title: "Senior Project",
    category: "web development, IoT",
    type: ["Software", "Engineer"],
    projectLink: "/projects/project-alpha",
  },
  {
    id: "mobile-app-redesign",
    imageSrc: "/images/project-2.jpg",
    title: "Mobile App Redesign",
    category: "Mobile UI",
    type: ["Software"],
    projectLink: "/projects/mobile-app-redesign",
  },
  {
    id: "website-development",
    imageSrc: "/images/project-3.jpg",
    title: "E-commerce Website",
    category: "Web Development",
    type: ["Software"],
    projectLink: "/projects/website-development",
  },
  {
    id: "dashboard-ui",
    imageSrc: "/images/project-4.jpg",
    title: "Analytics Dashboard UI",
    category: "Dashboard Design",
    type: ["Software"],
    projectLink: "/projects/dashboard-ui",
  },
  {
    id: "mechanical-design",
    imageSrc: "/images/engineer-1.jpg",
    title: "Automated Assembly Line Design",
    category: "Mechanical Engineering",
    type: ["Engineer"],
    projectLink: "/projects/mechanical-design",
  },
  {
    id: "robotics-control",
    imageSrc: "/images/engineer-2.jpg",
    title: "Robotics Control System",
    category: "Control Systems",
    type: ["Engineer"],
    projectLink: "/projects/robotics-control",
  },
  {
    id: "structural-analysis",
    imageSrc: "/images/engineer-3.jpg",
    title: "Bridge Structural Analysis",
    category: "Civil Engineering",
    type: ["Engineer"],
    projectLink: "/projects/structural-analysis",
  },
];