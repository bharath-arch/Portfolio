import React from "react";
import AnimatedCursor from "react-animated-cursor";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
// https://brittanychiang.com/#about
export default function App() {
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
              <a href="#About" className="p-2 font-bold text-sm text-white">
                About
              </a>
              <a href="#Experience" className="p-2 font-bold text-sm text-white">
                Experience
              </a>
              <a href="#Projects" className="p-2 font-bold text-sm text-white">
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
        <div className="mt-28 mr-32 flex flex-col flex-1 ">
          <div className="flex-1 overflow-y-auto ">
            <section id="About" className="flex flex-col gap-2">
              <p>
                As a motivated MERN stack developer, I bring a wealth of
                experience in crafting user-friendly and scalable web
                applications. With proficiency in React.js, Node.js, MongoDB,
                and more, I specialize in delivering robust solutions that meet
                the dynamic needs of modern businesses.
              </p>
              <p>
                {" "}
                On the backend, I am adept at leveraging the power of Node.js to
                build efficient and performant RESTful APIs. By utilizing
                Node.js's non-blocking, event-driven architecture, I create
                backend systems that handle concurrent requests seamlessly,
                ensuring optimal performance and responsiveness.
              </p>
              <p>
                In addition, my expertise extends to MongoDB database
                management. I have a proven track record of designing and
                optimizing MongoDB databases to store and retrieve data
                efficiently. Whether it's structuring complex data models or
                implementing advanced querying and indexing strategies, I ensure
                that MongoDB databases are well-organized and scalable to
                support the evolving needs of web applications.
              </p>
              <p>
                On the front-end, I excel in building responsive interfaces
                using React.js. I leverage React's component-based architecture
                and state management capabilities to create intuitive user
                experiences that drive engagement and enhance usability.
              </p>{" "}
              <p>
                What sets me apart is my strong problem-solving skills and keen
                attention to detail. I thrive on tackling complex challenges
                head-on, devising innovative solutions, and delivering
                high-quality results that exceed expectations.
              </p>{" "}
              <p>
                As a collaborative team player, I am eager to contribute to a
                forward-thinking tech company. I am passionate about driving
                innovation and fostering a culture of excellence in the digital
                realm. Together, let's build the future of technology and make a
                meaningful impact in the world.
              </p>
            </section>
            <section id="Experience">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, perferendis. Deleniti consectetur quaerat expedita officiis officia natus exercitationem quod nesciunt saepe possimus error architecto, corporis quas. Officiis adipisci animi dolor facere unde corporis. Dolorum nulla similique recusandae ullam fuga possimus in numquam voluptate animi. Veritatis quo soluta id voluptates pariatur, totam modi! Labore laudantium quidem delectus quaerat optio porro commodi officiis omnis explicabo consequuntur modi temporibus sunt architecto non possimus, laboriosam quo alias iste doloribus beatae aliquid. Suscipit saepe adipisci, eius quisquam rerum provident. Accusamus enim iusto provident cum ea quidem at commodi fugiat deserunt, explicabo, deleniti itaque facilis dolore.
            </section>
            <section id="Projects">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, reiciendis ut accusantium possimus illo iure saepe neque tenetur ipsam nemo facere necessitatibus voluptates dolore ab esse, provident dignissimos dolor optio voluptatem nobis quam maiores! Enim, porro! Dolorum, hic dolor fugit totam quos rerum omnis, eaque natus voluptatum, soluta aliquid veritatis ab. Pariatur praesentium magnam sint similique repudiandae a quam tempora nisi rerum repellendus recusandae, dicta iusto ullam nulla inventore dolores! Repudiandae assumenda magnam nihil aliquid saepe, earum nisi mollitia! Quisquam repellat exercitationem ab, voluptas, illum vitae, ipsam reiciendis excepturi illo modi aspernatur eum doloribus aperiam animi aliquid repellendus velit eaque! Error mollitia odio quibusdam quod temporibus doloremque fugit culpa neque sapiente doloribus repellat asperiores, voluptatem saepe unde sunt soluta libero eum nesciunt magnam porro voluptates adipisci praesentium quo qui? Similique, assumenda? Neque necessitatibus, voluptatum expedita eum minima vitae ad eveniet ipsum ea, at delectus voluptates molestias labore odio numquam reprehenderit saepe, magni sed? Blanditiis ab qui laboriosam nemo aut, delectus modi labore recusandae, vel asperiores dicta ullam rerum veritatis tenetur et assumenda officiis libero deserunt id nam corrupti magnam architecto itaque. Quaerat eum dicta ea debitis explicabo nihil corrupti recusandae corporis. Temporibus sunt nam nostrum dicta ratione, cupiditate autem laboriosam!
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
