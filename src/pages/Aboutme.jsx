// components/AboutSection.jsx
import React, { useEffect, useState } from 'react';
import web from '../assets/web.svg'; 
import Talk from '../Component/Talk'
import { Icon } from '@iconify/react';
import Footer from '../Component/Footer'
const skills = [
  "Expertise in user-centered design for web and mobile applications.",
  "Proficient in React, Angular, and modern JavaScript frameworks.",
  "Extensive experience with responsive design, animations, and interactive elements.",
  "Skilled in tools like Figma, Adobe XD, and Sketch for prototyping and wireframing.",
  "Deep understanding of design systems and UI frameworks like Ant Design and Material UI.",
  "Collaborative team player with experience working in Agile environments."
];

const circularSkills = [
  { label: 'UI/UX Design', percent: 60, color: '#3b82f6' },
  { label: 'Front-end', percent: 95, color: '#fbbf24' },
  { label: 'TypeScript', percent: 85, color: '#fca5a5' },
  { label: 'Figma', percent: 50, color: '#4ade80' },
  { label: 'Responsive Design', percent: 70, color: '#10b981' }
];

// ✅ Half-Circle Progress Component with Animation
const HalfCircleProgress = ({ percent, label, color }) => {
  const radius = 70; // Larger circle
  const stroke = 10;
  const normalizedRadius = radius - stroke / 2;
  const circumference = Math.PI * normalizedRadius;

  const [animatedPercent, setAnimatedPercent] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1000;
    const increment = percent / (duration / 10);

    const animate = () => {
      start += increment;
      if (start < percent) {
        setAnimatedPercent(start);
        requestAnimationFrame(animate);
      } else {
        setAnimatedPercent(percent);
      }
    };

    animate();
  }, [percent]);

  const strokeDashoffset = circumference - (animatedPercent / 100) * circumference;

  return (
    <div
      className="flex flex-col items-center w-1/2 sm:w-1/2 md:w-[45%] lg:w-[40%] mb-10
                 transition-transform duration-300 hover:scale-105"
    >
      <svg width={radius * 2} height={radius + stroke}>
        <path
          d={`
            M ${radius - normalizedRadius}, ${radius}
            A ${normalizedRadius},${normalizedRadius} 0 0,1 ${radius + normalizedRadius},${radius}
          `}
          stroke="#e5e7eb"
          fill="transparent"
          strokeWidth={stroke}
        />
        <path
          d={`
            M ${radius - normalizedRadius}, ${radius}
            A ${normalizedRadius},${normalizedRadius} 0 0,1 ${radius + normalizedRadius},${radius}
          `}
          stroke={color}
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          style={{
            transition: 'stroke-dashoffset 0.4s ease-out',
          }}
        />
      </svg>
      <div className="text-2xl font-semibold text-gray-800 mt-2">
        {Math.round(animatedPercent)}%
      </div>
      <div className="text-md font-semibold text-gray-600 text-center">{label}</div>
    </div>
  );
};

// ✅ Main About Section Component
export default function Aboutme() {
  return (
    <>
      {/* About Section */}
    <div className="bg-[#f3f6fb] flex justify-center px-4 -mt-15 py-16">
  <div className="w-full flex   gap-12">
    
    {/* === TEXT SECTION === */}
    <div className="flex-1 mt-10 ">
      <h1 className="text-5xl font-bold text-[#2c344b] mb-6 ml-30 ">Who I Am</h1>
      <p className="text-gray-700 text-xl leading-relaxed ml-30">
        I’m <span className="font-bold text-[#2c344b]">Abdul Rehman</span>, a passionate
        <span className="font-semibold text-[#2c344b]"> Front-End Developer</span> with
        <span className="font-semibold text-[#2c344b]"> 6 months of experience</span> building responsive and user-friendly websites.
        I specialize in translating UI/UX designs into clean, functional code using modern technologies like HTML, CSS, JavaScript, React, and Tailwind CSS.
        I thrive on continuous learning and solving real-world problems with a focus on both
        <span className="font-semibold text-[#2c344b]"> user experience</span> and
        <span className="font-semibold text-[#2c344b]"> business value</span>.
      </p>
    </div>

    {/* === IMAGE SECTION === */}
    <div className=" mt-10 ">
      <img src={web} alt="Profile illustration" className="h-84 w-auto object-contain mr-25" />
    </div>

  </div>
</div>


      {/* Skills Section */}
      <div className="bg-white px-4 py-16  flex justify-center   ">
        <div className=" flex justify-center   ">
          {/* Text Skills */}
          <div className=" ml-20">
            <h2 className="text-4xl font-bold text-sky-500 mb-6">Key Skills</h2>
            <ul className="space-y-5">
              {skills.map((skill, index) => (
                <li key={index} className="flex items-start text-lg text-gray-700 leading-12.5 border-b border-transparent hover:border-sky-200 
                  cursor-pointer transform hover:scale-105 transition-transform duration-300 hover:border-shadow-md
                   ">
                  <Icon icon={`mdi:check`} className=' mr-1 text-sky-400 text-2xl -ml-2 mt-3' />
                  <span>{skill}</span>
                 
                </li>
              ))}
            </ul>
          </div>

          {/* Visual Skills */}
          <div className=" flex flex-wrap justify-center items-start mt-8  ">
            {circularSkills.map((skill, index) => (
              <HalfCircleProgress
                key={index}
                percent={skill.percent}
                label={skill.label}
                color={skill.color}
              />
            ))}
          </div>
        </div>
          
      </div>

      {/* Education Section  */}
         <section className="  md:px-16 bg-blue-50 ">
             
         
               <div className="flex flex-col md:flex-row gap-10 ml-29">
                 {/* Left Column: Education & Certificates */}
                 <div className="flex-1 mt-20 mb-20">
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
                 <div className="mt-20 mb-20">
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
             <Talk />
             <Footer />
    </>
  );
}
