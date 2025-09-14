import React, { useState } from 'react';
import { Star, MessageCircle, User, Calendar, CheckCircle, X } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const existingReviews = [
  {
    id: 1,
    name: 'Geeta Mishra',
    role: 'pyscologist/theripist',
    company: 'Relationship Compass',
    rating: 5,
    review: 'He deliverd very nice website and fast infact, very nice support from his side and also give me tips to save cost and easily manage it.',
    date: '2024-11-06',
    approved: true,
  },
  {
    id: 2,
    name: 'Akshat',
    role: 'Financial Analyst',
    company: 'Motilal Oswal',
    rating: 5,
    review: 'Ive asked him to create a website, graphic design my business card and few other things and i will say superb work from his side fast within the deadline affordable charges and he is a good listner.',
    date: '2025-01-28',
    approved: true,
  },
  {
    id: 3,
    name: 'Mystic Science',
    role: 'Numerologist & counseller',
    company: 'Reallife solutions',
    rating: 4,
    review: 'He has been Managing my socials & Editing for me because i deal with people offline mostly but i just needed an online presence , supportive and hardworking.',
    date: '2025-05-28',
    approved: true,
  },
  
];

export const Reviews: React.FC = () => {
  const { ref, hasIntersected } = useIntersectionObserver();
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    company: '',
    rating: 5,
    review: '',
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: name === 'rating' ? parseInt(value) : value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('idle');
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Create email body for review submission
      const emailBody = `
New Review Submission for Approval:

Name: ${formData.name}
Role: ${formData.role}
Company: ${formData.company}
Rating: ${formData.rating}/5 stars

Review:
${formData.review}

---
Please review and approve this testimonial for your portfolio website.
      `.trim();

      // Create mailto link
      const mailtoLink = `mailto:amarpandey4646@gmail.com?subject=${encodeURIComponent('New Review Submission for Approval')}&body=${encodeURIComponent(emailBody)}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      setSubmitStatus('success');
      
      // Reset form after success
      setTimeout(() => {
        setFormData({ name: '', role: '', company: '', rating: 5, review: '' });
        setShowForm(false);
        setSubmitStatus('idle');
      }, 3000);
      
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    }
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={16}
        className={`${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-600'}`}
      />
    ));
  };

  return (
    <section id="reviews" ref={ref} className="section-padding space-gradient-bg relative overflow-hidden">
      <div className="container-custom">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${hasIntersected ? 'animate-slide-up' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Client <span className="gradient-text">Reviews</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              What clients say about working with me on data science and technology projects
            </p>
            <button
              onClick={() => setShowForm(true)}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <MessageCircle size={20} className="mr-2" />
              Leave a Review
            </button>
          </div>

          {/* Floating Reviews Strip */}
          <div className={`relative ${hasIntersected ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <div className="overflow-hidden">
              <div className="flex animate-scroll-left space-x-6 py-4">
                {/* First set of reviews */}
                {existingReviews.map((review) => (
                  <div
                    key={`first-${review.id}`}
                    className="flex-shrink-0 w-80 glass rounded-xl p-6 border border-white/20"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                        <User className="text-white" size={20} />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">{review.name}</h4>
                        <p className="text-gray-400 text-sm">{review.role}</p>
                        <p className="text-gray-500 text-xs">{review.company}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center mb-3">
                      {renderStars(review.rating)}
                    </div>
                    
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      "{review.review}"
                    </p>
                    
                    <div className="flex items-center text-gray-500 text-xs">
                      <Calendar size={12} className="mr-1" />
                      {new Date(review.date).toLocaleDateString()}
                    </div>
                  </div>
                ))}
                
                {/* Duplicate set for seamless loop */}
                {existingReviews.map((review) => (
                  <div
                    key={`second-${review.id}`}
                    className="flex-shrink-0 w-80 glass rounded-xl p-6 border border-white/20"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                        <User className="text-white" size={20} />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">{review.name}</h4>
                        <p className="text-gray-400 text-sm">{review.role}</p>
                        <p className="text-gray-500 text-xs">{review.company}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center mb-3">
                      {renderStars(review.rating)}
                    </div>
                    
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      "{review.review}"
                    </p>
                    
                    <div className="flex items-center text-gray-500 text-xs">
                      <Calendar size={12} className="mr-1" />
                      {new Date(review.date).toLocaleDateString()}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Review Form Modal */}
          {showForm && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <div className="glass-dark rounded-xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white">Leave a Review</h3>
                  <button
                    onClick={() => setShowForm(false)}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
                  >
                    <X className="text-gray-400" size={20} />
                  </button>
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center">
                    <CheckCircle className="text-green-400 mr-3" size={20} />
                    <div>
                      <p className="text-green-300 font-medium">Review submitted!</p>
                      <p className="text-green-400 text-sm">Thank you! Your review will be reviewed for approval.</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
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
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 text-white placeholder-gray-400"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="role" className="block text-sm font-medium text-gray-300 mb-2">
                        Role *
                      </label>
                      <input
                        type="text"
                        id="role"
                        name="role"
                        required
                        value={formData.role}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 text-white placeholder-gray-400"
                        placeholder="Your role"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 text-white placeholder-gray-400"
                      placeholder="Company name"
                    />
                  </div>

                  <div>
                    <label htmlFor="rating" className="block text-sm font-medium text-gray-300 mb-2">
                      Rating *
                    </label>
                    <select
                      id="rating"
                      name="rating"
                      required
                      value={formData.rating}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-transparent/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 text-grey"
                    >
                      <option value={5}>5 Stars - Excellent</option>
                      <option value={4}>4 Stars - Very Good</option>
                      <option value={3}>3 Stars - Good</option>
                      <option value={2}>2 Stars - Fair</option>
                      <option value={1}>1 Star - Poor</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="review" className="block text-sm font-medium text-gray-300 mb-2">
                      Review *
                    </label>
                    <textarea
                      id="review"
                      name="review"
                      required
                      rows={4}
                      value={formData.review}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 text-white placeholder-gray-400 resize-none"
                      placeholder="Share your experience working with Amar..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <MessageCircle size={20} className="mr-2" />
                    Submit Review
                  </button>
                </form>

                <p className="text-gray-400 text-sm mt-4 text-center">
                  Reviews are subject to approval before being displayed.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
