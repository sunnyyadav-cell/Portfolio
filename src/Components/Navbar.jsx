import {nav} from 'framer-motion/client'
import React, { useState } from 'react'
import { FaBars, FaXmark } from "react-icons/fa6";
import Projects from './Projects';

export default function Navbar()
{
    const[showMenu , setMenu] = useState(false);
    return (
        <nav className='fixed w-full z-50 bg-black/90 backdrop-blur-sm py-4 px-8
        shadow-lg'>

            <div className='container mx-auto flex justify-between items-center'>
                 <div>
                    <a href='#' className='text-3xl font-bold text-white'>
                        Sunny 
                        <span className='text-purple-400'>Aryan</span>
                        <div className='w-4 h-4  bg-purple-500 rounded-full'></div>
                    </a>
                 </div>

                  <div className='hidden md:flex space-x-10'>
                      <a href='#home' className='relative text-white/80 duration-300
                      hover:text-purple-400 group'>
                        <span>Home</span>
                        <span className='absolute left-0  -bottom-1 w-0 h-0.5 
                         bg-purple-400 transition-all duration-300 group-hover:w-full'
                        ></span>
                      </a>
                 

                      <a href="#about" className='relative text-white/80 duration-300
                      hover:text-purple-400 group'>
                        <span>About</span>
                        <span className='absolute left-0  -bottom-1 w-0 h-0.5 
                         bg-purple-400 transition-all duration-300 group-hover:w-full'
                        ></span>
                      </a>
            
                      <a href='#projects' className='relative text-white/80 duration-300
                      hover:text-purple-400 group'>
                        <span>Projects</span>
                        <span className='absolute left-0  -bottom-1 w-0 h-0.5 
                         bg-purple-400 transition-all duration-300 group-hover:w-full'
                        ></span>
                      </a>

                      <a href="#skills" className='relative text-white/80 duration-300
                      hover:text-purple-400 group'>
                        <span>Skills</span>
                        <span className='absolute left-0  -bottom-1 w-0 h-0.5 
                         bg-purple-400 transition-all duration-300 group-hover:w-full'
                        ></span>
                      </a>


                      <a href="#Work" className='relative text-white/80 duration-300
                      hover:text-purple-400 group'>
                        <span>Experience</span>
                        <span className='absolute left-0  -bottom-1 w-0 h-0.5 
                         bg-purple-400 transition-all duration-300 group-hover:w-full'
                        ></span>
                      </a>

                      
                      <a href="#Contact" className='relative text-white/80 duration-300
                      hover:text-purple-400 group'>
                        <span>Contact</span>
                        <span className='absolute left-0  -bottom-1 w-0 h-0.5 
                         bg-purple-400 transition-all duration-300 group-hover:w-full'
                        ></span>
                      </a>

                      {/* Mobile Button */}
                   </div>

                    <div className='md:hidden'>
                           {
                            showMenu ? 
                            <FaXmark onClick={()=> setMenu(!showMenu) } className='text-2xl cursor-pointer'/> :
                            <FaBars onClick={()=> setMenu(!showMenu) } className='text-2xl cursor-pointer'/>
                           }
                     </div>   
            </div>

            {/* Mobile Menus */}

            {
                showMenu && (
                    <div className='md:hidden mt-4 bg-black/30 h-screen rounded-lg p-4 flex flex-col
                    space-y-4 text-center justify-center'>
                        <a onClick={()=> setMenu(!showMenu) } href='#home' className='relative text-white/80 duration-300
                      hover:text-purple-400 group'>
                        <span>Home</span>
                      </a>
                 

                      <a onClick={()=> setMenu(!showMenu) } href= "#about" className='relative text-white/80 duration-300
                      hover:text-purple-400 group'>
                        <span>About</span>
                      </a>
            
                      <a onClick={()=> setMenu(!showMenu) } href='#projects' className='relative text-white/80 duration-300
                      hover:text-purple-400 group'>
                        <span>Projects</span>
                      </a>

                      <a onClick={()=> setMenu(!showMenu) } href='#skills' className='relative text-white/80 duration-300
                      hover:text-purple-400 group'>
                        <span>Skills</span>
                      </a>


                      <a onClick={()=> setMenu(!showMenu) } href='#Work' className='relative text-white/80 duration-300
                      hover:text-purple-400 group'>
                        <span>Experience</span>
                      </a>

                      
                      <a onClick={()=> setMenu(!showMenu) } href='#Contact' className='relative text-white/80 duration-300
                      hover:text-purple-400 group'>
                        <span>Contact</span>
                      </a>
                    </div>
                )
            }
        </nav>
    )
}