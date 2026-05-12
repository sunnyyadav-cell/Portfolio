import React from "react";
import{motion} from 'framer-motion';
import { FaCode, FaEnvelope, FaGithub, FaLinkedin, FaMapMarkedAlt, FaPhone, FaWhatsapp } from "react-icons/fa";

export default function Contact()
{
    return (
        <motion.div
        initial={{opacity: 0 , y : 50}}
        whileInView={{opacity:1 , y:0}}
        transition={{duration : 1, ease : "easeOut"}}
        viewport={{once: false , amount: 0.2}}
        id="Contact"
        className="py-20 bg-dark-100"
        >
            <div className="container mx-auto px-6">
                <h2 className="text-center text-3xl font-bold mb-4">
                    Get In 
                    <span className="text-purple-400">Touch</span>
                </h2>
                <p className="text-center text-gray-400  max-w-2xl mx-auto mb-16">
                    Have a project in mind or want to collaborate? Let's talk!</p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-gray-300 mb-2
                            ">Your Name</label>
                            <input 
                            className="w-full bg-dark-300 border border-dark-400 
                            rounded-lg px-4 py-6 outline-none"
                            type="text" id="name"/>
                        </div>

                         <div>
                            <label htmlFor="email" className="block text-gray-300 mb-2
                            ">Email Adress</label>
                            <input 
                            className="w-full bg-dark-300 border border-dark-400 
                            rounded-lg px-4 py-6 outline-none"
                            type="text" id="email"/>
                        </div>

                         <div>
                            <label htmlFor="msg" className="block text-gray-300 mb-2
                            ">Massage</label>
                            <textarea
                            className="w-full h-40 bg-dark-300 border border-dark-400 
                            rounded-lg px-4 py-6 outline-none"
                            type="text" id="msg"/>
                        </div>

                        <button
                        type="submit" className="w-full px-6 py-3 bg-purple-600
                         rounded-lg font-medium hover:bg-purple-900
                         transition duration-300 cursor-pointer" 
                        >
                         Send Massage
                        </button>
                    </form>

                <div
                className="space-y-8"
                >
                    <div className="flex items-start">
                        <div className="text-purple-400 text-2xl mr-4">
                            <FaMapMarkedAlt/>
                        </div>
                        <div>
                            <h3
                            className="text-lg  font-semibold mb-2"
                            >Location</h3>
                            <p
                            className="text-gray-400"
                            >Greater Noida , Knowledge Park III</p>
                        </div>
                    </div>

                <div
                className="space-y-8"
                >
                    <div className="flex items-start">
                        <div className="text-purple-400 text-2xl mr-4">
                            <FaEnvelope/>
                        </div>
                        <div>
                            <h3
                            className="text-lg  font-semibold mb-2"
                            >Email</h3>
                            <p
                            className="text-gray-400"
                            >sunnyjee9234640116@gmail.com</p>
                        </div>
                    </div>
                </div>

                 <div
                className="space-y-8"
                >
                    <div className="flex items-start">
                        <div className="text-purple-400 text-2xl mr-4">
                            <FaPhone/>
                        </div>
                        <div>
                            <h3
                            className="text-lg  font-semibold mb-2"
                            >Phone</h3>
                            <p
                            className="text-gray-400"
                            >+91 9155598856</p>
                        </div>
                    </div>
                </div>
                {/*Follow Me*/}

                <div className="pt-4">
                    <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
                    <div className="flex space-x-4">
                         <a href=""
                         className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center
                         text-white-400 hover:bg-purple-400 hover:text-white-400 transition duration-300"
                         >
                            <FaGithub></FaGithub>
                         </a>

                         <a href=""
                         className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center
                         text-white-900 hover:bg-purple-400 hover:text-white-400 transition duration-300"
                         >
                            <FaCode></FaCode>
                         </a>

                         <a href=""
                         className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center
                         text-white-400 hover:bg-purple-400 hover:text-white-400 transition duration-300"
                         >
                            <FaLinkedin></FaLinkedin>
                         </a>

                         <a href=""
                         className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center
                         text-white-400 hover:bg-purple-400 hover:text-white-400 transition duration-300"
                         >
                            <FaWhatsapp></FaWhatsapp>
                         </a>
                    </div>
                </div>
                </div>
                </div>
            </div>
        </motion.div>
    )
}