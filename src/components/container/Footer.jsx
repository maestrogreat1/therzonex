import React from "react";
import {
  BsInstagram,
  // BsFacebook,
  // BsTwitter,
  // BsPinterest,
} from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa"
import { motion } from "framer-motion";
import logo from '../../assets/Images/potlog.png'

const Footer = () => {
  return (
    <motion.div
      initial={{ height: 0 }}
      whileInView={{ height: "auto" }}
      transition={{ duration: 1 }}
      className="bg-Teal p-10"
    >
      <div className="grid md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-3 grid-cols-1 place-items-start gap-8 text-white">
        <div>
          {/* <div className="font-bold mb-6">Get Started</div>
          <p className="text-sm leading-7">
            Take advantage of our carefully and professionally designed programs,
            put together wit the sole aim of making your experience with us an amazing
            journey, filled with fulfilling moments, satisfying solutions and beautiful
            story.
          </p> */}
          <div className="text-xl text-Teal uppercase tracking-wide font-bold">
              <img className="md: h-full sm:h-20 w-16" src={logo} alt="" />
            </div>
        </div>
        <div>
          <div className="font-bold mb-6">Services</div>
          <div className="flex flex-col gap-4">
            <a href="/care" className="text-sm hover:underline">
              1:1 sessions
            </a>
            <a href="/contact" className="text-sm hover:underline">
              Online Consultation
            </a>
            {/* <a href="" className="text-sm hover:underline">
              Personalized Therapy
            </a> */}
          </div>
        </div>
        <div>
          <div className="font-bold mb-6">Company</div>
          <div className="flex flex-col gap-4">
            <a href="" className="text-sm hover:underline">
              Privacy Policy
            </a>
            {/* <a href="" className="text-sm hover:underline">
              Sitemap
            </a> */}
            <a href="" className="text-sm hover:underline">
              Terms & Conditions
            </a>
          </div>
        </div>
        <div>
          <div className="font-bold mb-6">Follow Us</div>
          <div className="text-sm mb-4">vanessa.stanzel@googlemail.com</div>
          <div className="text-sm">+441234567890</div>
          <div className="flex gap-4 mt-4">
            {/* <a href="" className="hover:scale-110 text-xl">
              <BsFacebook />
            </a> */}
            <a href="https://www.instagram.com/vanessa_stanzel?igsh=NzI0aTZnNXVyeHY5" className="hover:scale-110 text-xl">
              <BsInstagram />
            </a>
            <a href="" className="hover:scale-110 text-xl">
            <FaTelegramPlane />
            </a>
            {/* <a href="" className="hover:scale-110 text-xl">
              <BsPinterest />
            </a> */}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
