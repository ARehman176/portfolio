// components/AboutSection.jsx
import React from 'react';
import images from '../assets/images.png'; // Make sure to place gg.PNG and rename it to figma.png (or update path)

export default function Aboutme() {
  return (
    <section className="bg-[#f3f6fb]  flex justify-centerh-120  px-4 -mt-15">
      <div className=" w-full flex  md:flex-row  gap-12">
        {/* Text Section */}
        <div className="  ml-40 mt-22">
          <h1 className="text-5xl font-bold text-[#2c344b] mb-6">Who I Am</h1>
         <p className="text-gray-700 text-xl leading-relaxed">
  I’m <span className="font-bold text-[#2c344b]">Abdul Rehman</span>, a passionate
  <span className="font-semibold text-[#2c344b]"> Front-End Developer</span> with 
  <span className="font-semibold text-[#2c344b]"> 6 months of experience</span> building responsive and user-friendly websites.
  I specialize in translating UI/UX designs into clean, functional code using modern technologies like HTML, CSS, JavaScript, React, and Tailwind CSS.
  I thrive on continuous learning and solving real-world problems with a focus on both 
  <span className="font-semibold text-[#2c344b]"> user experience</span> and 
  <span className="font-semibold text-[#2c344b]"> business value</span>.
</p>

        </div>

        {/* Image Section */}
        <div className="w-500  mt-20 ">
          <img 
            src={images} 
            alt="Figma logo" 
            className="w-full h-md"
          />
        </div>
      </div>
     
     </section>
    
  );
}
