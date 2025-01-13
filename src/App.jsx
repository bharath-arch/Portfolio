import React, { useRef, useEffect, useState } from "react";
import AnimatedCursor from "react-animated-cursor";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { Analytics } from "@vercel/analytics/react";
import TypewriterComponent from "typewriter-effect";
import { observeElements } from "./Js files/InterSection.js";
import "./FadeInOnScroll.css";
import javaScriptImg from "../src/assets/JavaScript-removebg-preview.png";
import css from "../src/assets/css.png";
import tailwind from "../src/assets/tailwind-removebg-preview.png";
import redux from "../src/assets/redux-removebg-preview.png";
import ReactIMG from "../src/assets/React-removebg-preview.png";
import htmlimg from "../src/assets/html-removebg-preview.png";
import python from "../src/assets/python-removebg-preview.png";
import nodeIMG from "../src/assets/node-removebg-preview.png";
import Projects from "./components/Projects.jsx";
import Footer from "./components/Footer.jsx";
import Experience from "./components/Experience.jsx";
import Chat from "./components/Chat-with-AI/Chat.jsx";

export default function App() {
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const [link, setLink] = useState("About");

  useEffect(() => {
    observeElements(".select-class");

    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (
        scrollPosition >= aboutRef.current.offsetTop - 110 &&
        scrollPosition < experienceRef.current.offsetTop - 110
      ) {
        window.history.pushState({}, "", `#About`);
        setLink("About");
      } else if (
        scrollPosition >= experienceRef.current.offsetTop - 110 &&
        scrollPosition < projectsRef.current.offsetTop - 110
      ) {
        window.history.pushState({}, "", `#Experience`);
        setLink("Experience");
      } else if (scrollPosition >= projectsRef.current.offsetTop - 110) {
        window.history.pushState({}, "", `#Projects`);
        setLink("Projects");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e, sectionId, offsetTop) => {
    console.log(offsetTop)
    e.preventDefault();
    window.scrollTo({ top: offsetTop - 110, behavior: "smooth" });
    window.history.pushState({}, "", `#${sectionId}`);
  };

  return (
    <div className="bg-[#242424] text-gray-200 font-nunito">
      <Analytics />
      <AnimatedCursor
        innerSize={8}
        outerSize={32}
        color="255, 255, 255"
        outerAlpha={0.4}
        innerScale={0.7}
        outerScale={5}
      />
      <div className="md:flex">
        <aside className="top-0 overflow-auto md:flex md:flex-1 md:sticky md:h-dvh">
          <div className="md:mt-28 md:ml-[3rem] mt-16 ml-10">
            <p className="text-4xl font-bold md:text-5xl">Bharath Kumar M</p>
            <p className="text-[20px] mt-3 font-bold uppercase">
              <TypewriterComponent
                options={{
                  strings: ["FULL stack Developer"],
                  autoStart: true,
                  loop: false,
                  delay: 100,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("MERN Stack Developer")
                    .pauseFor(1000)
                    .start();
                }}
              />
            </p>
            <nav className="flex-col hidden mt-24 ml-20 md:flex">
              <NavLink
                section="About"
                link={link}
                onClick={handleClick}
                ref={aboutRef}
              />
              <NavLink
                section="Experience"
                link={link}
                onClick={handleClick}
                ref={experienceRef}
              />
              <NavLink
                section="Projects"
                link={link}
                onClick={handleClick}
                ref={projectsRef}
              />
            </nav>
            <div className="flex items-center gap-2 mt-5 ml-10 md:mt-24 md:ml-20">
              <a href="https://www.linkedin.com/in/bharath-kumar-9b46aa241">
                <CiLinkedin size={40} />
              </a>
              <a href="https://github.com/bharath-arch">
                <FaGithub size={33} />
              </a>
            </div>
            <div className="absolute bottom-2 hidden md:block">
              <Chat />
            </div>
          </div>
        </aside>
        <main className="md:mt-36 ml-5 mr-5 overflow-y-hidden md:flex md:flex-col md:flex-1 z-20">
          <section
            id="About"
            className="flex flex-col gap-2 md:mr-16"
            ref={aboutRef}
          >
            <p className="mt-5 mb-5 text-2xl md:hidden">About</p>
            <p>
              I'm a dedicated MERN stack developer with a knack for creating
              user-friendly and scalable web applications...
            </p>
            <p>
              As a collaborative team player, I'm eager to contribute to the
              success of growing tech companies...
            </p>
            <p>
              With a strong foundation in MERN stack development, I'm equipped
              to tackle diverse projects...
            </p>
          </section>
          <section className="logos mt-20 p-2 gap-4 items-center border w-auto h-auto">
            <p className="mt-5 mb-5 text-2xl md:hidden">Skills</p>
            <div className="flex p-2 gap-3">
              {[
                { src: javaScriptImg, alt: "JavaScript" },
                { src: css, alt: "CSS" },
                { src: nodeIMG, alt: "Node.js" },
                { src: python, alt: "Python" },
                { src: htmlimg, alt: "HTML" },
                { src: ReactIMG, alt: "React" },
                { src: redux, alt: "Redux" },
              ].map((logo, index) => (
                <div key={index} className="logo hiddens w-20 h-20 ">
                  <img src={logo.src} alt={logo.alt} />
                </div>
              ))}
            </div>
          </section>
          <section
            id="Experience"
            className="md:mt-28 mt-10 md:mr-16 md:flex md:flex-col md:flex-1"
            ref={experienceRef}
          >
            <p className="mt-5  text-2xl md:hidden">Experience</p>
            <Experience />
          </section>
          <section
            id="Projects"
            className="md:mt-28 md:mr-16 overflow-y-hidden flex flex-col"
            ref={projectsRef}
          >
            <Projects />
          </section>
          <footer className="md:mt-28 overflow-y-hidden md:flex flex-col mb-20 hidden">
            <p style={{ opacity: 0.5 }}>
              Loosely designed in <span className="text-red-500">Figma</span>{" "}
              and coded in{" "}
              <span className="text-red-500">Visual Studio Code</span> by yours
              truly. Built with <span className="text-red-500">React.js</span>{" "}
              and <span className="text-red-500">Tailwind CSS</span>, deployed
              with <span className="text-red-500">Vercel</span>.
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}

const NavLink = ({ section, link, onClick, ref }) => (
  <a
    href={`#${section}`}
    className={`p-2 font-bold text-sm ${
      link === section ? "text-[#535bf2]" : "text-white"
    }`}
    onClick={(e) => onClick(e, section, ref.current.offsetTop)}
  >
    {section}
  </a>
);
