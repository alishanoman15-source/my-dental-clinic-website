import React from 'react';
import { Link } from 'react-router-dom';

const ServiceBanner = ({ title }) => {
  return (
    <div className="bg-[#f0f4f9] pt-40 pb-16 text-center border-b border-gray-200/50">
      <h1 className="text-5xl font-bold text-[#0f172a] tracking-tight mb-4">{title}</h1>
      <div className="flex items-center justify-center gap-2 text-sm font-semibold text-gray-500">
        <Link to="/" className="hover:text-blue-600 transition">Home</Link>
        <span className="text-gray-400">&gt;</span>
        
        {/* 🛠️ Fixed: Link path ko change kiya taake yeh sahi /services page par bheje */}
        <Link to="/services" className="hover:text-blue-600 transition">Services</Link>
        
        <span className="text-gray-400">&gt;</span>
        <span className="text-[#0f172a]">{title}</span>
      </div>
    </div>
  );
};

export default ServiceBanner;