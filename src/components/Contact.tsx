import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle, CheckCircle, AlertCircle, Users } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'amarpandey4646@gmail.com',
    href: 'mailto:amarpandey4646@gmail.com',
  },
  {
    icon: Users,
    label: 'Instagram',
    value: '@amar_eternal',
    href: 'https://instagram.com/amar_eternal',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Available for opportunities worldwide',
    href: null,
  },
];

const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/Amar03ete',
    color: 'hover:text-white',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/amarpandey01/',
    color: 'hover:text-blue-400',
  },
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:amarpandey4646@gmail.com',
    color: 'hover:text-blue-400',
  },
];

const getEnv = (key: string) => {
  if (typeof import.meta !== 'undefined' && (import.meta as any).env) {
    return (import.meta as any).env[key] || '';
  }
  const nodeProcess = typeof globalThis !== 'undefined' ? (globalThis as any).process : undefined;
  if (nodeProcess && nodeProcess.env) {
    return nodeProcess.env[key] || '';
  }
  return '';
};

// Replace the placeholders below with your EmailJS credentials.
// Vite-style env vars (VITE_*) are expected to be injected at build time.
const EMAILJS_SERVICE_ID = getEnv('VITE_EMAILJS_SERVICE_ID') || getEnv('REACT_APP_EMAILJS_SERVICE_ID') || 'service_qu3hb63';
const EMAILJS_TEMPLATE_ID = getEnv('VITE_EMAILJS_TEMPLATE_ID') || getEnv('REACT_APP_EMAILJS_TEMPLATE_ID') || 'template_e2yh23x';
const EMAILJS_PUBLIC_KEY = getEnv('VITE_EMAILJS_PUBLIC_KEY') || getEnv('REACT_APP_EMAILJS_PUBLIC_KEY') || 'gfsmeA8x2ZbTNQ8xr';

export const Contact: React.FC = () => {
  const { ref, hasIntersected } = useIntersectionObserver();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      if (
        !EMAILJS_SERVICE_ID ||
        !EMAILJS_TEMPLATE_ID ||
        !EMAILJS_PUBLIC_KEY ||
        EMAILJS_SERVICE_ID === 'service_qu3hb63'
      ) {
        throw new Error('EmailJS keys are missing. Set them in .env');
      }

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Amar',
        },
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        }
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" ref={ref} className="section-padding space-gradient-bg">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${hasIntersected ? 'animate-slide-up' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Ready to start a conversation? I'd love to hear from you about data science opportunities, 
              AI projects, or business analytics collaborations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Information */}
            <div className={`${hasIntersected ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              <div className="glass-dark p-8 rounded-xl">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Let's Connect
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    I'm always interested in hearing about new opportunities in data science, AI/ML engineering, 
                    business analytics, and Python development. Whether you're looking for a data scientist, 
                    have a challenging analytics project, or want to discuss the latest in AI, I'd love to hear from you.
                  </p>
                </div>

                {/* Contact Details */}
                <div className="space-y-4 mb-8">
                  {contactInfo.map((info) => {
                    const Icon = info.icon;
                    const content = (
                      <div className="flex items-center p-4 bg-white/10 rounded-lg border border-white/20 hover:shadow-md transition-all duration-300 hover:bg-white/15">
                        <div className="p-2 bg-blue-500/20 rounded-lg mr-4">
                          <Icon className="text-blue-400" size={20} />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-400">
                            {info.label}
                          </p>
                          <p className="text-white font-medium">
                            {info.value}
                          </p>
                        </div>
                      </div>
                    );

                    return info.href ? (
                      <a key={info.label} href={info.href} className="block hover:scale-105 transition-transform duration-200">
                        {content}
                      </a>
                    ) : (
                      <div key={info.label}>
                        {content}
                      </div>
                    );
                  })}
                </div>

                {/* Social Links */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">
                    Follow Me
                  </h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`p-3 bg-white/10 rounded-lg border border-white/20 text-gray-400 ${social.color} hover:scale-110 transition-all duration-300 hover:shadow-lg`}
                          aria-label={social.label}
                        >
                          <Icon size={20} />
                        </a>
                      );
                    })}
                  </div>
                </div>

                {/* Availability Status */}
                <div className="mt-8 p-4 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg border border-green-500/30">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-300">
                        Current Status
                      </p>
                      <p className="text-green-300 font-semibold">
                        Available for opportunities worldwide
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`${hasIntersected ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
              <div className="glass-dark p-8 rounded-xl">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2 flex items-center">
                    <MessageCircle className="mr-3" size={24} />
                    Send a Message
                  </h3>
                  <p className="text-gray-400">
                    I'll get back to you as soon as possible.
                  </p>
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center">
                    <CheckCircle className="text-green-400 mr-3" size={20} />
                    <div>
                      <p className="text-green-300 font-medium">Message sent successfully!</p>
                      <p className="text-green-400 text-sm">Thanks for reaching out. I will respond soon.</p>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center">
                    <AlertCircle className="text-red-400 mr-3" size={20} />
                    <div>
                      <p className="text-red-300 font-medium">Something went wrong!</p>
                      <p className="text-red-400 text-sm">Please try sending an email directly to amarpandey4646@gmail.com</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 text-white placeholder-gray-400"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 text-white placeholder-gray-400"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 text-white placeholder-gray-400"
                      placeholder="Data Science Opportunity / Project Collaboration / etc."
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 text-white placeholder-gray-400 resize-none"
                      placeholder="Tell me about your data science project, analytics needs, or opportunity!"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:hover:scale-100 disabled:cursor-not-allowed glow"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send size={20} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-gray-400 text-sm">
                    Prefer direct email? Reach out at{' '}
                    <a
                      href="mailto:amarpandey4646@gmail.com"
                      className="text-blue-400 hover:underline font-medium"
                    >
                      amarpandey4646@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Call to Action */}
          <div className={`text-center mt-16 ${hasIntersected ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
            <div className="glass-dark p-8 rounded-xl max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Let's Build Data-Driven Solutions Together
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Whether you're a startup looking for data insights, an established company seeking AI solutions, 
                or a fellow data scientist interested in collaboration, I'm excited to hear from you. Let's discuss 
                how we can leverage data science and AI to create meaningful impact and drive business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/amar_ap.pdf"
                  download
                  className="inline-flex items-center px-6 py-3 bg-white/10 text-white border-2 border-white/20 hover:border-blue-400/50 font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Download Resume
                </a>
                <a
                  href="https://calendly.com/amar03/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Schedule a Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
