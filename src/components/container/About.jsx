import React from "react";
import about from "../../assets/Images/VAnSunKisss.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="section" >
      <div className="grid md:grid-cols-2 gap-8 place-items-center">
        <div className="border-[3px] border-solid border-Teal rounded-lg">
          <img src={about} alt="" className="p-4" />
        </div>
        <div>
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
            About Me <br /> and{" "}
            <span className="text-Teal">my amazing journey</span>
          </div>
          <p className="text-sm text-gray text leading-7 mb-4">
            My name is Vanessa Stanzel and I support people healing their subconscious wounds and choose a life that truly lights them up. <br />
            I am a psychotherapeutic healing practitioner and did a training in integrative psychotherapy.
            This Includes Gestalt, mindfulness and relaxation, hypnotherapy, depth psychology, behavioural therapy with a focus on acceptance and commitment therapy (ACT) & schema therapy and systemic therapy. <br />
            Additionally, I'm learning to facilitate systemic constellations. I've been on my own healing journey since 2016 and been passionate about it ever since. Besides psychotherapy & healing, I love travelling, cultural exchanges, writing poetry and immersing myself in water and nature.
            .
          </p>
         <Link to={`/about`}>
          <button className="py-3 px-6 text-sm border border-solid bg-yellow border-gray rounded-lg">Learn More</button>
         </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
