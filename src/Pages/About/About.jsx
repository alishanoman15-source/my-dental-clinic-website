import React from 'react';
import AboutBanner from '../../components/AboutPageSections/AboutBanner';
import AboutFeatures from '../../components/AboutPageSections/AboutFeatures';
import AboutTeam from '../../components/AboutPageSections/AboutTeam';
import AboutTouch from '../../components/AboutPageSections/AboutTouch';
import Footer from '../../components/Footer/Footer';

const About = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* 1. Page Header with breadcrumbs */}
      <AboutBanner />

      {/* 2. Core attributes section with appointment button */}
      <AboutFeatures />

      {/* 3. Doctors team grid list */}
      <AboutTeam />

      {/* 4. Split side gallery elements */}
      <AboutTouch />

      {/* 5. Footer */}
      <Footer />
    </div>
  );
};

export default About;