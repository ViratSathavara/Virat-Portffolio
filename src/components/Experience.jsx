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
import { Typography } from "@mui/material";

const Experience = () => {
  return (
    <div className="bg-[#0A192F] py-10" id="experience">
      <h2 className="text-white text-3xl font-bold text-center mb-6">
        Experience & Education
      </h2>
      <div className="w-full flex justify-center">
        <div className="max-w-full">
          <Timeline position="alternate">
            <TimelineItem>
              <TimelineOppositeContent>
                <Typography color="gray">June 2024 - Present</Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="primary" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <div className="flex flex-col">
                  <Typography variant="h6" color="white" fontWeight="bold">
                    Frontend Developer at Cloudpeak Technologies
                  </Typography>
                  <Typography className="text-gray-300 mt-2 text-justify max-w-3xl">
                    At Cloudpeak Technologies and Services, I worked on the
                    Quick Hub project, developing responsive interfaces and
                    optimizing UI performance with React.js. I applied efficient
                    coding practices to ensure high performance across devices.
                    With basic knowledge of Node.js and Express.js, I
                    contributed to server-side functionalities and API
                    integrations, enabling smooth data flow. Additionally, I
                    worked on video editing for meta permissions, using Adobe
                    Premiere Pro to create high-quality videos aligned with
                    project requirements.
                  </Typography>
                </div>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineOppositeContent>
                <Typography color="gray">Jan 2024 - Mar 2024</Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="primary" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <div className="flex flex-col">
                  <Typography variant="h6" color="white" fontWeight="bold">
                    Software Developer Intern
                  </Typography>
                  <Typography className="text-gray-300 mt-2 text-justify max-w-3xl">
                    I developed Connectify, a social media app utilizing
                    Firebase DB, integrating content-based features with
                    advanced filtering techniques for an enhanced user
                    experience. Additionally, I designed a dynamic website using
                    Thymeleaf, REST API, and CRUD operations, enabling efficient
                    product data management, including creation, retrieval,
                    editing, and deletion.
                  </Typography>
                </div>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineOppositeContent>
                <Typography color="gray">Jan 2023 - Feb 2023</Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="primary" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <div className="flex flex-col">
                  <Typography variant="h6" color="white" fontWeight="bold">
                    ReactJS Intern at Nivaan Infotech
                  </Typography>
                  <Typography className="text-gray-300 mt-2 text-justify max-w-3xl">
                    I learned how to enhance the usability of existing
                    applications by applying the latest accessibility standards,
                    ensuring a more inclusive user experience. Additionally, I
                    developed a word counter project called "Docket" using
                    React.js, which efficiently counts and displays the number
                    of words in a given text.
                  </Typography>
                </div>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
      </div>
    </div>
  );
};

export default Experience;
