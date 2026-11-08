import React from 'react';
import { Link } from 'react-router-dom';

const AboutBanner = () => {
  return (
    /*  pt-32 add kar diya hai taake fixed navbar ke piche heading na chupe */
    <div className="bg-[#f0f4fa] text-center pt-32 pb-16 px-4">
      <h1 className="text-4xl sm:text-5xl font-bold text-[#000a3d] mb-2 tracking-tight">About Us</h1>
      <div className="text-sm text-gray-500 font-medium flex items-center justify-center gap-1.5">
        <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link> 
        <span className="text-gray-400 font-light">&gt;</span> 
        <span className="text-gray-400">About Us</span>
      </div>
    </div>
  );
};

export default AboutBanner;