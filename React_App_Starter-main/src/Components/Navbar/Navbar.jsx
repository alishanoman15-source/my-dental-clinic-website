import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleMobileDropdown = (menu) => {
    setActiveMobileDropdown(activeMobileDropdown === menu ? null : menu);
  };

  // Main navigation links ke liye premium card highlight styling handler
  const activeClassHandler = ({ isActive }) => 
    isActive 
      ? "flex items-center gap-3 px-3 py-2.5 rounded-lg bg-blue-50 text-blue-600 border border-blue-100 font-bold transition-all duration-200"
      : "flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-700 hover:bg-slate-50 font-bold transition-all duration-200";

  // Sub-menu nested items ke liye professional activation highlighter
  const subMenuActiveClassHandler = ({ isActive }) =>
    isActive
      ? "block px-3 py-2 rounded-md bg-blue-50/70 text-blue-600 font-bold border-l-2 border-blue-600 transition-all duration-150 text-sm"
      : "block px-3 py-2 rounded-md text-slate-600 hover:text-blue-600 hover:bg-slate-50/50 transition-all duration-150 text-sm";

  return (
    <>
      {/* --- 💻 DESKTOP & MOBILE MAIN HEADER NAVBAR --- */}
      <div className="fixed w-full top-0 lg:top-5 z-40 px-0 lg:px-8 transition-all duration-300">
        <nav className="bg-white max-w-7xl mx-auto h-20 shadow-md lg:rounded-xl flex items-center justify-between px-4 sm:px-6 lg:px-8 relative">
          
          {/* 🍔 Left Side Hamburger Button (Mobile View Only) */}
          <button 
            onClick={() => setIsMobileMenuOpen(true)} 
            className="lg:hidden p-2 text-slate-800 focus:outline-none cursor-pointer z-50"
          >
            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* 🎯 ULTRA SMOOTH ANIMATED LOGO CONTAINER */}
          <div className={`absolute inset-0 flex items-center justify-center pointer-events-none lg:static lg:inset-auto lg:justify-start lg:pointer-events-auto transition-all duration-500 ease-in-out
            ${isMobileMenuOpen ? 'translate-x-[25%] sm:translate-x-[35%] opacity-90' : 'translate-x-0'}`}
          >
            <Link to="/" className="pointer-events-auto flex items-center cursor-pointer">
              <img src="/logo-black.webp" alt="Dentia Logo" className="h-9 sm:h-10 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex space-x-8 items-center">
            <Link to="/" className="text-[#1e293b] font-bold hover:text-blue-600 transition">Home</Link>
            
            <div className="relative group cursor-pointer py-2">
              <Link to="/services" className="flex items-center text-[#1e293b] font-bold hover:text-blue-600 transition gap-1">
                Services <span className="text-xs">▼</span>
              </Link>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-xl border border-gray-100 rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="flex flex-col py-2">
                  <Link to="/services/general-dentistry" className="px-4 py-2 hover:bg-blue-50 text-slate-700 hover:text-blue-600 transition font-medium text-sm">General Dentistry</Link>
                  <Link to="/services/cosmetic-dentistry" className="px-4 py-2 hover:bg-blue-50 text-slate-700 hover:text-blue-600 transition font-medium text-sm">Cosmetic Dentistry</Link>
                  <Link to="/services/pediatric-dentistry" className="px-4 py-2 hover:bg-blue-50 text-slate-700 hover:text-blue-600 transition font-medium text-sm">Pediatric Dentistry</Link>
                  <Link to="/services/restorative-dentistry" className="px-4 py-2 hover:bg-blue-50 text-slate-700 hover:text-blue-600 transition font-medium text-sm">Restorative Dentistry</Link>
                  <Link to="/services/preventive-dentistry" className="px-4 py-2 hover:bg-blue-50 text-slate-700 hover:text-blue-600 transition font-medium text-sm">Preventive Dentistry</Link>
                  <Link to="/services/orthodontics" className="px-4 py-2 hover:bg-blue-50 text-slate-700 hover:text-blue-600 transition font-medium text-sm">Orthodontics</Link>
                  <hr className="my-1 border-gray-100" />
                  <Link to="/services" className="px-4 py-2 hover:bg-blue-50 text-slate-700 hover:text-blue-600 transition font-bold text-sm">All Services</Link>
                </div>
              </div>
            </div>

            <Link to="/dentists" className="text-[#1e293b] font-bold hover:text-blue-600 transition">Dentists</Link>
            
            <div className="relative group cursor-pointer py-2">
              <div className="flex items-center text-[#1e293b] font-bold hover:text-blue-600 transition gap-1">
                Pages <span className="text-xs">▼</span>
              </div>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-xl border border-gray-100 rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="flex flex-col py-2">
                  <Link to="/about" className="px-4 py-2 hover:bg-blue-50 text-slate-700 hover:text-blue-600 transition font-medium text-sm">About Us</Link>
                  <Link to="/faq" className="px-4 py-2 hover:bg-blue-50 text-slate-700 hover:text-blue-600 transition font-medium text-sm">FAQ</Link>
                  <Link to="/gallery" className="px-4 py-2 hover:bg-blue-50 text-slate-700 hover:text-blue-600 transition font-medium text-sm">Gallery</Link>
                  <Link to="/testimonials" className="px-4 py-2 hover:bg-blue-50 text-slate-700 hover:text-blue-600 transition font-medium text-sm">Testimonials</Link>
                </div>
              </div>
            </div>

            <Link to="/blog" className="text-[#1e293b] font-bold hover:text-blue-600 transition">Blog</Link>
            <Link to="/contact" className="text-[#1e293b] font-bold hover:text-blue-600 transition">Contact</Link>
          </div>

          {/* Desktop Right Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link 
              to="/appointment" 
              className="bg-[#3b82f6] text-white px-6 py-2.5 rounded-md font-medium hover:bg-[#1e293b] transition-all duration-300 text-center text-sm items-center gap-2 inline-flex"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
              Book Appointment
            </Link>

            <button onClick={() => setIsSidebarOpen(true)} className="flex flex-col gap-1.5 p-2 hover:bg-gray-100 rounded-md transition cursor-pointer focus:outline-none">
              <span className="w-6 h-0.5 bg-slate-800"></span>
              <span className="w-6 h-0.5 bg-slate-800"></span>
            </button>
          </div>

          {/* Mobile Right Spacer */}
          <div className="w-10 lg:hidden"></div>
        </nav>
      </div>

      {/* --- 📱 LEFT SIDEBAR SLIDE-IN MOBILE MENU --- */}
      <div 
        className={`fixed inset-0 bg-black/40 z-[60] lg:hidden transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>

      <div className={`fixed top-0 left-0 bottom-0 h-full w-[295px] bg-white z-[70] lg:hidden transition-transform duration-300 overflow-y-auto shadow-2xl flex flex-col justify-between ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        
        {/* Upper Layout Wrapper */}
        <div>
          {/* Header containing Small Logo Option */}
          <div className="flex justify-between items-center px-5 h-20 border-b border-gray-100">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
              <img src="/logo-black.webp" alt="Dentia Menu Logo" className="h-7 w-auto" />
            </Link>
            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-black focus:outline-none text-2xl font-light">
              &times;
            </button>
          </div>

          {/* Mobile Navigation Links Layout with Icons */}
          <div className="px-3 py-4 flex flex-col space-y-1.5 text-[15px]">
            
            <NavLink to="/" end onClick={() => setIsMobileMenuOpen(false)} className={activeClassHandler}>
              <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
              Home
            </NavLink>

            {/* Services Dropdown Area */}
            <div className="py-0.5">
              <div className="flex justify-between items-center w-full rounded-lg hover:bg-slate-50 pr-2">
                <NavLink to="/services" onClick={() => setIsMobileMenuOpen(false)} className={activeClassHandler} style={{flex: 1}}>
                  <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>
                  Services
                </NavLink>
                <button onClick={() => toggleMobileDropdown('services')} className="p-2 focus:outline-none text-gray-400">
                  <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMobileDropdown === 'services' ? 'rotate-180 text-blue-600' : ''}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path></svg>
                </button>
              </div>
              {/* Highlighted Sub-menu Panel Container */}
              {activeMobileDropdown === 'services' && (
                <div className="mx-2 mt-2 p-2 bg-slate-50/70 border border-slate-100 rounded-xl flex flex-col space-y-1 transition-all duration-300">
                  <NavLink to="/services/general-dentistry" onClick={() => setIsMobileMenuOpen(false)} className={subMenuActiveClassHandler}>General Dentistry</NavLink>
                  <NavLink to="/services/cosmetic-dentistry" onClick={() => setIsMobileMenuOpen(false)} className={subMenuActiveClassHandler}>Cosmetic Dentistry</NavLink>
                  <NavLink to="/services/pediatric-dentistry" onClick={() => setIsMobileMenuOpen(false)} className={subMenuActiveClassHandler}>Pediatric Dentistry</NavLink>
                  <NavLink to="/services/restorative-dentistry" onClick={() => setIsMobileMenuOpen(false)} className={subMenuActiveClassHandler}>Restorative Dentistry</NavLink>
                  <NavLink to="/services/preventive-dentistry" onClick={() => setIsMobileMenuOpen(false)} className={subMenuActiveClassHandler}>Preventive Dentistry</NavLink>
                  <NavLink to="/services/orthodontics" onClick={() => setIsMobileMenuOpen(false)} className={subMenuActiveClassHandler}>Orthodontics</NavLink>
                  <NavLink to="/services" end onClick={() => setIsMobileMenuOpen(false)} className={subMenuActiveClassHandler}>All Services</NavLink>
                </div>
              )}
            </div>

            <NavLink to="/dentists" onClick={() => setIsMobileMenuOpen(false)} className={activeClassHandler}>
              <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
              Dentists
            </NavLink>

            {/* Pages Dropdown Area */}
            <div className="py-0.5">
              <div className="flex justify-between items-center w-full rounded-lg hover:bg-slate-50 pr-2">
                <span className="flex items-center gap-3 px-3 py-2.5 text-slate-700 font-bold flex-1 cursor-default">
                  <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/></svg>
                  Pages
                </span>
                <button onClick={() => toggleMobileDropdown('pages')} className="p-2 focus:outline-none text-gray-400">
                  <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMobileDropdown === 'pages' ? 'rotate-180 text-blue-600' : ''}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path></svg>
                </button>
              </div>
              {/* Highlighted Sub-menu Panel Container */}
              {activeMobileDropdown === 'pages' && (
                <div className="mx-2 mt-2 p-2 bg-slate-50/70 border border-slate-100 rounded-xl flex flex-col space-y-1 transition-all duration-300">
                  <NavLink to="/about" onClick={() => setIsMobileMenuOpen(false)} className={subMenuActiveClassHandler}>About Us</NavLink>
                  <NavLink to="/faq" onClick={() => setIsMobileMenuOpen(false)} className={subMenuActiveClassHandler}>FAQ</NavLink>
                  <NavLink to="/gallery" onClick={() => setIsMobileMenuOpen(false)} className={subMenuActiveClassHandler}>Gallery</NavLink>
                  <NavLink to="/testimonials" onClick={() => setIsMobileMenuOpen(false)} className={subMenuActiveClassHandler}>Testimonials</NavLink>
                </div>
              )}
            </div>

            <NavLink to="/blog" onClick={() => setIsMobileMenuOpen(false)} className={activeClassHandler}>
              <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1M19 20a2 2 0 002-2V8a2 2 0 00-2-2h-5M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10M9 9h4m-4 4h4"/></svg>
              Blog
            </NavLink>

            <NavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)} className={activeClassHandler}>
              <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              Contact
            </NavLink>
          </div>
        </div>

        {/* --- 🎯 PERSISTENT INTEGRATED CTA BUTTON (Inside Drawer Bottom) --- */}
        <div className="p-4 border-t border-gray-100 bg-white sticky bottom-0">
          <Link 
            to="/appointment" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm h-12 rounded-xl flex items-center justify-center gap-2.5 shadow-lg shadow-blue-600/15 transition-all duration-300"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
            Book Appointment
          </Link>
        </div>

      </div>

      {/* --- RIGHT SIDEBAR (Desktop Drawer) --- */}
      <div className={`fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300 lg:block hidden ${isSidebarOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={() => setIsSidebarOpen(false)}></div>
      <div className={`fixed top-0 right-0 h-full w-96 bg-[#262c5b] z-[70] transform transition-transform duration-500 lg:block hidden ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} overflow-y-auto shadow-2xl`}>
        <div className="p-10 relative h-full">
          <button onClick={() => setIsSidebarOpen(false)} className="absolute top-6 right-6 text-gray-300 hover:text-white focus:outline-none">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
          <Link to="/" onClick={() => setIsSidebarOpen(false)} className="flex items-center mb-10 mt-2">
            <img src="/logo-black.webp" alt="Dentia Logo" className="h-10 w-auto brightness-0 invert" />
          </Link>
          <h3 className="text-white text-[19px] font-bold mb-5">Our Services</h3>
          <ul className="space-y-3">
            {['General Dentistry', 'Cosmetic Dentistry', 'Pediatric Dentistry', 'Restorative Dentistry', 'Preventive Dentistry', 'Orthodontics'].map((service, index) => (
              <li key={index}>
                <Link to={`/services/${service.toLowerCase().replace(' ', '-')}`} onClick={() => setIsSidebarOpen(false)} className="flex items-center text-sm text-gray-200 hover:text-white font-medium">
                  <svg className="w-4 h-4 mr-3 text-blue-400 shrink-0" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;