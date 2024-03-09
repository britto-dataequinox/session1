import { StaticImageData } from 'next/image'
import React from 'react'
import Image from 'next/image'

interface HeroProps {
    imgData: StaticImageData;
    imgAlt: string;
    title: string;
}

const Hero = (props: HeroProps) => {
  return (
    <div>
    <div className='absolute -z-10 inset-0'>
        <Image 
          src={props.imgData}
          objectFit='cover'
          fill
          alt={props.imgAlt}
        />
        <div className='absolute inset-0 bg-gradient-to-r from-slate-900' />
      </div>
      <div className='pt-48 flex justify-center items-center'>
        <h1 className='text-white text-6xl'>
            {props.title}
        </h1>
      </div>
      </div>
  )
}

export default Hero
