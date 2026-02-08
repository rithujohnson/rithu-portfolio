
import React, { useState } from 'react';
import { Mail, Linkedin, FileText } from 'lucide-react';

const ContactSection = () => {

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Get In Touch
          </h2>
          
          <div className="flex justify-center">
            <div className="animate-fade-in max-w-xl w-full">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Let's Connect
              </h3>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                I am open to full-time, freelance, or contract opportunities.
                Feel free to reach out for roles, collaborations, or technical discussions.
              </p>
              
              <div className="space-y-4">
                <a
                  href="mailto:rithujohnson974@gmail.com?subject=Contact from Portfolio"
                  className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <Mail className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-gray-600">rithujohnson974@gmail.com</p>
                  </div>
                </a>
                
                <a
                  href="https://www.linkedin.com/in/rithujohnson"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <Linkedin className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="font-medium text-gray-900">LinkedIn</p>
                    <p className="text-gray-600">Connect with me professionally</p>
                  </div>
                </a>
                
                <a 
                  href="/Rithu_Resume_Full.pdf"
                  target="_blank"
                  className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
                > 
                  <FileText className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="font-medium text-gray-900">Resume</p>
                    <p className="text-gray-600">Download my latest CV</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
