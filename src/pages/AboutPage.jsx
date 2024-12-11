import React from "react";
import about from "../assets/Images/VAnSunKisss.png";
import abouts from "../assets/Images/VanTreeLiess.png";
import aboutx from "../assets/Images/VanSitWhites.png";
import { AiFillPhone } from "react-icons/ai";

import { Link } from "react-router-dom";
import relive from "../assets/Images/bls.png";

const AboutPage = () => {
  return (
    <>
      <div className="relative grid md:grid-cols-2 gap-8 place-items-center bg-about mb-4 rounded-md">
        <div>
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-1 mt-40">
            Things to know
            <br /> about{" "}
            <span className="text-Write font-Allura text-8xl sm: mt-0">
              me...
            </span>
          </div>
        </div>
        <div className="rounded-lg mt-3">
          <img src={relive} alt="" className="p-4" />
        </div>
      </div>
      {/* <div className="section" id="about">
        
        <div className="grid md:grid-cols-2 gap-8 place-items-center">
          <div className="border-[3px] border-solid border-Teal rounded-lg">
            <img src={about} alt="" className="p-4 h-96 rounded-md"/>
          </div>
          <div>
            <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5 border-l-8 border-Teal/50 py-2 pl-2">
              About Me <br /> and{" "}
              <span className="text-Teal font-Allura">my amazing journey</span>
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
            <Link>
         <button className="py-3 px-6 text-sm border border-solid bg-yellow border-gray rounded-lg">Learn More</button>
         </Link>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8 place-items-center">
          <div>
            <div className="border-[3px] border-solid border-Teal rounded-lg ">
              <img src={abouts} alt="" className="p-4 h-96" />
            </div>
          </div>
          <div>
            <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5 border-l-8 border-Teal/50 py-2 pl-2">
              About Me <br /> and{" "}
              <span className="text-Teal font-Allura">Dealing with it</span>
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
              I developed an interest in spirituality and studied mental
              disorders. In 2021, I began training in psychotherapy, becoming
              both a trainee and a client. Through extensive therapy, I gained
              profound self awareness, ensuring that I do not project my issues
              onto you. <br />I experienced firsthand the transformative power
              of having someone deeply invested in your well-being, actively
              listening, and being fully present. It's a truly special feeling,
              and I am passionate about offering this to you.
            </p>
            <Link to={`/`}>
              <button className="py-3 px-6 text-sm border border-solid bg-yellow border-gray rounded-lg">
                Know More
              </button>
            </Link>
          </div>
        </div>
      </div> */}

      <div className="mt-[80px] md:mt-[200px] relative">
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
              <p className="font-secondary text-xl">
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
            </div>

            {/* img */}
            <div className="about__img order-1 md:order-none max-w-[453px] mx-auto md:max-w-none md:mx-0 ">
              <img
                src={abouts}
                alt=""
                className="rounded-bl-[290px] rounded-tr-[290px]"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row text-center md:text-left justify-between items-center gap-8 md:gap-[74px] mb-10">
            {/* text */}
            <div className="flex-1 order-2 md:order-2 max-w-md md:max-w-[410px] flex flex-col items-center md:items-start gap-8">
              <h2 className="h2 font-primary">
                About Me <br /> and{" "}
                <span className="text-Teal font-Allura">Dealing with it</span>
              </h2>
              <p className="font-secondary textx">
                After a breakup in 2016, I found myself struggling with my
                mental health. I couldn't understand why it hitme so hard, so I
                began searching for answers. For the first time, I became aware
                of my own wounds. This curiosity led me to examine my actions,
                feelings and thoughts. Over the years, I tried many different
                approaches and once i discovered what truly helped me, I began
                to genuinely enjoy my healing journey and the rewards that came
                with it. My mission now is to share the wisdom I've gained and
                support you on your own healing path.
                <br />
                I developed an interest in spirituality and studied mental
                disorders. In 2021, I began training in psychotherapy, becoming
                both a trainee and a client. Through extensive therapy, I gained
                profound self awareness, ensuring that I do not project my
                issues onto you. <br />I experienced firsthand the
                transformative power of having someone deeply invested in your
                well-being, actively listening, and being fully present. It's a
                truly special feeling, and I am passionate about offering this
                to you.
              </p>

              {/* phone */}

              <div className="flex items-center justify-center md:justify-start gap-4">
                <div className="bg-Teal/15 w-[93px] h-[93px rounded-full flex justify-center items-center]">
                  <AiFillPhone className="text-Teal text-4xl" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold font-sans">+441234567890</div>
                  <div>Book a free call</div>
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

export default AboutPage;
