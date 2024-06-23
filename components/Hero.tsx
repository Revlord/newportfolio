import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { LampContainer, LampDemo } from './ui/Lamp'

const Hero = () => {
  return ( //outer div acts as a wrapper for the content that will come within our hero section
    <div className="pb-20 pt-36">
        <LampDemo></LampDemo>
    </div>

  )
}

export default Hero