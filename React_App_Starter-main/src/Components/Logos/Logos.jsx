import React from 'react';

const Logos = () => {
  const logoFiles = ['1.png', '2.png', '3.png', '4.png', '5.png', '7.png', '9.png', '10.png'];

  return (
    // Padding py-16 se kam kar ke py-10 ki hai taakay space kam ho
    <section className="py-10 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center">
        
        <p className="text-gray-600 font-semibold mb-6 text-sm">Connected by 100+ Companies</p>

        {/* Scrollbar hide karne ke liye styles add kiye hain */}
        <div className="flex flex-row flex-nowrap justify-start lg:justify-center items-center gap-8 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {logoFiles.map((file, index) => (
            <div key={index} className="flex-shrink-0 w-24 md:w-32 opacity-70 hover:opacity-100 transition duration-300">
              <img src={`/${file}`} alt={`Company ${index + 1}`} className="w-full h-auto object-contain" />
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Logos;