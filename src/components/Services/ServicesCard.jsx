import React from "react";
import { Link } from "react-router-dom";

const ServicesCard = ({ img, title, description, price, type, handleOrderPopup }) => {
  return (
    <>
      <div
        className="shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950 dark:text-white cursor-pointer"
        onClick={handleOrderPopup}
      >
        <div className="overflow-hidden">
          <img
            src={img}
            alt="No image"
            className="mx-auto h-[220px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
          />
        </div>
        <div className="space-y-2 p-3">
          <h1 className="line-clamp-1 font-bold text-xl">{title}</h1>
          <p className="line-clamp-2">{description}</p>
          <div className="flex items-center justify-between border-t-2 py-3 !mt-3">
            <div className="opacity-70">
              <p>{type}</p>
            </div>
            <div>
              <p className="text-2xl font-bold">&euro;{price}</p>
            </div>
          </div>
          {/* <Link to={`/contact`}>
          <button className="py-3 px-6 text-sm border border-solid bg-yellow border-gray rounded-lg">Get Started</button>
         </Link> */}
        </div>
      </div>
    </>
  );
};

export default ServicesCard;
