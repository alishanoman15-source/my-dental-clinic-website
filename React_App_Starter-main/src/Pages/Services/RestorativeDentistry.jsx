import React from 'react';
import ServiceBanner from '../../Components/ServiceDetails/ServiceBanner';
import ServiceFAQ from '../../Components/ServiceDetails/ServiceFAQ';
import RestorativeContent from '../../Components/ServiceDetails/RestorativeContent';
import RestorativeTreatments from '../../Components/ServiceDetails/RestorativeTreatments';
import RestorativeWhyChoose from '../../Components/ServiceDetails/RestorativeWhyChoose';
import Footer from '../../Components/Footer/Footer';

const RestorativeDentistry = () => {
  const treatments = [
    { title: "Fillings", desc: "Restore cavities with durable, tooth-colored fillings that blend seamlessly with your natural smile." },
    { title: "Crowns", desc: "Cap a damaged or decayed tooth with a custom-made crown for strength and aesthetic appeal." },
    { title: "Bridges", desc: "Replace missing teeth by securing a prosthetic tooth between two healthy teeth with a dental bridge." },
    { title: "Dental Implants", desc: "A permanent solution for missing teeth, providing a stable foundation for crowns, bridges, or dentures." },
    { title: "Dentures", desc: "Restore missing teeth with custom-made dentures that help you chew, speak, and smile with confidence." },
    { title: "Inlays & Onlays", desc: "Custom restorations that fit inside or on top of a damaged tooth for a more conservative solution than crowns." }
  ];

  const whyChoosePoints = [
    { title: "Patient-Centered Care", desc: "We prioritize your comfort and goals, ensuring every treatment plan is tailored specifically to your needs." },
    { title: "Experienced Specialists", desc: "Our team includes highly skilled restorative dentists dedicated to delivering long-lasting, natural-looking results." },
    { title: "Comprehensive Services", desc: "We offer a full range of restorative treatments, from simple fillings to complex full-mouth reconstructions." },
    { title: "Modern Technology", desc: "We utilize the latest dental technology, ensuring accurate diagnoses, efficient treatments, and optimal outcomes." },
    { title: "Emergency Care", desc: "We provide emergency dental care for unexpected issues, ensuring you receive prompt treatment when needed most." },
    { title: "Convenient Scheduling", desc: "We offer flexible hours to fit your busy schedule, including early morning and evening appointments." }
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
      <ServiceBanner title="Restorative Dentistry" />

      <RestorativeContent 
        subtitle="Restorative Dentistry"
        title="Restore Your Smile with Confidence"
        description="Our restorative dentistry services focus on repairing damaged or missing teeth to restore function, health, and aesthetics. Whether you need a simple filling or a complex reconstruction, our experienced team is here to help you regain a healthy, confident smile."
        img1="/pii.png"
        img2="/pic2.png"
        img3="/l2.webp" // Reused pic1 as grid placeholder
      />

      <RestorativeTreatments items={treatments} />

      <RestorativeWhyChoose points={whyChoosePoints} />

      <ServiceFAQ faqs={faqs} />
      <Footer/>
    </div>
  );
};

export default RestorativeDentistry;