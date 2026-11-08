import React from 'react';
import BlogGrid from '../../components/Blog/BlogGrid';
import Footer from '../../components/Footer/Footer';

const Blog = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Main Heading Banner */}
      <div className="bg-[#f0f4fa] text-center pt-32 pb-16 px-4">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#000a3d] mb-2 tracking-tight">Our Blog</h1>
        <div className="text-sm text-gray-500 font-medium">
          <a href="/" className="hover:text-blue-600 transition-colors">Home</a> &gt; <span className="text-gray-400">Blog</span>
        </div>
      </div>

      {/* Grid listing component */}
      <BlogGrid />

      <Footer />
    </div>
  );
};

export default Blog;