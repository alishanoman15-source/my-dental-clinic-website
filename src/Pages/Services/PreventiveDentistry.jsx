import React from 'react';
import ServiceBanner from '../../Components/ServiceDetails/ServiceBanner';
import ServiceFAQ from '../../Components/ServiceDetails/ServiceFAQ';
import PediatricSlider from '../../Components/ServiceDetails/PediatricSlider';
import PreventiveContent from '../../Components/ServiceDetails/PreventiveContent';
import PreventiveWhyChoose from '../../Components/ServiceDetails/PreventiveWhyChoose';
import PreventiveTreatments from '../../Components/ServiceDetails/PreventiveTreatments';
import Footer from '../../Components/Footer/Footer';

const PreventiveDentistry = () => {
  const whyChoosePoints = [
    { title: "Kid-Friendly Environment", desc: "Our space is fun, welcoming, and designed to keep children relaxed and happy during every visit." },
    { title: "Experienced Pediatric Dentists", desc: "Our team has advanced training in caring for children, using gentle techniques." },
    { title: "Preventive Focus", desc: "We emphasize early detection and education to help kids avoid problems before they start." },
    { title: "Modern Technology", desc: "We use child-safe digital X-rays and advanced tools to ensure accuracy, safety, and comfort." },
    { title: "Parent & Patient Education", desc: "We take time to teach proper brushing, flossing, and nutrition to build long-term dental health." },
    { title: "Flexible Scheduling", desc: "We offer after-school and weekend appointments to fit your family's busy schedule." }
  ];

  const treatments = [
    { title: "Routine Exams & Cleanings", desc: "Maintain a healthy smile with regular checkups and cleanings that remove plaque and detect early issues." },
    { title: "Fluoride Treatments", desc: "Strengthen enamel and help prevent cavities with safe, quick fluoride applications tailored for kids." },
    { title: "Dental Sealants", desc: "Protect your child's molars from decay with a thin, invisible coating that lasts for years." },
    { title: "Digital X-Rays", desc: "Safe, low-radiation imaging to catch cavities, monitor growth, and ensure accurate diagnosis." },
    { title: "Oral Health Education", desc: "We teach kids and parents how to care for teeth at home—setting the foundation for lifelong habits." },
    { title: "Habit Counseling", desc: "We offer guidance on habits like thumb-sucking and pacifier use to prevent future alignment issues." }
  ];

  const reviews = [
    { text: "The staff is so patient and gentle with my daughter. She actually looks forward to going to the dentist now!", author: "Rachel T." },
    { text: "Clean, cheerful, and professional. The entire team makes dental visits a positive experience for my kids.", author: "Emily S." },
    { text: "My son used to be terrified of dentists. Now he walks in with a smile. I can't thank this team enough!", author: "Daniel K." }
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
      <ServiceBanner title="Preventive Dentistry" />

      {/* 1. Content Section with 2 vertically stacked images */}
      <PreventiveContent 
        subtitle="Preventive Dentistry"
        title="Building Healthy Smiles That Last a Lifetime"
        description="We believe the best dental care begins with prevention. Preventive dentistry helps children avoid dental problems before they start, ensuring strong, healthy teeth and good habits that last into adulthood. Our goal is to make every visit positive, educational, and supportive for both kids and parents."
        img1="/pic3.webp"
        img2="/pic4.webp"
      />

      {/* 2. Why Choose Section with solid blue checkboxes */}
      <PreventiveWhyChoose 
        subtitle="Why Choose Us"
        title="Why Choose Our Preventive Dental Services?"
        points={whyChoosePoints}
      />

      {/* 3. Treatments Section Grid */}
      <PreventiveTreatments 
        subtitle="Preventive Dentistry"
        title="Preventive Treatments We Offer"
        items={treatments}
      />

      {/* 4. Slider component with matching colors */}
      <PediatricSlider reviews={reviews} image="/pic5.png" />

      {/* 5. Reusable Accordion FAQ */}
      <ServiceFAQ faqs={faqs} />
      <Footer/>
    </div>
  );
};

export default PreventiveDentistry;