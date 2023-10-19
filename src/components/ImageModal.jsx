// Filename: ImageModal.js
import React from 'react';

const ImageModal = ({ isOpen, onClose, imageUrl }) => {
  if (!isOpen) return null;

  return (
    <div className="text-7xl fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative bg-white p-4 max-w-4xl max-h-full overflow-auto box-border rounded">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-[#ffffff] border-none rounded-full text-2xl font-semibold"
        >
          &times; {/* Representing the close button */}
        </button>
        <img
          src={imageUrl}
          alt="Modal content"
          className="max-w-full max-h-full block mx-auto" // This centers the image
        />
      </div>
    </div>
  );
};

export default ImageModal;
