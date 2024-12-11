import React from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <div className='section' id='contact'>
      <div className='text-center max-w-[600px] mx-auto'>
        <h2 className='font-primary md:text-5xl mb-5'>Subscribe to our Newsletter</h2>
        <p className='text:sm leading-7 text-gray'>
         Keep in touch with us today and get updated on every of our new events carefully created jsut for you.
         We continually roll out new events and updates on best practices, important advice and information that improves your well being.
        </p>
        <motion.form initial={{scale: 0}} whileInView={{scale: 1}} transition={{duration: 0.3}} className='mt-5' action="">
          <input type="text" placeholder='Enter your email address' className='sm:p-3 p-2 outline-none text-sm shadow-md sm:w-72 w-60'/>
          <button className='text-sm text-white bg-Teal sm:p-3 p-2 shadow-md font-bold'>Subscribe</button>
        </motion.form>
      </div>
    </div>
  )
}

export default Contact
