import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants'
import img1 from '../assets/hi/cafeybanner1.jpg'
import img2 from '../assets/hi/bg3.jpg'
import img3 from '../assets/img3.png'
import img4 from '../assets/hi/cafey.jpg'
import img5 from '../assets/img5.png'
const Work = () => {
  return <section className='mb-32 section' id='work'>
    <div className='container mx-auto mt-32'>
      <div className='flex flex-col lg:flex-row gap-x-10'>
        <div className='flex flex-col flex-1 mb-10 gap-y-12 lg:mb-0'>
          <motion.div variants={fadeIn('left', 0.3)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.3 }}>
            <h2 className='pl-3 leading-tight h2 text-accent'> Roadmap  </h2>
            <p className='flex flex-row items-center justify-center px-4 pt-2 font-mono tracking-wider uppercase duration-200 rounded first::pt-0 text-2xs font-500 padding-huge'>
          Our thesis at Cafey  is that Web3 represents a new era of decentralized connectivity, where we can bring together the digital and physical worlds, and connect people from all walks of life to a decentralized web of opportunities. </p>
          </motion.div>

          <motion.div variants={fadeIn('left', 0.3)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className='relative overflow-hidden border-2 group border-orange/50 rounded-xl' >
            <div className='absolute z-40 w-full h-full transition-all duration-300 group-hover:bg-black/70'>

            </div>
            <img className='transition-all duration-500 group-hover:scale-125' src={img1} alt='s' />

            <div className='absolute z-50 transition-all duration-500 -bottom-full left-12 group-hover:bottom-24'>
              <span  className=' font-medium text-white'>
                    - Finish Coffeeswap (Aggregator DEX) <br/>
                    - Finish Sui Contract Scan <br/>
                    - Launching project consulting services, building products <br/>
                </span>
            </div>

            <div className='absolute z-50 transition-all duration-700 -top-full left-12 group-hover:top-8'>
                  <button className='uppercase btn btn-lg'>  07/2023</button>

            </div>
          </motion.div>
        </div>


        {/*  */}
        <motion.div variants={fadeIn('right', 0.3)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className='flex flex-col flex-1 mt-10 gap-y-10'>

          <div className='relative overflow-hidden border-2 group border-orange/50 rounded-xl' >
            <div className='absolute z-40 w-full h-full transition-all duration-300 group-hover:bg-black/70'>

            </div>
            <img className='transition-all duration-500 group-hover:scale-125' src={img2} alt='s' />

            <div className='absolute z-50 transition-all duration-500 -bottom-full left-12 group-hover:bottom-2'>
              <span  className='font-medium text-white'> 
                  - Partners with top NFT collections on Sui ecosystem <br/>
                  - Do marketing (Booking influencer, top news twitter)<br/>
                  - Launch Cafey NFT Sui <br/>
                  - Launch $CAFEY  <br/>
                  - Finish Dapp <br/>
                  - Launch Sui New Tokens deploy tool <br/>
                
                </span>
            </div>

            <div className='absolute z-50 transition-all duration-700 -top-full left-12 group-hover:top-8'>

                            <button className='uppercase btn btn-lg'> Q1- 06/2023</button>

            </div>
          </div>
          {/*  */}


          <motion.div variants={fadeIn('right', 0.3)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className='relative mt-8 overflow-hidden border-2 group border-orange/50 rounded-xl' >
            <div className='absolute z-40 w-full h-full transition-all duration-300 group-hover:bg-black/70'>

            </div>
            <img className='transition-all duration-500 group-hover:scale-125' src={img4} alt='s' />

            <div className='absolute z-50 transition-all duration-500 -bottom-full left-12 group-hover:bottom-24'>
              <span  className='font-medium text-white'> 
                  - Work to list $CAFEY on tier 3 CEX like MEXC, Gate.io <br/>
                  - Expand cooperation with launchpad on different blockchains to deploy consulting services <br/>
                </span>
            </div>

            <div className='absolute z-50 transition-all duration-700 -top-full left-12 group-hover:top-8'>
                            <button className='btn btn-lg uppercase'>  Q3/2023 </button>
            </div>
          </motion.div>

          {/*  */}



        </motion.div>
      </div>
    </div>
  </section>;
};

export default Work;
