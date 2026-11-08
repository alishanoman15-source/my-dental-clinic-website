import React from 'react';
import ServiceBanner from '../../components/ServiceDetails/ServiceBanner';
import CosmeticContent from '../../components/ServiceDetails/CosmeticContent';
import WhyChooseUs from '../../components/ServiceDetails/WhyChooseUs';
import CosmeticTreatments from '../../components/ServiceDetails/CosmeticTreatments';
import TestimonialSlider from '../../components/ServiceDetails/TestimonialSlider';
import ServiceFAQ from '../../components/ServiceDetails/ServiceFAQ';
import Footer from '../../Components/Footer/Footer';

const CosmeticDentistry = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* 1. Reusable Banner */}
      <ServiceBanner title="Cosmetic Dentistry" />

      {/* 2. Custom Layout Main Info */}
      <CosmeticContent 
        subtitle="Cosmetic Dentistry"
        title="Enhancing Your Smile with Art and Precision"
        description="We believe your smile is your best accessory. Our cosmetic dentistry services are designed to improve the appearance of your teeth, gums, and overall smile—boosting your confidence and helping you look your best."
        mainImage="/l2.webp"
      />

      {/* 3. Reusable Why Choose Us Component (Mobile layout inverted) */}
      <WhyChooseUs mainImage="/s1.webp" />

      {/* 4. Treatments List Grid */}
      <CosmeticTreatments />

      {/* 5. Reviews Slider Component */}
      <TestimonialSlider clientImage="/pii.png" />

      {/* 6. Reusable FAQ Container (Heading hidden on mobile) */}
      <ServiceFAQ />
      <Footer/>
    </div>
  );
};

export default CosmeticDentistry;