
import React from 'react';

const CertificationsSection = () => {
  const certifications = [
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      year: '2023',
      logo: '☁️'
    },
    {
      name: 'React Developer Certification',
      issuer: 'Meta',
      year: '2022',
      logo: '⚛️'
    },
    {
      name: 'JavaScript Algorithms and Data Structures',
      issuer: 'freeCodeCamp',
      year: '2021',
      logo: '📊'
    },
    {
      name: 'Frontend Web Development',
      issuer: 'Coursera',
      year: '2021',
      logo: '🎓'
    },
    {
      name: 'Agile Project Management',
      issuer: 'Scrum Alliance',
      year: '2022',
      logo: '📋'
    },
    {
      name: 'Google Analytics Certified',
      issuer: 'Google',
      year: '2023',
      logo: '📈'
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Certifications
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              >
                <div className="text-center">
                  <div className="text-4xl mb-4">{cert.logo}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {cert.name}
                  </h3>
                  <p className="text-gray-600 font-medium mb-2">
                    {cert.issuer}
                  </p>
                  <div className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                    {cert.year}
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

export default CertificationsSection;
