import React from "react";
import Img1 from "../../assets//Images/VanSeatSmile.png";
import Img2 from "../../assets/Images/VanWaterSit.png";
import Img3 from "../../assets/Images/VanSeatWhite.png";
import { motion } from "framer-motion";
import ServicesCard from "./ServicesCard";

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
//   const item = {
//     hidden: { y: 20, opacity: 0 },
//     visible: { y: 0, opacity: 1 },
//   };
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
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
        </div>
      </div>
    </>
  );
};

export default Services;
