import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Skills = () => {
  const skills = [
    { name: "HTML", percentage: 90 },
    { name: "CSS", percentage: 95 },
    { name: "JavaScript", percentage: 85 },
    { name: "React", percentage: 80 },
    { name: "Node.js", percentage: 75 },
    { name: "Git", percentage: 70 },
  ];

  const [progressValues, setProgressValues] = useState(skills.map(() => 0));
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      const totalDuration = 2000;
      const interval = 50;
      let currentProgress = 0;
      const increment = skills.map(
        (skill) => skill.percentage / (totalDuration / interval)
      );

      const intervalId = setInterval(() => {
        setProgressValues((prevValues) =>
          prevValues.map((value, index) => {
            const targetValue = skills[index].percentage;
            return value < targetValue ? Math.min(value + increment[index], targetValue) : value;
          })
        );

        currentProgress += interval;
        if (currentProgress >= totalDuration) clearInterval(intervalId);
      }, interval);
    }
  }, [inView]);

  return (
    <div id="skills" ref={ref} className="text-white bg-[#0A192F] h-[calc(100vh-1px)] overflow-auto flex justify-center">
      <Box sx={{ width: "80%", maxWidth: "1200px" }} className="py-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <Typography variant="h4" align="center" className="pt-20" color="white" gutterBottom>
            My Skills
          </Typography>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="w-full">
                  <div className="flex justify-between">
                    <Typography variant="h6" color="white" gutterBottom>
                      {skill.name}
                    </Typography>
                    <Typography variant="h6" color="white" gutterBottom>
                      {skill.percentage}%
                    </Typography>
                  </div>
                  <LinearProgress
                    variant="determinate"
                    value={progressValues[index]}
                    sx={{
                      height: 10,
                      borderRadius: 5,
                      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
                      "& .MuiLinearProgress-bar": {
                        backgroundColor: "#00BFAE",
                      },
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Box>
    </div>
  );
};

export default Skills;
