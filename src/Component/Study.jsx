import React from "react";
import { Icon } from "@iconify/react";
const Study = () => {
  return (
   <section className="mt-30 mb-20 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
  <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row gap-10">
    
    {/* Left Column: Education & Certificates */}
    <div className="flex-1">
      <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-blue-300 mb-6">
        Education & Certificates
      </h3>

      <div className="space-y-6">
        {/* Degree */}
        <div className="flex items-start gap-4">
          <div className="mt-1">
            <Icon icon="icon-park-solid:degree-hat" className="text-4xl sm:text-5xl text-blue-400" />
          </div>
          <div>
            <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-600">
              Bachelor in Computer Science
            </h4>
            <p className="text-sm sm:text-md text-gray-600 font-semibold mt-1">
              University of Management And Technology
            </p>
            <p className="text-sm sm:text-md text-gray-600 font-semibold mt-1">
              2021–2025
            </p>
          </div>
        </div>

        {/* React Certificate */}
        <div className="flex items-start gap-4">
          <div className="mt-1">
            <Icon icon="ph:medal-light" className="text-4xl sm:text-5xl text-blue-400" />
          </div>
          <div>
            <h4 className="text-lg sm:text-xl font-semibold text-gray-600">
              React Developer Certified – freeCodeCamp
            </h4>
            <p className="text-sm sm:text-md font-semibold text-gray-600">Online Course • 2024</p>
          </div>
        </div>

        {/* CSS/SASS Certificate */}
        <div className="flex items-start gap-4">
          <div className="mt-1">
            <Icon icon="ph:medal-light" className="text-4xl sm:text-5xl text-blue-400" />
          </div>
          <div>
            <h4 className="text-lg sm:text-xl font-semibold text-gray-600">
              Advanced CSS and Sass – Udemy
            </h4>
            <p className="text-sm sm:text-md font-semibold text-gray-600">Online Course • 2024</p>
          </div>
        </div>
      </div>
    </div>

    {/* Right Column: Experience */}
    <div className="flex-1">
      <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-blue-300 mb-6">Experience</h3>

      <div className="space-y-6">
        {/* Internship */}
        <div className="flex items-start gap-4">
          <div className="mt-1">
            <Icon icon="tabler:briefcase-filled" className="text-4xl sm:text-5xl text-blue-400" />
          </div>
          <div>
            <h4 className="text-lg sm:text-xl font-semibold text-gray-600">Frontend Developer (Intern)</h4>
            <p className="text-sm sm:text-md font-semibold text-gray-600">Ekkel.AI</p>
            <p className="text-sm sm:text-md font-semibold text-gray-600">March 2025 – Ongoing</p>
            <p className="text-gray-700 mt-1">
              Built responsive UIs using React and Tailwind. Converted designs into live components.
            </p>
          </div>
        </div>

        {/* Freelance */}
        <div className="flex items-start gap-4">
          <div className="mt-1">
            <Icon icon="tabler:briefcase-filled" className="text-4xl sm:text-5xl text-blue-400" />
          </div>
          <div>
            <h4 className="text-lg sm:text-xl font-semibold text-gray-600">Freelance Web Developer</h4>
            <p className="text-sm sm:text-md font-semibold text-gray-600">Remote • Ongoing</p>
            <p className="text-gray-700 mt-1">
              Developed client websites using React, HTML/CSS, and Shopify integrations.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default Study;
