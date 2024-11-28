import React from "react";
import { LuMessagesSquare } from "react-icons/lu";

const Form = () => {
  return (
    <div className="section" id="">
        <div className="flex justify-center items-center">
      <form className="bg-slate-300 p-7 rounded-lg">
        <div className="message my-3 flex justify-center">
          <LuMessagesSquare className="text-5xl" />
        </div>

        <div className="heading flex justify-center gap-4 flex-col items-center">
          <h1 className="text-5xl">We want to know you</h1>
          <p className="w-[70%] text-center">
            Answer any of the questions that best describes why you're here
          </p>
        </div>

        <div className="bg-black h-[1px] my-7"></div>

        <div className="radio flex flex-col items-center">
          <p>
            We recommend you pick a question and answer accordinly to help us
            better understand your needs
          </p>
          <div className="int flex gap-4 text-xl my-4">
            <input type="radio" name="one" className="h-6 w-6" />
            What bothers you today?
            <input type="radio" name="one" className="h-6 w-6" />
            What are your needs?
            <input type="radio" name="one" className="h-6 w-6" />
            What brings you peace?
            <input type="radio" name="one" className="h-6 w-6" />
            What inspires you?
            <input type="radio" name="one" className="h-6 w-6" />
            Why are you here?
          </div>
        </div>
        <div className="p-9 px-20 flex flex-col items-center gap-7">
          <p>
            Please fill in your answer to your preferred queestion in the
            message box below:
          </p>
          <textarea
            name="text"
            id=""
            rows="7"
            cols="10"
            className="w-full rounded-lg p-2"
          ></textarea>
        </div>

        <div className="flex flex-col items-center">
          <p>
            Please leave your email address if you would like us to contact you
            regarding any question.
          </p>
          <div className="flex w-full gap-1 my-3">
            <div className="input w-1/2 gap-3 flex flex-col">
              <label>Full name</label>
              <div className="flex gap-3">
                <input
                  type="text"
                  name="fname"
                  className="p-2 w-1/2 rounded-lg"
                  placeholder="First name"
                />
                <input
                  type="text"
                  name="lname"
                  className="p-2 w-1/2 rounded-lg"
                  placeholder="Last name"
                />
              </div>
            </div>

            <div className="input w-1/2 gap-3 flex flex-col">
              <label>Email</label>
              <input
                type="text"
                name=""
                className="p-2 rounded-lg"
                placeholder="example@example.com"
              />
            </div>
          </div>
        </div>

        <div className="bg-black h-[0.8px] my-7"></div>

        <div className="btn flex justify-center">
            <button className="bg-Teal text-white hover:to-blue-500 p-2 px-5 rounded-lg">Submit</button>
        </div>
      </form>
    </div>
    </div>
    
  );
};

export default Form;
