'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ProjectGalleryProps {
  title: string;
  galleryImages: string[];
}

export default function ProjectGallery({ title, galleryImages }: ProjectGalleryProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImgSrc, setModalImgSrc] = useState("");

  const openModal = (src: string) => {
    setModalImgSrc(src);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImgSrc("");
  };

  if (!galleryImages || galleryImages.length === 0) return null;

  return (
    <>
      <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Project Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((imgSrc, index) => (
            <div
              key={index}
              className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-md cursor-pointer"
              onClick={() => openModal(imgSrc)}
            >
              <Image
                src={imgSrc}
                alt={`${title} - Image ${index + 1}`}
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
          onClick={closeModal}
        >
          <div
            className="relative w-[90vw] h-[90vh] max-w-5xl"
            onClick={(e) => e.stopPropagation()} // ป้องกันคลิกบนรูปแล้วปิด
          >
            <Image
              src={modalImgSrc}
              alt="Full View"
              fill
              style={{ objectFit: 'contain' }}
              className="rounded-lg shadow-lg"
            />
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/80 rounded-full p-2"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
