"use client"

import { motion } from 'framer-motion'
import React,{useState} from 'react'

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import {BsArrowUpRight,BsGithub} from 'react-icons/bs'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from 'next/link'
import Image from 'next/image'
import { projects, settings } from './workConstants';


const Work = () => {
  const [projectIndex, setProjectIndex] = useState(0);

  const handleNextProject = () => {
    setProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrevProject = () => {
    setProjectIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const project = projects[projectIndex];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'
    >
      <div className="container mx-auto ">

        <div className="flex justify-between mb-8 ">
          <div className='group'>

          <button
            onClick={handlePrevProject}
            className="bg-white/5 text-white px-4 py-2 rounded group-hover:text-accent transition-colors duration-300"
            >
            Previous
          </button>
            </div>
            <div className='group'>

          <button
            onClick={handleNextProject}
            className="bg-white/5 text-white px-4 py-2 rounded group-hover:text-accent transition-colors duration-300"
            >
            Next
          </button>
            </div>
        </div>

        <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
          <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
            <div className='flex flex-col gap-[30px] h-[50%]'>
              <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>
                {project.num}
              </div>
              <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>
                {project.title}
              </h2>
              <p className='text-white/60 '>{project.description}</p>
              <ul className=' grid grid-cols-2 xl:grid-cols-3 gap-4'>
                {project.stack.map((item, index) => (
                  <li key={index} className='text-xl text-accent'>
                    {item.name}
                    {index !== project.stack.length - 1 && ','}
                  </li>
                ))}
              </ul>
              <div className='border border-white/20'></div>
              <div className='flex item-center gap-4'>
                <Link href={project.live || project.github} target="_blank" rel="noopener noreferrer">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                        <BsArrowUpRight className='text-white text-3xl group-hover:text-accent' />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{project.live ? 'Live Project' : 'GitHub Repository'}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {project.github && (
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                          <BsGithub className='text-white text-3xl group-hover:text-accent' />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>GitHub Repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className='w-full xl:w-[50%] relative items-center justify-center h-[200px] mt-auto mb-auto'>
            <Slider {...settings} className='h-full'>
              {project.image.map((item, index) => (
                <div key={index} className='h-[460px]'>
                  <div className="">
                    <div className='relative w-full h-full'>
                      <Image
                        src={item.img}
                        alt={`Project ${project.title} Image ${index + 1}`}
                        width={500}
                        height={500}
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      
      </div>
    </motion.section>
  );
};

export default Work;
