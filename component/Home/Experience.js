// Need To Refactor
// Need To Refactor
// Need To Refactor
// Need To Refactor
// Need To Refactor
// Need To Refactor
// Fully Responsive
// Fully Responsive
// Fully Responsive
// Fully Responsive
// Fully Responsive
// Fully Responsive

import React from "react";
import { experienceData } from "../../config/Config";
import HeadLine from "./HeadLine";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const Experience = ({ theme }) => {
  let space = <b className={`text-red-600 md:grid hidden`}>|</b>;
  return (
    <React.Fragment>
      <HeadLine
      theme={theme}
        mainText={"Experience"}
        otherText={{
          JSX: (
            <p className={`${theme.mode.otherTextColor} text-base mt-4`}>
              I am passionate about using code to maximize eﬃciency while
              developing creative.{" "}
            </p>
          ),
        }}
      />
      <section className="w-12/12 flex items-center md:justify-center">
        <div
          className={`${theme.mode.otherTextColor} w-10/12 m-auto md:m-0 lg:w-6/12`}
        >
          {experienceData.map((item, idx) => {
            return (

              <div
                id="card"
                className={`${theme.mode.secondBG} hover:translate-x-2 duration-700 ease-in-out ring-1 rounded-md my-5 p-0 md:p-4`}
                key={idx}
              >
                <Fade direction='up' cascade damping={0.1}>

                <div className="flex items-center">
                  <Image
                    src={item.img}
                    className="hover:scale-105 duration-500 object-cover w-5/12 md:w-2/12 lg:w-2/12 2xl:w-2/12 rounded-tl-md md:rounded-md"
                    alt={item.Company_name}
                    quality={100}
                    width={400}
                    height={200}
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={item.img}
                  />
                  <div className="px-2 w-full">
                    <p
                      className={`${theme.mode.mainTextColor} md:mt-4 text-base md:text-xl font-TSSemi`}
                    >
                      {item.title}
                    </p>
                    <div className="font-TSmedium mt-0 md:mt-2 grid md:flex 2xl:text-base lg:text-xs md:text-sm text-xs">
                      <p className="px-0.5 md:px-1">{item.Company_name}</p>
                      {space}
                      <p className="px-0.5 md:px-1">
                        {item.Employment_type}
                        <b className={`${theme.color.txt} px-0.5 md:px-1`}>|</b>
                        {item.Location_type}
                      </p>
                    </div>
                    <div className="font-TSmedium grid md:flex 2xl:text-base lg:text-xs md:text-sm text-xs">
                      <p className="px-0.5 md:px-1">{item.Location}</p>
                      {space}
                      <p className="px-0.5 md:px-1">
                        {item.start_date} <sub className="px-0.5">TO</sub>
                        {item.end_date}
                      </p>
                    </div>
                  </div>
                </div>
                <p className="font-TSmedium px-2 mt-0 md:mt-4 py-3 md:py-0 2xl:text-base lg:text-xs md:text-base text-sm">
                  <b className={`${theme.color.txt}`}>Skills : </b>
                  {item.skills}
                </p>
                </Fade>

              </div>
            
            );
          })}
        </div>
        <div className="hidden lg:grid w-4/12 m-auto">
          <Image
            src="/assest/img/experience.webp"
            className="hover:scale-105 duration-500 object-cover w-12/12 rounded-md m-auto"
            alt=""
            quality={100}
            width={600}
            height={400}
            loading="lazy"
            placeholder="blur"
            blurDataURL="/assest/img/experience.webp"
          />
        </div>
      </section>

      <hr className="mx-5 md:mx-0 lg:mr-16 w-12/12 m-auto border-b-2 opacity-20 border-gray-500 my-8" />
    </React.Fragment>
  );
};

export default Experience;
