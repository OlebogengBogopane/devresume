"use client";
import React, {useState} from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';


const projectData = [
    {
        id:1,
        title:"MK simulation",
        description:"Project 1 description",
        image:"/images/projects/1.png",
        tag:["All","Web"],
        gitUrl:"https://scratch.mit.edu/projects/772671523",
        previewUrl:"/",
    },
    {
        id:2,
        title:"Rando Sando",
        description:"Project 2 description",
        image:"/images/projects/2.png",
        tag:["All","Web"],
        gitUrl:"/",
        previewUrl:"/",
    },
    {
        id:3,
        title:"MK simulation",
        description:"Project 3 description",
        image:"/images/projects/3.png",
        tag:["All","Web"],
        gitUrl:"/",
        previewUrl:"/",
    },
];

const ProjectSection = () => {
    const [tag, setTag] = useState("All");

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

  return (
   <> 
   <h2 className='text-center text-4xl font-bold text-green-600 mt-4'>
    My Projects
   </h2>  
   <div className='text-green-200 flex flex-row justify-center items-center gap-2 py-4
   '>
   <ProjectTag 
   onClick={handleTagChange}
    tag="All" isSelected={tag === "All"} />
   </div>
    <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {projectData.map((project) => (
        <ProjectCard 
        key={project.id}
         title={project.title}
          description={project.description} 
          imgUrl={project.image}
          tags={project.project} 
          gitUrl={project.gitUrl}
          previewUrl={project.previewUrl}
          
        />
    ))}
    </div>
    </> 
  );;
}

export default ProjectSection