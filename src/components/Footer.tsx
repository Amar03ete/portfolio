import React from 'react';
import { Heart, Code, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Brand & Description */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold gradient-text mb-4">Amar</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Computer Science & Engineering graduate specializing in data science, 
                business analytics, AI, and Python development. Your go-to tech guy for 
                data-driven solutions.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Amar03ete"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/amarpandey01/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:amarpandey4646@gmail.com"
                  className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-1">
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <nav className="space-y-2">
                {[
                  { name: 'About', href: '#about' },
                  { name: 'Skills', href: '#skills' },
                  { name: 'Projects', href: '#projects' },
                  { name: 'Education', href: '#education' },
                  { name: 'Experience', href: '#experience' },
                  { name: 'Contact', href: '#contact' },
                ].map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="block text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
              <div className="space-y-3 text-gray-400">
                <p>
                  <span className="block text-sm">Email:</span>
                  <a
                    href="mailto:amarpandey4646@gmail.com"
                    className="hover:text-white transition-colors duration-200"
                  >
                    amarpandey4646@gmail.com
                  </a>
                </p>
                <p>
                  <span className="block text-sm">Instagram:</span>
                  <a
                    href="https://instagram.com/amar_eternal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors duration-200"
                  >
                    @amar_eternal
                  </a>
                </p>
                <p>
                  <span className="block text-sm">Location:</span>
                  Available for opportunities worldwide
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-gray-400 text-sm mb-4 md:mb-0">
              <span>© {currentYear} Amar. Made with</span>
              <Heart size={16} className="mx-2 text-red-500" />
              <span>and</span>
              <Code size={16} className="mx-2 text-blue-500" />
              <span>using React & TypeScript</span>
            </div>

            <button
              onClick={scrollToTop}
              className="p-2 bg-primary-600 hover:bg-primary-700 rounded-lg transition-all duration-300 hover:scale-110"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>

        {/* Additional Links */}
        <div className="border-t border-gray-800 py-4">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-400">
            <span>Specializing in Data Science • Business Analytics • AI/ML • Python Development</span>
          </div>
        </div>
      </div>
    </footer>
  );
};