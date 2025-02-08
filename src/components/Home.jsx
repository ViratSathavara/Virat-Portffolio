import React, { useEffect, useRef, useState } from "react";
import { init } from "ityped";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Button } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Home = () => {
  const textRef = useRef(null);
  const isTypedInitialized = useRef(false);
  const [hoverEffect, setHoverEffect] = useState({ x: 0, y: 0 });
  const { t } = useTranslation();

  useEffect(() => {
    if (textRef.current && !isTypedInitialized.current) {
      isTypedInitialized.current = true;
      textRef.current.innerHTML = "";
      init(textRef.current, {
        showCursor: false,
        backDelay: 1500,
        backSpeed: 60,
        loop: true,
        strings: ["Frontend Developer", "ReactJs Developer", "Video Editor"],
      });
    }
  }, []);

  return (
    <motion.div
      className="bg-[#101f34] h-screen flex items-center"
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="w-1/2 flex flex-col pl-40 justify-center items-start">
        <div className="flex gap-20 items-center">
          <div>
            <p className="text-white text-[40px]">{t('home.name')}</p>
            <h1 className="text-white text-[50px] font-bold">
            {t('home.name')}
            </h1>
            <div className="h-20">
              <span className="text-white text-[30px]" ref={textRef}></span>
            </div>
            <Button
              variant="outlined"
              sx={{
                border: "1px solid white",
                color: "white",
                padding: "10px 20px",
                borderRadius: "5px",
                "&:hover": {
                  backgroundColor: "white",
                  color: "black",
                  transform: "scale(1.05)",
                },
                "&:focus": {
                  outline: "none",
                },
                transition: "all 0.4s ease-in-out",
              }}
              onClick={() => {
                const link = document.createElement("a");
                link.href = "../assets/Virat_CV.pdf";
                link.download = "Virat_Sathavara_CV.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              {t('home.downloadCV')}
            </Button>
          </div>
          <div className="flex flex-col gap-6">
            <a
              href="https://www.linkedin.com/in/virat-sathavara-576109249/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 transform hover:scale-110 hover:text-blue-500"
            >
              <LinkedInIcon style={{ fontSize: "50px", color: "white" }} />
            </a>

            <a
              href="https://github.com/ViratSathavara"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 transform hover:scale-110 hover:text-gray-500"
            >
              <GitHubIcon style={{ fontSize: "50px", color: "white" }} />
            </a>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-full flex items-center justify-center">
        <motion.div
          className="w-[600px] h-[600px] rounded-full overflow-hidden shadow-xl"
          onMouseMove={(e) => {
            const { left, top, width, height } =
              e.currentTarget.getBoundingClientRect();
            const x = (e.clientX - (left + width / 2)) / 10;
            const y = (e.clientY - (top + height / 2)) / 10;
            setHoverEffect({ x, y });
          }}
          onMouseLeave={() => setHoverEffect({ x: 0, y: 0 })}
          animate={{
            x: hoverEffect.x,
            y: hoverEffect.y,
            rotateX: -hoverEffect.y,
            rotateY: hoverEffect.x,
          }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
        >
          <img
            src="src/assets/image.jpeg"
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
