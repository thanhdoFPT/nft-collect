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

        <button onClick={() => setConnect(!connect)} className='btn btn-sm'>CONNECT</button>
        {connect && (
          <div className='w-[300px] h-[200px] absolute right-52  justify-items-start items-center top-10 bg-white bg-opacity-70 rounded-xl shadow-2xl'>
            <div className='p-2 mt-2 text-3xl text-center border-2 shadow-2xl text-gradient btn-link rounded-xl'>METAMASK</div>
            <div className='p-3 my-3 text-center uppercase border-2 text-gradient btn-link rounded-xl'>WalletConnect (Beta)</div>
            <div className='p-3 text-center uppercase border-2 text-gradient btn-link rounded-xl'>Coinbase Wallet (Beta)</div>

          </div>
        )}
      </div>
    </div>

  </div>;
};

export default Header;
