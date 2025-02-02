import React from "react";

const experiences = [
  {
    title: "Frontend Developer at Cloudpeak Technologies",
    date: "June 2024 - Present",
    description: [
      'Contributed to the development of "Quick Hub" focusing on responsive template design.',
      "Optimized UI performance through efficient coding practices.",
      "Handled API calls for robust web applications.",
    ],
  },
  {
    title: "Software Developer Intern",
    date: "Jan 2024 - Mar 2024",
    description: [
      'Built "Connectify", a social media app using Firebase DB.',
      "Designed a website with Thymeleaf, REST API, and CRUD operations.",
    ],
  },
  {
    title: "ReactJS Intern at Nivaan Infotech",
    date: "Jan 2023 - Feb 2023",
    description: [
      "Learned how to enhance the usability of applications using accessibility standards.",
    ],
  },
];

const Experience = () => {
  return (
    <div
      className="bg-[#0A192F] h-[calc(100vh-1px)] overflow-auto"
      id="experience"
    >
      <div className="flex">
        <div className="flex w-1/2 pl-40 flex-col">
          <h2 className="text-white text-3xl font-bold mb-4">Experience</h2>
          <div className="flex flex-wrap justify-between">
            <div className="w-full px-4">
              {experiences.map((exp, index) => (
                <div key={index} className="text-white mb-6">
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p>{exp.date}</p>
                  <ul className="list-disc pl-5">
                    {exp.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full sm:w-1/2 px-4">
          <img
            src="https://via.placeholder.com/400x300"
            alt="Experience"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
