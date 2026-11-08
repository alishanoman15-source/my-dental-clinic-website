import React from 'react';
import TestimonialsBanner from '../../components/TestimonialsPageSections/TestimonialsBanner';
import TestimonialsGrid from '../../components/TestimonialsPageSections/TestimonialsGrid';
import Footer from '../../Components/Footer/Footer';

const Testimonials = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* 1. Page Breadcrumbs Banner Header */}
      <TestimonialsBanner />

      {/* 2. Responsive Cards Columns Section */}
      <TestimonialsGrid />

      {/* 3. Global Footer Layout Element */}
      <Footer />
    </div>
  );
};

export default Testimonials;