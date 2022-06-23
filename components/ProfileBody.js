// Cleaned
import { Reveal, Fade } from "react-awesome-reveal";
import React from "react";
import { keyframes } from "@emotion/react";
import Image from "next/image";
import Lottie from "lottie-react";
import work_json from "../public/assest/emoji/work.json";
import location_json from "../public/assest/emoji/location.json";

const ProfileBody = () => {
  const customAnimation = keyframes`
    from {
      opacity: 0;
      transform: translate3d(-200px, -100px, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
    `;
  return (
    <React.Fragment>
      <div className=" pt-20 sm:pt-0 md:pt-16"></div>
      <div className="flex flex-wrap items-center h-auto max-w-6xl mx-auto lg:my-20">
        <div
          id="profile"
          className="mx-auto w-11/12 text-white bg-gray-800 rounded-lg shadow-2xl lg:w-7/12 lg:rounded-l-lg lg:rounded-r-none lg:mx-0"
        >
          {/* bg-Mobile_profile */}
          <div className="p-4 text-center md:p-12 lg:text-left">
            <div className="bg-cover block w-48 h-48 mx-auto -mt-16 rounded-full shadow-xl bg-fit lg:hidden">
              <Image
                src="/assest/mobileprofile.WebP"
                className="rounded-full lg:rounded-lg"
                alt="mhmad wrekat image"
                quality={100}
                // layout="fixed"
                objectFit="cover"
                // layout="fixed"
                width={300}
                height={300}
                loading="eager"
                priority
                placeholder="blur"
                blurDataURL="/assest/desktop_profile.WebP"
              />
              {/* <img
                src="./assest/mobileprofile.jpg"
                className="w-full h-full rounded-full"
              /> */}
            </div>
            <div>
              <h1 className="pt-8 text-3xl lg:text-4xl font-bold lg:pt-0 lg:py-3 ">
                <Reveal keyframes={customAnimation}>
                  <p>Mhmad Wrekat</p>
                </Reveal>
              </h1>
              <div className="w-4/5 pt-3 mx-auto border-b-2 opacity-25 border-yellow-400 lg:mx-0"></div>
              {/* <Fade triggerOnce delay={1000}> */}
              <div className="text-left flex items-center justify-center pt-4 text-base font-bold lg:justify-start">
                {/* <svg
                    className="h-4 pr-4 fill-current text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                  </svg> */}
                <div className="w-16 h-16 lg:w-20 lg:h-20">
                  <Lottie animationData={work_json} loop={true} />
                </div>
                <p>Full Stack Developer</p>
              </div>
              {/* </Fade> */}
              {/* <Fade triggerOnce delay={1500}> */}
              <div className="font-semibold	text-left flex items-center justify-center pt-0 pr-5 text-sm text-white-600 lg:text-base lg:justify-start">
                <div className="w-16 h-16 lg:w-20 lg:h-20">
                  <Lottie animationData={location_json} loop={true} />
                </div>
                <p className="pl-2">Jordan - Amman</p>
              </div>
              {/* </Fade> */}
              <Fade triggerOnce delay={2000}>
                <p className="mx-5 lg:mx-0 pt-8 text-base font-semibold">
                  Have a Bachelor's Degree in Software Engineering , and
                  Full-Stack Web Development course from Code Fellows .
                </p>
              </Fade>
              <Fade triggerOnce delay={2500}>
                <div className="pt-6 sm:pt-12 pb-4">
                  <a target="_balnk" href="https://wa.me/+962798596928">
                    <span className=" h-0 w-0">
                      <span className="animate-ping absolute inline h-4 w-4 rounded-full bg-blue-500"></span>
                      <span className="relative rounded-full h-0 w-0 bg-blue-800"></span>
                    </span>
                    <button className="lg:text-base text-sm px-6 py-2 font-bold text-gray-700 rounded-lg cursor-alias bg-yellow-400 hover:bg-yellow-600">
                      Text Me!!
                    </button>
                  </a>
                </div>
              </Fade>
            </div>
          </div>
        </div>
        {/* DESKTOP PHOTO */}
        <div className="w-full lg:w-2/5 hidden lg:block">
          <Image
            src="/assest/desktop_profile.WebP"
            className=" rounded-none shadow-2xl lg:rounded-lg hover:scale-110"
            alt="mhmad wrekat image"
            quality={100}
            layout="fixed"
            objectFit="cover"
            width={500}
            height={550}
            loading="eager"
            priority
            placeholder="blur"
            blurDataURL="/assest/desktop_profile.WebP"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProfileBody;
