import React from 'react';
import { Facebook, Twitter, Mail } from 'lucide-react';
import { assets } from '../assets/assets';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-100 bg-white/80 backdrop-blur-md w-full">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Main Footer Content */}
        <div className="flex flex-col sm:flex-row items-center justify-between py-4 sm:py-8 gap-4">
          {/* Logo and Copyright - Stack on mobile */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
            <img 
              src={assets.logo} 
              alt="Company Logo" 
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain hover:opacity-80 transition-opacity"
            />
            <div className="h-6 w-px bg-gray-200 hidden sm:block" />
            <p className="text-xs sm:text-sm text-gray-500 text-center sm:text-left">
              © {currentYear} BG Removal
            </p>
          </div>

          {/* Social Links - Centered on mobile */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a 
              href="#" 
              className="group flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" />
            </a>
            <a 
              href="#" 
              className="group flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 group-hover:text-blue-400 transition-colors duration-300" />
            </a>
            <a 
              href="#" 
              className="group flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
              aria-label="Email"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 group-hover:text-violet-600 transition-colors duration-300" />
            </a>
          </div>
        </div>

        {/* Links - Hidden on very small screens, show in grid on larger mobile */}
        <div className="hidden sm:flex flex-wrap justify-center gap-x-6 gap-y-2 pb-6 text-xs sm:text-sm text-gray-500">
          <a href="#" className="hover:text-violet-600 transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-violet-600 transition-colors">
            Terms of Service
          </a>
          <a href="#" className="hover:text-violet-600 transition-colors">
            Contact Us
          </a>
          <a href="#" className="hover:text-violet-600 transition-colors">
            About
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;