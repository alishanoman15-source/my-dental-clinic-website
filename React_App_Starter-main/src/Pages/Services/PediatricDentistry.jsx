import React from 'react';
import ServiceBanner from '../../Components/ServiceDetails/ServiceBanner';
import ServiceFAQ from '../../Components/ServiceDetails/ServiceFAQ';
import PediatricContent from '../../Components/ServiceDetails/PediatricContent';
import PediatricTreatments from '../../Components/ServiceDetails/PediatricTreatments';
import PediatricSlider from '../../Components/ServiceDetails/PediatricSlider';
// Import the brand new pediatric-specific component here
import PediatricWhyChoose from '../../Components/ServiceDetails/PediatricWhyChoose';
import Footer from '../../Components/Footer/Footer';

const PediatricDentistry = () => {
  const whyChoosePoints = [
    "Kid-friendly and calming environment designed just for children",
    "Experienced, board-certified pediatric dentists",
    "Comfortable treatment rooms with fun themes",
    "Parents welcome during exams and treatments",
    "Focus on education to build lifelong healthy habits",
    "Flexible scheduling and emergency care available"
  ];

  const treatments = [
    { title: "Infant Oral Health Exams", desc: "Gentle exams for babies to monitor development and guide parents on early dental care." },
    { title: "Preventive Care", desc: "Protect young teeth with cleanings, fluoride treatments, and dental sealants." },
    { title: "Digital X-rays", desc: "Safe, low-radiation imaging to detect dental issues early and accurately." },
    { title: "Tooth-Colored Fillings", desc: "Natural-looking fillings to repair cavities while keeping your child's smile bright." },
    { title: "Emergency Dental Care", desc: "Quick, compassionate care for dental injuries, toothaches, and accidents." },
    { title: "Sedation Dentistry", desc: "Safe sedation options to help anxious children feel calm and comfortable." }
  ];

  const reviews = [
    { text: "Even during a dental emergency, they handled everything calmly and quickly. We felt cared for every step of the way.", author: "Carlos M." },
    { text: "Dr. Sarah and her team are amazing with kids! My son used to be afraid of the dentist, but now he actually looks forward to his check-ups.", author: "Jessica M." },
    { text: "The entire office is kid-friendly and welcoming. They explained every step clearly and made my daughter feel comfortable throughout.", author: "David K." },
    { text: "My kids love going here! The staff is kind, patient, and always has a smile. You can tell they really care about children.", author: "Linda W." },
    { text: "From the moment we walked in, we felt at ease. The waiting area was fun for the kids, and the staff made sure we were all comfortable.", author: "Amanda L." },
    { text: "My child needed a filling and was so nervous, but the dentist explained everything so kindly. They made it a positive experience from start to finish.", author: "Eric T." },
    { text: "I appreciate how they involve parents in the process. They answered all my questions and gave great tips for dental care at home.", author: "Nina R." },
    { text: "Our family loves this dental office! They're always on time, so friendly, and my twins leave with big smiles and new toothbrushes.", author: "Rebecca S." }
  ];

  const faqs = [
    { question: "When should I take my child to the dentist for the first time?", answer: "The American Academy of Pediatric Dentistry recommends scheduling the first visit by your child's first birthday or within 6 months of their first tooth erupting." },
    { question: "How can I prepare my child for their dental visit?", answer: "Talk about the dentist positively, read books about dental visits, and avoid using words like \"pain\" or \"hurt.\" Our team is also trained to help children feel at ease." },
    { question: "Are dental X-rays safe for children?", answer: "Yes, dental X-rays are safe. We use digital X-rays, which emit significantly less radiation than traditional ones, and we only take them when necessary." },
    { question: "What if my child has a toothache or dental emergency?", answer: "Call our office immediately. We prioritize emergencies and will guide you on what to do until you can reach the clinic." },
    { question: "How do dental sealants work?", answer: "Sealants are a thin protective coating applied to the chewing surfaces of back teeth (molars) to prevent cavities by blocking out food and bacteria." }
  ];

  return (
    <div className="bg-white min-h-screen">
      <ServiceBanner title="Pediatric Dentistry" />

      <PediatricContent 
        subtitle="Pediatric Dentistry"
        title="Comprehensive Oral Care for Every Stage of Life"
        description="We specialize in gentle, personalized dental care for infants, children, and teens. From a child's first tooth to their teenage years, our goal is to create a comfortable, fun, and educational environment for every visit."
        image="/pic1.png"
      />

      {/* Called the newly created safe component here */}
      <PediatricWhyChoose points={whyChoosePoints} />

      <PediatricTreatments items={treatments} />

      <PediatricSlider reviews={reviews} image="/pic2.png" />

      <ServiceFAQ faqs={faqs} />
      <Footer/>
    </div>
  );
};

export default PediatricDentistry;