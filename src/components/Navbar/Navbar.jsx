import React, { useEffect, useState } from "react";
// import { navLinks } from "../../Data";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import { FaCaretDown } from "react-icons/fa";
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
            <ul className="text-white sm:flex items-center gap-6 hidden ">
              <li className="py-3 px-6 font-bold text-sm">
                <NavLink to="/" >
                  Home
                </NavLink>
              </li>
              <li className="py-3 px-6 font-bold text-sm">
                <NavLink to="/about" >
                  About Me
                </NavLink>
              </li>
              <li className="shadow-md py-3 px-6 font-bold text-sm">
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
          {/* <button className="py-3 px-6 font-bold text-sm bg-yellow shadow-lg rounded-lg" onClick={() => {
                  handleOrderPopup();
                }}>
            Quantum Leap
          </button> */}
          {/* <div className="relative cursor-pointer list-none">
                  <a
                    href="/#home"
                    className="flex h-[72px] items-center gap-[2px]"
                  >
                    Quick Links{" "}
                    <span>
                      <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                    </span>
                  </a>
                  <div className="absolute -left-9 z-[9999] hidden w-[150px] rounded-md bg-white p-2 text-black group-hover:block shadow-md ">
                    <ul className="space-y-3">
                      {NavbarLinks.map((data) => (
                        <li key={data.name}>
                          <a
                            className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                            href={data.link}
                          >
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div> */}
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
