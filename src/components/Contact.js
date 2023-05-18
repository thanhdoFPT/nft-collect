import React, { useState } from 'react';
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import Images from '../assets/4.png'

const Contact = () => {
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
      setCheck(!check)
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
          <button onClick={validateWebsite} className='block mx-auto mt-5 btn btn-lg'> CHECK WEBSITE</button>
        </form>
        {check && <div  className='w-[290px] h-[330px] left-[37%] top-[180px] absolute bg-white bg-opacity-10	  rounded-3xl shadow-2xl'> 
          <img className='w-[100px] h-[100px] block mx-auto mt-5  rounded-full' src={ Images} />
                <p className='p-1 pt-5 text-sm tracking-wider text-center text-gradient'>This url is Listed in our database<br/> This is means that the developer <br/> of  the  project has registered their Link to this system</p>
          <button onClick={()=>setCheck(!check)} className='block mx-auto mt-7 btn btn-lg'> NICE !</button>
          <p > </p>
          </div>}
        </div>
    </div>
  </section>;
};

export default Contact;
