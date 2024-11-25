import { useState } from "react";

function ProjectCard({ title, bgImg, url }) {
  const [isHovered, setIsHovered] = useState(false);
  const handleTitleClick = () => {
    window.open(url, "_blank");
  }

  return (
    <div className={`w-1/4 h-56 ${bgImg} p-5 shadow-md transform transition-transform duration-500 ${
      isHovered ? "scale-105 bg-opacity-60 bg-gray-700" : "bg-opacity-10"}`}
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}  
      >
      <div className={`absolute inset-0 transition-opacity duration-300 ${isHovered ? "bg-black bg-opacity-50" : "bg-black bg-opacity-0"}`}></div>
      <div className="flex items-center justify-center h-full w-full absolute inset-0">
        <button 
          onClick={handleTitleClick}
          className={`p-5 shadow-md transform transition-transform duration-300 ${isHovered ? "" : "bg-opacity-10"}`}
        >
          <h2 className={`relative text-center text-xl text-verdegris transition-opacity duration-500 ${isHovered ? "opacity-100 text-verdegris" : "opacity-0"}`}>{title}</h2>
        </button>
      </div>
    </div>
  );
}

export default ProjectCard