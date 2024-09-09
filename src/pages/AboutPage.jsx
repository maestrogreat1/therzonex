import React from "react";
import about from "../assets/Images/VAnSunKisss.png";
import abouts from "../assets/Images/VanTreeLies.png";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <>
      <div className="section" id="about">
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
              My name is Vanessa Stanzel and I support people healing their
              subconscious wounds and choose a life that truly lights them up.
              <br />
              I am a psychotherapeutic healing practitioner and did a training
              in integrative psychotherapy. This Includes Gestalt, mindfulness
              and relaxation, hypnotherapy, depth psychology, behavioural
              therapy with a focus on acceptance and commitment therapy (ACT) &
              schema therapy and systemic therapy. <br />
              Additionally, I'm learning to facilitate systemic constellations.
              I've been on my own healing journey since 2016 and been passionate
              about it ever since. Besides psychotherapy & healing, I love
              travelling, cultural exchanges, writing poetry and immersing
              myself in water and nature. .
            </p>
            {/* <Link>
         <button className="py-3 px-6 text-sm border border-solid bg-yellow border-gray rounded-lg">Learn More</button>
         </Link> */}
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8 place-items-center">
          <div>
            <div className="border-[3px] border-solid border-Teal rounded-lg ">
              <img src={abouts} alt="" className="p-4" />
            </div>
          </div>
          <div>
            <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5 ">
              About Me <br /> and{" "}
              <span className="text-Teal">Dealing with it</span>
            </div>
            <p className="text-sm text-gray text leading-7 mb-4 ">
              After a breakup in 2016, I found myself struggling with my mental
              health. I couldn't understand why it hitme so hard, so I began
              searching for answers. For the first time, I became aware of my
              own wounds. This curiosity led me to examine my actions, feelings
              and thoughts. Over the years, I tried many different approaches
              and once i discovered what truly helped me, I began to genuinely
              enjoy my healing journey and the rewards that came with it. My
              mission now is to share the wisdom I've gained and support you on
              your own healing path.
              <br />
              I developed an interest in spirituality and studied mental disorders. In 2021, I began training in psychotherapy, becoming both a trainee and a client. Through extensive therapy, I gained profound self awareness, ensuring that I do not project my issues onto you. <br />
              I experienced firsthand the transformative power of having someone deeply invested in your well-being, actively listening, and being fully present. It's a truly special feeling, and I am passionate about offering this to you.
            </p>
            <Link to={`/`}>
              <button className="py-3 px-6 text-sm border border-solid bg-yellow border-gray rounded-lg">
                Know More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
