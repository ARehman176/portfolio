import React from "react";
import logo from "../assets/logo.png";
import bmlc from "../assets/bmlc.png";
// import chatui from "../assets/chatui.png"; // ✅ Import properly

const projects = [
  {
    title: "Be My Life Coach",
    description:
      "Be My Life Coach is a coaching app built with React, Tailwind CSS, and Firebase.",
    image: bmlc,
    tech: ["React", "Tailwind CSS", "Firebase"],
    live: "http://localhost:5174/",
    github: "https://github.com/ARehman176/bmlc",
  },
//   {
//     title: "Chat UI",
//     description: "A sleek, real-time chat UI with React and Socket.io.",
//     image: chatui,
//     tech: ["React", "Tailwind CSS", "Socket.io"],
//     live: "https://chat-ui-demo.com",
//     github: "https://github.com/your-username/chat-ui",
//   },
  {
    title: "Portfolio Website",
    description:
      "My personal developer portfolio to showcase my skills and projects.",
    image: logo,
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    live: "http://localhost:5173/",
    github: "https://github.com/ARehman176/portfolio",
  },
];

const Work = () => {
  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          My Recent Projects
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="w-full md:w-[45%] lg:w-[30%] bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:scale-[1.03] transition-all duration-300 overflow-hidden group"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[200px] object-cover rounded-t-2xl transition-transform duration-500 group-hover:scale-105"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-purple-700 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-purple-100 text-purple-800 text-xs font-medium px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center text-sm font-medium">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-black transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
