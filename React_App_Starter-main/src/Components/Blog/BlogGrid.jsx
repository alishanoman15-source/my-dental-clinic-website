import React from 'react';
import { useNavigate } from 'react-router-dom';

const BlogGrid = () => {
  const navigate = useNavigate();

  const blogPosts = [
    {
      id: 1,
      date: "20",
      month: "Jun",
      image: "/ppic13.webp",
      title: "Discover 10 Easy Tips to Maintain a Healthier and Brighter Smile Today",
      author: "Brunilda Doniger",
      category: "Health Care"
    },
    {
      id: 2,
      date: "20",
      month: "Jun",
      image: "/ppic14.webp",
      title: "Is Teeth Whitening Safe and Effective? Here's What You Need to Know",
      author: "Brunilda Doniger",
      category: "Health Care"
    },
    {
      id: 3,
      date: "20",
      month: "Jun",
      image: "/ppic15.webp",
      title: "Braces vs. Clear Aligners: Which Orthodontic Option Fits You Best?",
      author: "Brunilda Doniger",
      category: "Health Care"
    },
    {
      id: 4,
      date: "20",
      month: "Jun",
      image: "/ppic16.webp",
      title: "What to Expect During Your First Visit to the Dentist's Office",
      author: "Brunilda Doniger",
      category: "Health Care"
    },
    {
      id: 5,
      date: "20",
      month: "Jun",
      image: "/s5.webp",
      title: "5 Warning Signs You May Need a Root Canal and Why It's Not So Bad",
      author: "Brunilda Doniger",
      category: "Health Care"
    },
    {
      id: 6,
      date: "20",
      month: "Jun",
      image: "/ppic17.webp",
      title: "How to Protect Your Child's Teeth and Prevent Cavities Early On",
      author: "Brunilda Doniger",
      category: "Health Care"
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="group flex flex-col bg-white rounded-2xl overflow-hidden">
              
              {/* Image Container with Absolute Date Badge */}
              <div 
                onClick={() => navigate('/blog-details')}
                className="relative cursor-pointer overflow-hidden rounded-2xl aspect-[4/3]"
              >
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Date Badge */}
                <div className="absolute top-4 left-4 bg-blue-600 text-white rounded-xl px-3 py-1.5 flex flex-col items-center min-w-[45px] shadow-sm">
                  <span className="text-lg font-bold leading-none">{post.date}</span>
                  <span className="text-xs font-medium uppercase mt-0.5">{post.month}</span>
                </div>
              </div>

              {/* Meta details */}
              <div className="flex items-center gap-4 mt-4 text-xs font-medium text-gray-400">
                <span className="flex items-center gap-1.5">👤 {post.author}</span>
                <span className="flex items-center gap-1.5 text-blue-500">🏷️ {post.category}</span>
              </div>

              {/* Title Header */}
              <h3 
                onClick={() => navigate('/blog-details')}
                className="text-lg font-bold text-[#000a3d] mt-3 mb-2 cursor-pointer hover:text-blue-600 transition-colors leading-snug"
              >
                {post.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BlogGrid;