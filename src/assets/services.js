import webdevelopment from "./webdevelopment.png";
import UIUX from "./UIUXDesign.png"
import freelancing from "./Freelancing.jpg"

const Services = [
    {
        key: 1, 
        name: 'Web Development',
        img: webdevelopment,
        description: 'I like to code things from scratch, and enjoy bringing ideas to life in the browser.        ',
        link: "./about"
    },
    { 
        key: 2,
        name: 'UI/UX Design',
        img: UIUX,
        description: 'I value simple content structure, clean design patterns, and thoughtful interactions.',
        link: "./about"
    },
    { 
        key: 3,
        name: 'FreeLancing',
        img: freelancing,
        description: 'I want to set my self free and work on multiple projects and bringing my ideas to life.',
        link: "./about"
    },
]

export default Services;