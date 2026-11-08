import React from 'react';
import { Link } from 'react-router-dom';

const AppointmentBanner = () => {
  return (
    <div className="bg-[#f0f4fa] text-center pt-32 pb-16 px-4">
      <h1 className="text-4xl sm:text-5xl font-bold text-[#000a3d] mb-2 tracking-tight">Book Appointment</h1>
      <div className="text-sm text-gray-500 font-medium">
        <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link> &gt; <span className="text-gray-400">Book Appointment</span>
      </div>
    </div>
  );
};

export default AppointmentBanner;