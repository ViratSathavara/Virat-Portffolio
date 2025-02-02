import React from "react";

const Home = () => {
  return (
    <div className="bg-yellow-50 h-lvh flex items-center" id="home">
      <div className="w-1/2 h-full items-center flex justify-center">
        <div className="flex w-140 rounded-full h-140 justify-center items-center overflow-hidden">
          <img
            src="src/assets/ProfileImage.jpg"
            alt="Profile"
            className="object-cover"
          />
        </div>
      </div>
      <div className="w-1/2 flex flex-col pl-20 bg-amber-300 justify-center items-start">
        <p className="text-[34px]">Hi There, I'm</p>
        <h1 className="text-[40px] font-bold">Virat Sathavara</h1>
        <h3 className="text-[24px]">Frontend Developer</h3>
      </div>
    </div>
  );
};

export default Home;
