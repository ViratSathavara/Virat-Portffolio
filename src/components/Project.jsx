import React, { useState } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiX, FiExternalLink, FiGithub } from "react-icons/fi";
import Modal from 'react-modal';
import connectify1 from "../assets/connectify1.png";
import connectify2 from "../assets/connectify2.png";
import connectify3 from "../assets/connectify3.png";
import connectify4 from "../assets/connectify4.png";
import connectify5 from "../assets/connectify5.png";
import connectify6 from "../assets/connectify6.png";
import mern1 from "../assets/MERN_1.png";
import mern2 from "../assets/MERN_2.png";
import mern3 from "../assets/MERN_3.png";
import mern4 from "../assets/MERN_4.png";
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
import uber1 from "../assets/uber1.png";
import uber2 from "../assets/uber2.png";
import uber3 from "../assets/uber3.png";
import uber4 from "../assets/uber4.png";
import uber5 from "../assets/uber5.png";
import uber6 from "../assets/uber6.png";
import uber7 from "../assets/uber7.png";
import uber8 from "../assets/uber8.png";
import uber9 from "../assets/uber9.png";
import uber10 from "../assets/uber10.png";
import uber11 from "../assets/uber11.png";
import uber12 from "../assets/uber12.png";
import uber13 from "../assets/uber13.png";
import uber14 from "../assets/uber14.png";

Modal.setAppElement('#root');

const projects = [
  {
    title: "Uber-Clone: A Full-Stack Ride-Hailing Platform",
    description: "Uber-Clone – A full-stack ride-hailing web app built with the MERN stack (MongoDB, Express.js, React, Node.js), allowing passengers to book nearby drivers in real-time. Features JWT authentication, REST APIs, WebSockets for live tracking, and a responsive UI with Tailwind CSS & Material-UI. Deployed on Render with MongoDB Atlas for cloud database management.",
    image: [uber1, uber2, uber3, uber4, uber5, uber6, uber7, uber8, uber9, uber10, uber11, uber12, uber13, uber14],
    sourceCode: "https://uber-clone-6qea.onrender.com",
  },{
    title: "MERN Stack with MVC Pattern",
    description: "A full-stack CRUD application built with the MERN stack (MongoDB, Express.js, React, Node.js) for managing product inventory. This system allows admins to add, edit, delete, and track products in real time, with a user-friendly interface and seamless database synchronization.",
    image: [mern1, mern2, mern3, mern4],
    sourceCode: "https://github.com/ViratSathavara/MernStack_with_MVC_Pattern",
  },
  {
    title: "Portfolio Website",
    description: "Make Responsive Portfolio Website using ReactJS, tailwind css and MUI components.",
    image: [portfolionew1, portfolionew2, portfolionew3, portfolionew4, portfolionew5, portfolionew6],
    liveLink: "https://virat-sathavara.netlify.app/",
    sourceCode: "https://github.com/ViratSathavara/Virat-Portffolio",
  },
  {
    title: "Connectify - Social Media App",
    description: "Implemented user authentication (login, signup, password recovery) and real-time data syncing with Firebase Realtime Database. Developed features for creating, editing, and deleting posts, along with real-time commenting functionality.",
    image: [connectify1, connectify2, connectify3, connectify4, connectify5, connectify6],
    liveLink: "https://connectify-social-media-app.netlify.app/",
    sourceCode: "https://github.com/ViratSathavara/Connectify-social-media-app",
  },
  {
    title: "NestJs Basic CRUD API",
    description: "basic Understanding about nestJs using CRUD operations.",
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
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const thumbnailSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const modalSliderSettings = {
    ...thumbnailSliderSettings,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

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
            transition={{ duration: 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-[#0d1a2b] p-5 rounded-lg shadow-lg transition-transform duration-300 flex flex-col"
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div 
              className="cursor-pointer mb-4 flex-grow-0"
              onClick={() => openModal(project)}
            >
              {hoveredProject === index ? (
                <Slider {...thumbnailSliderSettings}>
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
            </div>

            <div className="flex-grow">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-300 text-sm mt-2 line-clamp-3">
                {project.description}
              </p>
            </div>

            <div className="mt-4 flex gap-3">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#4F83CC] px-4 py-2 rounded-md text-black font-semibold hover:bg-[#86aee7] transition flex items-center gap-2"
                >
                  <FiExternalLink /> Demo
                </a>
              )}
              {project.sourceCode && (
                <a
                  href={project.sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 px-4 py-2 rounded-md font-semibold hover:bg-gray-600 transition flex items-center gap-2"
                >
                  <FiGithub /> Code
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Project Images"
        className="modal"
        overlayClassName="modal-overlay"
      >
        {selectedProject && (
          <div className="relative max-w-4xl w-full max-h-[90vh]">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 z-50 p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition"
              aria-label="Close modal"
            >
              <FiX size={24} />
            </button>

            <div className="bg-[#0d1a2b] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">{selectedProject.title}</h3>
              
              {selectedProject.image.length > 1 ? (
                <Slider {...modalSliderSettings} className="mb-4">
                  {selectedProject.image.map((img, idx) => (
                    <div key={idx} className="flex justify-center items-center h-full">
                      <img
                        src={img}
                        alt={`Slide ${idx + 1}`}
                        className="max-h-[70vh] object-contain w-full"
                      />
                    </div>
                  ))}
                </Slider>
              ) : (
                <div className="flex justify-center items-center h-full">
                  <img
                    src={selectedProject.image[0]}
                    alt={selectedProject.title}
                    className="max-h-[70vh] object-contain w-full"
                  />
                </div>
              )}

              <div className="flex justify-center gap-4 mt-4">
                {selectedProject.liveLink && (
                  <a
                    href={selectedProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#4F83CC] px-4 py-2 rounded-md text-black font-semibold hover:bg-[#86aee7] transition flex items-center gap-2"
                  >
                    <FiExternalLink /> Live Demo
                  </a>
                )}
                {selectedProject.sourceCode && (
                  <a
                    href={selectedProject.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 px-4 py-2 rounded-md font-semibold hover:bg-gray-600 transition flex items-center gap-2"
                  >
                    <FiGithub /> Source Code
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </Modal>

      <motion.button
        onClick={() => setShowAll(!showAll)}
        className="mt-6 bg-[#4F83CC] text-black px-6 py-2 rounded-lg font-semibold hover:bg-[#86aee7] transition flex items-center gap-2"
        whileHover={{ scale: 1.1 }}
      >
        {showAll ? "Show Less Projects" : "See More Projects"}
      </motion.button>

      <style jsx global>{`
        .modal {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: transparent;
          padding: 0;
          border: none;
          outline: none;
          max-width: 90%;
          max-height: 90%;
          width: auto;
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.9);
          z-index: 1000;
        }

        .slick-dots li button:before {
          color: white;
        }

        .slick-dots li.slick-active button:before {
          color: #4F83CC;
        }
      `}</style>
    </motion.div>
  );
};

export default Project;