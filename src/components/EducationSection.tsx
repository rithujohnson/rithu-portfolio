
import React from 'react';

const EducationSection = () => {
  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science Engineering',
      institution: 'APJ Abdul Kalam Technological University, India',
      year: '2015 – 2019',
      honors: '',
      description:
        'Strong foundation in computer science with focus on software engineering, data structures, and web technologies.'
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Education
          </h2>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow animate-fade-in"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-xl text-gray-700 font-medium">
                      {edu.institution}
                    </p>
                  </div>
                  <div className="text-right mt-4 md:mt-0">
                    <div className="text-lg font-semibold text-blue-600">
                      {edu.year}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
