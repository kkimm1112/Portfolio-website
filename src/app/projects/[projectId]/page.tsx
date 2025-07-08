// src/app/projects/[projectId]/page.tsx
import { notFound } from 'next/navigation';
import { getProjectById, allProjectsData } from '@/lib/projects';
import Image from 'next/image';
import ProjectGallery from "@/app/components/ProjectGallery" // นำเข้า 
// Next.js 15 - params เป็น Promise
interface ProjectDetailPageProps {
  params: Promise<{
    projectId: string;
  }>;
}

// สำหรับ generateStaticParams
export async function generateStaticParams() {
  return allProjectsData.map((project) => ({
    projectId: project.id,
  }));
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  // ใน Next.js 15 ต้อง await params
  const { projectId } = await params;
  
  const project = getProjectById(projectId);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {project.title}
            </h1>
            {project.category && (
              <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                {project.category}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Image */}
          <div className="mb-8">
            <Image
              src={project.imageSrc}
              alt={project.title}
              width={800}
              height={400}
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
              priority
            />
          </div>

          {/* Project Info Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Description */}
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Project Description
              </h2>
              <div 
                className="text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: project.description }}
              />
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Technologies */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* APK Download */}
              {project.apkDownloadUrl && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Download
                  </h3>
                  <a
                    href={project.apkDownloadUrl}
                    download
                    className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                      />
                    </svg>
                    Download APK
                  </a>
                </div>
              )}
            </div>
          </div>
          <ProjectGallery title={project.title} galleryImages={project.galleryImages} />

          {/* Back Button */}
          <div className="mt-12 text-center">
            <a
              href="/#projects"
              className="inline-flex items-center bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Projects
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// Metadata สำหรับ SEO

