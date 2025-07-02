// src/app/projects/[projectId]/page.tsx
// 'use client'; // ไม่จำเป็นต้องใช้ 'use client' ถ้าหน้าไม่ได้ใช้ client-side hooks หรือ event listeners โดยตรง

import Image from "next/image";
import { notFound } from "next/navigation"; // สำหรับจัดการกรณีไม่พบโปรเจกต์

// สมมติว่านี่คือข้อมูลโปรเจกต์ของคุณ (ควรดึงมาจาก API หรือฐานข้อมูลจริง)
// ข้อมูลนี้ควรเหมือนกับที่คุณใช้ใน ProjectsSection.tsx แต่มีรายละเอียดเพิ่มเติม
const allProjectsData = [
  {
    id: "project-alpha",
    imageSrc: "/images/project-1.jpg",
    title: "Project Alpha: UI/UX Design for a New Fintech App",
    category: "UI/UX Design",
    description: `
      โปรเจกต์ Alpha คือการออกแบบ UI/UX สำหรับแอปพลิเคชัน Fintech ใหม่ล่าสุดที่มุ่งเน้นการใช้งานง่ายและปลอดภัยสำหรับผู้ใช้ทุกระดับ. เราได้ทำการวิจัยผู้ใช้อย่างละเอียด, สร้าง Wireframes, Prototypes, และทำการทดสอบ Usability เพื่อให้แน่ใจว่าประสบการณ์ผู้ใช้นั้นราบรื่นและมีประสิทธิภาพ. การออกแบบเน้นความเรียบง่าย, ความชัดเจน, และการเข้าถึงข้อมูลที่สำคัญได้อย่างรวดเร็ว.
      <br/><br/>
      **ความท้าทาย:** การสร้างความสมดุลระหว่างความสวยงาม, ฟังก์ชันการทำงานที่ซับซ้อน, และความปลอดภัยของข้อมูลทางการเงิน.
      <br/><br/>
      **โซลูชัน:** การใช้ Design System ที่สอดคล้องกัน, การออกแบบ Flow การใช้งานที่เข้าใจง่าย, และการนำเสนอข้อมูลด้วย Visualizations ที่ชัดเจน.
    `,
    technologies: ["Figma", "Sketch", "User Research", "Prototyping", "Usability Testing"],
    // สามารถเพิ่มรูปภาพเพิ่มเติมสำหรับ Gallery ได้
    galleryImages: [
      "/images/project-1-detail-1.jpg",
      "/images/project-1-detail-2.jpg",
      "/images/project-1-detail-3.jpg",
    ],
  },
  {
    id: "mobile-app-redesign",
    imageSrc: "/images/project-2.jpg",
    title: "Mobile App Redesign: Enhancing User Engagement",
    category: "Mobile UI",
    description: `
      โปรเจกต์นี้เป็นการปรับปรุงดีไซน์แอปพลิเคชันมือถือที่มีอยู่เดิม เพื่อเพิ่มการมีส่วนร่วมของผู้ใช้และปรับปรุงประสบการณ์โดยรวม. เราได้วิเคราะห์ข้อมูลผู้ใช้, ระบุจุดที่ต้องปรับปรุง, และนำเสนอดีไซน์ใหม่ที่ทันสมัยและใช้งานง่ายขึ้น. ผลลัพธ์คือการเพิ่มขึ้นของเวลาที่ผู้ใช้ใช้ในแอปและอัตราการกลับมาใช้งานซ้ำ.
      <br/><br/>
      **ความท้าทาย:** การปรับปรุงดีไซน์โดยไม่กระทบต่อฟังก์ชันการทำงานหลักและรักษาความคุ้นเคยของผู้ใช้เดิม.
      <br/><br/>
      **โซลูชัน:** การออกแบบที่เน้นความสะอาด, การใช้ภาพประกอบที่น่าสนใจ, และการปรับปรุง Navigation ให้ใช้งานง่ายขึ้น.
    `,
    technologies: ["Adobe XD", "Mobile UI", "User Flow", "A/B Testing"],
    galleryImages: [
      "/images/project-2-detail-1.jpg",
      "/images/project-2-detail-2.jpg",
    ],
  },
  // เพิ่มข้อมูลโปรเจกต์อื่นๆ ที่คุณมีใน ProjectsSection.tsx และเพิ่มรายละเอียด
  // เช่นเดียวกับโครงสร้างด้านบน
];


// ฟังก์ชันสำหรับดึงข้อมูลโปรเจกต์ตาม ID
function getProjectById(id: string) {
  return allProjectsData.find((project) => project.id === id);
}

// ฟังก์ชันสำหรับสร้าง Static Params (สำหรับ Static Site Generation - SSG)
// Next.js จะสร้างหน้าเหล่านี้ล่วงหน้าในระหว่าง build time
export async function generateStaticParams() {
  return allProjectsData.map((project) => ({
    projectId: project.id,
  }));
}

// Component หลักของหน้า Project Detail
export default function ProjectDetailPage({
  params,
}: {
  params: { projectId: string };
}) {
  const { projectId } = params;
  const project = getProjectById(projectId);

  // ถ้าไม่พบโปรเจกต์ ให้แสดงหน้า 404
  if (!project) {
    notFound();
  }

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Breadcrumbs (Optional) */}
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:underline">Home</a> &gt;{" "}
          <a href="/projects" className="hover:underline">Projects</a> &gt;{" "}
          <span className="text-blue-600">{project.title.split(":")[0].trim()}</span>
        </nav>

        {/* ส่วนหัวโปรเจกต์ */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-4">
            {project.title}
          </h1>
          <p className="text-blue-600 text-lg font-semibold">{project.category}</p>
        </div>

        {/* รูปภาพหลักของโปรเจกต์ */}
        <div className="relative w-full h-96 md:h-[500px] rounded-lg overflow-hidden shadow-xl mb-12">
          <Image
            src={project.imageSrc}
            alt={project.title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        {/* รายละเอียดโปรเจกต์ */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Project Overview</h2>
          <div
            className="text-gray-700 leading-relaxed space-y-4"
            dangerouslySetInnerHTML={{ __html: project.description }}
          />
        </div>

        {/* เทคโนโลยีที่ใช้ */}
        {project.technologies && project.technologies.length > 0 && (
          <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Gallery รูปภาพเพิ่มเติม (ถ้ามี) */}
        {project.galleryImages && project.galleryImages.length > 0 && (
          <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.galleryImages.map((imgSrc, index) => (
                <div key={index} className="relative w-full h-64 rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={imgSrc}
                    alt={`${project.title} - Image ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ปุ่มกลับไปหน้า Projects */}
        <div className="text-center mt-12">
          <a
            href="/projects"
            className="inline-block bg-gray-200 text-gray-700 font-semibold py-3 px-8 rounded-full hover:bg-gray-300 transition-colors duration-300 transform hover:scale-105 shadow-lg"
          >
            &larr; Back to Projects
          </a>
        </div>
      </div>
    </div>
  );
}