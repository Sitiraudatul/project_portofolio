import React, { useState } from "react";

export default function SkillCard({ title, image, description }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fungsi untuk membuka dan menutup modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="w-full mb-6 lg:pt-[50px] lg:ml-[50px]">
      <div className="bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 cursor-pointer"
           onClick={openModal}>
        
        {/* Gambar dibungkus agar ukurannya seragam */}
        <div className="w-[100px] h-[100px] flex items-center justify-center">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Judul skill */}
        <div className="text-center mt-4">
          <h4 className="text-gradient font-bold">{title}</h4>
        </div>
      </div>

      {/* Modal Pop-Up */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-md w-full">
            <h4 className="text-gradient font-bold text-xl mb-4">{title}</h4>
            <p>{description}</p>
            <button
              className="mt-4 bg-red-500 text-white py-2 px-4 rounded-full"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
