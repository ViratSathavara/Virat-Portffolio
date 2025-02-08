import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Phone, Email } from "@mui/icons-material";
import { motion } from 'framer-motion';
import { t } from 'i18next';

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
      className={`bg-[#0A192F] h-[calc(100vh-1px)]  overflow-auto flex items-center justify-center transition-all duration-1000 ${
        inView ? "opacity-100" : "opacity-0"
      }`}
      id="about"
      onMouseMove={handleMouseMove}
    >
      <div className="w-1/2 flex justify-center py-10">
        <motion.div
          className="w-[400px] h-auto rounded-lg overflow-hidden shadow-lg relative"
          style={rotateImage}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        >
          <img
            src="/public/assets/Computerimg2.png"
            alt="Computer Setup"
            className="object-cover w-full h-full"
          />
        </motion.div>
      </div>

      <div
        className={`text-white px-4 w-1/2 text-start transition-all duration-1000 ${
          inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
        }`}
      >
        <div className="max-w-190 text-justify">
          <p className="text-3xl">{t('intro.title')}</p>
          <p className="text-lg mt-10 mb-6">{t('intro.desc1')}
          </p>
          <p className="text-lg mb-6">{t('intro.desc2')}</p>
          <div className="flex justify-start gap-6 mt-4 flex-col">
            <div className="flex items-center gap-2 text-lg">
              <Phone style={{ color: "#4F83CC" }} />
              <span>{t('intro.mobileNo')}</span>
            </div>
            <div className="flex items-center gap-2 text-lg">
              <Email style={{ color: "#4F83CC" }} />
              <span>{t('intro.emailId')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
