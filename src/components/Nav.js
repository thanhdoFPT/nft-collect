import React from 'react';
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase, BsChatSquare } from 'react-icons/bs';
import { Link } from 'react-scroll'
import { FaGithub, FaFacebook, FaDribbble } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const Nav = () => {
  return <nav className='fixed z-50 w-full overflow-hidden bottom-2 lg:bottom-8'>
    <div className='container mx-auto'>
      <div className='w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[660px] mx-auto py-2 px-5 flex justify-between text-2xl text-white/50'>
        <Link to='home'
          activeClass='active'
          smooth={true}
          spy={true}
          offset={-200}
          className='cursor-pointer w-[70px] h-[60px] hover:color-[#42A6E3] font bold flex items-center justify-center'>
          Home
        </Link>

        <Link to='about'
          activeClass='active'
          smooth={true}
          spy={true}
          className='cursor-pointer w-[70px] h-[60px] font bold hover:color-[#42A6E3] flex items-center justify-center'>
          About
        </Link>

        {/* <Link to='services'
          activeClass='active'
          smooth={true}
          spy={true}
          className='cursor-pointer w-[150px] h-[60px] font bold flex items-center justify-center'>
          How to buy
        </Link> */}

        <Link to='work'
          activeClass='active'
          smooth={true}
          spy={true}
          className='cursor-pointer w-[160px] h-[60px] font bold hover:color-[#42A6E3] flex items-center justify-center'>
          Roadmap
        </Link>
        <Link to='contact'
          activeClass='active'
          smooth={true}
          spy={true}
          className='cursor-pointer w-[190px] h-[66px] font bold hover:color-[#42A6E3] flex items-center justify-center'>
          Detector tool
        </Link>
      </div>
    </div>
  </nav>;
};

export default Nav;
