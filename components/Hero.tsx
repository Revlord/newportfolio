//hero typically stands for the primary section that you see when the user first visits the page
//this is also a good place to explore the tailwind required for hero sections, as I have written them in the following divs
import React from 'react'
import { Spotlight } from './ui/Spotlight'

const Hero = () => {
  return ( //outer div acts as a wrapper for the content that will come within our hero section
    <div className="pb-20 pt-36">
        <div>
            <Spotlight className='-top-40 -left-10
            md:-left-32 md:-top-20 h-screen' fill='white'/>
            <Spotlight className='top-10 left-full
            h-[80vh] w-[50vw]' fill='purple'/>
            <Spotlight className='top-28 left-80
            h-[80vh] w-[50vh]' fill='blue'/>
        </div>
        <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.3] relative flex items-center justify-center">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
            </div>
        </div>
  )
}

export default Hero