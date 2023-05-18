import React, { useState } from 'react';
import Logo from '../assets/logo.svg'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
const Header = () => {
  const [connect,setConnect] = useState(false)
  return <div className='py-5 mt-5'>
    <div className='container relative mx-auto'>
      <div className='flex items-center justify-between'>
         <motion.div variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='flex items-center mx-auto mb-2 max-w-max gap-x-6 lg:mx-0'>
              <a href='#' className='text-3xl text-gradient btn-link'> Cafey NFT</a>
            </motion.div>
      
      </div>
    </div>

  </div>;
};

export default Header;
