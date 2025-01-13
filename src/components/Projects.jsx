import React from "react";

function Projects() {
  return (
    <>
      <p className=" mb-5 mt-10 md:mt-0 text-2xl ">Projects</p>
      <div className="w-auto h-auto text-white ">
        {/* <div className="md:flex md:flex-col md:gap-2">
          <span className="text-xl font-bold">Spark</span>
          <p>OnGoing</p>
        </div> */}
        <div className="md:flex md:flex-col md:gap-2">
          <span className="text-xl font-bold mt-5">Reverbian</span>
          <p>
            I designed and developed a dynamic marketing agency website using
            React.js, Tailwind CSS, Framer Motion, and a Rich Text Editor CMS.
            This web application serves as a comprehensive digital platform for
            the agency, featuring detailed service pages, client case studies,
            testimonials, and a dynamic blog section for regular content
            updates.
          </p>
          <a
            href="https:/reverbian.com/"
            target="_blank"
            rel="noreferrer"
            className="text-[#535bf2] hover:underline"
          >
            https:/reverbian.com/
          </a>
        </div>
        {/* <div
          style={{
            width: "100%",
            height: "300px",
            overflow: "hidden",
          }}
        >
          <object
            type="text/html"
            data="https://reverbian.com/"
            style={{
              width: "100%",
              height: "100%",
              margin: "1%",
              overflow: "hidden",
            }}
          >
            Your browser doesn't support embedded content. Please{" "}
            <a href="https://joke-app-nu.vercel.app/">click here</a> to view the
            content.
          </object>
        </div> */}
      </div>
      <div className="flex flex-col gap-2 mt-5">
        <div className="md:flex md:flex-col md:gap-2">
          <span className="text-xl font-bold">Nora AI</span>
          <p>
            I collaborated with a team of developers to design and develop a
            powerful AI chatbot for seamless integration into web platforms.
            This AI chatbot is built to enhance user experience by providing
            intelligent, real-time interactions on websites. The solution is
            highly adaptable, allowing businesses to integrate it into their
            platforms to automate customer support, deliver instant responses,
            and improve user engagement.
          </p>
        </div>
      </div>{" "}
      <div className="flex flex-col gap-2 mt-5">
        <div className="md:flex md:flex-col md:gap-2">
          <span className="text-xl font-bold">Bateel</span>
          <p>
            In collaboration with senior developers, I designed and developed
            Bateel, an AI-driven chatbot interface inspired by ChatGPT using
            React.js and TypeScript. This project showcases the power of natural
            language processing (NLP) integrated into a user-friendly interface,
            allowing seamless, real-time conversations with an intelligent
            chatbot. Additionally implemented secure authentication features,
            ensuring that users could interact with the platform safely and
            efficiently.
          </p>
        </div>
      </div>{" "}
      <div className="flex flex-col gap-2 mt-5">
        <span className="text-xl font-bold">Fund Raiser Akron</span>
        <p>
          I developed a comprehensive web platform using React.js, Node.js,
          Mongoose, and Nodemon, designed to connect business owners, startup
          founders, and investors. This platform streamlines fundraising efforts
          by offering a user-friendly interface for showcasing business ideas,
          managing investor relations, and facilitating the fundraising process
          efficiently. ("Please access this website using a computer for optimal
          viewing experience.")
        </p>
        <a
          href="https://akron-zeta.vercel.app/"
          className="text-blue-700 underline"
        >
          Click Me to View
        </a>
      </div>
      <div
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
      </div>
    </>
  );
}

export default Projects;
