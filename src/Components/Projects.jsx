
import React from "react"
import {motion} from 'framer-motion';
import Projectcard from '../Components/ProjectsCard'

import {projects} from '../assets/assets1'
import { FaTruckLoading } from "react-icons/fa";

export default function Projects()
{
    return (
        <motion.div
        initial={{opacity: 0 , y : 50}}
        whileInView={{opacity:1 , y:0}}
        transition={{duration : 1, ease : "easeOut"}}
        viewport={{once: false , amount: 0.2}}
        id="projects"
        className='py-20 bg-dark-900 '
        >
            <div
            className="container mx-auto px-6"
            >
                <h2 className="text-center text-3xl font-bold mb-4">
                    My 
                    <span className="text-purple-500">Projects</span>
                </h2>
                <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
                    A selection of my recent work</p>
            </div>

            <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
            >
                {/*Projects Cards.. */}
                {
                    projects.map((project , idx) => (
                        <Projectcard key={idx}  {...project}/>
                    ))
                }

                <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center mt-12">
                    <a
                    className="inline-flex items-center px-6 py-3 border border-purple-400
                     rounded-lg font-medium hover:bg-purple-400/20 transition duration-300"
                    >
                       <span>More Projects Still Loading..</span>
                    </a>
                </div>
            </div>
        </motion.div>
    )
}