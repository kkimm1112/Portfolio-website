// src/component/AboutMeSection.tsx

import Image from "next/image";
import Link from "next/link"; // ถ้ามีลิงก์ไปยัง Full Resume Page

export default function AboutMeSection() {
  return (
    <section className="py-16 bg-white" id="about-me">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        {/* รูปภาพโปรไฟล์ */}
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl border-4 border-blue-600">
            <Image
              src="/images/pofile_img.jpg" // <-- ต้องมีรูปโปรไฟล์ของคุณใน public/images/profile.jpg
              alt="Thanapat K. Profile Picture"
              layout="fill"
              objectFit="cover"
              className="" // ลูกเล่น: ขาวดำเมื่อไม่ได้โฮเวอร์
            />
          </div>
        </div>

        {/* ข้อมูลเกี่ยวกับฉัน */}
        <div className="w-full md:w-2/3 text-center md:text-left">
          <h2 className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">
            Who I Am
          </h2>
          <h3 className="text-4xl font-extrabold text-gray-800 leading-tight mb-6">
            About <span className="text-blue-600">Me</span>
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Hi, I'm Thanapat K., a passionate web developer with a focus on
            creating beautiful and functional websites. I love coding and
            bringing ideas to life through technology.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            my skills include HTML, CSS, JavaScript, and React. I enjoy
            learning new technologies and improving my skills every day. When I'm
          </p>
          <Link
            href="/about" // หรือลิงก์ไปยังหน้า About ที่มีรายละเอียดเพิ่มเติม
            className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105 shadow-lg"
          >
            Learn More About Me
          </Link>
        </div>
      </div>
    </section>
  );
}