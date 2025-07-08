'use client';

import { useState } from 'react';
import { FaFileAlt, FaTimes } from 'react-icons/fa';

export default function ResumeCard() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenPreview = () => setIsOpen(true);
  const handleClosePreview = () => setIsOpen(false);

  return (
    <>
      {/* Resume Card */}
      <div className="bg-gray-700 p-6 rounded-lg shadow-lg flex flex-col items-center hover:bg-gray-600 transition-colors duration-300">
        <FaFileAlt className="text-yellow-400 text-4xl mb-4" />
        <h4 className="text-xl font-semibold mb-2 text-white">Resume</h4>
        <button
          onClick={handleOpenPreview}
          className="text-gray-300 hover:text-white transition-colors duration-200 underline"
        >
          Preview Resume
        </button>
      </div>

      {/* Fullscreen Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center"
          onClick={handleClosePreview} // คลิกพื้นหลังก็ปิดได้
        >
          <div
            className="relative bg-white w-full max-w-5xl h-[90vh] rounded-lg overflow-hidden shadow-xl"
            onClick={(e) => e.stopPropagation()} // ป้องกันการคลิกทะลุ iframe
          >
            {/* ปุ่มปิด */}
            <button
              onClick={handleClosePreview}
              className="absolute top-4 right-4 text-gray-600 hover:text-red-600 text-xl z-10"
              aria-label="Close"
            >
              <FaTimes />
            </button>

            {/* PDF Preview */}
            <iframe
              src="/downloads/Thanapat Kajoompoo-Resume.pdf"
              title="Resume Preview"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}
