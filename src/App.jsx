import React, { useRef, useState } from "react";
import AnimatedCursor from "react-animated-cursor";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

export default function App() {
  const [link, setLink] = useState("About");
  const handleClick = (e, SectionId) => {
    setLink(SectionId);
    console.log(link);

    const val = e.target.getAttribute("href").toString();

    if (val === "#About") {
      e.preventDefault();

      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.pushState({}, "", val); // Update URL with #About
    }
    if (val === "#Experience") {
      e.preventDefault();

      window.scrollTo({ top: 535, behavior: "smooth" });
      window.history.pushState({}, "", val);
    }
    if (val === "#Projects") {
      e.preventDefault();

      window.scrollTo({ top: 1680, behavior: "smooth" });
      window.history.pushState({}, "", val);
    }
  };

  return (
    <div className="bg-[#242424;] text-gray-200 font-nunito">
      <AnimatedCursor />
      <div className="flex ">
        <div className="flex  h-svh w-[30rem]  ">
          <div className="fixed">
            <div className="mt-28 ml-[3rem] ">
              <p className="text-5xl font-bold  ">Bharath Kumar M</p>
              <p className="text-[20px] mt-3 font-bold ">
                MERN Stack Developer
              </p>
            </div>
            <div className="flex flex-col mt-24 ml-20  ">
              <a
                href="#About"
                className={`p-2 font-bold text-sm ${
                  link === "About" ? "text-[#535bf2;]" : " text-white"
                }`}
                onClick={(e) => handleClick(e, "About")}
              >
                About
              </a>
              <a
                href="#Experience"
                className={`p-2 font-bold text-sm  ${
                  link === "Experience" ? "text-[#535bf2;]" : "text-white"
                }`}
                onClick={(e) => handleClick(e, "Experience")}
              >
                Experience
              </a>
              <a
                href="#Projects"
                className={`p-2 font-bold text-sm  ${
                  link === "Projects" ? "text-[#535bf2;]" : "text-white"
                }`}
                onClick={(e) => handleClick(e, "Projects")}
              >
                Projects
              </a>
            </div>
            <div className="flex gap-2 mt-24 ml-20 items-center">
              <a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQF8-HKZnlncbwAAAY9zC3XQfOmUBb5--TIBhvKcrmK_-tZZ3l1zuHl8gtKjtWivHCBvhazAddKSH6HLrP8zvKdIsk0FI3eq1f-JvppKhHnKFQJqSinoFAl_f-UOazoxtfSnE3I=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fbharath-kumar-9b46aa241%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dandroid_app">
                <CiLinkedin size={40} />{" "}
              </a>{" "}
              <a href="https://github.com/bharath-arch">
                <FaGithub size={33} />
              </a>
            </div>
          </div>
        </div>
        <div
          className={`mt-28 mr-40 overflow-y-hidden flex flex-col flex-1 mb-20`}
        >
          <div className="flex-1 overflow-y-auto ">
            <section id="About" className="flex flex-col gap-2 ml-48">
              <p>
                I'm a dedicated MERN stack developer with a knack for creating
                user-friendly and scalable web applications. Proficient in
                React.js, Node.js, MongoDB, and more, I excel in designing
                responsive front-end interfaces and efficient backend systems,
                including RESTful APIs and MongoDB database management. With
                sharp problem-solving skills and a keen eye for detail, I thrive
                on overcoming complex challenges and delivering high-quality
                solutions.
              </p>
              <p>
                As a collaborative team player, I'm eager to contribute to the
                success of growing tech companies. I bring a passion for
                innovation and a drive for excellence in the digital realm. With
                my expertise and commitment, I aim to play a key role in driving
                innovation and success in the tech industry.
              </p>
              <p>
                With a strong foundation in MERN stack development, I'm equipped
                to tackle diverse projects and drive impactful results. Whether
                it's crafting intuitive user interfaces or optimizing backend
                processes, I'm dedicated to delivering solutions that exceed
                expectations and drive business growth.
              </p>
            </section>

            <section
              id="Experience"
              className={`mt-28  ml-48  overflow-y-hidden flex flex-col flex-1 `}
            >
              <div className="h-auto w-auto p-1 rounded-md text-white flex gap-5 ">
                <div>
                  <p className="w-[7rem]">2024 - Present</p>
                </div>
                <div className="">
                  <h1 className="font-bold">MERN Stack Developer Softronics</h1>
                  <h3 className="font-semibold">Intern</h3>
                  <p className="mt-2">
                    As an intern, I'm fully immersed in developing and
                    maintaining front-end components for an innovative
                    investment platform. With expertise in React.js, I craft
                    captivating interfaces. I'm also involved in backend
                    development using MongoDB and Express.js to enhance the
                    customer experience.
                  </p>
                  <div className="flex gap-2 text-[12px] mt-3 ">
                    <span className="p-2 bg-[#8dc4902f] rounded-full hover:text-green-300">
                      Java Script
                    </span>
                    <span className="p-2 bg-[#8dc4902f] rounded-full hover:text-green-300">
                      Node.js
                    </span>
                    <span className="p-2 bg-[#8dc4902f] rounded-full hover:text-green-300">
                      Mongoose
                    </span>
                    <span className="p-2 bg-[#8dc4902f] rounded-full hover:text-green-300">
                      Nodemon
                    </span>
                    <span className="p-2 bg-[#8dc4902f] rounded-full hover:text-green-300">
                      MongoDB
                    </span>
                  </div>
                </div>
              </div>
              <div className="h-auto w-auto mt-14 text-white flex gap-5">
                <div>
                  <p className="w-[7rem]">2021 - 2022</p>
                </div>
                <div className="">
                  <h1 className="font-bold">
                    Documentation Specialist - Stream Perfect Global Services
                  </h1>
                  <h3 className="font-semibold">Documentation Specialist</h3>
                  <p className="mt-2">
                    I analyzed and categorized large volumes of documents using
                    efficient data entry techniques, ensuring accuracy and
                    adherence to quality standards throughout the document
                    processing procedures. Additionally, I maintained detailed
                    records and provided valuable administrative support to the
                    team. As part of my responsibilities, I also converted PDF
                    documents to Word documents, facilitating ease of editing
                    and processing for enhanced efficiency.
                  </p>
                  <div className="flex gap-2 text-[12px] mt-3 ">
                    <span className="p-2 bg-[#8dc4902f] rounded-full hover:text-green-300">
                      MS Word
                    </span>
                    <span className="p-2 bg-[#8dc4902f] rounded-full hover:text-green-300">
                      Excel
                    </span>
                    <span className="p-2 bg-[#8dc4902f] rounded-full hover:text-green-300">
                      Adobe
                    </span>
                    <span className="p-2 bg-[#8dc4902f] rounded-full hover:text-green-300">
                      Abbyy Finereader
                    </span>
                    <span className="p-2 bg-[#8dc4902f] rounded-full hover:text-green-300">
                      Skype
                    </span>
                  </div>
                </div>
              </div>
              <div className="h-auto w-auto mt-14 text-white flex gap-5">
                <div>
                  <p className="w-[7rem]">2020 - 2020</p>
                </div>
                <div className="">
                  <h1 className="font-bold">
                    Python Junior Developper soften Technology
                  </h1>
                  <h3 className="font-bold">Intern</h3>
                  <p className="mt-2">
                    I developed web applications utilizing the Django framework,
                    adhering meticulously to best practices and design patterns
                    to ensure optimal performance. Security was a top priority,
                    and I implemented robust authentication and authorization
                    mechanisms within Django projects to safeguard user data.
                    Additionally, I seamlessly integrated third-party APIs and
                    libraries into Django projects, enhancing their
                    functionality and capabilities.
                  </p>
                  <div className="flex gap-2 text-[12px] mt-3 ">
                    <span className="p-2 bg-[#8dc4902f] rounded-full hover:text-green-300">
                      Python
                    </span>
                    <span className="p-2 bg-[#8dc4902f] rounded-full hover:text-green-300">
                      Django
                    </span>
                    <span className="p-2 bg-[#8dc4902f] rounded-full hover:text-green-300">
                      Flask
                    </span>
                    <span className="p-2 bg-[#8dc4902f] rounded-full hover:text-green-300">
                      Sql lite
                    </span>
                    <span className="p-2 bg-[#8dc4902f] rounded-full hover:text-green-300">
                      vs code
                    </span>
                  </div>
                </div>
              </div>
            </section>
            <section
              id="Projects"
              className={`mt-28  ml-48  overflow-y-hidden flex flex-col flex-1 `}
            >
              <div className="h-auto w-auto text-white ">
                <div className="flex  flex-col gap-2">
                  <span className="font-bold text-xl">Joke App</span>
                  <p>
                    I designed and developed an engaging web application known
                    as the Joke App. Leveraging React.js, this project fetches
                    random jokes from an API, presenting them in an interactive
                    format to amuse users. Through this project, I demonstrate
                    my expertise in front-end development and API integration,
                    emphasizing my capability to craft enjoyable and
                    user-centric experiences.
                  </p>
                </div>

                <div
                  style={{
                    width: "100%",
                    height: "300px",
                    overflow: "hidden",
                  }}
                >
                  <object
                    type="text/html"
                    data="https://joke-app-nu.vercel.app/"
                    style={{
                      width: "100%",
                      height: "100%",
                      margin: "1%",
                      overflow: "hidden",
                    }}
                  >
                    Your browser doesn't support embedded content. Please{" "}
                    <a href="https://joke-app-nu.vercel.app/">click here</a> to
                    view the content.
                  </object>
                </div>
              </div>
              <div className="flex  flex-col gap-2 mt-5">
                <span className="font-bold text-xl">Fund Raiser Akron</span>
                <p>
                  I developed a comprehensive web platform using React.js,
                  Node.js, Mongoose, and Nodemon, designed to connect business
                  owners, startup founders, and investors. This platform
                  streamlines fundraising efforts by offering a user-friendly
                  interface for showcasing business ideas, managing investor
                  relations, and facilitating the fundraising process
                  efficiently.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
