// src/component/ProjectCard.tsx

import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  imageSrc: string;
  title: string;
  category: string;
  projectLink?: string; // Optional link to project details page
}

export default function ProjectCard({
  imageSrc,
  title,
  category,
  projectLink = "#", // Default to '#' if no link is provided
}: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <Link href={projectLink}>
        <div className="relative w-full pb-[56.25%] overflow-hidden">
          <Image
            src={imageSrc}
            alt={title}
            layout="fill" // Makes image fill the parent div
            objectFit="cover" // Ensures the image covers the area, cropping if necessary
            className="transition-opacity duration-300 hover:opacity-90"
          />
        </div>
      </Link>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-blue-600 text-sm font-medium">{category}</p>
        <Link href={projectLink} className="mt-4 inline-block text-blue-600 hover:text-blue-800 text-sm font-semibold transition-colors duration-200">
          View Project &rarr;
        </Link>
      </div>
    </div>
  );
}