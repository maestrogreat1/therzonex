import React from 'react'
import hero from "../../assets/heronow.png";
// import { logos } from '../../Data';
// import { motion } from 'framer-motion';

const Hero = ({handleOrderPopup}) => {
  // const container = {
  //   hidden: {
  //     opacity: 0,
  //     scale: 0,
  //   },
  //   visible: {
  //     opacity: 1,
  //     scale: 1,
  //     transition: {
  //       delayChildren: 0.3,
  //       staggerChildren: 0.1,
  //     },
  //   },
  // };
  // const item = {
  //   hidden: { y: 20, opacity: 0 },
  //   visible: { y: 0, opacity: 1 },
  // };
  return (
    <div className='section' id='home'>
      <div className='md:flex items-center justify-center'>
        <div>
          <div className='font-bold text-sm text-Teal mb-4'>
            {" "}
            Take a deep dive into <br /> your inner realms with me <br /> and change your life
          </div>
          <div className='sm:text-[2.5rem] text-[1.825rem] font-bold'>
            I'm Vanessa <br /> so happy <br /> you are here
          </div>
          <p className='text-sm leading-7 text-gray max-w-sm'>I'm here to courageously deep dive with you to heal your subconscious wounds, enabling you to live life on your own terms and positively influence others. <br /> What lights me up? Helping people overcome their fears and blockages and choose what truly excites them!</p>
          <div className='mt-6'>
            <button className='px-6 py-3 font-bold text-white bg-Teal rounded-lg mr-4 text-sm'>Get Started</button>
            <button className='px-6 py-3 font-bold border border-solid bg-yellow border-gray rounded-lg text-sm'>About Me</button>
          </div>
        </div>
        <div className='md:w-[60%]'>
          <img src={hero} alt="" />
        </div>
      </div>
      <div className='mt-5'>
        <p className='text-center text-xl'>We Offer you the best services using <span className='text-Teal'>leading industry experts and professionals</span> </p>
      </div>
      {/* <motion.div 
      variants={container}
      initial= "hidden"
      whileInView="visible"
      className='flex items-center justify-center flex-wrap gap-8 p-2'>
        {logos.map((logo,index) => (
          <motion.div 
          variants={item}
          className='w-28' key={index}>
            <img src={logo} alt="" className='w-full object-cover'/>
          </motion.div>
        ))}
      </motion.div> */}
    </div>
  )
}

export default Hero
