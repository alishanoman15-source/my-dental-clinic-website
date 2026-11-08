import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const VideoSection = () => {
  return (
    <section className="py-16 text-center">
      <div className="relative max-w-5xl mx-auto px-4 cursor-pointer">
        {/* Yahan apni thumbnail image ka sahi path dein, jaise /video-thumb.jpg */}
        <img 
          src="/1 (1).webp" 
          alt="Video Thumbnail" 
          className="rounded-3xl w-full h-[400px] object-cover shadow-xl" 
        />
        
        <Popup
          trigger={
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-20 h-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center transition-all border-2 border-white">
                 <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              </button>
            </div>
          }
          modal
          nested
        >
          {close => (
            <div className="p-0 rounded-3xl overflow-hidden w-full max-w-4xl">
              <button className="absolute top-2 right-4 text-white text-3xl z-10" onClick={close}>&times;</button>
              <iframe 
                width="100%" 
                height="500" 
                src="https://www.youtube.com/embed/C6rf51uHWJg?autoplay=1" 
                title="Video" 
                frameBorder="0" 
                allow="autoplay; encrypted-media" 
                allowFullScreen
              ></iframe>
            </div>
          )}
        </Popup>
      </div>
    </section>
  );
};

export default VideoSection;