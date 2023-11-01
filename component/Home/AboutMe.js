// Need To Refactor
// Need To Refactor
// Need To Refactor
// Need To Refactor
// Need To Refactor
// Need To Refactor
import React from "react";
import Image from "next/image";
import {Fade} from 'react-awesome-reveal'
const AboutMe = ({ theme }) => {
  return (
    <React.Fragment>
      <section
        id="aboutMe"
        className="font-TSmedium md:flex md:justify-start justifuy-between items-center"
      >
        <div className="w-12/12 md:w-7/12 lg:m-0 m-5">
          <div className="flex">
          <Fade direction='up' cascade damping={0.1}>

            <div className={`${theme.color.bg} w-1.5 h-9 rounded-full`} />
</Fade>
<Fade direction='up' cascade damping={0.1}>

            <h1
              className={`ml-2 text-3xl md:text-4xl font-bold font-Acme ${theme.mode.mainTextColor}`}
            >
              Mhmad Wrekat
            </h1>
            </Fade>
          </div>
          <h2
            className={`${theme.mode.otherTextColor} text-start text-lg md:text-xl mt-2`}
          >
            Full Stack Developer | MERN
          </h2>

          <p
            className={`${theme.mode.otherTextColor} text-base mt-5 md:mt-10 w-12/12 md:w-10/12`}
          >
            I Have a <b className={`${theme.color.txt}`}>Bachelor`s Degree</b>{" "}
            in Software Engineering , and Full-Stack Web Development course from
            Code Fellows, Also MERN Stack course From Webtoon. <br />
            Specialised in frontend and backend development for web apps.
          </p>
          <div>
          <Fade direction='up' cascade damping={0.1}>

            <button
              className={`${theme.color.bg} hover:scale-110 duration-500 ease-in-out text-gray-900 font-TSbold rounded mt-6`}
            >
              <a
                className="flex px-5 py-1.5"
                href="./assest/data/wrekat2023.pdf"
                download="wrekat2023.pdf"
              >
                <svg
                  className="h-3 w-3 lg:w-4 lg:h-4 mr-2 mt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="#111827"
                >
                  <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                </svg>
                <b className="pt-0.5">

                View Resume
                </b>

              </a>
            </button>
            </Fade>
          </div>
        </div>
        <div className="flex justify-center pt-5 w-10/12 md:w-8/12 m-auto">
          <Image
            src="/assest/img/mohammadWrekat.webp"
            className="md:max-w-xs rounded object-cover m-auto lg:m-0"
            alt="mhmad wrekat image"
            quality={100}
            width={400}
            height={100}
            loading="eager"
            priority
            placeholder="blur"
            blurDataURL="/assest/img/mohammadWrekat.webp"
          />
        </div>
      </section>
      <hr className="mx-5 md:mx-0 lg:mr-16 w-12/12 m-auto border-b-2 opacity-20 border-gray-500 my-8" />
    </React.Fragment>
  );
};

export default AboutMe;
