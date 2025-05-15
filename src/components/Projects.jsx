import React from "react";

const ProjectCard = ({ title, description, link, linkText }) => (
  <div className="flex flex-col gap-2 mt-5">
    <span className="text-xl font-bold">{title}</span>
    <p>{description}</p>
    {link && (
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="text-[#535bf2] hover:underline"
      >
        {linkText || link}
      </a>
    )}
  </div>
);

const Projects = () => {
  const projectsData = [
    {
      title: "Reverbian",
      description: "I designed and developed a dynamic marketing agency website using React.js, Tailwind CSS, Framer Motion, and a Rich Text Editor CMS. This web application serves as a comprehensive digital platform for the agency, featuring detailed service pages, client case studies, testimonials, and a dynamic blog section for regular content updates.",
      link: "https:/reverbian.com/",
      linkText: "https:/reverbian.com/"
    },
    {
      title: "Nora AI",
      description: "I collaborated with a team of developers to design and develop a powerful AI chatbot for seamless integration into web platforms. This AI chatbot is built to enhance user experience by providing intelligent, real-time interactions on websites. The solution is highly adaptable, allowing businesses to integrate it into their platforms to automate customer support, deliver instant responses, and improve user engagement."
    },
    {
      title: "Tokyn",
      description: "Tokyn is an employee performance management software developed for Six30Labs. I contributed to both the frontend and backend development of the platform. The frontend was built using React, providing an intuitive and responsive user interface, while the backend was developed using Express and MySQL, ensuring robust data management and API services. "
    },
    {
      title: "Bateel",
      description: "In collaboration with senior developers, I designed and developed Bateel, an AI-driven chatbot interface inspired by ChatGPT using React.js and TypeScript. This project showcases the power of natural language processing (NLP) integrated into a user-friendly interface, allowing seamless, real-time conversations with an intelligent chatbot. Additionally implemented secure authentication features, ensuring that users could interact with the platform safely and efficiently."
    },
    {
      title: "Employee Management System ( React Native )",
      description: "Employee Management System is a mobile application developed using React Native and Expo, designed to streamline HR interactions for employees. I was responsible for building the UI components of the app, ensuring a smooth and user-friendly experience. The interface includes features such as viewing timesheets, chatting with an AI assistant for queries, applying for leave, and viewing leave history. This project focused on delivering an intuitive mobile experience to enhance employee engagement and self-service capabilities."
    },
    // {
    //   title: "Fund Raiser Akron",
    //   description: "I developed a comprehensive web platform using React.js, Node.js, Mongoose, and Nodemon, designed to connect business owners, startup founders, and investors. This platform streamlines fundraising efforts by offering a user-friendly interface for showcasing business ideas, managing investor relations, and facilitating the fundraising process efficiently. (\"Please access this website using a computer for optimal viewing experience.\")",
    //   link: "https://akron-zeta.vercel.app/",
    //   linkText: "Click Me to View"
    // }
  ];

  return (
    <section className="projects-section">
      <h1 className="mb-5 mt-10 md:mt-0 text-3xl font-bold">Projects</h1>
      <div className="w-auto h-auto text-white">
        {projectsData.map((project, index) => (
          <ProjectCard 
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
            linkText={project.linkText}
          />
        ))}
      </div>
      
      {/* Embedded website for Akron project */}
      {/* <div
        className="mt-4"
        style={{
          width: "100%",
          height: "300px",
          overflow: "hidden",
        }}
      >
        <object
          type="text/html"
          data="https://akron-zeta.vercel.app/"
          style={{
            width: "100%",
            height: "100%",
            margin: "1%",
            overflow: "hidden",
          }}
        >
          Your browser doesn't support embedded content. Please{" "}
          <a href="https://akron-zeta.vercel.app/">click here</a> to view the
          content.
        </object>
      </div> */}
    </section>
  );
};

export default Projects;