import React from "react";
import { categories } from "../../../Data";
import { courses } from "../../../Data";
import Categories from "./Categories";
import Coach from "./Coach";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Coachings = () => {
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
        staggerChildren: 0.2,
      },
    },
  };
  return (
    <div className="section" id="coachings">
      <div className="text-center">
        <div className="sm:text-3xl text-2xl font-bold mb-1">
          1:1 Inner Dive <span className="text-Teal">Deep</span>
        </div>
      </div>
      <div className="text-xl font-bold mt-10 ">
        Does any of these ring true to you?
      </div>
      <div className="mt-12 overflow-x-hidden w-full relative">
        <div className="flex gap-8 md:w-full sm:w-[170%] xs:w-[340%] w-[480%] animate-slide">
          {courses.map((course) => {
            return <Coach key={course.id} {...course} />;
          })}
        </div>

        <p className="text-sm text-gray leading-7 max-w-[700px] mx-auto mt-12">
          <p className="font-bold text-sm text-Teal mb-4 mt-10 mx-auto items-center justify-items-center">
            {" "}
            What are the guaranteed safety measures
            <br /> for your inner Deep Dive?
          </p>
          <span className="font-bold text-sm">Empathy:</span> Seeking help is a
          sign of strength. Personal growth can be challenging, but you want to
          face it alone. I provide a safe space to process emotions at your own
          pace. <br /> <br />
          <Link to={`/deep`}>
            <button className="py-3 px-6 text-sm border border-solid bg-yellow border-gray rounded-lg">
              Learn More
            </button>
          </Link>
        </p>
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        className="grid md:grid-cols-4 sm:grid-cols-2 mt-12 gap-8"
      >
        {categories.map((category) => {
          return <Categories key={category.id} {...category} />;
        })}
      </motion.div>
    </div>
  );
};

export default Coachings;
