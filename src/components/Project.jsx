import React, { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Number Quiz Game",
    description: "Created using HTML, CSS & JavaScript.",
    image: "project1.jpg",
    liveLink: "https://number-quiz-game.netlify.app/",
    sourceCode: "https://github.com/your-repo/number-quiz-game",
  },
  {
    title: "Coffee Time",
    description: "Created using React.js, Bootstrap & API.",
    image: "project2.JPG",
    liveLink: "https://docket-word-character-counter.netlify.app/",
    sourceCode: "https://github.com/your-repo/coffee-time",
  },
  {
    title: "Docket - Word Counter",
    description: "Created using HTML, CSS & JavaScript.",
    image: "project3.JPG",
    liveLink: "https://coffee-time-best-coffee.netlify.app/",
    sourceCode: "https://github.com/your-repo/docket-word-counter",
  },
  {
    title: "Best Brainy Quotes",
    description: "Created using HTML, CSS, JavaScript & jQuery.",
    image: "project4.JPG",
    liveLink: "https://bestbrainyquotes.netlify.app/",
    sourceCode: "https://github.com/your-repo/best-brainy-quotes",
  },
  {
    title: "Fruit Crush Game",
    description: "Created using HTML, CSS, JavaScript & jQuery.",
    image: "project5.JPG",
    liveLink: "https://docket-word-character-counter.netlify.app/",
    sourceCode: "https://github.com/your-repo/fruit-crush-game",
  },
  {
    title: "Video Call Application",
    description: "Created using React.js & ZegoCloud.",
    image: "project6.JPG",
    liveLink: "https://bejewelled-lokum-c12dbc.netlify.app/",
    sourceCode: "https://github.com/your-repo/video-call-app",
  },
];

const Project = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <motion.div
      id="projects"
      className="text-white bg-[#101f34] min-h-screen py-10 px-5 flex flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl font-bold mb-10 pt-20"
      >
        My Projects
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {projects.slice(0, showAll ? projects.length : 3).map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, }}
            whileHover={{ scale: 1.05 }}
            className="bg-[#0d1a2b] p-5 rounded-lg shadow-lg transition-transform duration-300"
          >
            <motion.img
              src={`src/assets/${project.image}`}
              alt={project.title}
              className="w-full h-40 object-cover rounded-md"
              // whileHover={{ scale: 1.1 }}
            />
            <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
            <p className="text-gray-300 text-sm mt-2">{project.description}</p>
            <div className="mt-4 flex gap-3">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#4F83CC] px-4 py-2 rounded-md text-black font-semibold hover:bg-[#86aee7] transition"
              >
                Live Demo
              </a>
              <a
                href={project.sourceCode}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 px-4 py-2 rounded-md font-semibold hover:bg-gray-600 transition"
              >
                Source Code
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.button
        onClick={() => setShowAll(!showAll)}
        className="mt-6 bg-[#4F83CC] text-black px-6 py-2 rounded-lg font-semibold hover:bg-[#86aee7] transition"
        whileHover={{ scale: 1.1 }}
      >
        {showAll ? "Show Less Projects" : "See More Projects"}
      </motion.button>
    </motion.div>
  );
};

export default Project;
