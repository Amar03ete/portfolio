import React, { useState } from 'react';
import { Menu, X, Home, User, Code, Briefcase, GraduationCap, Star, Mail } from 'lucide-react';
import { useScrollspy } from '../hooks/useScrollspy';

const navigation = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'About', href: '#about', icon: User },
  { name: 'Skills', href: '#skills', icon: Code },
  { name: 'Projects', href: '#projects', icon: Briefcase },
  { name: 'Education', href: '#education', icon: GraduationCap },
  { name: 'Reviews', href: '#reviews', icon: Star },
  { name: 'Contact', href: '#contact', icon: Mail },
];

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showThemeMessage, setShowThemeMessage] = useState(false);
  const activeSection = useScrollspy(navigation.map(item => item.href.substring(1)));

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleThemeClick = () => {
    setShowThemeMessage(true);
    setTimeout(() => setShowThemeMessage(false), 3000);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        <div className="glass backdrop-blur-xl bg-gray-900/20 border-b border-gray-700/30">
          <div className="container-custom">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex-shrink-0">
                <button
                  onClick={() => scrollToSection('#home')}
                  className="text-2xl font-bold gradient-text hover:scale-105 transition-transform duration-200"
                >
                  Amar
                </button>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-8">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.href.substring(1);
                  return (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? 'text-blue-400 bg-blue-500/20 border border-blue-500/30'
                          : 'text-gray-300 hover:text-blue-400 hover:bg-gray-800/50'
                      }`}
                    >
                      <Icon size={16} />
                      <span>{item.name}</span>
                    </button>
                  );
                })}
              </nav>

              {/* Theme Message Button & Mobile Menu */}
              <div className="flex items-center space-x-4">
                <button
                  onClick={handleThemeClick}
                  className="hidden md:block p-2 rounded-lg text-gray-300 hover:bg-gray-800 transition-colors duration-200 hover:text-yellow-400"
                  aria-label="Theme toggle"
                >
                  🌙
                </button>

                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="md:hidden p-2 rounded-lg text-gray-300 hover:bg-gray-800 transition-colors duration-200"
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-700/30">
              <div className="container-custom py-4">
                <nav className="flex flex-col space-y-2">
                  {navigation.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeSection === item.href.substring(1);
                    return (
                      <button
                        key={item.name}
                        onClick={() => scrollToSection(item.href)}
                        className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                          isActive
                            ? 'text-blue-400 bg-blue-500/20 border border-blue-500/30'
                            : 'text-gray-300 hover:text-blue-400 hover:bg-gray-800/50'
                        }`}
                      >
                        <Icon size={20} />
                        <span>{item.name}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Theme Message Notification */}
      {showThemeMessage && (
        <div className="fixed top-20 right-4 z-50 animate-slide-down">
          <div className="bg-gray-800/90 backdrop-blur-md border border-gray-600/50 rounded-lg p-4 shadow-xl">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🐛</span>
              <div>
                <p className="text-white font-medium">No Light!</p>
                <p className="text-gray-400 text-sm">Light attracts bugs... 🌙</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};