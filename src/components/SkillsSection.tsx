
import React from 'react';

const SkillsSection = () => {
  const coreTechnologies = [
    'React',
    'Next.js',
    'Angular',
    'TypeScript',
    'JavaScript (ES6+)',
    'Node.js',
    'HTML5',
    'CSS3',
    'Tailwind CSS'
  ];

  const practicesAndTools = [
    'REST APIs & WebSockets',
    'AWS & Cloud Infrastructure',
    'CI/CD (GitHub Actions, GitLab)',
    'Testing (Jest, Jasmine, Karma)',
    'Performance Optimization',
    'Accessibility (WCAG 2.1)',
    'Agile & Scrum Practices',
    'Code Reviews & Mentoring'
  ];


  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Technical Skills & Practices
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-fade-in">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Core Technologies
              </h3>
              <ul className="space-y-3">
                {coreTechnologies.map((skill) => (
                  <li
                    key={skill}
                    className="bg-white rounded-lg px-4 py-3 shadow-sm border border-gray-200"
                  >
                    <span className="text-gray-700 font-medium">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="animate-fade-in">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Engineering Practices & Tools
              </h3>
              <ul className="space-y-3">
                {practicesAndTools.map((item) => (
                  <li
                    key={item}
                    className="bg-white rounded-lg px-4 py-3 shadow-sm border border-gray-200"
                  >
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
