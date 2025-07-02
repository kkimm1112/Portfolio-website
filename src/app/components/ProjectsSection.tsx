// src/component/ProjectsSection.tsx

import ProjectCard from "./ProjectCard"; // นำเข้า ProjectCard

// กำหนด interface สำหรับข้อมูลโปรเจกต์ (ถ้าคุณมีข้อมูลจาก API หรือ JSON)
interface Project {
  id: string;
  imageSrc: string;
  title: string;
  category: string;
  projectLink?: string;
}

// ข้อมูลโปรเจกต์ตัวอย่าง (สามารถดึงมาจาก API หรือไฟล์ JSON ได้ในอนาคต)
const projectsData: Project[] = [
  {
    id: "1",
    imageSrc: "/images/webpageSeniorProject.jpg", // ตรวจสอบ path รูปภาพของคุณ
    title: "Senior Project",
    category: "Software Development & IoT",
    projectLink: "/projects/project-alpha",
  },
  {
    id: "2",
    imageSrc: "/images/project-2.jpg", // ตรวจสอบ path รูปภาพของคุณ
    title: "Mobile App Redesign",
    category: "Mobile UI",
    projectLink: "/projects/mobile-app-redesign",
  },
  {
    id: "3",
    imageSrc: "/images/project-3.jpg", // ตรวจสอบ path รูปภาพของคุณ
    title: "Website Development",
    category: "Web Design",
    projectLink: "/projects/website-development",
  },
  {
    id: "4",
    imageSrc: "/images/project-4.jpg", // ตรวจสอบ path รูปภาพของคุณ
    title: "Dashboard UI",
    category: "Dashboard Design",
    projectLink: "/projects/dashboard-ui",
  },
  {
    id: "5",
    imageSrc: "/images/project-5.jpg", // ตรวจสอบ path รูปภาพของคุณ
    title: "E-commerce Platform",
    category: "UI/UX Design",
    projectLink: "/projects/ecommerce-platform",
  },
  {
    id: "6",
    imageSrc: "/images/project-6.jpg", // ตรวจสอบ path รูปภาพของคุณ
    title: "Brand Identity Guide",
    category: "Branding",
    projectLink: "/projects/brand-identity-guide",
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-16 bg-gray-50" id="projects">
      <div className="container mx-auto px-4">
        {/* ส่วนหัว */}
        <div className="text-center mb-12">
          <h2 className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">
            My Creative Works
          </h2>
          <h3 className="text-4xl font-extrabold text-gray-800 leading-tight">
            Latest <span className="text-blue-600">Projects</span>
          </h3>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Explore a selection of my recent work, showcasing my skills in design and development.
          </p>
        </div>

        {/* ปุ่มกรอง (ยังไม่มีฟังก์ชันการกรองจริงจัง) */}
        {/*
        <div className="flex justify-center space-x-4 mb-12">
          <button className="px-6 py-2 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors duration-200">
            All
          </button>
          <button className="px-6 py-2 rounded-full bg-gray-200 text-gray-700 font-semibold hover:bg-blue-200 hover:text-blue-700 transition-colors duration-200">
            UI/UX Design
          </button>
          <button className="px-6 py-2 rounded-full bg-gray-200 text-gray-700 font-semibold hover:bg-blue-200 hover:text-blue-700 transition-colors duration-200">
            Web Development
          </button>
          <button className="px-6 py-2 rounded-full bg-gray-200 text-gray-700 font-semibold hover:bg-blue-200 hover:text-blue-700 transition-colors duration-200">
            Mobile Apps
          </button>
        </div>
        */}

        {/* Grid แสดงโปรเจกต์ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              imageSrc={project.imageSrc}
              title={project.title}
              category={project.category}
              projectLink={project.projectLink}
            />
          ))}
        </div>

        
      </div>
    </section>
  );
}