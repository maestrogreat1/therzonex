import React from "react";
import NatureVid from "../assets/video/main.mp4";
import dive from "../assets/Images/VanSitWhites.png"
import { Link } from "react-router-dom";

const Deep = () => {
  return (
    <>
      <div>
        <div className="h-[700px] relative">
          <video
            autoPlay
            loop
            muted
            className="absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]"
          >
            <source src={NatureVid} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="section" id="">
        <div className="sm:text-[2.5rem] text-[1.825rem] font-bold my-8 border-l-8 border-Teal/50 py-2 pl-2">
          1:1 <span className="text-Teal">Deep Dive</span>
        </div>
        <div className="text-xl font-bold mt-10 mb-10">
          Does any of these ring true to you?
        </div>
        <div>
          <ol className="list-disc">
            <li>
              You feel like something is missing in your life and you don't know
              what it is.
            </li>
            <li>
              You want to start a business or work in another field but you feel
              stuck in your current job.
            </li>
            <li>Your relationships are not fulfilling.</li>
            <li>You are scared of other people's judgement.</li>
          </ol>
        </div>
        <div className="text-xl font-bold mt-10 mb-10">
          What are the guaranteed safety measures for your{" "}
          <span className="text-Teal">Inner Deep Dive</span>?
        </div>
        <div>
          <div className="grid md:grid-cols-2 gap-8 place-items-center">
            <div>
              <p className="text-sm text-gray leading-7 max-w-[700px] mx-auto mt-8">
                <span className="font-bold text-sm text-blue-950">
                  Empathy:
                </span>{" "}
                Seeking help is a sign of strength. Personal growth can be
                challenging, but you wont face it alone. I provide a safe space
                to process emotions at your own pace.
              </p>
              <p className="text-sm text-gray leading-7 max-w-[700px] mx-auto mt-8">
                <span className="font-bold text-sm text-blue-950">
                  Authenticity:
                </span>{" "}
                I offer a non-judgemental, supportive environment where you can address your concerns freely. Being true to myself and striving to be transparent in all dealings is a priority to me. I offer an initial consultation to ensure we are good fit. This allows you to experience my approach and ask any questions.
              </p>
              <p className="text-sm text-gray leading-7 max-w-[700px] mx-auto mt-8">
                <span className="font-bold text-sm text-blue-950">
                  Empowerment:
                </span>{" "}
                I focus on building your independence and resilience, equipping you on your journey to a healthier, more fulfilling life.
              </p>
              <p className="text-sm text-gray leading-7 max-w-[700px] mx-auto mt-8">
                <span className="font-bold text-sm text-blue-950">
                  Uniqueness:
                </span>{" "}
                My integrative approach takes your individual needs into account by combining different therapeutic methods to create a personalized treatment for you.
              </p>
              <p className="text-sm text-gray leading-7 max-w-[700px] mx-auto mt-8">
                <span className="font-bold text-sm text-blue-950">
                  High Quality:
                </span>{" "}
                I continually pursue personal and professional development to provide top-quality care.
              </p>
              <p className="text-sm text-gray leading-7 max-w-[700px] mx-auto mt-8">
                <span className="font-bold text-sm text-blue-950">
                  Strategic Thinking:
                </span>{" "}
                I will support you with structured guidance and actionable insights.
              </p>
              <p className="text-sm text-gray leading-7 max-w-[700px] mx-auto mt-8">
                <span className="font-bold text-sm text-blue-950">
                  Flexibility:
                </span>{" "}
                I offer flexible scheduling options to fit your busy life. Together we will create a coaching plan that works for you.
              </p>
            </div>
            <div>
            <div className="border-[3px] border-solid border-Teal rounded-lg ">
              <img src={dive} alt="" className="p-4 h-[500px] border-[3px] border-solid border-Teal rounded-lg" />
            </div>
            <p className="text-sm text-gray leading-7 max-w-[700px] mx-auto mt-8 font-bold">
                <span className="font-bold text-sm text-blue-950">
                  
                </span>{" "}
                Dive deep and quantum leap! Live the life of your dreams! <br />
                Together we will put on the diver's googles and look at what you were not ready to see before.
              </p>
              <Link to={`/care`}>
              <button className="py-3 px-6 text-sm border border-solid bg-yellow border-gray rounded-lg mt-8 font-bold">
                Book A Session
              </button>
            </Link>
          </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Deep;
