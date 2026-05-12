import React from "react";
import {motion} from 'framer-motion';
import { Workdata } from "../assets/assets1";

export default function Work()
{
    return(
        <motion.div
        initial={{opacity: 0 , y : 50}}
        whileInView={{opacity:1 , y:0}}
        transition={{duration : 1, ease : "easeOut"}}
        viewport={{once: false , amount: 0.2}}
        id="Work"
        className="py-20 bg-dark-100"
        >
            <div
            className="container mx-auto px-6"
            >
                <h2 className="text-center text-3xl font-bold mb-4">
                    My 
                    <span className="text-purple-400">
                        Experience
                    </span>
                </h2>
                <p
                className="text-gray-400 text-center max-w-2xl mx-auto mb-16"
                >My professional journey so far</p>

                <div
                className="max-w-3xl mx-auto"
                >
                    <div
                    className="space-y-12"
                    >
                        {/**Work Experience Data */}
                        {
                            Workdata.map((data , idx) => (
                              <div
                              key={idx} className="relative pl-12 before:content-['']
                              before:absolute before:left-0 before:top-0 before:w-[2px]
                              before:h-full before:bg-purple-400 cursor-pointer hover:translate-y-2
                              transition-all duration-300"
                              >
                                {/**Timeline */}
                                <div
                                className="absolute left-[-0.65rem] top-0 w-6 h-6 rounded-full bg-purple-400"
                                >

                                </div>
                                {/**Box */}
                                <div
                                className="bg-gray-900 rounded-2xl p-6 "
                                >
                                    <div
                                    className="flex justify-between items-start mb-2"
                                    >
                                        <h3
                                        className="text-xl font-semibold"
                                        >{data.role}</h3>
                                        <span
                                        className="px-3 py-1 bg-purple-400 text-purple-200
                                        rounded-full text-xs md:text-sm"
                                        >{data.duration}</span>
                                    </div>
                                    <p className="text-gray-400 mb-6">{data.company}</p>
                                    <p className="text-gray-300 mb-2">{data.description}</p>
                                </div>

                              </div>
                            ))
                        }
                    </div>

                </div>

            </div>

        </motion.div>
    )
}