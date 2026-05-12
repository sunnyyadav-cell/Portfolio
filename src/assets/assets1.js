import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot, FaHtml5, FaCss3, FaJs, FaFontAwesome } from 'react-icons/fa';
import { TbApi } from "react-icons/tb";

import calImg from '../assets/calculator.png';
import socialImg from '../assets/p1.png';
import weatherImg from '../assets/weather.png';




export const Info= [{
   icon : FaLightbulb ,
   title : "Innovative" ,
   description : "I love creating unique solutions to complex problems with cutting-edge technologies.",
   color: "text-purple",
},
{
      icon: FaPaintBrush,
      title: 'Design Oriented',
      description: 'Beautiful design and user experience are at the heart of everything I create.',
      color: 'text-pink'
},
{
      icon: FaCode,
      title: 'Clean Code',
      description: 'I write maintainable, efficient code following best practices and modern patterns.',
      color: 'text-blue'
}
]

// Skills Data
export const skills = [
    {
        title : "Frontend Development" ,
        icon : FaReact ,
        description: 'Building responsive and interactive user interfaces with modern frameworks.',
        tags : ['React' , 'HTML' , 'CSS' , 'JavaScript']
    },
    {
        title : "Backend Devleopment" ,
        icon : FaServer ,
        description: 'Creating robust server-side applications and RESTful APIs.',
        tags : ['Node.js' , 'Expres.js' , 'Still Learning..']
    }
    ,
    {
        title : "DataBase Management" ,
        icon : FaDatabase ,
        description: 'Designing and optimizing databases for performance and scalability.',
        tags : ['SQL' , 'MongoDB' , 'PostgreSQL']
    },
    {
        title : 'Cloud & DevOps',
        icon : FaCloud ,
        description: 'Deploying and managing applications in cloud environments.',
        tags : ['Linux' , 'AWS' , "Still Learning"]
    }
    ,
    {
        title:'Tools & Technology' ,
        icon : FaTools,
        description: 'Essential tools and technologies I use in my development workflow.',
        tags: ['Figma' , 'Git & Github' , 'VsCode'] 
    }
]

// Project Data

export const projects = [
    {
        title:'Calculator Web App',
        description : 'This project performs basic arithmetic operations like addition, subtraction, multiplication, division, percentage, clear, and delete.',
        image : calImg,
        tech :['HTML5' , 'CSS3' , 'JAVASCRIPT'],
        icons : [FaHtml5 , FaCss3 , FaJs],
        demo : "https://sunnyyadav-cell.github.io/Calculator-mini-Project/",
        code : 'https://github.com/sunnyyadav-cell/Calculator-mini-Project',
    },
    {
        title : ' Weather App',
        description : ' The app fetches real-time weather data using the WeatherAPI and displays information such as temperature, humidity, wind speed, UV index, and weather conditions for any city.',
        image : weatherImg,
        tech : ['HTML5' , 'CSS3' , 'Font Awesome' , 'Weather API'],
        icons : [FaHtml5 , FaCss3 , FaFontAwesome , TbApi],
        demo : "https://sunnyyadav-cell.github.io/Weather-Application-Using-JS/",
        code : 'https://github.com/sunnyyadav-cell/Weather-Application-Using-JS',
    }
    ,
    {
        title : 'Social links profile',
        description : 'I Added All the Links To Anyone can Know my Profile And Contact me.',
        image : socialImg,
        tech : ['HTML5' , 'CSS3'],
        icons :[FaHtml5 , FaCss3],
        demo : 'https://sunnyyadav-cell.github.io/Social-Link-Of-Sunny/',
        code : 'https://github.com/sunnyyadav-cell/Social-Link-Of-Sunny',
    }
]


//Work Data
export const Workdata = [{
    role : 'Web Developer Intern',
    company : 'Innobyte Service Pvt Ltd',
    duration : 'May 2026 - June 2026',
    description:"Leading frontend development for enterprise clients, implementing modern frameworks",
    color: "purple",
},
{  
    role: "Social Media Intern",
    company: "SAI SUKH HARI FOUNDATION",
    duration: "May-2025 -Present",
    description:
      "Fundraiser From People Which Can Donate Money To Help Helpless People",
    color: "pink"
  },
]


