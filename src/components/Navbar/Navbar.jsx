import React, { useEffect, useState } from "react";
// import { navLinks } from "../../Data";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import MobileNavLinks from "./MobileNavLinks";
// import NavLink from "./NavLink";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import logo from "../../assets/Images/thelog.png"




export const NavbarLinks = [
    {
        // id: 1,
        // href: "home",
        // link: "Home",
        name: "Home",
        link: "/",
    },
    {
        // id: 2,
        // href: "about",
        // link: "About Me",
        name: "About",
        link: "/about",
    },
    {
        // id: 3,
        // href: "coachings",
        // link: "Inner Deep Dive",
        name: "Inner Deep Dive",
        link: "/deep",
    },
    {
        // id: 4,
        // href: "group",
        // link: "Sessions",
        name: "Sessions",
        link: "/care",
    },
    {
        // id: 5,
        // href: "contact",
        // link: "Contact",
        name: "Contact",
        link: "/contact",
    },
];


const Navbar = ({ handleOrderPopup }) => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(null);
  useEffect(() => {
    const scrollActive = () => {
      setActive(window.scrollY > 20);
    };
    window.addEventListener("scroll", scrollActive);
    return () => window.removeEventListener("scroll", scrollActive);
  }, [active]);
  return (
    <div
      className={`${
        active ? "shadow-lg bg-Teal mb-10" : ""
      } fixed w-full top-0 left-0 z-20`}
    >
      <div>
        <div
          className={`${
            active ? "py-2 transition-all duration-300" : "py-4"
          } container mx-auto flex items-center justify-between px-2`}
        >
          {/* Mobile Hamburger icon */}
          <div className="flex items-center gap-4">
            <HiMenuAlt1
              className="text-3xl sm:hidden cursor-pointer"
              onClick={() => setToggle(true)}
            />
            <div className="text-xl text-Teal uppercase tracking-wide font-bold">
              <img className="h-20" src={logo} alt="" />
            </div>
          </div>
          <div>
            {/* {NavbarLinks.map((navLink) => {
              return <NavLink key={navLink.id} {...navLink} />;
            })} */}
            <ul className="sm:flex items-center gap-6 hidden ">
              <li className="py-3 px-6 font-bold text-sm bg-yellow rounded-lg ">
                <NavLink to="/" >
                  Home
                </NavLink>
              </li>
              <li className="py-3 px-6 font-bold text-sm bg-yellow  rounded-lg">
                <NavLink to="/about" >
                  About Me
                </NavLink>
              </li>
              <li className="shadow-md py-3 px-6 font-bold text-sm bg-yellow rounded-lg">
                <NavLink to="/deep" >
                  Inner Deep Dive
                </NavLink>
              </li>
              {/* <li className="py-3 px-6 font-bold text-sm bg-Solitude  rounded-lg">
                <NavLink to="/care" >
                 Sessions
                </NavLink>
              </li>
              <li className="py-3 px-6 font-bold text-sm bg-Solitude rounded-lg">
                <NavLink to="/contact" >
                  Contact
                </NavLink>
              </li> */}
            </ul>
          </div>
          <button className="py-3 px-6 font-bold text-sm bg-yellow shadow-lg rounded-lg" onClick={() => {
                  handleOrderPopup();
                }}>
            Quantum Leap
          </button>
          {toggle && (
            <motion.div
              initial={{ x: -500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="fixed h-full w-96 top-0 left-0 z-20 bg-Teal text-white flex flex-col justify-center items-center shadow-lg gap-8 py-8"
            >
              {NavbarLinks.map((navLink) => {
                return (
                  <MobileNavLinks
                    key={navLink.id}
                    {...navLink}
                    setToggle={setToggle}
                  />
                );
              })}
              <HiX
                className=" absolute right-12 top-12 text-3xl cursor-pointer"
                onClick={(prev) => setToggle(!prev)}
              />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
