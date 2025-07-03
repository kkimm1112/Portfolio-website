// src/components/Skills.tsx
import React from "react";
import { techSkills, languageSkills, softSkills } from "@/lib/skills";

export default function Skills() {
  return (
    <section id="skills" className="bg-white p-6 rounded-lg my-8 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
        My Skills
      </h2>

      {/* ใช้ grid layout แทน flex */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Technical Skills */}
        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-3 text-center">
            Technical Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {techSkills.map((skill) => (
              <span
                key={skill}
                className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 hover:text-gray-800 transition-colors duration-150 ease-in-out cursor-pointer border-none"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Language Skills */}
                <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-3 text-center">
            language Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {languageSkills.map((skill) => (
              <span
                key={skill}
                className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 hover:text-gray-800 transition-colors duration-150 ease-in-out cursor-pointer border-none"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
                <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-3 text-center">
            Soft Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {softSkills.map((skill) => (
              <span
                key={skill}
                className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 hover:text-gray-800 transition-colors duration-150 ease-in-out cursor-pointer border-none"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
