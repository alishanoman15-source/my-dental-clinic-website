import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { IoLocationOutline, IoCallOutline, IoMailOutline } from 'react-icons/io5';

const Footer = () => {
  return (
    <footer className="bg-[#000a3d] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Columns Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-gray-800 pb-12">
          
          {/* Column 1: Logo & About */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              {/* Updated logo path with background container for perfect alignment on dark theme */}
              <div className="bg-white p-1 rounded-md shrink-0 flex items-center justify-center">
                <img src="/logo-black.webp" alt="Dentia Logo" className="w-8 h-8 object-contain" />
              </div>
              <span className="text-2xl font-bold tracking-wide">dentia</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mt-2">
              At Dentia, we're dedicated to providing high-quality, personalized dental care for patients of all ages. Our skilled team uses the latest technology to ensure comfortable, efficient treatments and beautiful, healthy smiles for life.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-500 transition text-lg"><FaFacebookF /></a>
              <a href="https://x.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-400 transition text-lg"><FaXTwitter /></a>
              <a href="https://whatsapp.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-green-500 transition text-lg"><FaWhatsapp /></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-pink-500 transition text-lg"><FaInstagram /></a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-red-500 transition text-lg"><FaYoutube /></a>
            </div>
          </div>

          {/* Column 2: Company Links connected to Routes */}
          <div>
            <h4 className="text-lg font-bold mb-6 relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-8 after:h-[2px] after:bg-blue-500">
              Company
            </h4>
            <ul className="flex flex-col gap-3 text-gray-400 text-sm">
              <li><Link to="/" className="hover:text-blue-500 transition">Home</Link></li>
              <li><Link to="/services" className="hover:text-blue-500 transition">Our Services</Link></li>
              <li><Link to="/gallery" className="hover:text-blue-500 transition">Gallery</Link></li>
              <li><Link to="/about" className="hover:text-blue-500 transition">About Us</Link></li>
              <li><Link to="/blog" className="hover:text-blue-500 transition">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-blue-500 transition">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Services Links connected to Routes */}
          <div>
            <h4 className="text-lg font-bold mb-6 relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-8 after:h-[2px] after:bg-blue-500">
              Our Services
            </h4>
            <ul className="flex flex-col gap-3 text-gray-400 text-sm">
              <li><Link to="/services/general-dentistry" className="hover:text-blue-500 transition">General Dentistry</Link></li>
              <li><Link to="/services/cosmetic-dentistry" className="hover:text-blue-500 transition">Cosmetic Dentistry</Link></li>
              <li><Link to="/services/pediatric-dentistry" className="hover:text-blue-500 transition">Pediatric Dentistry</Link></li>
              <li><Link to="/services/restorative-dentistry" className="hover:text-blue-500 transition">Restorative Dentistry</Link></li>
              <li><Link to="/services/preventive-dentistry" className="hover:text-blue-500 transition">Preventive Dentistry</Link></li>
              <li><Link to="/services/orthodontics" className="hover:text-blue-500 transition">Orthodontics</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-8 after:h-[2px] after:bg-blue-500">
              Contact Us
            </h4>
            <ul className="flex flex-col gap-5 text-gray-400 text-sm">
              <li className="flex gap-3 items-start">
                <IoLocationOutline className="text-blue-500 text-xl shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block mb-1">Clinic Location</strong>
                  100 S Main St, New York, NY
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <IoCallOutline className="text-blue-500 text-xl shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block mb-1">Call Us</strong>
                  +1 123 456 789
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <IoMailOutline className="text-blue-500 text-xl shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block mb-1">Send a Message</strong>
                  contact@dentiacare.com
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Policies */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 text-sm text-gray-500">
          <p>Copyright 2026 - Dentia by on3step</p>
          <div className="flex gap-6">
            <Link to="/faq" className="hover:text-white transition">Terms & Conditions</Link>
            <Link to="/about" className="hover:text-white transition">Privacy Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;