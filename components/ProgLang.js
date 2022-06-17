import React from "react";
import { Reveal, Fade, Slide } from "react-awesome-reveal";

const ProgLang = () => {
  return (
    <React.Fragment>
      <section
        id="Skills"
        className=" pt-10 text-xs sm:pt-0 sm:text-base md:pt-10 w-11/12 lg:w-9/12 mx-auto"
      >
        <section className="grid grid-cols-2 gap-5 px-3 py-5 text-white bg-gray-800 shadow-2xl opacity-95 rounded-lg sm:py-10 sm:px-12">
          <Slide triggerOnce delay={1000}>
            <div>
              <span className="pb-0 font-semibold uppercase">python</span>
              <section className="flex items-center">
                <div className="w-full bg-gray-300 rounded-full h-1.5">
                  <div className="bg-yellow-500 h-1.5 w-10/12 rounded-full"></div>
                  {/* <input
                    type="range"
                    id="points"
                    name="points"
                    min="0"
                    max="10"
                    className="w-full bg-gray-300 rounded-full h-1.5"
                  /> */}
                </div>
                <p className="pt-2 pl-1.5 font-semibold"> 90%</p>
              </section>
            </div>
          </Slide>
          <Slide triggerOnce>
            <div>
              <span className="pb-0 font-semibold uppercase">django</span>
              <section className="flex items-center">
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div className="bg-yellow-500 h-1.5 w-10/12 rounded-full"></div>
                </div>
                <p className="pt-2 pl-1.5 font-semibold"> 90%</p>
              </section>
            </div>
          </Slide>
          <Slide triggerOnce delay={1000}>
            <div>
              <span className="pb-0 font-semibold uppercase">postgress db</span>
              <section className="flex items-center">
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div className="bg-yellow-500 h-1.5 w-10/12 rounded-full"></div>
                </div>
                <p className="pt-2 pl-1.5 font-semibold"> 91%</p>
              </section>
            </div>
          </Slide>
          <Slide triggerOnce>
            <div>
              <span className="pb-0 font-semibold uppercase">mongo db</span>
              <section className="flex items-center">
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div className="bg-yellow-500 h-1.5 w-10/12 rounded-full"></div>
                </div>
                <p className="pt-2 pl-1.5 font-semibold"> 92%</p>
              </section>
            </div>
          </Slide>
          <Slide triggerOnce delay={1000}>
            <div>
              <span className="pb-0 font-semibold uppercase">javascript</span>
              <section className="flex items-center">
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div className="bg-yellow-500 h-1.5 w-11/12 rounded-full"></div>
                </div>
                <p className="pt-2 pl-1.5 font-semibold"> 95%</p>
              </section>
            </div>
          </Slide>
          <Slide triggerOnce>
            <div>
              <span className="pb-0 font-semibold uppercase">nodejs</span>
              <section className="flex items-center">
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div className="bg-yellow-500 h-1.5 w-10/12 rounded-full"></div>
                </div>
                <p className="pt-2 pl-1.5 font-semibold"> 90%</p>
              </section>
            </div>
          </Slide>
          <Slide triggerOnce delay={1000}>
            <div>
              <span className="pb-0 font-semibold uppercase">nextjs</span>
              <section className="flex items-center">
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div className="bg-yellow-500 h-1.5 w-11/12 rounded-full"></div>
                </div>
                <p className="pt-2 pl-1.5 font-semibold"> 95%</p>
              </section>
            </div>
          </Slide>
          <Slide triggerOnce>
            <div>
              <span className="pb-0 font-semibold uppercase">React</span>
              <section className="flex items-center">
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div className="bg-yellow-500 h-1.5 w-11/12 rounded-full"></div>
                </div>
                <p className="pt-2 pl-1.5 font-semibold"> 96%</p>
              </section>
            </div>
          </Slide>
          <Slide triggerOnce delay={1000}>
            <div>
              <span className="pb-0 font-semibold uppercase">
                React Bootstrap
              </span>
              <section className="flex items-center">
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div className="bg-yellow-500 h-1.5 w-11/12 rounded-full"></div>
                </div>
                <p className="pt-2 pl-1.5 font-semibold"> 93%</p>
              </section>
            </div>
          </Slide>
          <Slide triggerOnce>
            <div>
              <span className="pb-0 font-semibold uppercase">Tailwindcss</span>
              <section className="flex items-center">
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div className="bg-yellow-500 h-1.5 w-11/12 rounded-full"></div>
                </div>
                <p className="pt-2 pl-1.5 font-semibold"> 97%</p>
              </section>
            </div>
          </Slide>
          <Slide triggerOnce delay={1000}>
            <div>
              <span className="pb-0 font-semibold uppercase">Html5</span>
              <section className="flex items-center">
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div className="bg-yellow-500 h-1.5 w-11/12 rounded-full"></div>
                </div>
                <p className="pt-2 pl-1.5 font-semibold"> 94%</p>
              </section>
            </div>
          </Slide>
          <Slide triggerOnce>
            <div>
              <span className="pb-0 font-semibold uppercase">Css3</span>
              <section className="flex items-center">
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div className="bg-yellow-500 h-1.5 w-11/12 rounded-full"></div>
                </div>
                <p className="pt-2 pl-1.5 font-semibold"> 95%</p>
              </section>
            </div>
          </Slide>
          <Slide triggerOnce delay={1000}>
            <div>
              <span className="pb-0 font-semibold uppercase">markdown</span>
              <section className="flex items-center">
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div className="bg-yellow-500 h-1.5 w-11/12 rounded-full"></div>
                </div>
                <p className="pt-2 pl-1.5 font-semibold"> 97%</p>
              </section>
            </div>
          </Slide>
          <Slide triggerOnce>
            <div>
              <span className="pb-0 font-semibold uppercase">Github</span>
              <section className="flex items-center">
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div className="bg-yellow-500 h-1.5 w-11/12 rounded-full"></div>
                </div>
                <p className="pt-2 pl-1.5 font-semibold"> 96%</p>
              </section>
            </div>
          </Slide>
          <Slide triggerOnce delay={1000}>
            <div>
              <span className="pb-0 font-semibold uppercase">
                restframework
              </span>
              <section className="flex items-center">
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div className="bg-yellow-500 h-1.5 w-10/12 rounded-full"></div>
                </div>
                <p className="pt-2 pl-1.5 font-semibold"> 92%</p>
              </section>
            </div>
          </Slide>
          <Slide triggerOnce>
            <div>
              <span className="pb-0 font-semibold uppercase">deploy</span>
              <section className="flex items-center">
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div className="bg-yellow-500 h-1.5 w-10/12 rounded-full"></div>
                </div>
                <p className="pt-2 pl-1.5 font-semibold"> 95%</p>
              </section>
            </div>
          </Slide>
        </section>
      </section>
    </React.Fragment>
  );
};

export default ProgLang;
