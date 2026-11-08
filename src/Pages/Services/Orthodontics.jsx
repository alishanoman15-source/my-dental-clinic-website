import React from 'react';
import ServiceBanner from '../../Components/ServiceDetails/ServiceBanner';
import ServiceFAQ from '../../Components/ServiceDetails/ServiceFAQ';
import PediatricSlider from '../../Components/ServiceDetails/PediatricSlider';
import PreventiveWhyChoose from '../../Components/ServiceDetails/PreventiveWhyChoose';
import PreventiveTreatments from '../../Components/ServiceDetails/PreventiveTreatments';
// Naya specialized center component import kiya
import OrthodonticsContent from '../../Components/ServiceDetails/OrthodonticsContent';
import Footer from '../../Components/Footer/Footer';

const Orthodontics = () => {
  const treatments = [
    { title: "Traditional Metal Braces", desc: "The most common and reliable method for straightening teeth and correcting bite issues for all ages." },
    { title: "Ceramic Braces", desc: "A more discreet alternative to metal braces, using clear or tooth-colored materials that blend with your smile." },
    { title: "Invisalign / Clear Aligners", desc: "Virtually invisible aligners that offer a comfortable, removable, and discreet way to straighten teeth." },
    { title: "Early Orthodontic Treatment", desc: "Interventions for children to guide proper jaw growth and prevent more serious issues later." },
    { title: "Retainers", desc: "Essential appliances to maintain your new smile after braces or aligner treatment." },
    { title: "Surgical Orthodontics", desc: "Orthodontic treatment combined with surgery to correct severe jaw misalignments and bite problems." }
  ];

  const whyChoosePoints = [
    { title: "Experienced Team", desc: "Our board-certified orthodontists have years of experience providing top-quality care with the latest techniques and technology in orthodontics." },
    { title: "Personalized Treatment Plans", desc: "We take the time to understand your unique needs and create a treatment plan tailored specifically to you." },
    { title: "Comfortable Environment", desc: "We strive to create a welcoming, stress-free atmosphere for patients of all ages, making each visit enjoyable and relaxing." },
    { title: "Advanced Technology", desc: "We use state-of-the-art tools, such as digital X-rays and 3D imaging, to ensure the most accurate diagnosis and treatment plan for you." },
    { title: "Flexible Payment Plans", desc: "We offer various payment options to make orthodontic care accessible to everyone, including financing and insurance assistance." },
    { title: "Proven Results", desc: "We have helped thousands of patients achieve their dream smiles, delivering beautiful, long-lasting results that boost both oral health and confidence." }
  ];

  const reviews = [
    { text: "The staff is so patient and gentle with my daughter. She actually looks forward to going to the orthodontist now!", author: "Rachel T." },
    { text: "Dr. Sarah explained everything clearly and made me feel at ease about getting braces as an adult. So glad I went for it!", author: "Samantha L." },
    { text: "My teen just got his braces off, and the results are fantastic. We're so grateful for the care and attention he received throughout the process.", author: "Carlos D." }
  ];

  const faqs = [
    { question: "How often should I visit the dentist?", answer: "It is recommended to visit the dentist every six months for a routine check-up and professional cleaning to maintain optimal oral health." },
    { question: "What should I do in a dental emergency?", answer: "Contact our office immediately. We offer prompt emergency appointments to address pain, bleeding, or structural damage as quickly as possible." },
    { question: "Do you offer services for kids?", answer: "Yes, we provide comprehensive pediatric care in a warm, friendly environment designed to make children feel completely at ease." },
    { question: "What are my options for replacing missing teeth?", answer: "We offer several solutions including dental implants, permanent bridges, and custom full or partial dentures depending on your clinical needs." },
    { question: "Is teeth whitening safe?", answer: "Yes, professional teeth whitening under expert supervision is perfectly safe and highly effective for removing deep external stains." }
  ];

  return (
    <div className="bg-white min-h-screen">
      <ServiceBanner title="Orthodontics" />

      {/* 2. Brand new center-aligned layout component */}
      <OrthodonticsContent 
        subtitle="Orthodontics"
        title="Transform Your Smile with Expert Orthodontic Care"
        description="We offer comprehensive orthodontic services designed to help you achieve a healthier, more beautiful smile. Whether you are considering braces, Invisalign, or other treatments, our experienced team is here to guide you every step of the way."
        img1="/pic1.png"
        img2="/pic2.png"
      />

      <PreventiveTreatments 
        subtitle="Our Services"
        title="Orthodontic Treatments We Offer"
        items={treatments}
      />

      <PreventiveWhyChoose 
        subtitle="Why Choose Us"
        title="Why Choose Our Orthodontic Services?"
        points={whyChoosePoints}
      />

      <div className="bg-white">
        <PediatricSlider reviews={reviews} image="/pic5.png" />
      </div>

      <ServiceFAQ faqs={faqs} />
      <Footer/>
    </div>
  );
};

export default Orthodontics;