import React from "react";

import {Info} from '../assets/assets1'

import {motion} from "framer-motion";

import assets from '../assets/Final.png';

export default function About()
{
    return(
        <motion.div
        initial={{opacity: 0 , y : 50}}
        whileInView={{opacity:1 , y:0}}
        transition={{duration :0.6 , ease : "easeOut"}}
        viewport={{once: true}}
        id="about"
        className="py-20 bg-dark-200"
        >
            <div 
            className="container mx-0 px-6 ">
                 {/** Heading */}
                 <h2 className='text-3xl font-bold text-center mb-4'>About
                    <span className='text-purple-500'>Me</span>
                 </h2>

                 <p
                 className='text-center text-gray-400 max-w-2xl mx-auto mb-16'
                 >Get to know more about my background and passion Profile My Journey</p>

                 <div className="flex  flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2  rounded-2xl overflow-hidden">
                        <motion.img
                          initial={{opacity:0 , y:50}}
                          whileInView={{opacity:1 , y:0}}
                          transition={{duration :0.9 , ease : "easeOut"}}
                          viewport={{once: false , amount:0.2}}
                          className="w-full h-full  object-cover"
                          src={assets}
                        />
                    </div>

                    {/** Text Content */}

                 <motion.div
                 initial={{opacity:0 , y:50}}
                 whileInView={{opacity:1 , y:0}}
                 transition={{duration :0.9 , ease : "easeOut"}}
                 viewport={{once: false , amount:0.2}}
                 className="md:w-1/2"
                 >
                    <div className="rounded-2xl p-8 text-lg">
                        <h3 className="text-2xl font-semibold mb-5">My Journey</h3>
                        <p className="text-gray-300 mb-3">
                            I'm a passionate full-stack developer with 
                            Hands-On experience creating digital solutions 
                            for businesses around the world. My journey started
                            with basic HTML/CSS websites and has evolved into building
                            complex web applications with modern frameworks.
                        </p>

                        <p  className="text-gray-300 mb-1">
                            When I'm not coding, you can find me exploring new 
                            technologies, contributing to open-source projects, 
                            or sharing my knowledge through tech blogs and tutorials. 
                            I believe in continuous learning and pushing the boundaries 
                            of what's possible on the web.
                        </p>
                    </div>
                   
                    {/**Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                      {  Info.map((data , idx) => {
                            const Icon = data.icon;
                            const Text = data.description;
                            const Title = data.title;

                            return (
                                <div key={idx}
                                className="bg-gray-900 rounded-2xl p-6 transition-transform
                                duration-300 hover:-translate-y-2 cursor-pointer"
                                >
                                    <div className="text-purple-500 text-4xl mb-4">
                                        <Icon/>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3">{Title}</h3>
                                    <p className="text-gray-400">{Text}</p>
                                </div>
                            )
                        })
                    }
                    </div>

                 </motion.div>
                 </div>
            </div>
        </motion.div>
    )
}