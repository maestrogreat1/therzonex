import React, { useRef } from 'react';
import Img1 from "../../assets//Images/VanSeatSmiles.png";
import Img2 from "../../assets/Images/VanWaterSits.png";
import Img3 from "../../assets/Images/VanSeatWhites.png";
import { motion } from "framer-motion";
import ServicesCard from "./ServicesCard";
import Form from "../container/Form";
import relive from "../../assets/Images/bls.png";
import emailjs from '@emailjs/browser';
import toast from "react-hot-toast";

const ServicesData = [
  {
    img: Img1,
    title: "Binge Plan",
    description: "This Simply consists of five in-depth sessions with me.",
    price: 490,
    type: "Personal",
  },
  {
    img: Img2,
    title: "Flex Plan",
    description: "This Simply consists of ten in-depth sessions with me.",
    price: 900,
    type: "Personal",
  },
  {
    img: Img3,
    title: "Maxi Plan",
    description:
      "This Simply consists of twenty-five in-depth sessions with me.",
    price: 2200,
    type: "Personal",
  },
];

const Services = ({ handleOrderPopup }) => {
  const container = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

      const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_52hjxrk', 'template_vg9nsr6', form.current, {
        publicKey: 'V1QdyOpzFR8ULIUb5',
      })
      .then(
        () => {
          console.log('Message sent successfully!');
          toast.success("Message sent successfully!");
          e.target.reset();
          
        },
        (error) => {
          console.log('Please try again...', error.text);
          toast.error('Please try again...')
        },
      );
  };
//   const item = {
//     hidden: { y: 20, opacity: 0 },
//     visible: { y: 0, opacity: 1 },
//   };
  return (
    <>
    
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
      
      {/* <Form /> */}
        <div>
          <div className=" section my-8 border-l-8 border-Teal/50 py-2 pl-2 font-bold sm:text-[1.875rem] text-[1.5rem] mb-5 place-items-center align-middle justify-center">
            Sessions Tailored Just For You
          </div>
          <div className="grid grid-cols-1 gap-4">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              className="flex items-center justify-center flex-wrap gap-8 p-2"
            >
              {ServicesData.map((item, index) => (
                <ServicesCard handleOrderPopup={handleOrderPopup} key={index} {...item}/>
              ))}  
            </motion.div>
          </div>
          <div className="section" id="contact">
        <div className="grid md:grid-cols-2 gap-8 place-items-center">
          <div className="text-center max-w-[600px] mx-auto">
            <div className="sm:text-3xl text-2xl font-bold mb-5">
              Book a session
            </div>
            <p className="text:sm leading-7 text-gray">
              We've have carefully and professionally selected plans, that help
              you reach your required goals in record time. Our aim is to help
              you understand your subconscious patterns and guarantee you a life
              of your dreams.
            </p>
          </div>
          <motion.form
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            className="mt-5 border py-5 px-5 border-green-200 shadow"
            action=""
            ref={form} 
            onSubmit={sendEmail}
          >
            <div className="mt-4">
              <input
                type="text"
                placeholder="Name"
                name='name'
                required
                className="w-full rounded border border-green-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
              />
              <input
                type="email"
                placeholder="email"
                name='email'
                required
                className="w-full rounded border border-green-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
              />
              {/* <label className="text-sm text-gray text leading-7 mr-4" htmlFor="text">Pick a Question</label>
              <select required className="rounded border-[1px] shadow border-green-300 bg-white top-[50px] w-[300px]" name="" id="text">
                <option className="cursor-pointer hover:bg-Solitude px-4" value="text">What bothers you today?</option>
                <option className="cursor-pointer hover:bg-Solitude px-4" value="text">What are your needs?</option>
                <option className="cursor-pointer hover:bg-Solitude px-4" value="text">What brings you peace?</option>
                <option className="cursor-pointer hover:bg-Solitude px-4" value="text">What inspires you?</option>
                <option className="cursor-pointer hover:bg-Solitude px-4" value="text">What are you here?</option>
              </select> */}

              <label
                className="text-xl text-gray text leading-7 mr-4"
                htmlFor="text"
              >
                Which of the plans interest you?
              </label>
              <textarea
                required
                placeholder="Tell us your answer"
                name="message"
                id=""
                cols="30"
                rows="3"
                className="w-full rounded border border-green-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mt-4 mb-4"
              ></textarea>

              {/* <label
                className="text-sm text-gray text leading-7 mr-4"
                htmlFor="text"
              >
                What are your needs?
              </label>
              <textarea
                required
                placeholder="Tell us your answer"
                name="message"
                id=""
                cols="30"
                rows="3"
                className="w-full rounded border border-green-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mt-4 mb-4"
              ></textarea>

              <label
                className="text-sm text-gray text leading-7 mr-4"
                htmlFor="text"
              >
                What brings you peace?
              </label>
              <textarea
                required
                placeholder="Tell us your answer"
                name="message"
                id=""
                cols="30"
                rows="3"
                className="w-full rounded border border-green-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mt-4 mb-4"
              ></textarea>

              <label
                className="text-sm text-gray text leading-7 mr-4"
                htmlFor="text"
              >
                What inspires you?
              </label>
              <textarea
                required
                placeholder="Tell us your answer"
                name="message"
                id=""
                cols="30"
                rows="3"
                className="w-full rounded border border-green-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mt-4 mb-4"
              ></textarea>

              <label
                className="text-sm text-gray text leading-7 mr-4"
                htmlFor="text"
              >
                What are you here?
              </label>
              <textarea
                required
                placeholder="Tell us your answer"
                name="message"
                id=""
                cols="30"
                rows="3"
                className="w-full rounded border border-green-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mt-4 mb-4"
              ></textarea> */}

              <div>
                <div className="flex justify-center">
                  <button className="bg-Teal hover:scale-105 duration-200 text-black py-1 px-4 rounded-full  mt-4">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </motion.form>
        </div>
      </div>
        </div>
      </div>
    </>
  );
};

export default Services;
