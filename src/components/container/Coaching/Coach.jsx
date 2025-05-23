import React from "react";
import { AiOutlineUser, AiOutlineStar } from "react-icons/ai";

const Coach = ({ image, category, title, participants, rating, price }) => {
  return (
    <div className="p-2 shadow-lg min-w-[15rem] bg-white rounded-md">
      {/* <img src={image} alt="" /> */}
      <div className="h2 mt-2 text-Teal text-3xl font-primary">{category}</div>
      <div className=" mt-2 text-xl">{title}</div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* <div className="bg-Solitude p-1 rounded-full">
            <AiOutlineUser className="text-Teal"/>
          </div> */}
          <div className="text-sm font-bold">{participants}</div>
        </div>
        <div className="flex items-center gap-2">
            {/* <div className="bg-Solitude p-1 rounded-full">
                <AiOutlineStar className="text-yellow"/>
            </div> */}
            <div className="text-sm font-bold">{rating}</div>
        </div>
        <div className="text-sm font-bold">{price}</div>
      </div>
    </div>
  );
};

export default Coach;
