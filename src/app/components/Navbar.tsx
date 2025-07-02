// src/component/Navbar.tsx
'use client'; // <-- เพิ่มบรรทัดนี้ที่ด้านบนสุดของไฟล์

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="navbar">
      <nav className="bg-gradient-to-r from-blue-700 to-blue-500 p-4 text-white shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          {/* โลโก้/ชื่อ */}
          <Link
            href="/"
            className="text-3xl font-extrabold tracking-wider hover:text-blue-100 transition-colors duration-300 transform hover:scale-105"
          >
            THANAPAT K.
          </Link>

          {/* ปุ่ม Hamburger (แสดงเฉพาะบนหน้าจอขนาดเล็ก) */}
          <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* ไอคอนเบอร์เกอร์ 3 ขีด */}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>

          {/* เมนูปกติ (ซ่อนบนหน้าจอขนาดเล็ก) */}
          <div className="hidden md:flex space-x-6 text-lg">
            <Link
              href="/"
              className="hover:text-blue-100 transition-colors duration-300 ease-in-out px-3 py-2 rounded-md hover:bg-blue-600"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-blue-100 transition-colors duration-300 ease-in-out px-3 py-2 rounded-md hover:bg-blue-600"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="hover:text-blue-100 transition-colors duration-300 ease-in-out px-3 py-2 rounded-md hover:bg-blue-600"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="hover:text-blue-100 transition-colors duration-300 ease-in-out px-3 py-2 rounded-md hover:bg-blue-600"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* เมนู Hamburger (แสดงเมื่อ isOpen เป็น true และบนหน้าจอขนาดเล็ก) */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-3 px-2 pb-3 sm:px-3 text-center">
            <Link
              href="/"
              className="block hover:text-blue-100 transition-colors duration-300 ease-in-out px-3 py-2 rounded-md hover:bg-blue-600 text-lg"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block hover:text-blue-100 transition-colors duration-300 ease-in-out px-3 py-2 rounded-md hover:bg-blue-600 text-lg"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/projects"
              className="block hover:text-blue-100 transition-colors duration-300 ease-in-out px-3 py-2 rounded-md hover:bg-blue-600 text-lg"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="block hover:text-blue-100 transition-colors duration-300 ease-in-out px-3 py-2 rounded-md hover:bg-blue-600 text-lg"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </nav>
    </section>
  );
}