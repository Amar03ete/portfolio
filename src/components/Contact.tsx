import React, { useState } from 'react';
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

    // mimic success for UI
    setTimeout(() => {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" ref={ref} className="section-padding space-gradient-bg">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">

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

            {/* LEFT SIDE CONTACT INFO */}
            <div className={`${hasIntersected ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              <div className="glass-dark p-8 rounded-xl">

                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Let's Connect</h3>
                  <p className="text-gray-300 leading-relaxed">
                    I'm always interested in hearing about new opportunities in data science, AI/ML engineering, 
                    business analytics, and Python development.
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  {contactInfo.map((info) => {
                    const Icon = info.icon;
                    const content = (
                      <div className="flex items-center p-4 bg-white/10 rounded-lg border border-white/20 hover:shadow-md transition-all duration-300 hover:bg-white/15">
                        <div className="p-2 bg-blue-500/20 rounded-lg mr-4">
                          <Icon className="text-blue-400" size={20} />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-400">{info.label}</p>
                          <p className="text-white font-medium">{info.value}</p>
                        </div>
                      </div>
                    );

                    return info.href ? (
                      <a key={info.label} href={info.href} className="block hover:scale-105 transition-transform duration-200">
                        {content}
                      </a>
                    ) : <div key={info.label}>{content}</div>;
                  })}
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
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
                        >
                          <Icon size={20} />
                        </a>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-8 p-4 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg border border-green-500/30">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-300">Current Status</p>
                      <p className="text-green-300 font-semibold">Available for opportunities worldwide</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* RIGHT SIDE CONTACT FORM */}
            <div className={`${hasIntersected ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
              <div className="glass-dark p-8 rounded-xl">

                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2 flex items-center">
                    <MessageCircle className="mr-3" size={24} />
                    Send a Message
                  </h3>
                  <p className="text-gray-400">I'll get back to you as soon as possible.</p>
                </div>

                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center">
                    <CheckCircle className="text-green-400 mr-3" size={20} />
                    <div>
                      <p className="text-green-300 font-medium">Message sent successfully!</p>
                      <p className="text-green-400 text-sm">Thanks for reaching out.</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Subject *</label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Message *</label>
                    <textarea
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg"
                  >
                    {isSubmitting ? "Sending..." : <><Send size={20} className="mr-2" />Send Message</>}
                  </button>
                </form>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

