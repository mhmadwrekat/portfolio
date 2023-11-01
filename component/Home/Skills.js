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
import HeadLine from "./HeadLine";
import { programLanguage } from "../../config/Config";
import { Fade } from "react-awesome-reveal";

const Skills = ({ theme }) => {
  return (
    <React.Fragment>
      <HeadLine
        theme={theme}
        mainText={"Skills"}
        otherText={{
          JSX: (
            <p className={`${theme.mode.otherTextColor} text-base mt-4`}>
              <i className={`${theme.color.txt}`}>What I do?</i> Specialised in
              frontend and backend development for web apps.
              <br />
              and I am passionate about using code to maximize eﬃciency while
              developing creative.
            </p>
          ),
        }}
      />
      <section
        className={`${theme.mode.mainTextColor} font-TSbold justify-items-center md:justify-items-start grid m-auto grid-cols-2 gap-3 w-12/12 lg:w-11/12 lg:m-1 md:grid-cols-4 md:gap-5 md:mt-14 lg:mt-14 2xl:mt-14 mt-10`}
      >
        {programLanguage.map((item, idx) => {
          return (
              <div key={idx} className="rounded-lg flex items-center">
            <Fade direction='up' cascade damping={0.1}>
                <span className="hover:-rotate-12 duration-500 ease-in-out">
                  {item.svg}
                </span>

                <p className="mt-2 ml-1 md:ml-2 hover:-rotate-6 duration-500 ease-in-out font-bold text-sm md:text-lg lg:text-xl 2xl:text-lg">
                  {item.name}
                </p>
                </Fade>
              </div>
          );
        })}
      </section>
      <hr className="mx-5 md:mx-0 lg:mr-16 w-12/12 m-auto border-b-2 opacity-20 border-gray-500 my-8" />
    </React.Fragment>
  );
};

export default Skills;
