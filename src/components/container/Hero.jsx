import React from "react";
import hero from "../../assets/Images/VanBubbles.png";
import { Link } from "react-router-dom";
import './Hero.css'
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
    // <div className="section" id="home">
    //   <div className="flex items-center justify-center gap-8 mt-40 sm:mt-40">
    //     <div>
    //       <div className="font-bold text-xl text-white mb-10 text-center">
    //         {" "}
    //         Take a deep dive into your inner realms with me and
    //         change your life
    //       </div>
    //       <div className="font-primary flex items-center text-center text-white justify-center sm:text-[2.5rem] text-[1.825rem] font-bold md:mb-6">
    //         I'm here to courageously deep dive with you to look at your
    //         subconscious patterns so you can live the life of your dreams
    //       </div>
    //       <p className="text-center text-lg leading-7 text-white mb-8">
    //         Together, we will face your fears and blockages in your time and create a vision for your life that truly lights you up.
    //       </p>
    //       <div className="flex items-center justify-center mt-6 mb-8">
    //         <Link to={`/care`}>
    //           <button className="md:w-60 px-6 py-3 font-bold text-white bg-Teal rounded-lg mr-4 text-sm">
    //             Get Started
    //           </button>
    //         </Link>
    //         <Link to={`/about`}>
    //           <button className="md:w-60 px-6 py-3 font-bold border border-solid bg-yellow border-gray rounded-lg text-sm">
    //             About Me
    //           </button>
    //         </Link>
    //       </div>
    //     </div>
    //     <div className="border-[3px] border-solid border-Teal rounded-lg">
    //       <img className="h-[500px]" src={hero} alt="" />
    //     </div>
    //   </div>
    //   <div className="mt-3">
    //     <p className="text-center text-xl text-white">
    //       We Offer you the best services using{" "}
    //       <span className="text-white">
    //         leading industry best practices and standards
    //       </span>{" "}
    //     </p>
    //   </div>
    //   <motion.div 
    //   variants={container}
    //   initial= "hidden"
    //   whileInView="visible"
    //   className='flex items-center justify-center flex-wrap gap-8 p-2'>
    //     {logos.map((logo,index) => (
    //       <motion.div 
    //       variants={item}
    //       className='w-28' key={index}>
    //         <img src={logo} alt="" className='w-full object-cover'/>
    //       </motion.div>
    //     ))}
    //   </motion.div>
    // </div>
    <div>
      <main className=" mx-auto bg-white overflow-hidden">
        <section className="hero h-[640px] md:h-[940px] bg-fixed md:rounded-bl-[290px] relative ">
        <div className="container mx-auto h-full flex items-center justify-center sm:justify-start">
          {/* text */}
          <div className="hero__text w-[567px] flex flex-col items-center text-center md:text-left sm:items-start mt-10">
            <h1 className="h1 text-white mt-10 text-5xl font-primary">I'm here to courageously deep dive with you to look at your subconscious patterns so you can live the life of your dreams</h1>
            <p className="text-white mt-8">Together, we will face your fears and blockages in your time and create a vision for your life that truly lights you up</p>
          </div>
        </div>
        </section>
        
      </main>
    </div>
  );
};

export default Hero;
