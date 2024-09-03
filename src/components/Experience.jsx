import React from "react";

function Experience() {
  const experiences = [
    {
      period: "2024 - Present",
      role: "MERN Stack Developer at SIx30labs",
      type: "Apprenticeship",
      description:
        "I develop and maintain responsive front-end components using React.js for diverse clients. I actively contribute to real-world projects, addressing and overcoming challenges while adhering to best development practices. My role involves collaborating with senior developers on project design and code reviews, ensuring that our work aligns with both project objectives and industry standards.",
      skills: [
        "Java Script",
        "Type Script",
        "Redux Toolkit",
        "RTK query",
        "Node.js",
        "Mongoose",
        "Nodemon",
        "MongoDB",
      ],
    },
    {
      period: "2024 - 2024",
      role: "MERN Stack Developer Softronics",
      type: "Intern",
      description:
        "As an intern, I'm fully immersed in developing and maintaining front-end components for an innovative investment platform. With expertise in React.js, I craft captivating interfaces. I'm also involved in backend development using MongoDB and Express.js to enhance the customer experience.",
      skills: ["Java Script", "Node.js", "Mongoose", "Nodemon", "MongoDB"],
    },
    {
      period: "2021 - 2022",
      role: "Documentation Specialist - Stream Perfect Global Services",
      type: "Documentation Specialist",
      description:
        "I analyzed and categorized large volumes of documents using efficient data entry techniques, ensuring accuracy and adherence to quality standards throughout the document processing procedures. Additionally, I maintained detailed records and provided valuable administrative support to the team. As part of my responsibilities, I also converted PDF documents to Word documents, facilitating ease of editing and processing for enhanced efficiency.",
      skills: ["MS Word", "Excel", "Adobe", "Abbyy Finereader", "Skype"],
    },
    {
      period: "2020 - 2020",
      role: "Python Junior Developer at Soften Technology",
      type: "Intern",
      description:
        "I developed web applications utilizing the Django framework, adhering meticulously to best practices and design patterns to ensure optimal performance. Security was a top priority, and I implemented robust authentication and authorization mechanisms within Django projects to safeguard user data. Additionally, I seamlessly integrated third-party APIs and libraries into Django projects, enhancing their functionality and capabilities.",
      skills: ["Python", "Django", "Flask", "Sql lite", "vs code"],
    },
  ];
  return (
    <>
      {experiences.map((exp, index) => (
        <div
          key={index}
          className={`mt-10 text-white md:h-auto md:w-auto ${
            index === 0 ? "" : "md:mt-14"
          } md:flex md:gap-3`}
        >
          <div>
            <p className="w-[7rem] select-class">{exp.period}</p>
          </div>
          <div className="select-class">
            <h1 className="font-bold">{exp.role}</h1>
            <h3 className="font-semibold">{exp.type}</h3>
            <p className="mt-2">{exp.description}</p>
            <div className="flex flex-wrap gap-2 md:text-[10px] text-[8px] mt-3">
              {exp.skills.map((skill, i) => (
                <span
                  key={i}
                  className="p-2 bg-[#8dc4902f] rounded-full hover:text-green-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Experience;
