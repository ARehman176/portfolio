import React from "react";

// import { FiUser } from "react-icons/fi";
// import { BsFillPersonFill } from "react-icons/bs";
import pic from '../assets/pic.svg'
import { Icon } from "@iconify/react";

const HeroSection = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between 
  px-4 sm:px-6 md:px-12 lg:px-20 py-12 md:py-20 pb-40 
  mt-[-4.25rem] bg-gradient-to-r from-gray-100 via-[#f5f6f7] to-[#e9eeff] space-y-8 md:space-y-0">
      {/* Left Content */}
      <div className="flex-1 ml-30">
        <p className="text-blue-600 text-lg font-medium mb-2">Hi, I’m Abdul Rehman</p>
        <h1 className="text-4xl md:text-5xl font-semibold text-blue-900 leading-tight font-poppins">
          Creative UI/UX <br /> designer & Front-end <br /> Developer
        </h1>
        <p className="mt-4 text-gray-600 text-lg">Let's bring your vision to life.</p>

        {/* Social Icons */}
  {/* Social Icons */}
<div className="flex items-center gap-3 mt-6">

  {/* CV Download */}
 <a
  href="/cv.pdf"
  target="_blank"
  rel="noopener noreferrer"
  title="View My CV"
>
  <Icon
    icon="pepicons-pop:cv"
    className="bg-green-400 p-2 rounded-full text-white text-4xl hover:scale-110 transition-transform cursor-pointer"
  />
</a>



  {/* GitHub */}
  <a href="https://github.com/ARehman176" target="_blank" rel="noopener noreferrer">
    <Icon
      icon="mdi:github"
      className="bg-black p-2 rounded-full text-white text-4xl hover:scale-110 transition-transform cursor-pointer"
    />
  </a>

  {/* LinkedIn */}
  <a href="https://www.linkedin.com/in/abdulrehman176/" target="_blank" rel="noopener noreferrer">
    <Icon
      icon="mdi:linkedin"
      className="bg-blue-400 p-2 rounded-full text-white text-4xl hover:scale-110 transition-transform cursor-pointer"
    />
  </a>

  {/* Behance */}
  <a href="https://www.behance.net/9a16f3f4" target="_blank" rel="noopener noreferrer">
    <Icon
      icon="uil:behance"
      className="bg-[#4979d8] p-2 rounded-full text-white text-4xl hover:scale-110 transition-transform cursor-pointer"
    />
  </a>

  {/* Email */}
<a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=mianabdulrehman176@gmail.com&su="
  target="_blank"
  rel="noopener noreferrer"
  title="Send me an email via Gmail"
>
  <Icon
    icon="material-symbols:mail-outline"
    className="bg-red-400 p-2 rounded-full text-white text-4xl hover:scale-110 transition-transform cursor-pointer"
  />
</a>



</div>




      </div>

      {/* Right Image */}
      
      <div className="flex-1 mb-10 ">
      <div className="flex justify-center mb-5 items-center gap-8 text-gray-800 text-lg font-medium">
        <div className="flex items-center gap-1">
          <Icon icon="noto-v1:light-bulb" className="text-xl" />
          <span>INSIGHT</span>
        </div>
        <div className="flex items-center gap-2">
          <Icon icon="twemoji:brain" className="text-xl" />
          <span>INNOVATION</span>
        </div>
        <div className="flex items-center gap-2">
          <Icon icon="twemoji:rainbow" className="text-xl" />
          <span>IMPACT</span>
        </div>
      </div>
 
        <img
          src={pic}
          alt="Hero"
          className="w-full max-w-md mx-auto "
        />
      </div>
    </section>
    
  );
};

export default HeroSection;