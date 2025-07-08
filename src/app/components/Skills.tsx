// src/components/Skills.tsx
import React from "react";
import { techSkills, languageSkills, softSkills } from "@/lib/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-white p-8 rounded-lg my-12 max-w-7xl mx-auto shadow-md"
    >
      <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
        My Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Technical Skills grouped */}
        {techSkills.map(({ category, items }) => (
          <div
            key={category}
            className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-2xl font-semibold text-blue-700 mb-5 border-b-2 border-gray-300 pb-2 text-center">
              {category}
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="bg-blue-100 text-blue-800 px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-200 cursor-default select-none transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}

        {/* Language Skills */}
        <div className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-2xl font-semibold text-blue-700 mb-5 border-b-2 border-gray-300 pb-2 text-center">
            Language Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {languageSkills.map((skill) => (
              <span
                key={skill}
                className="bg-blue-100 text-blue-800 px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-200 cursor-default select-none transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-2xl font-semibold text-blue-700 mb-5 border-b-2 border-gray-300 pb-2 text-center">
            Soft Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {softSkills.map((skill) => (
              <span
                key={skill}
                className="bg-blue-100 text-blue-800 px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-200 cursor-default select-none transition"
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
