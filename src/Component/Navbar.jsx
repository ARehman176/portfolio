import React from 'react'
import logo from '../assets/logo.png'
import { Link } from "react-router";

const Navbar = () => {
    return (
        <div className='flex justify-center gap-130 mt-10
        '>
            <div> <img src={logo} alt="Logo" className="w-40 mb-4 -mt-12 " /></div>
              <div>
                 <ul className='flex gap-20'>
          <li className="hover:text-blue-300 cursor-pointer font-semibold text-xl"> 
            <a href='/'>

             Home
            </a>
              </li>

          <li className="hover:text-blue-300 cursor-pointer font-semibold text-xl">
            
            <a href="/about">
            
            About 
            </a>
            </li>
          <li className="hover:text-blue-300 cursor-pointer font-semibold text-xl">
           
            portfolio</li>
          <li className="hover:text-blue-300 cursor-pointer font-semibold text-xl">
             <a href="/contact">
            
        Contacts 
            </a>
             </li>
          <li className="hover:text-blue-300 cursor-pointer font-semibold text-xl"> Blogs</li>
        </ul> 
            </div>
        </div>
    )
}

export default Navbar