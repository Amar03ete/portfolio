import React from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight, Building, Users, Zap } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const experiences = [
  {
    title: 'Freelance Data Analyst & Python Developer',
    company: 'Self-Employed',
    location: 'Remote',
    duration: 'Jan 2023 - Present',
    type: 'Freelance',
    description: 'Providing comprehensive data science and analytics services to businesses across various industries. Specialized in Python development, data visualization, business intelligence, and AI-driven solutions.',
    responsibilities: [
      'Developed custom data analytics solutions using Python and SQL',
      'Created interactive dashboards and reports using Power BI and Tableau',
      'Implemented machine learning models for predictive analytics',
      'Provided business intelligence consulting and strategic insights',
      'Automated data processing workflows and ETL pipelines',
    ],
    technologies: ['Python', 'Power BI', 'SQL', 'Pandas', 'Scikit-learn', 'Tableau'],
    achievements: [
      'Successfully completed 25+ data science projects',
      'Improved client decision-making efficiency by 45%',
      'Built predictive models with 85%+ accuracy rates',
      'Automated reporting processes saving 20+ hours weekly'
    ],
  },
  {
    title: 'Digital Marketing Specialist',
    company: 'Various Clients',
    location: 'Remote',
    duration: 'Jun 2022 - Present',
    type: 'Freelance',
    description: 'Comprehensive digital marketing services including SEO optimization, social media management, content strategy, and performance analytics for small to medium businesses.',
    responsibilities: [
      'Developed and executed digital marketing strategies',
      'Managed social media accounts and content calendars',
      'Performed SEO audits and optimization campaigns',
      'Created engaging visual content and graphics',
      'Analyzed marketing performance using data analytics',
    ],
    technologies: ['Google Analytics', 'SEO Tools', 'Adobe Creative Suite', 'Social Media Platforms', 'WordPress'],
    achievements: [
      'Increased client website traffic by average of 60%',
      'Improved social media engagement by 80%',
      'Generated 40% increase in lead conversion rates',
      'Managed marketing budgets totaling $50K+'
    ],
  },
  {
    title: 'Web Developer & Video Editor',
    company: 'Freelance Projects',
    location: 'Remote',
    duration: 'Mar 2022 - Dec 2023',
    type: 'Freelance',
    description: 'Full-stack web development and professional video editing services for businesses and content creators. Focus on responsive design, user experience, and engaging multimedia content.',
    responsibilities: [
      'Developed responsive websites using modern web technologies',
      'Created and edited promotional videos and content',
      'Designed user interfaces and user experience flows',
      'Implemented e-commerce solutions and payment systems',
      'Provided ongoing website maintenance and support',
    ],
    technologies: ['HTML/CSS', 'JavaScript', 'React', 'WordPress', 'Adobe Premiere Pro', 'After Effects'],
    achievements: [
      'Delivered 15+ complete website projects',
      'Produced 50+ professional video content pieces',
      'Achieved 95% client satisfaction rate',
      'Reduced client content production time by 50%'
    ],
  },
];

const skills_gained = [
  {
    icon: Users,
    title: 'Client Management',
    description: 'Building strong relationships and managing diverse client expectations',
  },
  {
    icon: Zap,
    title: 'Agile Delivery',
    description: 'Rapid project delivery with iterative feedback and improvements',
  },
  {
    icon: Building,
    title: 'Business Acumen',
    description: 'Understanding various industries and their unique data challenges',
  },
];

export const Experience: React.FC = () => {
  const { ref, hasIntersected } = useIntersectionObserver();

  return (
    <section id="experience" ref={ref} className="section-padding space-gradient-bg">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${hasIntersected ? 'animate-slide-up' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Diverse freelance experience across data science, digital marketing, and web development
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="relative mb-16">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

            {experiences.map((exp, index) => (
              <div
                key={`${exp.company}-${exp.title}`}
                className={`relative pl-20 pb-16 last:pb-0 ${hasIntersected ? 'animate-slide-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-gray-900 shadow-lg"></div>

                {/* Experience Card */}
                <div className="glass rounded-xl p-8 card-hover border border-white/20">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <Briefcase className="text-blue-400 mr-3" size={24} />
                        <h3 className="text-2xl font-bold text-white">
                          {exp.title}
                        </h3>
                      </div>
                      <p className="text-lg text-blue-400 font-semibold mb-2">
                        {exp.company}
                      </p>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-400">
                        <div className="flex items-center">
                          <MapPin className="mr-2" size={16} />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="mr-2" size={16} />
                          <span>{exp.duration}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 lg:mt-0 lg:ml-8">
                      <span className="inline-flex items-center px-4 py-2 bg-green-500/20 text-green-300 text-sm font-medium rounded-lg border border-green-500/30">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="grid lg:grid-cols-3 gap-6">
                    {/* Responsibilities */}
                    <div className="lg:col-span-2">
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                        <ChevronRight className="mr-2" size={18} />
                        Key Responsibilities
                      </h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((responsibility, i) => (
                          <li
                            key={i}
                            className="flex items-start text-gray-300 text-sm"
                          >
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies & Achievements */}
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-lg border border-purple-500/30"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">
                          Achievements
                        </h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="flex items-start text-gray-300 text-sm"
                            >
                              <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Skills Gained */}
          <div className={`${hasIntersected ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.9s' }}>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-4">
                Professional <span className="gradient-text">Skills Gained</span>
              </h3>
              <p className="text-lg text-gray-400">
                Valuable skills and insights gained through diverse freelance experience
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {skills_gained.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={skill.title}
                    className={`text-center p-6 glass rounded-xl card-hover border border-white/20 ${
                      hasIntersected ? 'animate-scale-in' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${1.1 + index * 0.1}s` }}
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-lg mb-4">
                      <Icon className="text-blue-400" size={24} />
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {skill.title}
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Experience Summary */}
          <div className={`mt-16 text-center ${hasIntersected ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '1.4s' }}>
            <div className="glass p-8 rounded-xl max-w-4xl mx-auto border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready for New Challenges
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                My diverse freelance experience has provided me with a unique perspective on how data science 
                and technology can solve real business problems across different industries. I've worked with 
                clients ranging from startups to established businesses, understanding their unique challenges 
                and delivering tailored solutions. This experience has prepared me to adapt quickly to new 
                environments and contribute effectively to data-driven organizations from day one.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};