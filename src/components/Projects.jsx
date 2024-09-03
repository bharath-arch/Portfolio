import React from "react";

function Projects() {
  return (
    <>
      <p className="mt-10 mb-5 text-2xl md:hidden">Projects</p>
      <div className="w-auto h-auto text-white ">
        <div className="md:flex md:flex-col md:gap-2">
          <span className="text-xl font-bold">Joke App</span>
          <p>
            I designed and developed an engaging web application known as the
            Joke App. Leveraging React.js, this project fetches random jokes
            from an API, presenting them in an interactive format to amuse
            users. Through this project, I demonstrate my expertise in front-end
            development and API integration, emphasizing my capability to craft
            enjoyable and user-centric experiences.
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
            <a href="https://joke-app-nu.vercel.app/">click here</a> to view the
            content.
          </object>
        </div>
      </div>
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
