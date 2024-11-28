import React from "react";
import { motion } from "framer-motion";

const ContactMain = () => {
  return (
    <>
      <div className="section" id="contact">
        <div className="grid md:grid-cols-2 gap-8 place-items-center">
          <div className="text-center max-w-[600px] mx-auto">
            <div className="sm:text-3xl text-2xl font-bold mb-5">
              Get in touch
            </div>
            <p className="text:sm leading-7 text-gray">
              We've have carefully and professionally selected plans,
              that help you reach your required goals in record time.
              Our aim is to help you understand your subconscious patterns
              and guarantee you a life of your dreams.
            </p>
          </div>
          <motion.form
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            className="mt-5 border py-5 px-5 border-green-200 shadow"
            action=""
          >
            <div className="mt-4">
              <input
                type="text"
                placeholder="Name"
                required
                className="w-full rounded border border-green-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
              />
              <input
                type="email"
                placeholder="email"
                required
                className="w-full rounded border border-green-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
              />
                <label className="text-sm text-gray text leading-7 mr-4" htmlFor="text">Pick a Question</label>
              <select required className="rounded border-[1px] shadow border-green-300 bg-white top-[50px] w-[300px]" name="" id="text">
                <option className="cursor-pointer hover:bg-Solitude px-4" value="text">What bothers you today?</option>
                <option className="cursor-pointer hover:bg-Solitude px-4" value="text">What are your needs?</option>
                <option className="cursor-pointer hover:bg-Solitude px-4" value="text">What brings you peace?</option>
                <option className="cursor-pointer hover:bg-Solitude px-4" value="text">What inspires you?</option>
                <option className="cursor-pointer hover:bg-Solitude px-4" value="text">What are you here?</option>
              </select>

              <textarea 
              required
              placeholder="Tell us your answer"
              name="message" id="" cols="30" rows="10"
              className="w-full rounded border border-green-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mt-4 mb-4"
              ></textarea>
              
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
    </>
  );
};

export default ContactMain;
