import React from 'react';
import { BarChart3, Database, Brain, Code2, Wrench, Users, Globe } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const technicalSkills = [
  { name: 'Data Analytics', icon: '📊' },
  { name: 'Python Programming', icon: '🐍' },
  { name: 'Business Analysis', icon: '📈' },
  { name: 'Web Development', icon: '🌐' },
  { name: 'MySQL', icon: '🗄️' },
  { name: 'Microsoft Power BI', icon: '📊' },
  { name: 'Data Visualization', icon: '📉' },
  { name: 'Generative AI', icon: '🤖' },
  { name: 'Digital Marketing', icon: '📱' },
  { name: 'Data Science', icon: '🔬' },
  { name: 'AWS', icon: '☁️' },
  { name: 'Machine Learning', icon: '🧠' },
  { name: 'Business Intelligence', icon: '💼' },
  { name: 'SEO', icon: '🔍' },
];

const softSkills = [
  'Analytical Skills',
  'Presentation Skills',
  'Critical Thinking',
  'Communication',
  'Teamwork',
  'Organization Skills',
  'Data Interpretation',
  'Business Insight',
  'Problem Solving',
  'Strategic Thinking',
];

const tools = [
  { name: 'VS Code', icon: '💻' },
  { name: 'Power BI', icon: '📊' },
  { name: 'GitHub', icon: '🐙' },
  { name: 'n8n', icon: '🔗' },
  { name: 'Jupyter', icon: '📓' },
  { name: 'Tableau', icon: '📈' },
  { name: 'Docker', icon: '🐳' },
  { name: 'Google Colab', icon: '🔬' },
  { name: 'Excel', icon: '📋' },
  { name: 'Pandas', icon: '🐼' },
  { name: 'TensorFlow', icon: '🧠' },
  { name: 'Scikit-learn', icon: '🤖' },
  { name: 'Matplotlib', icon: '📊' },
  { name: 'Seaborn', icon: '🌊' },
  { name: 'MySQL Workbench', icon: '🗄️' },
  { name: 'Adobe Creative Suite', icon: '🎨' },
];

const languages = [
  { name: 'English', level: 'Fluent Professional', stars: 4 },
  { name: 'Hindi', level: 'Native Speaker', stars: 5 },
  { name: 'Japanese', level: 'Basic', stars: 1 },
];

export const Skills: React.FC = () => {
  const { ref, hasIntersected } = useIntersectionObserver();

  return (
    <section id="skills" ref={ref} className="section-padding space-gradient-bg relative">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${hasIntersected ? 'animate-slide-up' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              My comprehensive toolkit for data science, AI, and business analytics
            </p>
          </div>

          {/* Technical Skills - Floating Animation */}
          <div className={`mb-16 ${hasIntersected ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <Code2 className="text-blue-400 mr-3" size={28} />
                <h3 className="text-2xl font-bold text-white">Technical Skills</h3>
              </div>
            </div>

            <div className="relative min-h-[400px] flex flex-wrap justify-center items-center gap-6">
              {technicalSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className={`floating-skills px-6 py-4 bg-white/10 backdrop-blur-md rounded-xl shadow-lg border border-white/20 hover:shadow-xl hover:scale-110 transition-all duration-300 text-center glow ${
                    hasIntersected ? 'animate-scale-in' : 'opacity-0'
                  }`}
                  style={{ 
                    animationDelay: `${0.4 + index * 0.1}s`,
                    animationDuration: `${6 + (index % 3)}s`
                  }}
                >
                  <div className="text-2xl mb-2">{skill.icon}</div>
                  <span className="text-white font-medium text-sm">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className={`mb-16 ${hasIntersected ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <Users className="text-purple-400 mr-3" size={28} />
                <h3 className="text-2xl font-bold text-white">Soft Skills</h3>
              </div>
              <p className="text-gray-400">
                Essential for interpersonal and professional competencies
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {softSkills.map((skill, index) => (
                <div
                  key={skill}
                  className={`px-6 py-3 bg-white/10 backdrop-blur-md rounded-full shadow-lg border border-white/20 hover:shadow-xl hover:scale-105 transition-all duration-300 ${
                    hasIntersected ? 'animate-scale-in' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                >
                  <span className="text-white font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Technologies */}
          <div className={`mb-16 ${hasIntersected ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '1.0s' }}>
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-6">
                <Wrench className="text-cyan-400 mr-3" size={28} />
                <h3 className="text-2xl font-bold text-white">Tools & Technologies</h3>
              </div>
              <p className="text-gray-400 mb-8">
                Development tools and platforms I work with daily
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {tools.map((tool, index) => (
                <div
                  key={tool.name}
                  className={`p-4 bg-white/10 backdrop-blur-md rounded-lg shadow-md hover:shadow-lg border border-white/20 transition-all duration-300 hover:scale-105 text-center glow-cyan ${
                    hasIntersected ? 'animate-scale-in' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${1.2 + index * 0.1}s` }}
                >
                  <div className="text-2xl mb-2">{tool.icon}</div>
                  <span className="text-white font-medium text-sm">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className={`${hasIntersected ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '1.4s' }}>
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <Globe className="text-green-400 mr-3" size={28} />
                <h3 className="text-2xl font-bold text-white">Languages</h3>
              </div>
              <p className="text-gray-400">
                Communication across cultures and markets
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {languages.map((lang, index) => (
                <div
                  key={lang.name}
                  className={`p-6 bg-white/10 backdrop-blur-md rounded-xl shadow-lg border border-white/20 text-center hover:shadow-xl transition-all duration-300 glow-purple ${
                    hasIntersected ? 'animate-scale-in' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${1.6 + index * 0.1}s` }}
                >
                  <h4 className="text-lg font-semibold text-white mb-2">{lang.name}</h4>
                  <p className="text-gray-400 text-sm mb-3">{lang.level}</p>
                  <div className="flex justify-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`text-lg ${
                          i < lang.stars ? 'text-yellow-400' : 'text-gray-600'
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};