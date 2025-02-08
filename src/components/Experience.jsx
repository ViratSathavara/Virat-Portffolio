import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const experiences = [
  {
    id: 1,
    date: "2018",
    title: "Class X",
    description:
      "Successfully completed secondary education with a 68.67% score, demonstrating dedication and a strong academic foundation.",
    icon: <SchoolIcon />,
  },
  {
    id: 2,
    date: "2020",
    title: "Class XII",
    description:
      "Completed higher secondary education with 55.37%, gaining essential skills and knowledge for further academic pursuits.",
    icon: <SchoolIcon />,
  },
  {
    id: 3,
    date: "2020 - 2024",
    title: "B.E. - Computer Engineering",
    description:
      "Graduated with a CGPA of 8.38 from Gujarat Technological University.",
    icon: <SchoolIcon />,
    icons: [
      <img src="public/assets/vscode.png" alt="vscode" className="h-7" />,
      <img src="public/assets/intellij-idea.svg" alt="vscode" className="h-7" />,
      <img src="public/assets/html.png" alt="vscode" className="h-7" />,
      <img src="public/assets/css.png" alt="vscode" className="h-7" />,
      <img src="public/assets/javascript.png" alt="vscode" className="h-7" />,
      <img src="public/assets/bootstrap.png" alt="vscode" className="h-7" />,
      <img
        src="public/assets/adobe-illustrator.png"
        alt="vscode"
        className="h-7"
      />,
      <img
        src="public/assets/adobe-premiere-pro.png"
        alt="vscode"
        className="h-7"
      />,
      <img src="public/assets/adobe-audition.png" alt="vscode" className="h-7" />,
    ],
  },
  {
    id: 4,
    date: "Jan 2023 - Feb 2023",
    title: "ReactJS Intern at Nivaan Infotech",
    description:
      "Enhanced usability of applications by applying accessibility standards. Developed a word counter project, 'Docket,' using React.js, efficiently counting and displaying word counts.",
    icon: <WorkIcon />,
    icons: [
      <img src="public/assets/react-js.png" alt="react-js" className="h-7" />,
      <img src="public/assets/javascript.png" alt="javascript" className="h-7" />,
      <img src="public/assets/html.png" alt="html" className="h-7" />,
      <img src="public/assets/css.png" alt="css" className="h-7" />,
      <img src="public/assets/vscode.png" alt="vscode" className="h-7" />,
    ],
  },
  {
    id: 5,
    date: "Jan 2024 - April 2024",
    title: "Software Developer Intern",
    description:
      "Developed Connectify, a social media app utilizing Firebase DB with content-based features and advanced filtering. Designed a dynamic website using Thymeleaf, REST API, and CRUD operations for efficient product data management.",
    icon: <WorkIcon />,
    icons: [
      <img src="public/assets/java.png" alt="vscode" className="h-7" />,
      <img src="public/assets/intellij-idea.svg" alt="react-js" className="h-7" />,
      <img src="public/assets/sql-server.png" alt="react-js" className="h-7" />,
      <img src="public/assets/spring-boot.png" alt="react-js" className="h-7" />,
      <img src="public/assets/firebase.png" alt="react-js" className="h-7" />,
      <img src="public/assets/javascript.png" alt="javascript" className="h-7" />,
      <img src="public/assets/html.png" alt="html" className="h-7" />,
      <img src="public/assets/css.png" alt="css" className="h-7" />,
      <img src="public/assets/vscode.png" alt="vscode" className="h-7" />,
    ],
  },
  {
    id: 6,
    date: "June 2024 - Present",
    title: "Frontend Developer at Cloudpeak Technologies",
    description:
      "Worked on the Quick Hub project, developing responsive interfaces and optimizing UI performance with React.js. Applied efficient coding practices to ensure high performance across devices. Contributed to server-side functionalities and API integrations using Node.js, Express.js and Nest.js. Additionally, handled video editing for meta permissions using Adobe Premiere Pro.",
    icon: <WorkIcon />,
    icons: [
      <img src="public/assets/github.png" alt="vscode" className="h-7" />,
      <img src="public/assets/graphQl.png" alt="react-js" className="h-7" />,
      <img src="public/assets/express-js.png" alt="react-js" className="h-7" />,
      <img src="public/assets/nodejs.png" alt="react-js" className="h-7" />,
      <img src="public/assets/nestjs.png" alt="react-js" className="h-7" />,
      <img src="public/assets/javascript.png" alt="javascript" className="h-7" />,
      <img src="public/assets/html.png" alt="html" className="h-7" />,
      <img src="public/assets/css.png" alt="css" className="h-7" />,
      <img src="public/assets/vscode.png" alt="vscode" className="h-7" />,
      <img src="public/assets/vite.png" alt="vscode" className="h-7" />,
      <img
        src="public/assets/adobe-premiere-pro.png"
        alt="vscode"
        className="h-7"
      />,
    ],
  },
  {
    id: 7,
    title: "Continue...",
    icon: <ArrowDownwardIcon />,
  },
];

const Experience = () => {
  return (
    <motion.div
      className="bg-[#101f34] py-10"
      id="experience"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <h2 className="pt-20 text-white text-3xl font-bold text-center mb-6">
      Education & Experience
      </h2>
      <div className="w-full flex justify-center">
        <div className="max-w-full">
          <Timeline position="alternate">
            {experiences.map((exp, index) => {
              const { ref, inView } = useInView({
                triggerOnce: true,
                threshold: 0.5,
              });
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={exp.id}
                  ref={ref}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  animate={{
                    opacity: inView ? 1 : 0,
                    x: inView ? 0 : isLeft ? -50 : 50,
                  }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <TimelineItem position={isLeft ? "left" : "right"}>
                    <TimelineOppositeContent>
                      <Typography className="text-gray-300">
                        {exp.date}
                      </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot color="primary">{exp.icon}</TimelineDot>
                      {index !== experiences.length - 1 && (
                        <TimelineConnector />
                      )}
                    </TimelineSeparator>
                    <TimelineContent>
                      <div className="flex flex-col space-y-6">
                        <Typography
                          variant="h6"
                          color="white"
                          fontWeight="bold"
                        >
                          {exp.title}
                        </Typography>
                        {exp.description && (
                          <Typography
                            className="text-gray-300 mt-2 text-justify max-w-4xl"
                            style={{ lineHeight: "1.6" }}
                          >
                            {exp.description}
                          </Typography>
                        )}
                        <div className="my-3">
                          {exp?.icons?.length > 0 && (
                            <div
                              className={`flex flex-wrap items-center space-x-2 mt-2 ${
                                index % 2 === 0
                                  ? "justify-end"
                                  : "justify-start"
                              }`}
                            >
                              {exp.icons.map((icon, iconIndex) => (
                                <div
                                  key={iconIndex}
                                  className="h-12 bg-blue-100 p-0.5 bg-opacity-30 rounded-full flex items-center justify-center w-12 mb-2 transition-all duration-300 ease-in-out hover:bg-blue-300 hover:scale-110"
                                >
                                  {icon}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </TimelineContent>
                  </TimelineItem>
                </motion.div>
              );
            })}
          </Timeline>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
