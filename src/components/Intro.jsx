import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Phone, Email } from "@mui/icons-material";
import { motion } from "framer-motion";
import Computerimg2 from "../assets/Computerimg2.png";
import { t } from "i18next";

const Intro = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  const handleMouseMove = (event) => {
    if (isHovered) {
      setMousePosition({ x: event.clientX, y: event.clientY });
    }
  };

  const rotateImage = isHovered
    ? {
        transform: `rotateY(${(mousePosition.x - window.innerWidth / 2) / 15}deg) 
                    rotateX(${-(mousePosition.y - window.innerHeight / 2) / 15}deg)`,
        transition: "transform 0.2s ease-out",
      }
    : { transform: "rotateY(0deg) rotateX(0deg)" };

  return (
    <div
      ref={ref}
      className={`bg-[#0A192F] min-h-screen flex py-20 flex-col-reverse lg:flex-row items-center justify-center px-4 sm:px-10 lg:px-20 transition-all duration-1000 ${
        inView ? "opacity-100" : "opacity-0"
      }`}
      id="about"
      onMouseMove={handleMouseMove}
    >
      <div
        className={`text-white w-full lg:w-1/2 text-center lg:text-start transition-all duration-1000 ${
          inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
        }`}
      >
        <div className="max-w-2xl mx-auto">
          <p className="text-3xl">{t("intro.title")}</p>
          <p className="text-lg mt-6">{t("intro.desc1")}</p>
          <p className="text-lg mt-4">{t("intro.desc2")}</p>

          <div className="flex flex-col items-center lg:items-start gap-4 mt-6">
            <div className="flex items-center gap-2 text-lg">
              <Phone style={{ color: "#4F83CC" }} />
              <span>{t("intro.mobileNo")}</span>
            </div>
            <div className="flex items-center gap-2 text-lg">
              <Email style={{ color: "#4F83CC" }} />
              <span>{t("intro.emailId")}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex justify-center py-10">
        <motion.div
          className="w-full sm:w-[350px] md:w-[400px] rounded-lg overflow-hidden shadow-lg relative"
          style={rotateImage}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        >
          <img
            src={Computerimg2}
            alt="Computer Setup"
            className="object-cover w-full"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Intro;
