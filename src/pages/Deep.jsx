import React from "react";
import NatureVid from "../assets/video/main.mp4";
import dive from "../assets/Images/VanSitWhites.png";
import { Link } from "react-router-dom";
import relive from "../assets/Images/deepest.jpg";
import Accordion from "../components/container/Accordion";
import abouts from "../assets/Images/VanTreeLiess.png";
import aboutx from "../assets/Images/VanSitWhites.png";
import { AiFillPhone } from "react-icons/ai";

const Deep = () => {
  return (
    <>
      {/* <div>
        <div className="h-[700px] relative">
          <video
            autoPlay
            loop
            muted
            controls={false}
            className="right-0 top-0 h-[700px] w-full object-cover z-[-1]"
          >
            <source src={NatureVid} type="video/mp4" />
          </video>
        </div>
      </div> */}
      <div className="relative grid md:grid-cols-2 gap-8 place-items-center bg-Teal mb-4 rounded-mdgit branch">
        <div>
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-[-30px] mt-40
          ">
            Deep Dive
            <br /> with{" "}
            <span className="text-Write font-Allura text-8xl sm: mt-0">
              me...
            </span>
          </div>
        </div>
        <div className="rounded-lg mt-3">
          <img src={relive} alt="" className="p-4 md:h-[700px] md:mt-[110px]  " />
        </div>
      </div>
      {/* <div className="section" id="">
        <div className="sm:text-[2.5rem] text-[1.825rem] font-bold my-8 border-l-8 border-Teal/50 py-2 pl-2">
          1:1 <span className="text-Teal">Deep Dive</span>
        </div>
        <div className="text-xl font-bold mt-10 mb-10">
          Does any of these ring true to you?
        </div>
        <Accordion/>
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
                I offer a non-judgemental, supportive environment where you can
                address your concerns freely. Being true to myself and striving
                to be transparent in all dealings is a priority to me. I offer
                an initial consultation to ensure we are good fit. This allows
                you to experience my approach and ask any questions.
              </p>
              <p className="text-sm text-gray leading-7 max-w-[700px] mx-auto mt-8">
                <span className="font-bold text-sm text-blue-950">
                  Empowerment:
                </span>{" "}
                I focus on building your independence and resilience, equipping
                you on your journey to a healthier, more fulfilling life.
              </p>
              <p className="text-sm text-gray leading-7 max-w-[700px] mx-auto mt-8">
                <span className="font-bold text-sm text-blue-950">
                  Uniqueness:
                </span>{" "}
                My integrative approach takes your individual needs into account
                by combining different therapeutic methods to create a
                personalized treatment for you.
              </p>
              <p className="text-sm text-gray leading-7 max-w-[700px] mx-auto mt-8">
                <span className="font-bold text-sm text-blue-950">
                  High Quality:
                </span>{" "}
                I continually pursue personal and professional development to
                provide top-quality care.
              </p>
              <p className="text-sm text-gray leading-7 max-w-[700px] mx-auto mt-8">
                <span className="font-bold text-sm text-blue-950">
                  Strategic Thinking:
                </span>{" "}
                I will support you with structured guidance and actionable
                insights.
              </p>
              <p className="text-sm text-gray leading-7 max-w-[700px] mx-auto mt-8">
                <span className="font-bold text-sm text-blue-950">
                  Flexibility:
                </span>{" "}
                I offer flexible scheduling options to fit your busy life.
                Together we will create a coaching plan that works for you.
              </p>
            </div>
            <div>
              <div className="rounded-lg ">
                <img src={dive} alt="" className="p-4 h-[500px] rounded-lg" />
              </div>
              <p className="text-sm text-gray leading-7 max-w-[700px] mx-auto mt-8 font-bold">
                <span className="font-bold text-sm text-blue-950"></span> Dive
                deep and quantum leap! Live the life of your dreams! <br />
                Together we will put on the diver's googles and look at what you
                were not ready to see before.
              </p>
              <Link to={`/care`}>
                <button className="py-3 px-6 text-sm border border-solid bg-yellow border-gray rounded-lg mt-8 font-bold">
                  Book A Session
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div> */}

      <div className="mt-[80px] md:mt-[200px] relative">
        <div className="container mx-auto md:px-0">
          <div className="flex flex-col md:flex-row text-center md:text-left justify-between items-center gap-8 md:gap-[74px] mb-10">
            {/* text */}
            <div className="flex-1 order-2 md:order-2 max-w-md md:max-w-[410px] flex flex-col items-center md:items-start gap-8">
              <h2 className="h2 font-primary">
                1:1 <span className="text-Teal">Deep Dive</span>
              </h2>
              <p className="font-secondary">
                <h3 className="h3 mb-0">Empathy:</h3>
                <p className=" text-xl text-gray leading-7 max-w-[700px] mx-auto mt-2 mb-8">
                  Seeking help is a sign of strength. Personal growth can be
                  challenging, but you wont face it alone. I provide a safe
                  space to process emotions at your own pace.
                </p>
                <h3 className="h3 mt-4">Authenticity:</h3>
                <p className=" text-xl text-gray leading-7 max-w-[700px] mx-auto mt-2 mb-10">
                  I offer a non-judgemental, supportive environment where you
                  can address your concerns freely. Being true to myself and
                  striving to be transparent in all dealings is a priority to
                  me. I offer an initial consultation to ensure we are good fit.
                  This allows you to experience my approach and ask any
                  questions.
                </p>
                <h3 className="h3 mt-4">Empowerment:</h3>
                <p className=" text-xl text-gray leading-7 max-w-[700px] mx-auto mt-2 mb-10">
                  I focus on building your independence and resilience,
                  equipping you on your journey to a healthier, more fulfilling
                  life.
                </p>
                <h3 className="h3 mt-4">Uniqueness:</h3>
                <p className=" text-xl text-gray leading-7 max-w-[700px] mx-auto mt-2 mb-10">
                  My integrative approach takes your individual needs into
                  account by combining different therapeutic methods to create a
                  personalized treatment for you.
                </p>
                <h3 className="h3 mt-4">High Quality:</h3>
                <p className=" text-xl text-gray leading-7 max-w-[700px] mx-auto mt-2 mb-10">
                  I continually pursue personal and professional development to
                  provide top-quality care.
                </p>
                <h3 className="h3 mt-4">Strategic Thinking::</h3>
                <p className=" text-xl text-gray leading-7 max-w-[700px] mx-auto mt-2 mb-10">
                  I will support you with structured guidance and actionable
                  insights.
                </p>
                <h3 className="h3 mt-4">Flexibility:</h3>
                <p className=" text-xl text-gray leading-7 max-w-[700px] mx-auto mt-2 mb-10">
                  I offer flexible scheduling options to fit your busy life.
                  Together we will create a coaching plan that works for you.
                </p>
              </p>

              {/* phone */}

              <div className="flex items-center justify-center md:justify-start gap-4">
                {/* <div className="bg-Teal/15 w-[93px] h-[93px rounded-full flex justify-center items-center]">
                  <AiFillPhone className="text-Teal text-4xl" />
                </div> */}
                <div className="text-left">
                  {/* <div className="text-2xl font-bold font-sans">
                    +441234567890
                  </div>
                  <div>Book a free call</div> */}
                  <Link to={`/care`}>
                    <button className="py-3 px-6 text-sm text-white border border-solid bg-Teal border-gray rounded-lg">
                      Book a session
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* img */}
            <div className="about__img order-1 md:order-none max-w-[453px] mx-auto md:max-w-none md:mx-0 ">
              <img
                src={aboutx}
                alt=""
                className="rounded-bl-[290px] rounded-tr-[290px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Deep;
