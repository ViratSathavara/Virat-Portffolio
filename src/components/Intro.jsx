import React, { useState } from "react";
import { Phone, Email } from "@mui/icons-material";

const Intro = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (event) => {
    if (isHovered) {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    }
  };

  // Adjusted rotation values for smoother effect
  const rotateImage = isHovered
    ? {
        transform: `rotateY(${
          (mousePosition.x - window.innerWidth / 2) / 15
        }deg) rotateX(${-(mousePosition.y - window.innerHeight / 2) / 15}deg)`,
        transition: "transform 0.2s ease-out", // Slow down the transition for smoother movement
      }
    : { transform: "rotateY(0deg) rotateX(0deg)" };

  return (
    <div
      className="bg-[#0A192F] h-[calc(100vh-1px)] overflow-auto flex items-center justify-center"
      id="intro"
      onMouseMove={handleMouseMove}
    >
      <div className="w-1/2 flex justify-center py-10">
        <div
          className="w-[400px] h-[300px] rounded-lg overflow-hidden shadow-lg relative"
          style={rotateImage}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src="/src/assets/Computerimg2.png"
            alt="Computer Setup"
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      <div className="text-white px-4 w-1/2 text-start">
        <div className="max-w-190 text-justify">
          <p className="text-3xl">About Me</p>
          <p className="text-lg mt-10 mb-6">
            I’m Virat Sathavara, a ReactJS Developer with hands-on experience in
            building dynamic and performance-driven web applications. I
            completed my Bachelor's in Computer Engineering in June 2024 from
            Smt. S. R. Patel Engineering College with a CGPA of 8.38.
          </p>
          <p className="text-lg mb-6">
            Currently, I’m working with Cloudpeak Technologies and Services,
            where I’m refining my skills in front-end development and
            contributing to innovative projects. I'm passionate about creating
            responsive, visually appealing user interfaces and continuously stay
            updated with the latest technologies to craft efficient and engaging
            web solutions.
          </p>

          <div className="flex justify-start gap-6 mt-4 flex-col">
            <div className="flex items-center gap-2 text-lg">
              <Phone style={{ color: "#4F83CC" }} />
              <span>+91 123 456 7890</span>
            </div>
            <div className="flex items-center gap-2 text-lg">
              <Email style={{ color: "#4F83CC" }} />
              <span>viratsathavara@email.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
