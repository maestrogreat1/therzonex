import React from "react";
import group1 from "../../assets/Images/VanSeatSmiles.png";
import group2 from "../../assets/Images/VanWaterSits.png";
// import { accordions } from "../../Data";
// import Accordion from "./Accordion";
import { Link } from "react-router-dom";
const Group = () => {
  return (
    <div className="section" id="group">
      <div className="grid sm:grid-cols-2 place-items-center gap-8 bg-gradient-to-r from-cyan-500 to-Teal rounded-lg">
        <div className="pl-5">
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem]">
            Book <span className="text-white font-Allura text-5xl">a session</span> <br /> with us
            today
          </div>
          <p className="text-sm text-gray leading-7 max-w-[700px] mx-auto mt-8 ">
            <span className="font-bold text-sm text-blue-950 ">
              Authenticity:
            </span>{" "}
            I offer a non-judgemental, supportive environment where you can
            address your concerns freely. Being true to myself and striving to
            be transparent in all dealings is a priority to me. I offer an
            initial consultation to ensure we are good fit. This allows you to
            experience my approach and ask any questions.
          </p>
          <Link to={`/care`}>
            <button className=" mt-4 py-3 px-4 bg-yellow text-black rounded-lg text-sm font-bold">
              Join here
            </button>
          </Link>
        </div>
        <div className="p-4 md:w-3/4 sm:row-start-1 ">
          <img className="h-[100%] rounded-lg" src={group1} alt="" />
        </div>
        {/* <div className="pl-5">
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem]">
            Let us <span className="text-Teal">leap</span> <br /> together
          </div>
          <p className="text-sm text-gray leading-7 max-w-[700px] mx-auto mt-8">
            <span className="font-bold text-sm text-blue-950">Uniqueness:</span>{" "}
            My integrative approach takes your individual needs into account by
            combining different therapeutic methods to create a personalized
            treatment for you.
          </p>
          <Link to={`/care`}>
            <button className="mt-4 py-3 px-4 bg-yellow text-black rounded-lg text-sm font-bold">
              Join here
            </button>
          </Link>
        </div>
        <div className="p-4 md:w-3/4 md:h-3/4 border-[3px] border-solid border-Teal rounded-lg">
          <img className="h-[100%]" src={group2} alt="" />
        </div> */}
      </div>
      {/* <div className="text-center my-8 font-bold sm:text-[1.875rem] text-[1.5rem]">
        Frequently <span className="text-Teal">Asked Questions</span>
      </div>
      <div className="mt-12 max-w-[700px] mx-auto">
        {accordions.map((accordion) => {
          return <Accordion key={accordion.id} {...accordion} />;
        })}
      </div> */}
    </div>
  );
};

export default Group;
