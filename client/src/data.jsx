import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";

import Work1 from "./assets/project-1.jpeg";
import Work2 from "./assets/project-2.jpg";
import Work3 from "./assets/project-3.jpeg";
import Work4 from "./assets/project-4.jpeg";
import Work5 from "./assets/project-5.jpg";
import Work6 from "./assets/project-6.jpg";

import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme3 from "./assets/blueviolet.png";
import Theme4 from "./assets/blue.png";
import Theme5 from "./assets/goldenrod.png";
import Theme6 from "./assets/magenta.png";
import Theme7 from "./assets/yellowgreen.png";
import Theme8 from "./assets/orange.png";
import Theme9 from "./assets/green.png";
import Theme10 from "./assets/yellow.png";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav_icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav_icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Portfolio",
    icon: <FaFolderOpen className="nav_icon" />,
    path: "/portfolio",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav_icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "First Name : ",
    description: "Md. Saddam",
  },

  {
    id: 2,
    title: "Last Name : ",
    description: "Hossen",
  },

  {
    id: 3,
    title: "Age : ",
    description: "29 Years",
  },

  {
    id: 4,
    title: "Nationality : ",
    description: "Bangladeshi",
  },

  {
    id: 5,
    title: "Freelance : ",
    description: "Available",
  },

  {
    id: 6,
    title: "Address : ",
    description: "Gaibandha, Bangladesh",
  },

  {
    id: 7,
    title: "Phone : ",
    description: "01875894505",
  },

  {
    id: 8,
    title: "Email : ",
    description: "reactdevssaddam@gmail.com",
  },

  {
    id: 9,
    title: "Skype : ",
    description: "Saddam hossen",
  },

  {
    id: 10,
    title: "Langages : ",
    description: "English, Bangla",
  },
];

export const resume = [
  // {
  //   id: 1,
  //   category: "experience",
  //   icon: <FaBriefcase />,
  //   year: "2018 - PRESENT",
  //   title: "Web Developer <span> Envato </span>",
  //   desc: "Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,",
  // },

  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2021-2022",
    title: "MERN STACK COURCE <span> SoroBindu Dinajpur, Bangladesh </span>",
    desc: "MERN stack is a collection of technologies that enables faster application development. It is used by developers worldwide. The main purpose of using MERN stack is to develop apps using JavaScript only. This is because the four technologies that make up the technology stack are all JS-based. Thus, if one knows JavaScript (and JSON), the backend, frontend, and database can be operated easily. ",
  },

  {
    id: 2,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2017",
    title:
      "Certificate in National skill Standard Basic Cource <span> Bangladesh Technical Education Board Dhaka </span>",
    desc: "In this course I have learn advanced computer fundamentals and complex computing skills. Such as Ms-Word, Ms-Excel, Ms-PowerPoint, Data-Structure, Photo-Shop, Operating-System and others tools useful.",
  },

  {
    id: 3,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2021-2022",
    title:
      "Advanced Certificate Course In Computer Application <span> Bangladesh Technical Education Board Dhaka </span>",
    desc: "In this course I have learn advanced computer fundamentals and complex development skills. Such as Data Structure & Algorithm, Data Communication & Networking, Web & Mobile Application Development, Internet & Web Technology, System Analysis & Design, Database Management System (DBMS).",
  },

  {
    id: 4,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2013-2015",
    title:
      "Bachelor of Business Studies (BBS)<span>Phoolchhari govt. college - 3318 </span>",
    desc: "After pursuing a Bachelor of Business Studies (BBS) course, I have achive an graduation. Studying BBS course also given me a fundamental education to management. ",
  },
];

export const skills = [
  {
    id: 1,
    title: "React.js",
    percentage: "90",
  },

  {
    id: 2,
    title: "Next.js",
    percentage: "78",
  },

  {
    id: 3,
    title: "TypeScript",
    percentage: "89",
  },

  {
    id: 4,
    title: "Node.js",
    percentage: "82",
  },

  {
    id: 5,
    title: "Express.js",
    percentage: "86",
  },

  {
    id: 6,
    title: "MongoDB",
    percentage: "95",
  },

  {
    id: 7,
    title: "SASS",
    percentage: "87",
  },

  {
    id: 8,
    title: "Tailwind CSS",
    percentage: "65",
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: "Photo Editing",
    gitUrl: "https://github.com/saddamhossen4505/My-Portfolio",
    liveUrl: "https://chat.openai.com/",
  },

  {
    id: 2,
    img: Work2,
    title: "Website Design",
    gitUrl: "https://github.com/saddamhossen4505/My-Portfolio",
    liveUrl: "https://www.linkedin.com/in/developer-saddam/",
  },

  {
    id: 3,
    img: Work3,
    title: "Video Editing",
    gitUrl: "https://github.com/saddamhossen4505/My-Portfolio",
    liveUrl: "https://chat.openai.com/",
  },

  {
    id: 4,
    img: Work4,
    title: "Video Editing",
    gitUrl: "https://github.com/saddamhossen4505/My-Portfolio",
    liveUrl: "https://chat.openai.com/",
  },

  {
    id: 5,
    img: Work5,
    title: "Landing Page",
    gitUrl: "https://github.com/saddamhossen4505/My-Portfolio",
    liveUrl: "https://chat.openai.com/",
  },

  {
    id: 6,
    img: Work6,
    title: "Photo Editing",
    gitUrl: "https://github.com/saddamhossen4505/My-Portfolio",
    liveUrl: "https://chat.openai.com/",
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];
