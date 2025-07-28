import React from 'react';
import { GraduationCap, Award, Calendar, MapPin, Book, Star } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const education = [
  {
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Computer Science & Engineering',
    institution: 'University Name',
    location: 'City, State',
    duration: '2020 - 2024',
    status: 'Currently Pursuing',
    description: 'Focused on data science, machine learning, algorithms, and business analytics. Completing projects in predictive modeling, AI applications, and data-driven solutions.',
    coursework: [
      'Data Structures & Algorithms',
      'Database Management Systems',
      'Machine Learning',
      'Data Science & Analytics',
      'Business Intelligence',
      'Artificial Intelligence',
      'Statistical Methods',
      'Python Programming',
    ],
    achievements: [
      'Active member of Data Science Society',
      'Best Project Award for Smart HVAC Predictive Model',
      'Organized university AI/ML workshop events',
      'Completed multiple data science projects',
    ],
  },
  {
    degree: 'Higher Secondary Education',
    field: 'Science (PCM)',
    institution: 'School Name',
    location: 'City, State',
    duration: '2018 - 2020',
    status: 'Completed',
    description: 'Studied Physics, Chemistry, and Mathematics with focus on analytical thinking and problem-solving skills that form the foundation for data science.',
    coursework: [
      'Advanced Mathematics',
      'Physics',
      'Chemistry',
      'Computer Science',
    ],
    achievements: [
      'Top 5% in state board examinations',
      'Mathematics Olympiad participant',
      'Science exhibition winner',
    ],
  },
];

const certifications = [
  {
    title: 'Career Essentials in Business Analytics',
    issuer: 'Microsoft/LinkedIn Learning',
    date: '2024',
    description: 'Comprehensive certification covering business analytics fundamentals, data interpretation, and strategic decision-making.',
  },
  {
    title: 'Python for Data Science',
    issuer: 'IBM/Coursera',
    date: '2024',
    description: 'Advanced Python programming for data analysis, machine learning, and statistical computing.',
  },
  {
    title: 'Machine Learning Specialization',
    issuer: 'Stanford University/Coursera',
    date: '2023',
    description: 'Comprehensive machine learning course covering supervised and unsupervised learning algorithms.',
  },
  {
    title: 'Power BI Data Analyst',
    issuer: 'Microsoft',
    date: '2023',
    description: 'Professional certification in Power BI for data visualization and business intelligence.',
  },
];

export const Education: React.FC = () => {
  const { ref, hasIntersected } = useIntersectionObserver();

  return (
    <section id="education" ref={ref} className="section-padding space-gradient-bg">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${hasIntersected ? 'animate-slide-up' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Education & <span className="gradient-text">Certifications</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Academic foundation and continuous learning journey in data science and technology
            </p>
          </div>

          {/* Education Timeline */}
          <div className="relative mb-16">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

            {education.map((edu, index) => (
              <div
                key={edu.degree}
                className={`relative pl-20 pb-16 ${hasIntersected ? 'animate-slide-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-gray-900 shadow-lg"></div>

                {/* Education Card */}
                <div className="glass rounded-xl p-8 card-hover">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <GraduationCap className="text-blue-400 mr-3" size={24} />
                        <h3 className="text-2xl font-bold text-white">
                          {edu.degree}
                        </h3>
                      </div>
                      <p className="text-lg text-blue-400 font-semibold mb-2">
                        {edu.field}
                      </p>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-400">
                        <div className="flex items-center">
                          <Book className="mr-2" size={16} />
                          <span>{edu.institution}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="mr-2" size={16} />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="mr-2" size={16} />
                          <span>{edu.duration}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 lg:mt-0 lg:ml-8 text-right">
                      <div className={`inline-flex items-center px-4 py-2 rounded-lg ${
                        edu.status === 'Currently Pursuing' 
                          ? 'bg-yellow-500/20 text-yellow-300' 
                          : 'bg-green-500/20 text-green-300'
                      }`}>
                        <Star className="mr-2" size={16} />
                        <span className="font-semibold">
                          {edu.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {edu.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Coursework */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                        <Book className="mr-2" size={18} />
                        Key Coursework
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course) => (
                          <span
                            key={course}
                            className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-lg border border-blue-500/30"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                        <Award className="mr-2" size={18} />
                        Achievements
                      </h4>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement) => (
                          <li
                            key={achievement}
                            className="flex items-start text-gray-300 text-sm"
                          >
                            <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className={`${hasIntersected ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-4">
                Professional <span className="gradient-text">Certifications</span>
              </h3>
              <p className="text-lg text-gray-400">
                Continuous learning and skill development achievements
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={cert.title}
                  className={`glass p-6 rounded-xl card-hover ${
                    hasIntersected ? 'animate-scale-in' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-2">
                        {cert.title}
                      </h4>
                      <p className="text-blue-400 font-medium mb-1">
                        {cert.issuer}
                      </p>
                      <p className="text-gray-400 text-sm">
                        {cert.date}
                      </p>
                    </div>
                    <div className="p-2 bg-blue-500/20 rounded-lg">
                      <Award className="text-blue-400" size={20} />
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Philosophy */}
          <div className={`mt-16 text-center ${hasIntersected ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '1.2s' }}>
            <div className="glass p-8 rounded-xl max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Continuous Learning Philosophy
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                The field of data science and AI evolves rapidly, and I believe in staying ahead through continuous learning. 
                My formal education provides a strong foundation, but I'm committed to ongoing professional development 
                through certifications, online courses, and hands-on projects. This approach ensures I'm always equipped 
                with the latest tools and techniques in data science, machine learning, and business analytics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};