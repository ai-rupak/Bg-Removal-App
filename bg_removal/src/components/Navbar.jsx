import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';
import { AppContext } from '../context/AppContext.jsx';
import { Menu, X, CreditCard } from 'lucide-react';
import { assets } from '../assets/assets.js';

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { isSignedIn, user } = useUser();
  const { credit, loadCreditsData } = useContext(AppContext);
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  useEffect(() => {
    if (isSignedIn) {
      loadCreditsData();
    }
  }, [isSignedIn]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <img 
              src={assets.logo} 
              alt="Logo" 
              className="w-10 h-10 object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {isSignedIn ? (
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => navigate('/buy')}
                  className="group flex items-center space-x-2 cursor-pointer bg-gradient-to-b from-violet-700 to-fuchsia-600 m-auto hover:scale-105 transition-all duration-700 rounded-full px-4 py-2 text-white"
                >
                  <CreditCard className="w-4 h-4" />
                  <span className="text-sm font-medium">
                    {credit} Credits
                  </span>
                </button>
                
                <div className="flex items-center space-x-3 bg-gray-50 px-4 py-2 rounded-full">
                  <span className="text-sm text-gray-700">
                    Hi, {user.fullName?.split(' ')[0]}
                  </span>
                  <div className="hover:ring-2 hover:ring-blue-500 rounded-full transition-all duration-300">
                    <UserButton />
                  </div>
                </div>
              </div>
            ) : (
              <button 
                onClick={() => openSignIn({})}
                className="group flex items-center space-x-2 bg-black text-white px-6 py-2.5 rounded-full hover:bg-gray-800 transition-all duration-300"
              >
                <span className="text-sm font-medium">Get Started</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
            {isSignedIn ? (
              <div className="space-y-3 p-4">
                <button
                  onClick={() => {
                    navigate('/buy');
                    setIsMenuOpen(false);
                  }}
                  className="w-full flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full"
                >
                  <CreditCard className="w-4 h-4" />
                  <span className="text-sm font-medium">
                    {credit} Credits
                  </span>
                </button>
                
                <div className="flex items-center justify-between bg-gray-50 px-4 py-2 rounded-full">
                  <span className="text-sm text-gray-700">
                    Hi, {user.fullName?.split(' ')[0]}
                  </span>
                  <UserButton />
                </div>
              </div>
            ) : (
              <button
                onClick={() => {
                  openSignIn({});
                  setIsMenuOpen(false);
                }}
                className="w-full flex items-center justify-center space-x-2 bg-black text-white px-6 py-2.5 rounded-full"
              >
                <span className="text-sm font-medium">Get Started</span>
                <span>→</span>
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;