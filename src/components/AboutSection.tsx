
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            About Me
          </h2>
          
          <div className="grid gap-12">            
            <div className="animate-fade-in">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  I am a senior full-stack developer with over 6 years of experience building
                  scalable, high-performance SaaS applications. My work spans both frontend
                  and backend development, with a strong focus on React, Angular, Node.js,
                  and TypeScript.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  I enjoy working in collaborative, agile teams where clean architecture,
                  performance, and maintainability are valued. I care deeply about writing
                  readable, testable code and delivering user-centric interfaces that are
                  accessible and reliable in production.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Experience</h4>
                    <p className="text-gray-600">6+ Years</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Location</h4>
                    <p className="text-gray-600">Berlin, Germany</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Focus</h4>
                    <p className="text-gray-600">Full-Stack Development</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Interests</h4>
                    <p className="text-gray-600">SaaS Platforms, Performance, Accessibility</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
