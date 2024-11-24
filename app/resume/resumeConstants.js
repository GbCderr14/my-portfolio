"use client";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
import { PiFileCpp } from "react-icons/pi";
import { MdDataObject } from "react-icons/md";

export const about = [
  {
    title: "About me",
    description:
      "Hi, I'm Gaurang Bhutani from Uttar Pradesh, India, a full-stack web developer passionate about creating interactive and dynamic web applications. " +
      "I specialize in the MERN stack and enjoy learning new technologies. Currently, I'm pursuing a Bachelor's in Computer Science at IIIT Jabalpur.",
    info: [
      {
        fieldName: "Name",
        fieldValue: "Gaurang Bhutani",
      },
      {
        fieldName: "Phone",
        fieldValue: "+91 8445285720",
      },
      {
        fieldName: "Nationality",
        fieldValue: "India",
      },
      {
        fieldName: "Email",
        fieldValue: "gaurangbhutani14@gmail.com",
      },
      {
        fieldName: "FreeLance",
        fieldValue: "Available",
      },
    ],
  },
];

//experience data
export const experience = [
  {
    icon: "/assets/resume/badge.svg",
    title: "My experience",
    items: [
      {
        company: "HackerEarth",
        position: "Backend Developer",
        duration: "July 2024 - Current",
        description:
          "Revamped an API to retrieve the invited candidates list, cutting load time by 80%, boosting page speed, and elevating user experience through the implementation of merge sort for sorting by name, email, and invite date. Implemented status-based candidate filtering with Elasticsearch for 6 statuses, achieving profile retrieval in under 600ms. Integrated status filters in React and managed frontend state with Redux to streamline backend communication. Restricted access for over 2000 college accounts to only programming and MCQ problem types by executing a Python script on a production database using EC2 instances.",
      },
      {
        company: "Cerebry",
        position: "Python Developer",
        duration: "Jan 2024 - April 2024",
        description:
          "Created regex patterns to evaluate mathematical equations and detect typos in student answers, and designed logic for fractional typos by converting them into 5 forms for precise feedback. Spearheaded logic to handle multiple equations in a single question string, ensuring correct step evaluation and error identification across various equation types. Collaborated with a 10-12 member AI-Backend team, actively participating in daily morning and evening sprints to discuss task progress, manage handovers to QA, and facilitate deployment to production after successful approvals.",
      },
      {
        company: "Shavinya Technologies",
        position: "Full Stack Developer",
        duration: "Dec 2023 - March 2024",
        description:
          "Managed frontend in Next.js and backend in Nest.js with TypeScript. Ensured timely task completion and application integrity by proactively identifying and resolving software defects. Leveraged AWS services, including DynamoDB and S3, for efficient data management, while gaining proficiency in server deployment on AWS Lambda and EC2 instances for seamless application scalability and optimization.",
      },
      {
        company: "GrowMeOrganic",
        position: "React Developer",
        duration: "May 2023 - August 2023",
        description:
          "Built dynamic web application interfaces and components by proficiently harnessing the power of React with TypeScript (TS) and Vite, ensuring the highest standards of code quality and user experience. Developed a service to automatically perform a set of unit tests(using Vitest) daily on a product in development in order to decrease time needed for team members to identify and fix bugs/issues.",
      },
    ],
  },
];

//Education
export const education = [
  {
    icon: "/assets/resume/cap.svg",
    title: "My education",
    description: "",
    items: [
      {
        institution: "Indian Institute Of Information Technology Jabalpur",
        degree: "Bachelor of Technology in Computer Science Engineering",
        duration: "Nov 2021 - May 2025",
      },
    ],
  },
];

//Skills data
export const skills = {
  title: "My skills",
  description: "",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html",
    },
    {
      icon: <FaCss3 />,
      name: "css",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <SiExpress />,
      name: "express.js",
    },
    {
      icon: <SiMongodb />,
      name: "mongoDB",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
    {
      icon: <FaPython />,
      name: "python",
    },
    {
      icon: <PiFileCpp />,
      name: "C,C++",
    },
    {
      icon: <MdDataObject />,
      name: "Data Structures and Algorithms",
    },
  ],
};

export const tabsHeader = [
  {
    key: "about",
    value: "About Me",
  },
  {
    key: "education",
    value: "Education",
  },
  {
    key: "skills",
    value: "Skills",
  },
  {
    key: "experience",
    value: "Experience",
  },
];
