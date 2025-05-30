import { getTechLogos } from '@/lib/utils'
import Image from 'next/image';
import React from 'react'

const DisplayTechIcons = async ({techStack} : TechIconProps) => {
  const techIcons = await getTechLogos(techStack);

  return (
    <div className='flex flex-row gap-2'>
      {techIcons.slice(0,4).map(({tech, url}, index) => (
        <div className='relative group bg-dark-300 rounded-full p-2 flex-center flex' key={index}>
          <span className='tech-tooltip'>{tech}</span>
          <Image src={url} alt={tech} width={50} height={50} className='size-5'/>
        </div>
      ))}
    </div>
  )
}

export default DisplayTechIcons