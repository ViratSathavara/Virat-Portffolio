import React, { useEffect, useRef, useState } from "react";
import { init } from "ityped";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Button } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import image from "../assets/myImg2.jpg";

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
      className="bg-[#101f34] h-full lg:py-20 py-40 min-h-screen flex flex-col lg:flex-row items-center px-6 lg:px-20"
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="w-full lg:w-1/2 flex flex-col items-center gap-4 lg:items-start text-center lg:text-left">
        <p className="text-white text-3xl sm:text-4xl">{t("home.title1")}</p>
        <h1 className="text-white text-4xl sm:text-5xl font-bold">
          {t("home.name")}
        </h1>
        <div className="h-16">
          <span
            className="text-white text-2xl sm:text-3xl"
            ref={textRef}
          ></span>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 mt-6">
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
            // onClick={() => {
            //   const link = document.createElement("a");
            //   link.href = "../assets/Virat_CV.pdf";
            //   link.download = "Virat_Sathavara_CV.pdf";
            //   document.body.appendChild(link);
            //   link.click();
            //   document.body.removeChild(link);
            // }}
          >
            <a download href="../assets/Virat_CV.pdf" class="btn">
              {t("home.downloadCV")}
            </a>
          </Button>

          <div className="flex justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/virat-sathavara-576109249/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 transform hover:scale-110 hover:text-blue-500"
            >
              <LinkedInIcon style={{ fontSize: "40px", color: "white" }} />
            </a>

            <a
              href="https://github.com/ViratSathavara"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 transform hover:scale-110 hover:text-gray-500"
            >
              <GitHubIcon style={{ fontSize: "40px", color: "white" }} />
            </a>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex justify-center mt-10 lg:mt-0">
        <motion.div
          className="w-64 sm:w-80 md:w-96 lg:w-[500px] h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-full overflow-hidden shadow-xl"
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
            src={image}
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
