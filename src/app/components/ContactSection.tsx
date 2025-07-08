// src/component/ContactSection.tsx

import Link from "next/link";
import { FaEnvelope, FaPhone, FaGithub } from "react-icons/fa";
import ResumePreviewCard from "@/app/components/ResumePreviewCard";
export default function ContactSection() {
  return (
    <section className="py-16 bg-gray-800 text-white" id="contact">
      <div className="container mx-auto px-4 text-center">
        {/* ส่วนหัว */}
        <div className="mb-12">
          
          <h3 className="text-4xl font-extrabold leading-tight">
            Contact <span className="text-blue-400">Me</span>
          </h3>
          
        </div>

        {/* ข้อมูลการติดต่อ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Email */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg flex flex-col items-center hover:bg-gray-600 transition-colors duration-300">
            <FaEnvelope className="text-blue-400 text-4xl mb-4" />
            <h4 className="text-xl font-semibold mb-2">Email</h4>
            <a
              href="mailto:thanapat.kajoompoo@gmail.com"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              thanapat.kajoompoo@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg flex flex-col items-center hover:bg-gray-600 transition-colors duration-300">
            <FaPhone className="text-blue-400 text-4xl mb-4" />
            <h4 className="text-xl font-semibold mb-2">Phone</h4>
            <a
              href="tel:+66641862808"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              +66 641 862 808
            </a>
          </div>

          {/* GitHub */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg flex flex-col items-center hover:bg-gray-600 transition-colors duration-300">
            <FaGithub className="text-blue-400 text-4xl mb-4" />
            <h4 className="text-xl font-semibold mb-2">GitHub</h4>
            <Link
              href="https://github.com/kkimm1112"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Thanapat Kajoompoo
            </Link>
          </div>

          {/* Resume - Software */}
          <ResumePreviewCard />
        </div>

      </div>
    </section>
  );
}
