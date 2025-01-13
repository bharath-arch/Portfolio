import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Experience() {
  const experiences = [
    {
      period: "2024 - Present",
      role: "Software engineer",
      type: "",
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
      type: "",
      description:
        "I developed web applications utilizing the Django framework, adhering meticulously to best practices and design patterns to ensure optimal performance. Security was a top priority, and I implemented robust authentication and authorization mechanisms within Django projects to safeguard user data. Additionally, I seamlessly integrated third-party APIs and libraries into Django projects, enhancing their functionality and capabilities.",
      skills: ["Python", "Django", "Flask", "Sql lite", "vs code"],
    },
  ];

  useEffect(() => {
    const animateExperiences = () => {
      const elements = document.querySelectorAll(".experience-item");
      
      // Clear any existing animations
      elements.forEach(element => {
        gsap.set(element, { clearProps: "all" });
      });

      // Create new animations
      elements.forEach((element, index) => {
        gsap.fromTo(element, 
          { 
            opacity: 0, 
            y: 50,
            scale: 0.95
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: index * 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top bottom-=100",
              toggleActions: "play none none reverse",
              markers: false,
              once: true
            }
          }
        );

        // Animate skills separately
        const skills = element.querySelectorAll(".skill-tag");
        gsap.fromTo(skills, 
          {
            opacity: 0,
            scale: 0.8,
            y: 20
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.1,
            delay: index * 0.2 + 0.3,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: element,
              start: "top bottom-=50",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    };

    // Initial animation
    animateExperiences();

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="px-4 py-8">
      {experiences.map((exp, index) => (
        <div
          key={index}
          className={`experience-item  p-4 bg-[#2a2a2a] rounded-lg hover:bg-[#323232] transition-colors duration-300 ${index === experiences.length - 1 ? "" : "mb-10"}`}
        >
          <p className="text-sm font-bold text-gray-400">{exp.period}</p>
          <h2 className="text-xl font-bold mt-2 hover:text-[#535bf2] transition-colors duration-300">
            {exp.role}
          </h2>
          {exp.type && (
            <h3 className="text-sm font-semibold text-gray-400 mt-1">
              {exp.type}
            </h3>
          )}
          <p className="mt-3 text-gray-300 leading-relaxed">{exp.description}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {exp.skills.map((skill, i) => (
              <span
                key={i}
                className="skill-tag px-3 py-1 text-xs bg-[#8dc4902f] rounded-full text-green-300 hover:bg-[#8dc49055] transition-all duration-300 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Experience;
