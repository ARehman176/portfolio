import React from 'react';
import logo from '../assets/logo.png';
import { Icon } from '@iconify/react';

const Footer = () => {
  return (
   <footer className="bg-white text-gray-700 px-4 sm:px-6 md:px-10 py-12 ">
  <div className="max-w-screen-xl mx-auto flex flex-wrap justify-between gap-12">

    {/* Logo & Social */}
    <div className="flex-1 min-w-[250px]">
      <img src={logo} alt="Logo" className="w-32 sm:w-36 md:w-40 mb-2 -mt-10" />
      <p className="text-base sm:text-lg font-semibold ml-1 -mt-4">
        © 2024 Abdul Rehman. <br className="hidden sm:block" />
        All rights reserved.
      </p>

      <div className="flex items-center gap-4 mt-5 text-2xl">
        {/* GitHub */}
        <a href="https://github.com/ARehman176" target="_blank" rel="noopener noreferrer">
          <Icon icon="mdi:github" className="bg-black p-2 rounded-full text-white text-3xl hover:scale-110 transition-transform cursor-pointer" />
        </a>

        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/abdulrehman176/" target="_blank" rel="noopener noreferrer">
          <Icon icon="mdi:linkedin" className="bg-blue-400 p-2 rounded-full text-white text-3xl hover:scale-110 transition-transform cursor-pointer" />
        </a>

        {/* Behance */}
        <a href="https://www.behance.net/9a16f3f4" target="_blank" rel="noopener noreferrer">
          <Icon icon="uil:behance" className="bg-[#4979d8] p-2 rounded-full text-white text-3xl hover:scale-110 transition-transform cursor-pointer" />
        </a>

        {/* Email */}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=mianabdulrehman176@gmail.com&su="
          target="_blank"
          rel="noopener noreferrer"
          title="Send me an email via Gmail"
        >
          <Icon icon="material-symbols:mail-outline" className="bg-red-400 p-2 rounded-full text-white text-3xl hover:scale-110 transition-transform cursor-pointer" />
        </a>
      </div>
    </div>

    {/* Learn More */}
    <div className="flex-1 min-w-[200px]">
      <h4 className="font-semibold mb-3 text-xl sm:text-2xl">Learn More</h4>
      <ul className="space-y-2">
        <li><a href="#" className="hover:text-black text-base sm:text-lg font-semibold">About Us</a></li>
        <li><a href="#" className="hover:text-black text-base sm:text-lg font-semibold">Portfolio</a></li>
        <li><a href="#" className="hover:text-black text-base sm:text-lg font-semibold">Case Studies</a></li>
        <li><a href="#" className="hover:text-black text-base sm:text-lg font-semibold">Contact</a></li>
        <li><a href="#" className="hover:text-black text-base sm:text-lg font-semibold">Terms of Use</a></li>
      </ul>
    </div>

    {/* Activities */}
    <div className="flex-1 min-w-[200px]">
      <h4 className="font-semibold mb-3 text-xl sm:text-2xl">Activities</h4>
      <ul className="space-y-2">
        <li><a href="#" className="hover:text-black text-base sm:text-lg font-semibold">Coming Soon</a></li>
      </ul>
    </div>

    {/* Newsletter */}
    <div className="flex-1 min-w-[250px]">
      <h4 className="font-semibold mb-3 text-xl sm:text-2xl">Our Newsletter</h4>
      <p className="text-base sm:text-lg font-semibold mb-2">
        Subscribe to our newsletter to get our news & deals delivered to you.
      </p>
      <p className="text-sm text-gray-500">[mc4wp_form id="14408"]</p>
    </div>

  </div>
</footer>

  );
};

export default Footer;
