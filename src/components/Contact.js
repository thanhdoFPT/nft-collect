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
    } else {
      setErrorMessage('');
      setCheck(!check)
      // Xử lý logic tiếp theo khi website hợp lệ
    }
  };
  const handelCheck =(e) => {
   
  }
  return <section className='py-16 lg:section' id='contact'>
    <div className='container mx-auto'>
           <h2 className='pb-5 text-xl tracking-wider text-center text-gradient '> We have discovered a new molecule that can protect us from scams <br/> this Cafey NFT genuine link checker has a function to validate websites.</h2>
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
