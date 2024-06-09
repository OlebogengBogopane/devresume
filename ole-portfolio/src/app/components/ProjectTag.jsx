import React from 'react'

const ProjectTag = ({ name, onClick, isSelected}) => {
    const buttonStyles = isSelected ? 
    "text-white bg-green-500"
    :"text-[#ADB7BE] border-slate-400  hover:border-white " 
  return (
    <button
     className={`${buttonStyles}rounded-full border-2  hover:border-white px-6 py-3 text-xl cursor-pointer`}
     onClick={onClick}
     >
        {name}
        </button>
  );
};

export default ProjectTag;