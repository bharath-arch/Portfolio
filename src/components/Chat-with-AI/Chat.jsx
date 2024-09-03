import React, { useEffect, useRef, useState } from "react";
import bot from "../../../src/assets/pet.gif";
import { IoMdSend } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";
function Chat() {
  const [chat, setChat] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const messageEndRef = useRef(null);
  const genAI = new GoogleGenerativeAI(
    "AIzaSyBUTweNdDWD6SPI2VOUBS0fkm0y7de6lFY"
  );

  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: `[
      {
        "id": 1,
        "info": "Bharath Kumar M",
        "description": "Recent graduate with a strong foundation in computer science, passionate about software development. Quick learner and collaborative team player."
      },
      {
        "id": 2,
        "info": "Contact",
        "description": "+91 8078976405, bharathkumar100q@gmail.com, [Portfolio](https://portfolio-theta-one-17.vercel.app/), [LinkedIn](https://www.linkedin.com/in/bharathkumar100q), [GitHub](https://github.com/bharath-arch), Koduvally, Kozhikode, Kerala"
      },
      {
        "id": 3,
        "info": "Skills",
        "description": "Front-End: React.js, HTML5, CSS3; Back-End: Node.js, Express.js; Database: MongoDB, MySQL; Version Control: Git; Deployment: Vercel; Soft Skills: Communication, Teamwork; Languages: Python, JavaScript, TypeScript"
      },
      {
        "id": 4,
        "info": "Experience",
        "description": "1. MERN Stack Developer Intern, Softronics: Developed front-end with React.js, integrated Node.js APIs.\\n2. Documentation Specialist, Stream Perfect: Document processing, PDF to Word conversion.\\n3. MERN Stack Developer Apprentice, Six30labs: Front-end development, project contribution.\\n4. Django Developer Intern, Soften Technology: Web development with Django, authentication implementation."
      },
      {
        "id": 5,
        "info": "Projects",
        "description": "1. Joke App: React.js, random jokes API, [GitHub](https://github.com/bharath-arch/joke_app.git).\\n2. Fund Raiser Akron: MERN stack platform for startups, [GitHub](https://github.com/bharath-arch/akron.git).\\n3. Quiz App: Django app for testing knowledge, [GitHub](https://github.com/Bharath09876/studentquiz.git).\\n4. Shopping Cart App: React.js, TypeScript, Redux, [GitHub](https://github.com/bharath-arch/Shoping-cart-typescript-redux.git)."
      },
      {
        "id": 6,
        "info": "Education",
        "description": "1. MCA, University of Calicut.\\n2. BSc in Computer Science, NMSM Government College Kalpatta (2017 - 2020)."
      }
    ]\n\n\nanswer the user question only using the above paragraph make the answer shorter dont include any extra content you are bharath answer question in my perspective\n`,
  });

  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSend = () => {
    if (input.trim()) {
      setMessages((prev) => [...prev, { name: "You", message: input }]);
      setInput("");
      async function run() {
        const chatSession = model.startChat({
          generationConfig,
          history: [
            {
              role: "user",
              parts: [{ text: "hi\n" }],
            },
            {
              role: "model",
              parts: [{ text: "Hi! 👋 How can I help you today? 😊 \n" }],
            },
            {
              role: "user",
              parts: [{ text: "who is bharath" }],
            },
            {
              role: "model",
              parts: [
                {
                  text: "Bharath Kumar M is a skilled software developer with experience in both front-end and back-end development. He's passionate about creating user-friendly applications and is actively expanding his technical knowledge.\n",
                },
              ],
            },
            {
              role: "user",
              parts: [{ text: "what is his experience" }],
            },
            {
              role: "model",
              parts: [
                {
                  text: "Bharath has a diverse range of experience in software development:\n\n* **MERN Stack Developer Intern at Softronics:** Developed front-end with React.js, integrated Node.js APIs.\n* **Documentation Specialist at Stream Perfect:** Document processing, PDF to Word conversion.\n* **MERN Stack Developer Apprentice, Six30labs:** Front-end development, project contribution.\n* **Django Developer Intern, Soften Technology:** Web development with Django, authentication implementation.\n",
                },
              ],
            },
            {
              role: "user",
              parts: [{ text: "education" }],
            },
            {
              role: "model",
              parts: [
                {
                  text: "Bharath's education includes:\n\n* **MCA (Master of Computer Applications):** University of Calicut.\n* **BSc in Computer Science:** NMSM Government College Kalpatta (2017 - 2020).\n",
                },
              ],
            },
            {
              role: "user",
              parts: [{ text: "projects" }],
            },
            {
              role: "model",
              parts: [
                {
                  text: "Bharath has developed several impressive projects:\n\n* **Joke App:** A React.js application that uses a random jokes API. [GitHub](https://github.com/bharath-arch/joke_app.git)\n* **Fund Raiser Akron:** A MERN stack platform for startups. [GitHub](https://github.com/bharath-arch/akron.git)\n* **Quiz App:** A Django application for testing knowledge. [GitHub](https://github.com/Bharath09876/studentquiz.git)\n* **Shopping Cart App:** A React.js, TypeScript, Redux application for a seamless shopping experience. [GitHub](https://github.com/bharath-arch/Shoping-cart-typescript-redux.git)\n",
                },
              ],
            },
          ],
        });

        const result = await chatSession.sendMessage(input);
        setMessages((prev) => [
          ...prev,
          { name: "AI", message: result.response.text() },
        ]);
      }

      run();
    }
  };

  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);
  return (
    <div className="relative">
      <div className="fixed bottom-10 left-10 z-50">
        <div className="w-14 h-14">
          <img
            src={bot}
            alt="chat"
            onClick={() => setChat(!chat)}
            className="cursor-pointer"
          />
        </div>
      </div>
      {chat && (
        <div className="fixed bottom-32 left-10 w-60 h-80 bg-[#242424] border border-gray-700 rounded-md shadow-lg z-40">
          <div className="bg-gray-700 text-white p-2 rounded-t-md flex justify-between items-center">
            <p className="text-sm ">Chat with Me</p>
            <div className="relative group inline-block">
              <FaEdit
                onClick={() => setMessages([])}
                className="cursor-pointer"
              />
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max p-2 bg-gray-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                New Chat
                <span className="w-2 h-2 absolute bottom-[-5px] left-1/2 transform -translate-x-1/2 bg-gray-800 rotate-45"></span>
              </div>
            </div>
          </div>
          <div className="flex flex-col h-full">
            <div className="flex-1 px-2 py-1 overflow-auto ">
              {messages.map((msg, index) => (
                <div key={index} className=" p-2">
                  <p
                    className={`text-white text-[10px] ${
                      msg.name === "You" ? "" : "text-gray-100"
                    }`}
                  >
                    <span className="text-red-300">{msg.name}</span>:{" "}
                    {msg.message}
                  </p>
                  <div ref={messageEndRef}></div>
                </div>
              ))}
            </div>
            <div className="flex p-2 border-t border-gray-600 ">
              <input
                type="text"
                className=" w-60 flex-1 p-2 border border-gray-600 bg-gray-800 text-white placeholder-gray-400 rounded-l-md"
                placeholder="Type your message..."
                value={input}
                onChange={handleChange}
                onKeyUp={(e) => {
                  if (e.key === "Enter") {
                    handleSend();
                  }
                }}
              />
              <button
                onClick={handleSend}
                className="ml-1 bg-blue-500 text-white p-2 pl-3 rounded-r-md hover:bg-blue-600"
              >
                <IoMdSend />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chat;
