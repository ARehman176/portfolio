import React from "react";
import { Icon } from "@iconify/react";
const Study = () => {
  return (
    <section className="mt-30 mb-20 md:px-16 ">
    

      <div className="flex flex-col md:flex-row gap-10 ml-29">
        {/* Left Column: Education & Certificates */}
        <div className="flex-1">
          <h3 className="text-4xl font-semibold text-blue-300 mb-6">Education & Certificates</h3>

          <div className="space-y-6">
            <div className="flex gap-4">
                 <div className="mt-4"> <Icon
                icon="icon-park-solid:degree-hat"
                className="text-5xl text-blue-400"/></div>
           
            <div>
  
              <h4 className="text-2xl font-semibold text-gray-600">Bachelor in Computer Science</h4>
              <p className="text-md text-gray-600 font-semibold mt-1">University of Managment And Technology</p>
              <p className="text-md text-gray-600 font-semibold mt-1">2021-2025</p>
              
            </div>
            </div>
           
           <div className="flex gap-4">
 <div>
               <Icon
                icon="ph:medal-light"
                className="text-5xl text-blue-400"/> 
              </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-600">React Developer Certified - freeCodeCamp</h4>
              <p className="text-md font-semibold text-gray-600 ">Online Course • 2024</p>
              
            </div>
           </div>
            <div className="flex gap-4 ">
 <div>
               <Icon
                icon="ph:medal-light"
                className="text-5xl text-blue-400"/> 
              </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-600">Advance CSS and Sass - Udemy</h4>
              <p className="text-md font-semibold text-gray-600 ">Online Course • 2024</p>
              
            </div>
           </div>
           
          </div>
        </div>

        {/* Right Column: Experience */}
        <div className="flex-1">
          <h3 className="text-4xl font-semibold text-blue-300 mb-6">Experience</h3>

          <div className="space-y-6">
            <div className="flex gap-2.5">
              <div className="mt-2">
                  <Icon
                icon="tabler:briefcase-filled"
                className="text-5xl text-blue-400"/> 
              </div>
              <div>
              <h4 className="text-xl font-semibold text-gray-600">Frontend Developer (Intern)</h4>
              <p className="text-xl font-semibold text-gray-600">Ekkel.Ai </p>
                <p className="text-xl font-semibold text-gray-600">March 2025 To Ongoing </p>
              <p className="text-gray-700 mt-1">Built responsive UIs using React and Tailwind. Converted designs into live components.</p>
              </div>
             
            </div>

            <div className="flex gap-2.5">
              <div className="mt-2">
                <Icon
                icon="tabler:briefcase-filled"
                className="text-5xl text-blue-400"/> 
              </div>
              <div>
                 <h4 className="text-xl font-semibold text-gray-600">Freelance Web Developer</h4>
              <p className="text-lg font-semibold text-gray-600">Remote • Ongoing</p>
              <p className="text-gray-700 mt-1">Developed client websites using React, HTML/CSS, and Shopify integrations.</p>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Study;
