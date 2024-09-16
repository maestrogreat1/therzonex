import React from "react";
import hero from "../../assets/Images/VanBubbles.png";
import { Link } from "react-router-dom";

// import { logos } from '../../Data';
// import { motion } from 'framer-motion';

const Hero = ({ handleOrderPopup }) => {
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
    <div className="section" id="home">
      <div className="flex items-center justify-center gap-8 md:mt-12">
        <div>
          <div className="font-bold text-xl text-white mb-10 text-center">
            {" "}
            Take a deep dive into your inner realms with me and
            change your life
          </div>
          <div className="flex items-center text-center text-white justify-center sm:text-[2.5rem] text-[1.825rem] font-bold md:mb-6">
            I'm Vanessa so happy you are here
          </div>
          <p className="text-center text-lg leading-7 text-white mb-8">
            I'm here to courageously deep dive with you to heal your
            subconscious wounds, enabling you to live life on your own terms and
            positively influence others. What lights me up? Helping
            people overcome their fears and blockages and choose what truly
            excites them!
          </p>
          <div className="flex items-center justify-center mt-6 mb-8">
            <Link to={`/care`}>
              <button className="md:w-60 px-6 py-3 font-bold text-white bg-Teal rounded-lg mr-4 text-sm">
                Get Started
              </button>
            </Link>
            <Link to={`/about`}>
              <button className="md:w-60 px-6 py-3 font-bold border border-solid bg-yellow border-gray rounded-lg text-sm">
                About Me
              </button>
            </Link>
          </div>
        </div>
        {/* <div className="border-[3px] border-solid border-Teal rounded-lg">
          <img className="h-[500px]" src={hero} alt="" />
        </div> */}
      </div>
      <div className="mt-3">
        <p className="text-center text-xl text-white">
          We Offer you the best services using{" "}
          <span className="text-white">
            leading industry best practices and standards
          </span>{" "}
        </p>
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
  );
};

export default Hero;
