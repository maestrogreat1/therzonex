import React from 'react'
import group1 from "../../assets/yoga-group.jpg";
import group2 from "../../assets/stretchhome.png";
import { accordions } from '../../Data';
import Accordion from './Accordion';
const Group = () => {
  return (
    <div className='section'id='group'>
      <div className='grid sm:grid-cols-2 place-items-center gap-8'>
        <div className='pl-5'>
          <div className='font-bold sm:text-[1.875rem] text-[1.5rem]'>
            Book <span className='text-Teal'>a session</span> <br /> with us today 
          </div>
          <p className='text-sm leading-7 text-gray mb-5'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus laborum molestias officia qui accusantium enim. Consectetur perspiciatis sed pariatur amet quis ad tempore praesentium maxime ab eveniet, molestiae labore modi!
          </p>
          <button className='py-3 px-4 bg-yellow text-black rounded-lg text-sm font-bold'>Join here</button>
        </div>
        <div className='p-4 md:w-3/4 sm:row-start-1'>
          <img src={group1} alt="" />
        </div>
        <div className='pl-5'>
          <div className='font-bold sm:text-[1.875rem] text-[1.5rem]'>
            Let us <span className='text-Teal'>leap</span> <br /> together 
          </div>
          <p className='text-sm leading-7 text-gray mb-5'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus laborum molestias officia qui accusantium enim. Consectetur perspiciatis sed pariatur amet quis ad tempore praesentium maxime ab eveniet, molestiae labore modi!
          </p>
          <button className='py-3 px-4 bg-yellow text-black rounded-lg text-sm font-bold'>Join here</button>
        </div>
        <div className='p-4 md:w-3/4'>
          <img src={group2} alt="" />
        </div>
      </div>
      <div className='text-center my-8 font-bold sm:text-[1.875rem] text-[1.5rem]'>
        Frequently <span className='text-Teal'>Asked Questions</span>
      </div>
      <div className='mt-12 max-w-[700px] mx-auto'>
        {accordions.map(accordion => {
          return <Accordion key={accordion.id} {...accordion} />
        })}
      </div>
    </div>
  )
}

export default Group
