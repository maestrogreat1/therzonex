import React from "react";
import about from "../../assets/Images/VAnSunKisss.png";
import { Link } from "react-router-dom";

// import abouts from "../../assets/Images/VAnTreeLiess.png";

const About = () => {
  return (
    <div className="section" >
      {/* <div className="grid md:grid-cols-2 gap-8 place-items-center">
        <div className=" rounded-lg">
          <img src={about} alt="" className="p-4 rounded-lg h-96" />
        </div>
        <div>
          <h2 className="font-bold font-primary sm:text-[1.875rem] text-[1.5rem] mb-5 border-l-8 border-Teal/50 py-2 pl-2">
            About Me <br /> and{" "}
            <span className="text-Teal font-Allura">my amazing journey</span>
          </h2>
          <p className="text-sm text-gray text leading-7 mb-4">
            My name is Vanessa Stanzel and I support people healing their subconscious wounds and choose a life that truly lights them up. <br />
            I am a psychotherapeutic healing practitioner and did a training in integrative psychotherapy.
            This Includes Gestalt, mindfulness and relaxation, hypnotherapy, depth psychology, behavioural therapy with a focus on acceptance and commitment therapy (ACT) & schema therapy and systemic therapy.
          </p>
         <Link to={`/about`}>
          <button className="py-3 px-6 text-sm border border-solid bg-yellow border-gray rounded-lg">Learn More</button>
         </Link>
        </div>
      </div> */}
      <div className="container mx-auto md:px-0">
          <div className="flex flex-col md:flex-row text-center md:text-left justify-between items-center gap-8 md:gap-[74px] mb-10">
            {/* text */}
            <div className="flex-1 order-2 md:order-none max-w-md md:max-w-[410px] flex flex-col items-center md:items-start gap-8">
              <h2 className="h2 font-primary">
                About Me <br /> and{" "}
                <span className="text-Teal font-Allura">
                  my amazing journey
                </span>
              </h2>
              <p className="text-xl font-secondary">
                My name is Vanessa Stanzel and I support people healing their
                subconscious wounds and choose a life that truly lights them up.
                <br />
                I am a psychotherapeutic healing practitioner and did a training
                in integrative psychotherapy. This Includes Gestalt, mindfulness
                and relaxation, hypnotherapy, depth psychology, behavioural
                therapy with a focus on acceptance and commitment therapy (ACT)
                & schema therapy and systemic therapy. <br />
                Additionally, I'm learning to facilitate systemic
                constellations. I've been on my own healing journey since 2016
                and been passionate about it ever since. Besides psychotherapy &
                healing, I love travelling, cultural exchanges, writing poetry
                and immersing myself in water and nature.
              </p>
              <Link to={`/about`}>
          <button className="py-3 px-6 text-sm text-white border border-solid bg-Teal border-gray rounded-lg">Learn More</button>
         </Link>
              
            </div>

            {/* img */}
            <div className="about__img order-1 md:order-none max-w-[453px] mx-auto md:max-w-none md:mx-0 ">
              <img
                src={about}
                alt=""
                className="rounded-bl-[290px] rounded-tr-[290px]"
              />
            </div>
          </div>
        </div>
    </div>
  );
};

export default About;
