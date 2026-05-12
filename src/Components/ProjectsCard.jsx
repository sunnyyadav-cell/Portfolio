import React from "react";
import { projects } from "../assets/assets1";

export default function ProjectsCard({title , description , image , tech , code , demo}){
     return (
                <div
                        className="bg-gray-900 rounded-2xl overflow-hidden hover:translate-y-2 
                        transition duration-300 cursor-pointer"
                        >
                            <img src={image} className="w-full h-60 object-cover"/>

                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                                <p className="text-gray-400 mb-4">{description}</p>

                            {/*Stack Mapping*/}
                            <div
                            className="flex flex-wrap gap-2 mb-4"
                            >
                                {
                                tech.map((stack , idx2) => (
                                    <span key={idx2}
                                    className="px-3 py-1 bg-blue-500 rounded-full text-sm"
                                    >
                                        {stack}
                                    </span>
                                ))
                            }
                            </div>
                            <div className="flex gap-2">
                                <a href= {demo}
                                 className="flex-1  text-center px-4 py-2 bg-purple-400 rounded-lg font-medium
                                 hover:bg-purple-700 transition duration-300"
                                >VIEW DEMO</a>
                                <a href={code}
                                className="flex-1 text-center px-4 py-2 border border-purple-400 font-medium rounded-lg hover:bg-purple-400/20
                                 transition duration-300"
                                >CODE</a>
                            </div>
                        </div>
                </div>
     )
}