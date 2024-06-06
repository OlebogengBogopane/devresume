"use client"
import React ,{useTransition, useState} from 'react'
import Image from 'next/image'
import TabButton from './TabButton'



const TAB_DATA = [
  {
    title: "Skills",
    id:"Skills",
    content :(
    <ul className='list-disc pl-2'>
      <li> Node.js </li>
      <li> Scrimba </li>
      <li> Next.js </li>
      <li> Javascript </li>
      <li> React </li>
      <li> Creative Arts </li>
    </ul>
    )
  },
  {
    title: "Education",
    id:"Education",
    content :(
    <ul className='list-disc pl-2'>
      <li> Code Space Academy </li>
      <li> T-Systems SA</li>
      <li> Bafokeng High School </li>
    </ul>
    )
  },

  {
  title: "Certificates",
  id:"Certificates",
  content :(
  <ul className='list-disc pl-2'>
    <li> Code Space Academy </li>
    <li> Udemy</li>
    <li> CompTIA certification </li>
    <li> Huawei Academy </li>
  </ul>
  ),
},

];


const AboutSection = () => {
  const [tab, setTab] = useState ("Skills");
  const [isPending ,startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition (()=>{
      setTab(id)
    })
}

  return (
    <section className=''>
        <div className=' md:grid  md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image src='/images/matrix-log.gif' alt='about' width={500} height={500}/>
            <div className='mt-4 md:mt-0 text-left flex-col h-full'>
                <h2 className='text-4xl font-bold mb-4 '>About Me</h2>
                <p className='md:text-lg'> I am a Software developer graduate from CodeSpace academy with 1year experience ,learning html,css and javascript alongside javscript frameworks(React & NextJs). throughout the program I learned how to work in an Agile environment and deliver seamingless and up to par web applications.I work very well in teams and always look forward to gaining new skills and creative innovative applications for my community and the world at large
                </p>
                <div className='flex flex-row justify-start mt-8 '>
                  <TabButton 
                  selectTab={()=> handleTabChange("Skills")} active={tab==="Skills"}> {""}Skills{""}
                   </TabButton>

                   <TabButton 
                  selectTab={()=> handleTabChange("Education")} active={tab==="Education"}>{""} Education{""}
                   </TabButton>

                   <TabButton 
                  selectTab={()=> handleTabChange("Certificates")} active={tab==="Certificates"}> {""}Certificates{""}

                   </TabButton>

                   
                    
                </div>
                <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content} </div>
                
            </div>
        </div>
    </section>
  )
}

export default AboutSection