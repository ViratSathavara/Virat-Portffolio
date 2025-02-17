import React, { useState } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import connectify1 from "../assets/connectify1.png";
import connectify2 from "../assets/connectify2.png";
import connectify3 from "../assets/connectify3.png";
import connectify4 from "../assets/connectify4.png";
import connectify5 from "../assets/connectify5.png";
import connectify6 from "../assets/connectify6.png";
import portfolionew1 from "../assets/portfolionew1.png";
import portfolionew2 from "../assets/portfolionew2.png";
import portfolionew3 from "../assets/portfolionew3.png";
import portfolionew4 from "../assets/portfolionew4.png";
import portfolionew5 from "../assets/portfolionew5.png";
import portfolionew6 from "../assets/portfolionew6.png";
import nestjs from "../assets/nestjs.png";
import portfolio1 from "../assets/portfolio1.png";
import portfolio2 from "../assets/portfolio2.png";
import portfolio3 from "../assets/portfolio3.png";
import portfolio4 from "../assets/portfolio4.png";
import docket1 from "../assets/docket1.png";
import docket2 from "../assets/docket2.png";
import number1 from "../assets/number1.png";
import number2 from "../assets/number2.png";
import fruitCrush1 from "../assets/fruitcrush1.png";
import fruitCrush2 from "../assets/fruitcrush2.png";

const projects = [
  {
    title: "Connectify - Social Media App",
    description: "Built using HTML, CSS & JavaScript.",
    image: [connectify1, connectify2, connectify3, connectify4, connectify5, connectify6],
    liveLink: "https://connectify-social-media-app.netlify.app/",
    sourceCode: "https://github.com/ViratSathavara/Connectify-social-media-app",
  },
  {
    title: "Portfolio Website",
    description: "Developed using React.js & Tailwind CSS.",
    image: [portfolionew1, portfolionew2, portfolionew3, portfolionew4, portfolionew5, portfolionew6],
    liveLink: "https://virat-sathavara.netlify.app/",
    sourceCode: "https://github.com/ViratSathavara/Virat-Portffolio",
  },
  {
    title: "NestJs Basic CRUD API",
    description: "Built with NestJS, GraphQL, and PostgreSQL.",
    image: [nestjs],
    sourceCode: "https://github.com/ViratSathavara/Nestjs-example-project",
  },
  {
    title: "Docket - Word Counter",
    description: "A word & character counter built with JavaScript.",
    image: [docket1, docket2],
    liveLink: "https://docket-word-character-counter.netlify.app/",
    sourceCode: "https://github.com/your-repo/docket-word-counter",
  },
  {
    title: "Portfolio",
    description: "Developed using JavaScript & jQuery.",
    image: [portfolio1, portfolio2, portfolio3, portfolio4],
    liveLink: "https://viratsathavara.netlify.app/",
    sourceCode: "https://github.com/your-repo/fruit-crush-game",
  },
  {
    title: "Fruit Crush Game",
    description: "Developed using JavaScript & jQuery.",
    image: [fruitCrush1, fruitCrush2],
    liveLink: "https://fruit-crush-game.netlify.app/",
    sourceCode: "https://github.com/your-repo/fruit-crush-game",
  },
  {
    title: "Number Quiz Game",
    description: "A fun number quiz game built using JavaScript.",
    image: [number1, number2],
    liveLink: "https://number-quiz-game.netlify.app/",
    sourceCode: "https://github.com/your-repo/number-quiz-game",
  }
];

const Project = () => {
  const [showAll, setShowAll] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);

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
      {projects.slice(0, showAll ? projects.length : 3).map((project, index) => {
          const sliderSettings = {
            dots: true,
            infinite: project.image.length > 1,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: hoveredProject === index,
            autoplaySpeed: 2000,
          };

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-[#0d1a2b] p-5 rounded-lg shadow-lg transition-transform duration-300"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {hoveredProject === index ? (
                <Slider {...sliderSettings}>
                  {project.image.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`Slide ${idx + 1}`}
                      className="w-full h-40 object-cover rounded-md"
                    />
                  ))}
                </Slider>
              ) : (
                <img
                  src={project.image[0]}
                  alt={project.title}
                  className="w-full h-40 object-cover rounded-md"
                />
              )}

              <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
              <p className="text-gray-300 text-sm mt-2">{project.description}</p>
              <div className="mt-4 flex gap-3">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#4F83CC] px-4 py-2 rounded-md text-black font-semibold hover:bg-[#86aee7] transition"
                  >
                    Live Demo
                  </a>
                )}
                {project.sourceCode && (
                  <a
                    href={project.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 px-4 py-2 rounded-md font-semibold hover:bg-gray-600 transition"
                  >
                    Source Code
                  </a>
                )}
              </div>
            </motion.div>
          );
        })}
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
