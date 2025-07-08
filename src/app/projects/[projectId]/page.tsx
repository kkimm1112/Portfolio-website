// src/app/projects/[projectId]/page.tsx
// 'use client'; // ไม่จำเป็นต้องใช้ 'use client' ถ้าหน้าไม่ได้ใช้ client-side hooks หรือ event listeners โดยตรง

import Image from "next/image";
import { notFound } from "next/navigation"; // สำหรับจัดการกรณีไม่พบโปรเจกต์
import { getProjectById, allProjectsData } from "@/lib/projects"; // นำเข้า Project interface, ฟังก์ชัน getProjectById และ allProjectsData จากไฟล์ที่คุณสร้างไว้
// สมมติว่านี่คือข้อมูลโปรเจกต์ของคุณ (ควรดึงมาจาก API หรือฐานข้อมูลจริง)
// ข้อมูลนี้ควรเหมือนกับที่คุณใช้ใน ProjectsSection.tsx แต่มีรายละเอียดเพิ่มเติม
import ProjectGallery from "@/app/components/ProjectGallery" // นำเข้า ProjectGallery component
import Link from "next/link";
// ฟังก์ชันสำหรับสร้าง Static Params (สำหรับ Static Site Generation - SSG)
// Next.js จะสร้างหน้าเหล่านี้ล่วงหน้าในระหว่าง build time
export async function generateStaticParams() {
  return allProjectsData.map((project) => ({
    projectId: project.id,
  }));
}

// Component หลักของหน้า Project Detail
export default async function ProjectDetailPage(props:{
  params: { projectId: string };

  
}) {
  const { projectId } = await Promise.resolve(props.params); 
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
          <Link href="/" className="hover:underline">Home</Link> &gt;{" "}
          <Link href="/#projects" className="hover:underline">Projects</Link> &gt;{" "}
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
        <div className="relative w-full h-[1200px] md:h-[500px] rounded-lg overflow-hidden shadow-xl mb-12">
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

        {/* ปุ่มดาวน์โหลดเฉพาะโปรเจกต์ที่มี apkDownloadUrl */}
        {project.apkDownloadUrl && (
          <div className="text-center mt-8">
            <h4>fili: {project.title}</h4>
            <br />
            <a
              href={project.apkDownloadUrl}
              download
              className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105 shadow-lg"
            >
              📥 Download APK
            </a>
          </div>
        )}


        <ProjectGallery title={project.title} galleryImages={project.galleryImages} />


        {/* ปุ่มกลับไปหน้า Projects */}
        <div className="text-center mt-12">
          <Link
            href="/#projects"
            className="inline-block bg-gray-200 text-gray-700 font-semibold py-3 px-8 rounded-full hover:bg-gray-300 transition-colors duration-300 transform hover:scale-105 shadow-lg"
          >
            &larr; Back to Projects
          </Link>
        </div>
      </div>
    </div>
  );
}