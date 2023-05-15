import React from 'react';
import Images from '../assets/4.png'
import { FaGithub, FaFacebook, FaDribbble } from 'react-icons/fa'
import { SlSocialTwitter } from 'react-icons/sl'
import { BsDiscord } from 'react-icons/bs'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
const Banner = () => {
  return <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
    <div className='container mx-auto'>
      <div className='flex flex-col justify-between lg:flex-row lg:items-center lg:gap-x-12'>
        <div>
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1 variants={fadeIn('up', 0.4)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='text-[55px] font-bold leading-[0.8] lg:text-[110px] mb-5'>
              
            </motion.h1>
            <motion.div variants={fadeIn('up', 0.4)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='mb-6 text-[36px lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
            
            </motion.div>
            <motion.p variants={fadeIn('up', 0.6)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='max-w-lg mx-auto mt-3 mb-8 font-mono tracking-widest uppercase opacity-50 text-start lg:mx-0 text-3xs'>
              Bringing people together and developing new, cutting-edge goods and opportunities are the main goals of Cafey Sui NFT, a Web 3.0 company.
              By offering practical advantages, IRL events, merchandise, and a showroom where you can see our technologies in action, our objective is to make it easier for Web2 consumers to move to the decentralized Web3 area.

            </motion.p>
            <motion.div variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='flex items-center mx-auto mb-12 max-w-max gap-x-6 lg:mx-0'>
              <button className='btn btn-lg'> Buy Now</button>
              <a href='#' className='text-gradient btn-link'> Cafey NFT</a>
            </motion.div>
            <motion.div variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <a style={{ fontSize: 40, paddingRight: 20 }} href=''>
                <BsDiscord />
              </a>

              <a style={{ fontSize: 40, paddingRight: 20 }} href='https://twitter.com/cafey_nft_sui'>
                <SlSocialTwitter />
              </a>
              <a style={{ fontSize: 40 }} href='https://cafeynftsui.gitbook.io/1/introduction/welcome-to-cafey-nft-sui'>
                <i className="fa fa-envelope"></i>
              </a>
            </motion.div>
          </div>
        </div>

        <motion.div variants={fadeIn('up', 0.6)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[420px]'>
          <img  className='shadow-2xl imgdemo rounded-full w-[320px]  ' src={Images} alt='' />
        </motion.div>
      </div>
    </div>
  </section>;
};

export default Banner;
