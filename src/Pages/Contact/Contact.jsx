import React from 'react';
import ContactBanner from '../../components/ContactPageSections/ContactBanner';
import ContactForm from '../../components/ContactPageSections/ContactForm';
import Footer from '../../Components/Footer/Footer';

const Contact = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* 1. Page Header Breadcrumbs Banner */}
      <ContactBanner />

      {/* 2. Interactive Input Grid Section */}
      <ContactForm />

      {/* 3. Global Framework Footer */}
      <Footer />
    </div>
  );
};

export default Contact;