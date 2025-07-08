// src/component/AboutMeSection.tsx

import Image from "next/image";

export default function AboutMeSection() {
  return (
    <section className="py-16 bg-white" id="about">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        {/* รูปภาพโปรไฟล์ */}
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl border-4 border-blue-600">
            <Image
              src="/images/pofile_img.jpg" // <-- ต้องมีรูปโปรไฟล์ของคุณใน public/images/profile.jpg
              alt="Thanapat K. Profile Picture"
              fill
              style={{ objectFit: "cover" }} // ปรับให้รูปเต็มกรอบ
              className="" // ลูกเล่น: ขาวดำเมื่อไม่ได้โฮเวอร์
            />
          </div>
        </div>

        
        <div className="w-full md:w-2/3 text-center md:text-left">
          <h2 className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">
            Who I Am
          </h2>
          <h3 className="text-4xl font-extrabold text-gray-800 leading-tight mb-6">
            About <span className="text-blue-600">Me</span>
          </h3>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
            Hi, I'm Thanapat Kajoompoo, a recent Computer Engineering graduate from
            Naresuan University.
          </p>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
            During my studies, I developed a strong interest in software
            development and hands-on project implementation. My notable projects
            include:
          </p>

          <ul className="list-disc list-inside text-gray-700 text-base sm:text-lg mb-4 pl-4 sm:pl-6">
            <li className="mb-2">
              <strong>Senior Project:</strong> A plastic bottle classification
              system using ESP32-CAM and image processing, with a web-based
              point system for eco-reward redemption.
            </li>
            <li>
              <strong>Mini Project:</strong> A POS (Point of Sale) mobile
              application with barcode scanning and real-time price calculation.
            </li>
          </ul>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
            I am passionate about expanding my skills in frontend, backend, and
            embedded systems. I enjoy learning new technologies that solve
            real-world problems.
          </p>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
            My goal is to become a versatile software developer who can build
            reliable, user-focused systems and collaborate effectively in
            professional teams.
          </p>
          
        </div>
      </div>
    </section>
  );
}