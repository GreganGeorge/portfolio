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
    tailwind,
    react1,
    python,
    c,
    c1,
    asp,
    sql,
    carrent,
    threejs,
    tastybyte,
    predictor,
    netflix,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "experience",
      title: "Experience",
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
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "ML Enthusiast",
      icon: creator,
    },
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "ASP.NET Web API",
      icon: asp,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "SQL Server",
      icon: sql,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "C",
      icon: c,
    },
    {
      name: "C#",
      icon: c1,
    },
  ];
  
  const experiences = [
    {
      title: "React.js",
      icon: react1,
      iconBg: "#383E56",
      points: [
        "Developing and maintaining web applications using React.js as part of academic projects and personal endeavors.",
        "Implementing responsive designs to ensure seamless user experience across different devices and browsers.",
        "Exploring new React features and libraries to stay updated with the latest trends and best practices in frontend development.",
      ],
    },
    {
      title: "ASP.NET Web API",
      icon: asp,
      iconBg: "#E6DEDD",
      points: [
        "Developing and maintaining backend services using ASP.NET Web API for academic projects and personal applications.",
        "Exploring new features and best practices in ASP.NET Web API to stay updated with the latest trends in backend development.",
        "Designing API endpoints to handle CRUD operations.",
      ],
    },
    {
      title: "SQL Server",
      icon: sql,
      iconBg: "#383E56",
      points: [
        "Designing and implementing relational databases using SQL Server Management Studio (SSMS) for academic projects and personal applications." ,
        "Creating database schemas, tables, views, and stored procedures to support application functionalities.",
        "Writing SQL queries to retrieve, manipulate, and analyze data stored in SQL Server databases.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "TastyByte",
      description:
        "TastyByte is a versatile web application that revolutionizes how users discover and interact with recipes. It offers a powerful search engine to find recipes by name or ingredients. Each recipe includes clear, step-by-step instructions, detailed nutritional information, and comprehensive video tutorials to assist beginners. Users can purchase additional ingredients directly from the platform.",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "ASP.NET Web API",
          color: "green-text-gradient",
        },
        {
          name: "SQL Server",
          color: "pink-text-gradient",
        },
      ],
      image: tastybyte,
      source_code_link: "https://github.com/GreganGeorge/react-recipe/tree/main/foodrecipe",
    },
    {
      name: "Cricket Score Predictor",
      description:
        "The Cricket Score Predictor is a web application that allows users to predict match scores in real-time by selecting batting and bowling teams, inputting game metrics, and leveraging machine learning algorithms for accurate score forecasts.",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "Flask",
          color: "green-text-gradient",
        },
        {
          name: "scikit-learn",
          color: "pink-text-gradient",
        },
      ],
      image: predictor,
      source_code_link: "https://github.com/GreganGeorge/Predictor",
    },
    {
      name: "Netflix Clone",
      description:
        "Developed a Netflix clone, featuring dynamic movie categorization, interactive trailers, genre selection, and personalized user lists for an enhanced user experience.",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "ASP.NET Web API",
          color: "green-text-gradient",
        },
        {
          name: "SQL Server",
          color: "pink-text-gradient",
        },
      ],
      image: netflix,
      source_code_link: "https://github.com/GreganGeorge/Netflix-clone",
    },
  ];
  
  export { services, technologies, experiences, projects };