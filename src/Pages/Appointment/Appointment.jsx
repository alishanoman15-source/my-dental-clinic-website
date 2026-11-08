import React from 'react';
import AppointmentBanner from '../../Components/AppointmentPageSections/AppointmentBanner';
import AppointmentForm from '../../Components/AppointmentPageSections/AppointmentForm';
import Footer from '../../Components/Footer/Footer';

const Appointment = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* 1. Page Header Breadcrumbs Section */}
      <AppointmentBanner />

      {/* 2. Form & Graphic Metadata Layout Component */}
      <AppointmentForm />

      {/* 3. Universal Frame Footer element */}
      <Footer />
    </div>
  );
};

export default Appointment;