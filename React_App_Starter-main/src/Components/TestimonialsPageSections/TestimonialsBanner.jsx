import React from 'react';
import { Link } from 'react-router-dom';

const TestimonialsBanner = () => {
  return (
    /* pt-32 mobile overlap protection ke sath custom background banner */
    <div className="bg-[#f0f4fa] text-center pt-32 pb-16 px-4">
      <h1 className="text-4xl sm:text-5xl font-bold text-[#000a3d] mb-2 tracking-tight">Testimonials</h1>
      <div className="text-sm text-gray-500 font-medium">
        <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link> &gt; <span className="text-gray-400">Testimonials</span>
      </div>
    </div>
  );
};

export default TestimonialsBanner;