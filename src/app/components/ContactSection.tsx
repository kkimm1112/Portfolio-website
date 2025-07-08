// src/component/ContactSection.tsx

import Link from "next/link";
import { FaEnvelope, FaPhone, FaGithub, FaFileAlt } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="py-16 bg-gray-800 text-white" id="contact">
      <div className="container mx-auto px-4 text-center">
        {/* ส่วนหัว */}
        <div className="mb-12">
          {/* <h2 className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-2">
            Get In Touch
          </h2> */}
          <h3 className="text-4xl font-extrabold leading-tight">
            Contact <span className="text-blue-400">Me</span>
          </h3>
          {/* <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Feel free to reach out if you have any questions, opportunities, or just want to connect!
          </p> */}
        </div>

        {/* ข้อมูลการติดต่อ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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
        </div>

        {/* เรซูเม่แยก Software และ Engineer */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Resume - Software */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg flex flex-col items-center hover:bg-gray-600 transition-colors duration-300">
            <FaFileAlt className="text-yellow-400 text-4xl mb-4" />
            <h4 className="text-xl font-semibold mb-2">Resume</h4>
            <Link
              href="/Thanapat_Software_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Download PDF
            </Link>
          </div>

          {/* Resume - Engineer
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg flex flex-col items-center hover:bg-gray-600 transition-colors duration-300">
            <FaFileAlt className="text-yellow-400 text-4xl mb-4" />
            <h4 className="text-xl font-semibold mb-2">Engineer Resume</h4>
            <Link
              href="/Thanapat_Engineer_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Download PDF
            </Link> */}
          {/* </div> */}
        </div>
      </div>
    </section>
  );
}
