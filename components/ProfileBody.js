// Cleaned
import { Reveal, Fade } from "react-awesome-reveal";
import React from "react";
import { keyframes } from "@emotion/react";
import Image from "next/image";

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
          className="mx-auto w-11/12 text-white bg-gray-800 rounded-lg shadow-2xl lg:w-7/12 lg:rounded-l-lg lg:rounded-r-none opacity-95 lg:mx-0"
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
              <h1 className="pt-8 text-4xl font-bold lg:pt-0 lg:py-3 ">
                <Reveal keyframes={customAnimation}>
                  <p>Mhmad Wrekat</p>
                </Reveal>
              </h1>
              <div className="w-4/5 pt-3 mx-auto border-b-2 opacity-25 border-yellow-400 lg:mx-0"></div>
              <Fade triggerOnce delay={1000}>
                <p className="text-left flex items-center justify-center pt-4 text-base font-bold lg:justify-start">
                  <svg
                    className="h-4 pr-4 fill-current text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                  </svg>
                  Full Stack Developer
                </p>
              </Fade>
              <Fade triggerOnce delay={1500}>
                <p className="font-semibold	text-left flex items-center justify-center pt-2 pr-5 text-sm text-white-600 lg:text-base lg:justify-start">
                  <svg
                    className="h-4 pr-4 fill-current text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" />
                  </svg>
                  Jordan - Amman
                </p>
              </Fade>
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
                    <button className="px-4 py-2 font-bold text-gray-700 rounded-full cursor-alias bg-yellow-400 hover:bg-yellow-600">
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
