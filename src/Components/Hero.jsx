import React from "react";
import { easeInOut, motion } from 'framer-motion';
import assets from '../assets/Sunny3.png'


export default function Hero()
{
    return (
        <motion.div
        initial={{opacity: 0 , y : 50}}
        whileInView={{opacity:1 , y:0}}
        transition={{duration :0.6 , ease : "easeOut"}}
        viewport={{once: true}}
        id='home'
        className='min-h-screen flex items-center pt-20  pb-16 
        bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]'
        >
            {/**Left Side */}
            <div className='container mx-auto px-6 flex flex-col md:flex-row 
            items-center justify-between'>
                <div className='md:w-1/2 mb-10 md:mb-0'>
                   <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Hi, I'm <span className='text-purple-400'>Sunny Aryan</span>
                   </h1>
                   <h2 className="text-2xl md:text-4xl font-semibold mb-6 typewiter">Aspiring Full-Stack Developer</h2>
                   <p className="text-lg text-gray-300 mb-8 ">I create stunning web experiences with modern 
                    technologies and innovative design.</p>
                    <div className="flex space-x-4">
                        <a href="#projects" className='px-6 py-3 bg-purple-500
                        rounded-lg font-medium hover:bg-purple-700 transition duration-300'>View Work</a>
                        <a href="#Contact"
                        className='px-6 py-3 border border-purple-500 rounded-lg font-medium hover:bg-purple-900
                        transition decoration-purple/20 duration-600 ' 
                        >Contact Me</a>
                    </div>
                </div>
                
                {/** Right Side Content */}
                <div className='md:w-1/2 flex justify-center'>
                     <div className='relative w-64 h-64 md:w-80 md:h-80'>
                         <div className="absolute inset-0 rounded-full 
                         bg-gradient-to-r from-purple-300 to-pink-300 animate-pluse-slow 
                         opacity-70">
                              <motion.img src={assets} alt='profile'
                              animate={{y:[0 , -20 , 0]}}
                              transition={{
                                duration : 4,
                                repeat : Infinity,
                                repeatType:"loop",
                                ease:"easeInOut",
                              }}
                              className='relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover animate-float'
                              ></motion.img>
                         </div>
                     </div>
                </div>

            </div>

        </motion.div>
    )
}