'use client';

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navItems = ["home", "about","skills", "projects", "contact"];

  return (
    <section className="navbar">
      <nav className="bg-gradient-to-r from-blue-700 to-blue-500 p-4 text-white shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          {/* โลโก้ */}
          <Link
            href="/#home"
            className="text-3xl font-extrabold tracking-wider hover:text-blue-100 transition duration-300 transform hover:scale-105"
          >
            THANAPAT K.
          </Link>

          {/* ปุ่ม Hamburger */}
          <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          {/* เมนูบน Desktop */}
          <div className="hidden md:flex space-x-6 text-lg">
            {navItems.map((section) => (
              <Link
                key={section}
                href={`/#${section}`}
                className="hover:text-blue-100 transition px-3 py-2 rounded-md hover:bg-blue-600 capitalize"
              >
                {section}
              </Link>
            ))}
          </div>
        </div>

        {/* เมนู Hamburger บน Mobile */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-3 px-2 pb-3 text-center">
            {navItems.map((section) => (
              <Link
                key={section}
                href={`/#${section}`}
                onClick={closeMenu}
                className="block text-lg hover:text-blue-100 transition px-3 py-2 rounded-md hover:bg-blue-600 capitalize"
              >
                {section}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </section>
  );
}
