import React from 'react';
import { Code, Heart, Zap, Target, Rocket, Users, BarChart3, Brain } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const highlights = [
  {
    icon: BarChart3,
    title: 'Data Science Specials',
    description: 'Transforming raw data into actionable business insights',
  },
  {
    icon: Brain,
    title: 'AI & ML Spec ',
    description: 'Building intelligent solutions with machine learning and generative AI',
  },
  {
    icon: Users,
    title: 'Business Analytics',
    description: 'Bridging the gap between data and strategic decision-making',
  },
  {
    icon: Target,
    title: 'Problem Solver',
    description: 'Breaking down complex challenges into elegant data-driven solutions',
  },
];

export const About: React.FC = () => {
  const { ref, hasIntersected } = useIntersectionObserver();

  return (
    <section id="about" ref={ref} className="section-padding space-gradient-bg">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${hasIntersected ? 'animate-slide-up' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A spirited CSE graduate mastering data science, AI, and business analytics—where logic meets intuition and innovation thrives.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div className={`${hasIntersected ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-gray-300 mb-6 leading-relaxed">
                 As a Computer Science & Engineering graduate, I thrive at the intersection of data, innovation, and impact. I specialize in translating complex datasets into powerful insights that shape smarter business decisions. My domain spans data science, machine learning, business analytics, and AI-driven solutions crafted to solve real-world problems with purpose.
                </p>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  With hands-on expertise in Python, data visualization, predictive modeling, and generative AI, I blend technical depth with strategic thinking. My goal? To deliver solutions that don’t just function—they move the needle.
                </p>

                <p className="text-gray-300 mb-8 leading-relaxed">
                When I’m not decoding patterns or training models, you’ll find me exploring the latest breakthroughs in AI, editing digital content, diving into thought-provoking reads, contributing , or crafting bold side projects that challenge the limits of what's possible through tech.
                </p>

                {/* Career Objectives */}
                <div className="glass p-6 rounded-xl border border-white/20">
                  <div className="flex items-center mb-4">
                    <Rocket className="text-blue-400 mr-3" size={24} />
                    <h3 className="text-xl font-semibold text-white">Career Objectives</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Actively seeking opportunities in data science, business analytics, AI/ML engineering, and Python development. I’m driven to collaborate with forward-thinking teams that harness data to fuel strategy and build intelligent, real-world solutions. My core interests lie in generative AI, predictive analytics, and designing scalable data pipelines that reshape how businesses operate, compete, and evolve in a data-driven world.
                  </p>
                </div>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className={`${hasIntersected ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {highlights.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="group p-6 glass rounded-xl card-hover border border-white/20"
                      style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                    >
                      <div className="p-2 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors duration-300 mb-4">
                        <Icon className="text-blue-400" size={24} />
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Fun Fact */}
              <div className="mt-8 p-6 glass rounded-xl border border-white/20">
                <div className="flex items-center mb-3">
                  <Heart className="text-cyan-400 mr-3" size={20} />
                  <h3 className="text-lg font-semibold text-white">Fun Fact</h3>
                </div>
                <p className="text-gray-300 text-sm">
                  I believe that data tells stories, and the best insights come from asking the right questions. 
                  This curiosity drives me to continuously explore new techniques in AI and machine learning 
                  to uncover patterns that others might miss.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};