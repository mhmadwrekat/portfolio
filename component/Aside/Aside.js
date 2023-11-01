// Need To Refactor
// Need To Refactor
// Need To Refactor
// Need To Refactor
// Need To Refactor
// Need To Refactor
import React from "react";
import Image from "next/image";
import { arrayOfTitles, socialMedia } from "../../config/Config";

const Aside = ({ handle_drawer, theme, handle_mode, new_tab }) => {
  return (
    <React.Fragment>
      <section
        className={`${theme.mode.secondBG} ${theme.mode.mainTextColor} fixed w-56 md:w-72 lg:w-56 2xl:w-72 text-center overflow-auto h-screen p-2`}
      >
        <div
          className={`w-2/12 ml-auto ${theme.mode.firstBG} grid lg:hidden md:pl-1.5 pl-0.5 rounded`}
        >
          <button
            variant="text"
            color="blue-gray"
            className="p-2 z-10"
            onClick={handle_drawer}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth={4}
              width={15}
              height={15}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <p className="text-2xl font-Acme font-bold lg:my-5 my-2 mb-3">
          Mhmad Wrekat
        </p>
        <div className="w-7/12 m-auto">
          <Image
            src="/assest/img/mhmadwrekat.webp"
            className="rounded-full object-cover"
            alt="mhmad wrekat image"
            quality={100}
            width={500}
            height={600}
            loading="eager"
            priority
            placeholder="blur"
            blurDataURL="/assest/img/mhmadwrekat.webp"
          />
        </div>
        <p className="my-4 p-1.5 px-4 text-sm font-TSmedium">
          Hello, my name is Mohammad Wrekat and i am a Full Stack Developer.
          <br />
          Welcome to my personal website!
        </p>
        <div className="flex justify-evenly mx-6 mt-5">
          {socialMedia.map((item, idx) => {
            return (
              <div
                key={idx}
                onClick={() => {
                  new_tab(item.link);
                }}
              >
                {item.svg}
              </div>
            );
          })}
        </div>
        <hr className="w-5/5 border-b-2 opacity-20 border-gray-500 my-8" />
        <div className="grid justify-center font-TSbold mb-10">
          {arrayOfTitles.map((item, idx) => {
            return (
              <a
                key={idx}
                className="flex hover:scale-110 duration-500 ease-in-out cursor-pointer hover:underline"
                href={item.link}
              >
                {item.svg}
                <p className="mb-3 pt-0.5 ml-3 text-left">{item.text}</p>
              </a>
            );
          })}
        </div>
        <hr className="w-5/5 border-b-2 opacity-20 border-gray-500 my-5" />
        <p className="mb-4 ml-3 font-TSbold">Dark / Lite Mode</p>
        {/* className="hover:scale-125 duration-500 ease-in-out cursor-pointer" */}

        <button
          className="text-2xl hover:scale-125 duration-500 ease-in-out"
          onClick={handle_mode}
        >
          {theme.mode.button}
        </button>
      </section>
    </React.Fragment>
  );
};

export default Aside;
