import React from 'react';
import GalleryBanner from '../../components/GalleryPageSections/GalleryBanner';
import GalleryGrid from '../../components/GalleryPageSections/GalleryGrid';
import Footer from '../../Components/Footer/Footer';

const Gallery = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* 1. Page Breadcrumbs Header */}
      <GalleryBanner />

      {/* 2. Photo Filtering Section & Modal Lightbox */}
      <GalleryGrid />

      {/* 3. Global Footer Component */}
      <Footer />
    </div>
  );
};

export default Gallery;