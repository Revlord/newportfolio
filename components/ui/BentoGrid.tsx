'use client'

import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlobe";
import { useState } from "react";
import animationData from '@/data/confetti.json'
import Lottie from "react-lottie";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
    className={cn(
      // Responsive grid layout:
      // - Base (small screens): 1 column
      // - Medium screens: 6 columns
      // - Large screens: 5 columns
      "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5",
  
      // Consistent gap between grid items on all screen sizes:
      "gap-8",  // Increased gap from 4 to 8 for more spaciousness
  
      // Removed automatic row height adjustment on medium screens:
      // This gives you more control over row heights using other CSS properties or Tailwind classes.
  
      // Center the grid container horizontally within its parent:
      "mx-auto",
  
      className // Additional classes from the 'className' prop
    )}
  >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  id,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number,
  img?: string,
  imgClassName?: string,
  titleClassName?: string,
  spareImg?: string,
}) => {

  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText('rburramukku3@gatech.edu');
    setCopied(true);
  }


  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-non justify-between flex flex-col space-y-4 border border-white/[0.1]",
        className
      )}
      style={{
        background: 'rgb(2,0,36)',
        backgroundColor: 'radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(1,51,126,1) 100%, rgba(0,166,255,1) 100%)'
      }}
    >
      {/*This code below is to add images and content to target bento boxes */}
      <div className={`${id == 6 && 'flex justify-center'} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img src={img} alt={img} className={cn(imgClassName, 'object-cover, object-center')}/>
          )}
        </div>

        <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
          {spareImg && (
            <img src={spareImg} alt={spareImg} className={'object-cover, object-center w-full h-full'}/>
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
          </BackgroundGradientAnimation>
        )}

        <div className={cn(
          titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
        )}>
          <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
            {description}
          </div>
        
          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10 mt-2">
            {title}
          </div>

          {id === 2 && <GridGlobe />}

          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">

              <div className="flex flex-col gap-2 lg:gap-8">
                {['Next.js', 'Angular', 'TypeScript', 'Unity'].map
                ((item) => (
                  <span key={item} className="py-2 lg:py4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                    {item}
                  </span>
                ))}
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]" />
              </div>

              <div className="flex flex-col gap-2 lg:gap-8">
                {['Java/C#', '.NET Core', 'SQL', 'VR'].map
                ((item) => (
                  <span key={item} className="py-2 lg:py4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                    {item}
                  </span>
                ))}
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]" />
              </div>

            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              <div className={`absolute -bottom-5 right-0`}>
                <Lottie options={{
                  loop: copied,
                  autoplay: copied,
                  animationData,
                  rendererSettings: {
                    preserveAspectRatio: 'xMidYMid slice',
                  }
                }}/>
              </div>

              <MagicButton title={copied ? 'Yay! Email copied!' : 'Copy my email!'} icon={<IoCopyOutline/>} position=""
              otherClasses="!bg-[#161a31]" 
              handleClick={handleCopy}/>
              
            </div>
          )}
          
          </div>
      </div>
    </div>
  );
};
