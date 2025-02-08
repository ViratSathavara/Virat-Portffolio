import React, { useState } from "react";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import CloseIcon from "@mui/icons-material/Close";

const Topbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Topbar */}
      <div className="bg-[#1F2A40] px-8 lg:px-14 w-full flex items-center h-20 justify-between 
        transition-colors duration-400 z-50 fixed top-0 left-0 right-0"
      >
        <div className="text-2xl text-[#4F83CC] font-semibold">hello</div>

        <div className="hidden md:flex items-center gap-10 text-white text-lg">
          {["Home", "About", "Experience", "Skills", "Projects", "Contact"].map((item, index) => (
            <a 
              key={index} 
              href={`#${item.toLowerCase().replace(/\s/g, "")}`} 
              className="hover:text-[#4F83CC] transition-all duration-300"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="md:hidden cursor-pointer text-white">
          {isOpen ? (
            <CloseIcon onClick={() => setIsOpen(false)} />
          ) : (
            <DensityMediumIcon onClick={() => setIsOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="fixed top-20 left-0 w-full bg-[#1F2A40] text-white flex flex-col items-center gap-5 py-5 z-40 md:hidden">
          {["Home", "About", "Experience", "Skills", "Projects", "Contact"].map((item, index) => (
            <a 
              key={index} 
              href={`#${item.toLowerCase().replace(/\s/g, "")}`} 
              className="hover:text-[#4F83CC] transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </>
  );
};

export default Topbar;
