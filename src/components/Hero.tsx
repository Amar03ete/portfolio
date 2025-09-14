import React from 'react';
import { ArrowDown, Download, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export const Hero: React.FC = () => {
  const { ref, hasIntersected } = useIntersectionObserver();

  const scrollToNext = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={ref}
      className="min-h-screen flex items-center justify-center space-gradient-bg relative overflow-hidden pt-20"
    >
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated stars */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-40 w-1 h-1 bg-blue-300 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-60 left-1/3 w-1 h-1 bg-purple-300 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-60 right-1/3 w-2 h-2 bg-cyan-300 rounded-full animate-pulse" style={{ animationDelay: '2.5s' }}></div>
        
        {/* Enhanced floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl floating-orb"></div>
        <div className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-purple-500/10 rounded-full blur-3xl floating-orb" style={{ animationDelay: '-3s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl floating-orb" style={{ animationDelay: '-6s' }}></div>
        <div className="absolute bottom-1/3 left-1/5 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl floating-orb" style={{ animationDelay: '-9s' }}></div>
        
        {/* Additional cosmic elements */}
        <div className="absolute top-1/3 right-1/5 w-24 h-24 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-2xl floating-orb" style={{ animationDelay: '-4s' }}></div>
        <div className="absolute bottom-1/5 left-1/3 w-36 h-36 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-2xl floating-orb" style={{ animationDelay: '-7s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Profile Image - Left Side */}
          <div className={`order-2 lg:order-1 text-center lg:text-left ${hasIntersected ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="relative inline-block">
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto lg:mx-0 rounded-full overflow-hidden border-4 border-blue-400/50 shadow-2xl glow-intense">
                <img
                  src="/idc.jpg"
                  alt="Amar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-black animate-pulse-glow flex items-center justify-center">
                <span className="text-white font-bold text-2xl">🚀</span>
              </div>
            </div>
          </div>

          {/* Main Content - Right Side */}
          <div className={`order-1 lg:order-2 text-center lg:text-left ${hasIntersected ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-shadow-lg">
              <span className="text-white">Hi, I'm </span>
              <span className="gradient-text">Amar</span>
            </h1>
            
            <div className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium mb-6 text-gray-300">
              <span className="block mb-2">Computer Science & Engineering Undergraduate (Final Year)</span>
              <span className="block gradient-text font-bold">Your Go-To Tech Visionary</span>
            </div>

            <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              A young innovator wired with curiosity—fuelled by a love for emerging tech and transformative ideas. I breathe data, crafting insight into impact and building smart systems that think before they act. My core? Data science, business analytics, and AI-powered solutions for real-world complexity. But I’m not just code-deep—I dive into web tinkering, generative AI, digital strategy, SEO, and the business side of tech. If it’s future-focused, I’m already in it.
            </p>

            {/* Location */}
            <div className="flex items-center justify-center lg:justify-start text-gray-400 mb-8">
              <MapPin size={20} className="mr-2" />
              <span>Available for opportunities worldwide</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 glow-intense"
              >
                <Mail size={20} className="mr-2" />
                Get In Touch
              </a>
              
              <a
                href="/CV%20ETE.pdf"
                download
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-md text-white border-2 border-white/20 hover:border-blue-400/50 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Download size={20} className="mr-2" />
                Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6">
              <a
                href="https://github.com/Amar03ete"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white/10 backdrop-blur-md rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 text-gray-300 hover:text-blue-400 glow"
                aria-label="GitHub Profile"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/amarpandey01/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white/10 backdrop-blur-md rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 text-gray-300 hover:text-blue-400 glow"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:amarpandey4646@gmail.com"
                className="p-4 bg-white/10 backdrop-blur-md rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 text-gray-300 hover:text-blue-400 glow"
                aria-label="Email Contact"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={`text-center mt-16 ${hasIntersected ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
          <button
            onClick={scrollToNext}
            className="animate-bounce"
            aria-label="Scroll to next section"
          >
            <ArrowDown size={32} className="text-gray-400 hover:text-blue-400 transition-colors duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};
