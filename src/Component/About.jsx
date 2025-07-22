import React from "react";

const About = () => {
  return (
    <section className="bg-[#0a0a1f] text-white px-6 py-16 mb-10">
      {/* Gradient Heading */}
      <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-white to-cyan-500 text-transparent bg-clip-text mb-6 ml-40 uppercase tracking-widest">
        ABOUT ME
      </h1>

      {/* Main Title */}
 <p className="text-4xl font-light ml-40 leading-snug text-gray-300">
  My name is <span className="font-bold  text-transparent bg-gradient-to-r from-white to-blue-400 bg-clip-text">Abdul Rehman</span>, I'm a Front-end <br />
  <span className="font-bold text-transparent bg-gradient-to-r from-white to-blue-400 bg-clip-text">Developer</span> based in
   <span className="font-bold text-transparent bg-gradient-to-r from-white to-blue-400 bg-clip-text"> Lahore</span> and this is a selection of my <br />
  personal and professional work.
</p>
 


      {/* Description Paragraph */}
    <p className="mt-10 text-gray-400  text-lg leading-relaxed  ml-40">
  Over the last 6 months, I’ve worked on multiple frontend projects, collaborating with mentors and small teams to <br/> build responsive and user-friendly interfaces.
  I’m passionate about UI/UX design and have developed a strong foundation in web<br/> technologies.
  I’m highly motivated to grow as a Front-end Developer and continuously improve my skills to deliver meaningful digital<br/> experiences.
</p>

    </section>
  );
};

export default About;