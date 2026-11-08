import React from 'react';
import ServiceBanner from '../../components/ServiceDetails/ServiceBanner';
import ServiceContent from '../../components/ServiceDetails/ServiceContent';
import ServiceFeatures from '../../Components/ServiceDetails/ServiceFeatures';
import WhyChooseUs from '../../Components/ServiceDetails/WhyChooseUs';
import ServiceFAQ from '../../Components/ServiceDetails/ServiceFAQ';
import Footer from '../../Components/Footer/Footer';

const GeneralDentistry = () => {
  return (
    <div className="bg-white min-h-screen">
      <ServiceBanner title="General Dentistry" />

      <ServiceContent 
        subtitle="General Dentistry"
        title="Comprehensive Oral Care for Every Stage of Life"
        description="Our general dentistry services focus on the prevention, diagnosis, and treatment of a wide range of oral health issues. Whether you're coming in for a routine check-up or seeking relief from dental pain, our experienced team is here to help you maintain a healthy, confident smile."
        image1="/l1.webp" 
        image2="/s1.webp" 
      />
      <ServiceFeatures/>
      <WhyChooseUs/>
      <ServiceFAQ/>
      <Footer/>
    </div>

  );
};

export default GeneralDentistry;