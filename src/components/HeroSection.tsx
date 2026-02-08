import React from 'react';
import { Download, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center
                 bg-gradient-to-br from-blue-50 via-indigo-50 to-indigo-100"
    >
      <div className="container mx-auto px-6 text-center">
        <div className="flex flex-col items-center">

          {/* Profile Image */}
          <div
            className="
              mb-8
              animate-[fadeInScale_0.8s_ease-out_forwards]
              opacity-0
            "
          >
            <div className="relative">
              {/* Gradient ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 blur-md opacity-30" />
              <img
                src="/profile.jpg"
                alt="Rithu Johnson"
                className="
                  relative
                  w-50 h-50
                  rounded-full
                  border-4 border-white
                  shadow-xl
                  object-cover
                "
              />
            </div>
          </div>

          {/* Name */}
          <h1
            className="
              text-5xl md:text-6xl font-bold text-gray-900 mb-4
              animate-[slideUpFade_0.7s_ease-out_0.15s_forwards]
              opacity-0
            "
          >
            Rithu Johnson
          </h1>

          {/* Role */}
          <p
            className="
              text-xl md:text-2xl text-gray-600 mb-6
              animate-[slideUpFade_0.7s_ease-out_0.3s_forwards]
              opacity-0
            "
          >
            Full-Stack Developer | React, Angular, Node.js
          </p>

          {/* Description */}
          <p
            className="
              text-lg text-gray-600 mb-8 max-w-2xl leading-relaxed
              animate-[slideUpFade_0.7s_ease-out_0.45s_forwards]
              opacity-0
            "
          >
            Full-stack developer with 6+ years of experience building high-performance SaaS applications.
            Specialized in React, Angular, and Node.js, with a strong focus on clean architecture,
            scalability, and accessible, user-centric interfaces.
          </p>

          {/* Actions */}
          <div
            className="
              flex flex-col sm:flex-row gap-4
              animate-[slideUpFade_0.7s_ease-out_0.6s_forwards]
              opacity-0
            "
          >
            <Button
              size="lg"
              onClick={() => window.open('/Rithu_Resume_Full.pdf', '_blank')}
              className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2 shadow-md"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() =>
                window.open('https://www.linkedin.com/in/rithujohnson', '_blank')
              }
              className="
                flex items-center gap-2
                border-blue-600 text-blue-600
                hover:bg-blue-50
              "
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn Profile
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
