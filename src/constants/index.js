import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    
    threejs,
    dice,
    gymwebsite,
    robo
  } from "../assets";
  
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "ReactJs Developer",
      icon: mobile,
    }
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    
    {
      name: "git",
      icon: git,
    }
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Robotics Club, MMMUT",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Sept 2022 -Current",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    }
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Robotics CLub",
      description:
        "A club website is like a virtual clubhouse where members and potential members can gather to stay updated on all things related to the club. It typically includes information about the club's mission, upcoming events, membership details, and maybe even some cool photos or highlights from past activities.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        }
        
      ],
      image: robo,
      source_code_link: "https://github.com/aryananand27",
    },
    {
      name: "Dynamo Gym",
      description:
        "The Dynamo Gym website is a fitness enthusiast's digital haven, pulsating with energy and information. From an overview of state-of-the-art facilities to a dynamic class schedule, it's your go-to destination for all things fitness. Navigate through success stories that will ignite your motivation. ",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        }
        
      ],
      image: gymwebsite,
      source_code_link: "https://github.com/aryananand27",
    },
    {
      name: "Dice Game",
      description:
        "Step into the thrilling world of our Dice Game website, where luck meets excitement! This online platform is your gateway to a virtual realm of dice-rolling adventures. Whether you're a seasoned player or a newcomer to the dice game scene, our website offers an intuitive interface, engaging graphics. ",
      tags: [
        {
          name: "js",
          color: "blue-text-gradient",
        },
        
        {
          name: "css",
          color: "pink-text-gradient",
        }
      ],
      image: dice,
      source_code_link: "https://github.com/aryananand27",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };