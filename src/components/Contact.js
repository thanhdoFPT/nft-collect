import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import Images from '../assets/4.png'
const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [check, setCheck] = useState(false)
  const [website, setWebsite] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const validateWebsite = (e) => {
       e.preventDefault()
    const trimmedWebsite = website.trim();
    if (trimmedWebsite === '') {
      setErrorMessage('please enter your website....');
    } else if (!trimmedWebsite.includes('.')) {
      setErrorMessage('Invalid website address...');
    }
     
    else {
      setErrorMessage('');
      setIsLoading(true);
      setTimeout(() => {
        
        setIsLoading(false);
        setCheck(!check);
      }, 2000);
    }
  };
  return <section className='py-16 lg:section' id='contact'>
    <div className='container mx-auto'>
      <h2 className='text-2xl tracking-wider text-center text-gradient'>How does Cafey Detector works?</h2>
      <p className='pt-10 pb-5 pl-2 tracking-wider text-left text-md text-gradient '>
          1. This too will check the validity of the website from the database that the developer has input.
      </p>
      <p className='pb-5 pl-2 tracking-wider text-left text-md text-gradient '>
          2. A "LEGIT" warning will appear if the URL is good to join.
      </p>
      <p className='pb-5 pl-2 tracking-wider text-left text-md text-gradient '>
         3. An "DANGER" warning will appear if this site has weird database.
      </p>
      <p className='pb-5 pl-2 tracking-wider text-left text-md text-gradient '>
         We are still working on improving this tool as much as we can. Sometimes it will crash because of conflict with our metadata.
      </p>
      
      <div className='relative flex items-center justify-center'>
           <form  className='block mx-auto mt-5'> 
        <input value={website}
        onChange={(e) => setWebsite(e.target.value)} className='p-2 cursor-pointer block	  pl-5 transition-all text-gradient sm:w-[200px]  lg:w-[600px] bg-transparent border rounded-xl border-slate-500 ' placeholder='Enter website check ....'/>
           <p className="pt-2 pl-5 text-xl text-red-500">{errorMessage}</p>
                <button onClick={validateWebsite} className='block mx-auto mt-5 btn btn-lg'>
              {isLoading ? (
                <motion.span
                  className='flex items-center'
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                >
                  <svg
                    className='w-6 h-6 mr-2'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <circle
                      className='opacity-25'
                      cx='12'
                      cy='12'
                      r='10'
                      stroke='currentColor'
                      strokeWidth='4'
                    ></circle>
                    <path
                      className='opacity-75'
                      fill='currentColor'
                      d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l2-2.647z'
                    ></path>
                  </svg>
                  
                </motion.span>
              ) : (
                'CHECK WEBSITE'
              )}
            </button>
        </form>
        {check && <div  className='w-[310px] h-[330px] left-[37%] top-[180px] absolute bg-white bg-opacity-10	  rounded-3xl shadow-2xl'> 
          <img className='w-[100px] h-[100px] block mx-auto mt-5  rounded-full' src={ Images} />
          <p className='p-1 pt-5 text-sm tracking-wider text-center text-gradient'>This url is Listed in our database </p>
          <p className='p-1 pt-1 text-sm tracking-wider text-center text-gradient'>This is means that the developer </p>
          <p className='p-1 pt-1 pl-2 text-sm tracking-wider text-center text-gradient'>of  the  project has registered </p>
          <p className='p-1 pt-1 pl-2 text-sm tracking-wider text-center text-gradient'>Their Link to this system </p>
                     {/* <br/> of  the  project has registered their Link to this system */}
          <button onClick={()=>setCheck(!check)} className='block mx-auto mt-5 btn btn-lg'> NICE !</button>
          <p > </p>
          </div>}
        </div>
    </div>
  </section>;
};

export default Contact;

