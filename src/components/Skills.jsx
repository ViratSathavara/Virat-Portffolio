import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SkillsBar from "./SkillsBar";

const Skills = () => {
  const languagesAndTechnologies = [
    {
      name: "HTML",
      percentage: 95,
      tooltip:
        "With three years of hands-on experience in HTML, I specialize in creating fully responsive designs and implementing diverse formatting techniques to ensure optimal user experience and seamless adaptability across all devices.",
    },
    {
      name: "CSS3",
      percentage: 90,
      tooltip:
        "With 3 years of experience in CSS, I specialize in responsive design, advanced formatting, and a deep understanding of various CSS properties for precise styling and layout optimization.",
    },
    {
      name: "Tailwind CSS",
      percentage: 95,
      tooltip:
        "1.5 year of experience with Tailwind CSS, specializing in responsive design and styling.",
    },
    {
      name: "Bootstrap CSS",
      percentage: 90,
      tooltip:
        "Experienced in Bootstrap for 3 years, focusing on responsive design and efficient styling.",
    },
    {
      name: "JavaScript",
      percentage: 85,
      tooltip:
        "2 years of hands-on experience with JavaScript, specializing in dynamic functionality, interactive features, and optimizing web performance.7 months experience with JavaScript",
    },
    {
      name: "React.js",
      percentage: 90,
      tooltip:
        "1.5 years of experience with React.js, including 7 months working on an industrial project called 'QuickHub,' focusing on building responsive interfaces and efficient API integrations in CloudPeak Technologies and services.",
    },
    {
      name: "React Vite",
      percentage: 80,
      tooltip:
        "Advanced knowledge of React Vite, focusing on fast and optimized web application development.",
    },
    {
      name: "Node.js",
      percentage: 40,
      tooltip:
        "Basic knowledge of Node.js, with experience in backend development.",
    },
    {
      name: "Nest.js",
      percentage: 50,
      tooltip:
        "Good knowledge of Nest.js, plus Some experience in basic API integration and implementing CRUD operations.",
    },
    {
      name: "Express.js",
      percentage: 30,
      tooltip: "Basic knowledge about Express.js.",
    },
    {
      name: "Java",
      percentage: 60,
      tooltip:
        "Good knowledge of Java, with a good understanding of Object-Oriented Programming (OOP) concepts.",
    },
    {
      name: "Spring Boot",
      percentage: 40,
      tooltip:
        "Basic knowledge of Spring Boot, with experience in building small projects and understanding core concepts.",
    },
    {
      name: "Database",
      percentage: 50,
      tooltip:
        "Basic knowledge of database functionalities and queries, with hands-on experience in handling data operations.",
    },
    {
      name: "GraphQL",
      percentage: 40,
      tooltip: "Basic knowledge and understanding of GraphQL.",
    },
  ];

  const toolsAndSoftware = [
    { name: "VS Code", percentage: 90 },
    { name: "IntelliJ IDEA", percentage: 85 },
    { name: "Adobe Illustrator", percentage: 75 },
    { name: "Adobe Audition", percentage: 80 },
    { name: "Adobe Premiere Pro", percentage: 85 },
    { name: "GitHub", percentage: 90 },
  ];

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div
      id="skills"
      ref={ref}
      className="text-white bg-[#0A192F] h-auto py-20 min-h-[calc(100vh-1px)] overflow-auto flex justify-center"
    >
      <Box sx={{ width: "80%", maxWidth: "1200px" }} className="py-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <Typography variant="h4" align="center" color="white" gutterBottom>
            My Skills
          </Typography>

          <Typography
            variant="h5"
            align="left"
            className="pt-10 pb-5"
            color="white"
            gutterBottom
          >
            Languages & Technologies
          </Typography>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
            {languagesAndTechnologies.map((skill, index) => (
              <SkillsBar
                key={index}
                name={skill.name}
                percentage={skill.percentage}
                tooltip={skill.tooltip}
                index={index}
                inView={inView}
                showTooltip={true}
              />
            ))}
          </div>

          <Typography
            variant="h5"
            align="left"
            className="pt-10 pb-5"
            color="white"
            gutterBottom
          >
            Tools & Software
          </Typography>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
            {toolsAndSoftware.map((tool, index) => (
              <SkillsBar
                key={index}
                name={tool.name}
                percentage={tool.percentage}
                tooltip={tool.tooltip}
                index={index}
                inView={inView}
                showTooltip={false}
              />
            ))}
          </div>
        </motion.div>
      </Box>
    </div>
  );
};

export default Skills;
