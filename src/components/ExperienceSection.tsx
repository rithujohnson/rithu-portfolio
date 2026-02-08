
import React from 'react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Senior Full-Stack Developer',
      company: 'IhreZuhauseBeratung',
      location: 'Berlin, Germany (Freelance)',
      duration: 'Jun 2025 – Present',
      description: [
        'Architect and deliver full-stack features for a SaaS-based home and property management platform using React, Next.js, and Node.js.',
        'Design modular frontend components and REST APIs, improving feature delivery speed and long-term maintainability.',
        'Improve application performance through lazy loading, caching strategies, and real-time updates using WebSockets.',
        'Implement CI/CD pipelines with GitHub Actions and AWS, enabling automated testing and reliable deployments.',
        'Ensure accessibility and responsive design following WCAG 2.1 standards across devices and browsers.'
      ]
    },
    {
      title: 'Senior Software Engineer',
      company: 'Processor Systems Pvt. Ltd. (ProcSys)',
      location: 'Bangalore, India',
      duration: 'Apr 2022 – Feb 2025',
      description: [
        'Developed enterprise-grade Angular and Node.js applications for real-time IoT monitoring and analytics dashboards.',
        'Modernized legacy AngularJS applications to Angular with modular architecture and lazy loading, reducing maintenance overhead.',
        'Built backend services in Node.js and PHP to support real-time data streaming and alerting systems.',
        'Improved overall application performance through caching, compression, and build-time optimizations.',
        'Automated CI/CD workflows using AWS CloudFormation and GitLab CI/CD, significantly reducing release cycles.'
      ]
    },
    {
      title: 'Software Engineer',
      company: 'Processor Systems Pvt. Ltd. (ProcSys)',
      location: 'Bangalore, India',
      duration: 'Jul 2019 – Mar 2022',
      description: [
        'Built and maintained responsive Angular applications based on Figma designs for enterprise clients.',
        'Integrated frontend applications with REST APIs, ensuring reliable data flow and error handling.',
        'Improved cross-browser compatibility and overall UI responsiveness.',
        'Wrote automated unit tests using Jasmine and Karma, reducing regression issues and improving code stability.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Work Experience
          </h2>
          
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-blue-200"></div>
            
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} ml-12 md:ml-0`}>
                  <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow animate-fade-in">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                      <span className="text-sm text-blue-600 font-medium">{exp.duration}</span>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-gray-700 font-medium">{exp.company}</p>
                      <p className="text-gray-500 text-sm">{exp.location}</p>
                    </div>
                    
                    <ul className="space-y-2">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="text-gray-600 text-sm flex items-start">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
