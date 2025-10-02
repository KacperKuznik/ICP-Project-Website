"use client"; 

import { useState } from "react";

export default function Card({ imageSrc, description, popup, children, onClick  }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div onClick={onClick}>
      {/* Card */}
      <div
        className="max-w-sm bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <img
          src={imageSrc}
          alt={description}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <p className="text-gray-600 text-base">{description}</p>
        </div>
      </div>

      {/* Popup / Modal */}
      {isOpen && popup &&(
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
            <h2 className="text-gray-600 mt-2">{description}</h2>
            {children}
          </div>
        </div>
      )}
    </div>
  );
}
