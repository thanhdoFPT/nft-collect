import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import aboutNew from '../assets/IMG_4765.JPG'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  })
  return <section className='mt-10 section' id='about' ref={ref} >
    <div className='container mx-auto shadow-2xl'>
      <div className='relative flex flex-col h-screen gap-x-10 lg:flex-row lg:items-center lg:gap-y-10 lg:gap-y-0'>
        <motion.div variants={fadeIn('right', 0.3)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className='w-2/3 bg-contain bg-no-repeat h-[640px] bg-top lg:mt-20' >
          <p className='mb-5 ml-2 text-4xl md:text-6xl xl:text-6xl text-gradient btn-link'>CAFEY NFT SUI</p>
          <p className='mb-10 ml-2 text-sm md:text-xl xl:text-2xl text-gradient btn-link'>The 'Cafey NFT' Collection</p>
          <img className=' h-2/3 rounded-2xl w-full object-cover' src={aboutNew} />
        </motion.div>

        <motion.div variants={fadeIn('left', 0.3)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className='flex-1 relative'>
          <div className='absolute mt-5 -top-[6.5rem] right-5'>
            <p className='md:text-lg xl:text-xl text-gradient btn-link'>Collection Size</p>
            <h2 className='text-4xl h2 text-accent md:text-5xl xl:text-6xl'>
                4.444
            </h2>
          </div>
          <h3 className='mt-20   font-mono tracking-wider pt-0.5 first::pt-0  uppercase text-2xs font-500 padding-huge duration-200 items-center px-4 rounded flex justify-center flex-row '> 
            About the Collection
            Our top aim is to unite people, building a community where everyone may prosper in a decentralized society.  </h3>
          <div className='mb-12 gap-x-6 lg:gap-x-10 mt-15'>
            <div>
              
              <div className='font-primary text-sm tracking-[2px]'>
               <p className='my-10 mb-5 ml-2 text-2xl md:text-xl xl:text-xl text-gradient btn-link'>Buy a CAFEY SUI NFT</p> 
              </div>
            </div>
                     <motion.div variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='flex items-center mx-auto mb-12 max-w-max gap-x-6 lg:mx-0'>
             
            </motion.div>
            <div>
              <div className='font-primary text-sm tracking-[2px]'>
              </div>
            </div>
          </div>
        </motion.div>
       
      </div>

    </div>
  </section>;
};

export default About;
