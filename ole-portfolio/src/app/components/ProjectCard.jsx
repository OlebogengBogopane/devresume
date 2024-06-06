import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const ProjectCard = ( {imgUrl, title, description, gitUrl, previewUrl, }) => {
  return (
    <div>
        <div className='h-52 md:h-72 rounded-t-xl relative group' 
                style={{ background:`url(${imgUrl})`, backgroundSize:"cover"}}
                >
                    <div className='overlay flex items-center justify-center space-x-4 absolute top-0 left-0 w-full h-full bg-[#199a1988] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500'>
                        <Link href={gitUrl} className='h-14 w-14 border-2 rounded-full border-[#54ac71] hover:border-white flex items-center justify-center group/link'>
                        <Image 
                        className='w-10 h-10  text-[#54ac71]   cursor-pointer group-hover/link hover:text-white'
                        src="/images/view-icon.png"
                        alt='view'
                        width={40}
                        height={40}
                        />
                        </Link>
                        
                    
                        <Link href={previewUrl} className='h-14 w-14 border-2 rounded-full border-[#54ac71] hover:border-white flex items-center justify-center group/link'>
                        <Image className='w-10 h-10  text-[#54ac71]  cursor-pointer group-hover/link hover:text-white'
                        src="/images/eye-icon.png"
                        alt='eye'
                        width={40}
                        height={40}
                        />
                        </Link>
                        
                    </div>
                </div>
                <div className='text-green rounded-b-xl bg-[#181818] py-6 px-4'>
             <h5 className='text-xl font-semibold mb-2'>{title}</h5>
            <p className='text-[#4aad6b]'>{description}</p>
    </div>
    </div>
  );
};

export default ProjectCard