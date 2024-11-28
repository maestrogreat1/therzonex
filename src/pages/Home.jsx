import React from 'react'
// import {Coaching, About, Contact, Group} from '../components'
import Coachings from '../components/container/Coaching/Coachings';

import Hero from '../components/container/Hero';
import About from '../components/container/About';
import Group from '../components/container/Group';
import Contact from '../components/container/Contact';
import OrderPopup from '../components/Orderpopup/OrderPopup';
import video from "../assets/video/homevid.mp4" 

const Home = () => {
    const [orderPopup, setOrderPopup] = React.useState(false);

    const handleOrderPopup = () => {
        setOrderPopup(!orderPopup);
      };
  return (
    <div>
      {/* <div className="h-[700px] relative ">
          
        </div> */}
        <Hero />
      <About handleOrderPopup={handleOrderPopup}/>
      <Coachings />
      {/* <Group /> */}
      <Contact />
      <OrderPopup />
    </div>
  )
}

export default Home
