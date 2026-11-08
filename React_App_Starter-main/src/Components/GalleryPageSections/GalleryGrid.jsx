import React, { useState } from 'react';

const GalleryGrid = () => {
  const [activeTab, setActiveTab] = useState('VIEW ALL');
  const [selectedImg, setSelectedImg] = useState(null);

  const tabs = ['VIEW ALL', 'DENTISTS', 'FACILITIES', 'SERVICES'];

  // 📸 Updated image names to use your custom /ppic1.webp format
  const imagesData = [
    { id: 1, src: '/ppic1.webp', category: 'FACILITIES', alt: 'Dental Chair and Room Setup' },
    { id: 2, src: '/ppic2.webp', category: 'FACILITIES', alt: 'Dental X-Ray Screen' },
    { id: 3, src: '/ppic3.webp', category: 'SERVICES', alt: 'Patients in Waiting Area' },
    { id: 4, src: '/ppic4.webp', category: 'DENTISTS', alt: 'Doctor Working in Lab' },
    { id: 5, src: '/ppic5.webp', category: 'SERVICES', alt: 'Dentist Operating on Patient' },
    { id: 6, src: '/ppic6.webp', category: 'DENTISTS', alt: 'Female Dentist Portrait' },
    { id: 7, src: '/ppic7.webp', category: 'DENTISTS', alt: 'Two Dentists Smiling' },
    { id: 8, src: '/ppic8.webp', category: 'SERVICES', alt: 'Two Girls Smiling at Clinic' },
    { id: 9, src: '/ppic9.webp', category: 'SERVICES', alt: 'Doctor Showing Results to Patient' },
    { id: 10, src: '/ppic10.webp', category: 'SERVICES', alt: 'Doctor Explaining Treatment' },
    { id: 11, src: '/ppic11.webp', category: 'SERVICES', alt: 'Child Dental Checkup' },
    { id: 12, src: '/ppic12.webp', category: 'SERVICES', alt: 'Doctor Cleaning Teeth' }
  ];

  const filteredImages = activeTab === 'VIEW ALL' 
    ? imagesData 
    : imagesData.filter(img => img.category === activeTab);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      
      {/* 🛠️ Fixed Options Layout: Mobile par vertical column aur text center (FAQ page jaisa same style) */}
      <div className="flex flex-col sm:flex-row items-center justify-center border-b border-gray-100 gap-5 sm:gap-6 mb-12 pb-4 sm:pb-1">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-sm font-bold tracking-wide transition-all pb-1 focus:outline-none text-center uppercase ${
              activeTab === tab
                ? 'text-blue-600 border-b-2 border-blue-600 sm:pb-3'
                : 'text-gray-400 hover:text-[#000a3d] border-b-2 border-transparent sm:pb-3'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Dynamic Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredImages.map((img) => (
          <div 
            key={img.id}
            onClick={() => setSelectedImg(img.src)}
            className="group relative aspect-[4/3] bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 shadow-sm cursor-pointer"
          >
            <img 
              src={img.src} 
              alt={img.alt} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[#000a3d]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="bg-white/90 text-[#000a3d] px-4 py-2 rounded-xl text-xs font-bold shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                View
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal Box */}
      {selectedImg && (
        <div 
          className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4"
          onClick={() => setSelectedImg(null)}
        >
          <div className="relative max-w-4xl max-h-[85vh] overflow-hidden rounded-2xl bg-black">
            <button 
              onClick={() => setSelectedImg(null)}
              className="absolute top-4 right-4 bg-black/60 text-white hover:bg-black/90 w-10 h-10 rounded-full flex items-center justify-center text-2xl font-light focus:outline-none z-50 transition-colors"
            >
              &times;
            </button>
            <img src={selectedImg} alt="Enlarged View" className="max-w-full max-h-[85vh] object-contain block mx-auto" />
          </div>
        </div>
      )}

    </div>
  );
};

export default GalleryGrid;