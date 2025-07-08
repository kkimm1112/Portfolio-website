'use client';

import { useState, useRef, useEffect, useMemo, useCallback } from "react";
import ProjectCard from "./ProjectCard";
// import Link from "next/link";
import { useWindowWidth } from "../hooks/useWindowWidth";
import { projectsData } from "@/lib/datawork"; // นำเข้าข้อมูลโปรเจกต์จากไฟล์ datawork.ts


interface Project {
  id: string;
  imageSrc: string;
  title: string;
  category: string;
  projectLink: string;
  type: string[];
}

interface ProjectsSectionProps {
  projects: Project[];
}

export default function ProjectsSection({ }: ProjectsSectionProps) {
  const width = useWindowWidth(); // <== ตรวจจับความกว้าง
  const [activeType] = useState<"Software" | "Engineer" | "All">("All");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const slideInterval = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const cardsPerView = useMemo(() => {
    if (width < 640) return 1;
    if (width < 1024) return 2;
    return 3;
  }, [width]);

  const NUM_DUPLICATES = cardsPerView;
  const initialIndex = NUM_DUPLICATES;

  const baseProjects = activeType === "All"
    ? projectsData
    : projectsData.filter(project => project.type.includes(activeType));

  const displayProjects = useMemo(() => {
    if (baseProjects.length === 0) return [];

    let projects = [...baseProjects];
    while (projects.length < 6) {
      projects = [...projects, ...baseProjects];
    }

    return [
      ...projects.slice(-NUM_DUPLICATES),
      ...projects,
      ...projects.slice(0, NUM_DUPLICATES),
    ];
  }, [baseProjects, NUM_DUPLICATES]);

  const startAutoScroll = useCallback(() => {
    if (slideInterval.current) clearInterval(slideInterval.current);
    slideInterval.current = setInterval(() => nextSlide(), 3000);
  }, []);

  const stopAutoScroll = useCallback(() => {
    if (slideInterval.current) clearInterval(slideInterval.current);
  }, []);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => {
      const newIndex = prev + 1;
      if (newIndex >= displayProjects.length - NUM_DUPLICATES) {
        setTimeout(() => {
          containerRef.current?.classList.add("no-transition");
          setCurrentIndex(initialIndex);
          setTimeout(() => {
            containerRef.current?.classList.remove("no-transition");
            setIsTransitioning(false);
          }, 50);
        }, 500);
        return newIndex;
      }
      setTimeout(() => setIsTransitioning(false), 500);
      return newIndex;
    });
  }, [isTransitioning, displayProjects.length, NUM_DUPLICATES, initialIndex]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => {
      const newIndex = prev - 1;
      if (newIndex < initialIndex) {
        setTimeout(() => {
          containerRef.current?.classList.add("no-transition");
          setCurrentIndex(displayProjects.length - NUM_DUPLICATES - 1);
          setTimeout(() => {
            containerRef.current?.classList.remove("no-transition");
            setIsTransitioning(false);
          }, 50);
        }, 500);
        return newIndex;
      }
      setTimeout(() => setIsTransitioning(false), 500);
      return newIndex;
    });
  }, [isTransitioning, displayProjects.length, NUM_DUPLICATES, initialIndex]);

  useEffect(() => {
    setCurrentIndex(initialIndex);
    setIsTransitioning(false);
    startAutoScroll();
    return () => stopAutoScroll();
  }, [activeType, displayProjects.length, NUM_DUPLICATES, initialIndex, startAutoScroll, stopAutoScroll]);

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, [startAutoScroll, stopAutoScroll]);

  if (displayProjects.length === 0) {
    return (
      <section className="py-16 bg-gray-50" id="projects">
        <p className="text-center text-gray-600">No projects found.</p>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>

        {/* <div className="flex justify-center space-x-4 mb-8">
          {["Software", "Engineer", "All"].map((type) => (
            <button
              key={type}
              onClick={() => setActiveType(type as "Software" | "Engineer" | "All")}
              className={`px-6 py-2 rounded-full font-semibold transition-colors duration-200 ${activeType === type
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-200 text-gray-700 hover:bg-blue-200 hover:text-blue-700"
                }`}
            >
              {type}
            </button>
          ))}
        </div> */}

        {/* Carousel */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={stopAutoScroll}
          onMouseLeave={startAutoScroll}
        >
          <div
            className="flex transition-transform duration-500 ease-linear"
            ref={containerRef}
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
            }}
          >
            {displayProjects.map((project, index) => (
              <div
                key={`${project.id}-${index}`}
                className="flex-shrink-0 px-4"
                style={{ width: `calc(100% / ${cardsPerView})` }}
              >
                <ProjectCard
                  imageSrc={project.imageSrc}
                  title={project.title}
                  category={project.category}
                  projectLink={project.projectLink}
                />
              </div>
            ))}
          </div>

          {/* ปุ่มซ้าย/ขวา */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-600 hover:text-blue-600 p-3 rounded-full shadow-md transition duration-300 backdrop-blur-sm"
            aria-label="Previous Slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-600 hover:text-blue-600 p-3 rounded-full shadow-md transition duration-300 backdrop-blur-sm"
            aria-label="Next Slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}