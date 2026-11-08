import React from 'react';
import { Link } from 'react-router-dom';

const GalleryBanner = () => {
  return (
    <div className="bg-[#f0f4fa] text-center pt-32 pb-16">
      <h1 className="text-4xl sm:text-5xl font-bold text-[#000a3d] mb-2 tracking-tight">Gallery</h1>
      <div className="text-sm text-gray-500 font-medium">
        <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link> &gt; <span className="text-gray-400">Gallery</span>
      </div>
    </div>
  );
};

export default GalleryBanner;