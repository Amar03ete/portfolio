import React from 'react';
import { ExternalLink, Github, Lightbulb, Rocket, Users, Zap, BarChart3, Brain, Search } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const projects = [
  {
    title: 'Smart HVAC Predictive Model',
    description: 'Developed a machine learning model that optimizes heating, ventilation, and air conditioning systems for energy efficiency based on weather patterns. Achieved 83% prediction accuracy during hackathon testing phase.',
    image: 'https://images.pexels.com/photos/159045/the-interior-of-the-repair-interior-design-159045.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Python', 'ARIMA', 'TensorFlow', 'Pandas', 'Scikit-learn', 'IoT Sensors'],
    features: ['Energy Consumption Prediction', 'Maintenance Scheduling', 'Real-time Data Processing', 'Proactive System Adjustments'],
    duration: 'April 25-27, 2024',
    github: 'https://github.com/Amar03ete',
    category: 'AI/ML',
    status: 'Completed',
    achievements: [
      '83% prediction accuracy achieved',
      'Optimized energy efficiency by 25%',
      'Reduced operational costs significantly',
      'Integrated IoT sensor data successfully'
    ]
  },
  {
    title: 'COVID-19 Impact Analysis in Italy',
    description: 'Conducted comprehensive data analysis to assess COVID-19 impact on Italy\'s population, examining infection rates, mortality, and recovery trends across demographics and regions.',
    image: 'https://images.pexels.com/photos/3992933/pexels-photo-3992933.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Excel', 'Statistical Analysis'],
    features: ['Demographic Analysis', 'Regional Comparisons', 'Healthcare Capacity Assessment', 'Government Response Evaluation'],
    duration: 'May 2024',
    github: 'https://github.com/Amar03ete',
    category: 'Data Analytics',
    status: 'Completed',
    achievements: [
      'Identified regional healthcare disparities',
      'Analyzed demographic infection factors',
      'Evaluated lockdown effectiveness',
      'Provided actionable healthcare insights'
    ]
  },
  {
    title: 'Smart Motion Detection Security Cam',
    description: 'AI-powered security camera system with intelligent motion detection, real-time alerts, and automated monitoring capabilities for enhanced security surveillance.',
    image: 'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Python', 'OpenCV', 'TensorFlow', 'Computer Vision', 'IoT', 'Real-time Processing'],
    features: ['Motion Detection', 'Real-time Alerts', 'Video Analytics', 'Remote Monitoring'],
    duration: 'Ongoing',
    github: 'https://github.com/Amar03ete',
    category: 'Computer Vision',
    status: 'In Progress',
    achievements: [
      'Reduced false alarms by 70%',
      'Real-time processing capabilities',
      'Enhanced security monitoring',
      'Automated threat detection'
    ]
  },
  {
    title: 'AI Workflow Automation Platform',
    description: 'Comprehensive workflow automation platform similar to n8n, featuring AI-powered task automation, data processing pipelines, and intelligent workflow orchestration.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Python', 'Node.js', 'AI APIs', 'Workflow Engine', 'REST APIs', 'Database'],
    features: ['Workflow Automation', 'AI Integration', 'Data Processing', 'Task Orchestration'],
    duration: 'Current Project',
    github: 'https://github.com/Amar03ete',
    category: 'Automation',
    status: 'In Progress',
    achievements: [
      'Automated business processes',
      'Integrated multiple AI services',
      'Reduced manual work by 80%',
      'Enhanced productivity workflows'
    ]
  },
];

const problemSolvingApproach = [
  {
    icon: Lightbulb,
    title: 'Data Discovery',
    description: 'Understanding business requirements and identifying key data sources',
  },
  {
    icon: BarChart3,
    title: 'Analysis & Modeling',
    description: 'Applying statistical methods and machine learning techniques',
  },
  {
    icon: Brain,
    title: 'AI Integration',
    description: 'Leveraging artificial intelligence for intelligent automation',
  },
  {
    icon: Rocket,
    title: 'Implementation',
    description: 'Deploying scalable solutions with measurable business impact',
  },
];

export const Projects: React.FC = () => {
  const { ref, hasIntersected } = useIntersectionObserver();

  return (
    <section id="projects" ref={ref} className="section-padding bg-gray-900 relative">
      <div className="container-custom">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${hasIntersected ? 'animate-slide-up' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Data science and AI projects that solve real-world business challenges
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`group glass rounded-xl overflow-hidden card-hover ${
                  hasIntersected ? 'animate-slide-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      project.status === 'Completed' 
                        ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                        : 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs font-medium rounded-lg border border-blue-500/30">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/10 text-gray-300 text-xs font-medium rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Features & Achievements Side by Side */}
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    {/* Features */}
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                      <ul className="text-sm text-gray-400 space-y-1">
                        {project.features.map((feature) => (
                          <li key={feature} className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-2">Key Achievements:</h4>
                      <ul className="text-sm text-gray-400 space-y-1">
                        {project.achievements.map((achievement) => (
                          <li key={achievement} className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-200"
                    >
                      <Github size={16} className="mr-2" />
                      View Code
                    </a>
                    <button 
                      onClick={() => {
                        const searchQuery = `${project.title} case study`;
                        window.open(`https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`, '_blank');
                      }}
                      className="inline-flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 text-gray-300 text-sm font-medium rounded-lg transition-colors duration-200"
                    >
                      <Search size={16} className="mr-2" />
                      Case Study
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Problem-Solving Approach */}
          <div className={`${hasIntersected ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-4">
                My <span className="gradient-text">Data Science Approach</span>
              </h3>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                How I transform complex data challenges into actionable business solutions
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {problemSolvingApproach.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.title}
                    className={`text-center p-6 glass rounded-xl hover:shadow-lg transition-all duration-300 ${
                      hasIntersected ? 'animate-scale-in' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${1 + index * 0.1}s` }}
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-lg mb-4">
                      <Icon className="text-blue-400" size={24} />
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {step.title}
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Call to Action */}
          <div className={`text-center mt-16 ${hasIntersected ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '1.4s' }}>
            <p className="text-lg text-gray-400 mb-6">
              Interested in seeing more of my data science work?
            </p>
            <a
              href="https://github.com/Amar03ete"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Github size={20} className="mr-2" />
              View All Projects on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};