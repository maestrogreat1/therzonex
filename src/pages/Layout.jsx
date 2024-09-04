import React from "react";

// import About from "../components";
// import { Coaching, Group, Contact } from "../components";
import Navbar from "../components/Navbar/Navbar";

import OrderPopup from "../components/Orderpopup/Orderpopup";
import Footer from "../components/container/Footer";
import { Outlet } from "react-router-dom";
// import Hero from "../components/container/Hero";

const Layout = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  return (
    <>
      <Navbar handleOrderPopup={handleOrderPopup} />
      {/* <Hero />
      <About />
      <Coaching />
      <Group />
      <Contact /> */}
      <Outlet />
      <Footer />
      <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </>
  );
};

export default Layout;
