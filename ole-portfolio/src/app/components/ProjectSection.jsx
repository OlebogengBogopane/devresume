import React from 'react'
import ProjectCard from './ProjectCard'


const projectData = [
    {
        id:1,
        title:"MK simulation",
        description:"Project 1 description",
        image:"/images/projects/1.png",
        tag:["All","Web"],
    },
    {
        id:2,
        title:"Rando Sando",
        description:"Project 2 description",
        image:"/images/projects/2.png",
        tag:["All","Web"],
    },
];

const ProjectSection = () => {
  return (
   <> 
   <h2 className='text-center text-4xl font-bold text-green-600 mt-4'>
    My Projects
   </h2>
    <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {projectData.map((project) => (
        <ProjectCard 
        key={project.id}
         title={project.title}
          description={project.description} 
          imgUrl={project.image}
          tags={project} 
        />
    ))}
    </div>
    </> 
  );;
}

export default ProjectSection