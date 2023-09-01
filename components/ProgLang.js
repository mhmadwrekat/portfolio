import React from "react";
import { Reveal, Fade, Slide } from "react-awesome-reveal";

const ProgLang = ({ buttonText, buttonBg, fewBg, mostBg }) => {
  return (
    <React.Fragment>
      <section
        id="Skills"
        className="font-serif pt-6 text-xs lg:text-lg sm:pt-0 sm:text-base md:pt-7 lg:pt-0 w-11/12 lg:w-9/12 mx-auto"
      >
        <section
          className={`${mostBg} grid grid-cols-2 gap-6 lg:gap-10 px-3 py-5 ${buttonText} shadow-xl opacity-95 rounded-lg sm:py-10 sm:px-12`}
        >
          {/* <Slide triggerOnce delay={1000}>
            <div>
              <span className="pb-0 font-semibold uppercase">python</span>
              <section className="flex items-center">
                <div className={`w-full ${mostBg} rounded-full h-1.5`}>
                  <div
                    className={`${buttonBg} h-1.5 w-10/12 rounded-full`}
                  ></div>

                </div>
                <p className="pt-2 pl-1.5 font-semibold"> 90%</p>
              </section>
            </div>
          </Slide>
          <Slide triggerOnce>
            <div>
              <span className="pb-0 font-semibold uppercase">django</span>
              <section className="flex items-center">
                <div className={`w-full ${mostBg} rounded-full h-1.5`}>
                  <div
                    className={`${buttonBg} h-1.5 w-10/12 rounded-full`}
                  ></div>
                </div>
                <p className="pt-2 pl-1.5 font-semibold"> 90%</p>
              </section>
            </div>
          </Slide> */}
          {/* <Slide triggerOnce delay={1000}>
            <div>
              <span className="pb-0 font-semibold uppercase">postgress db</span>
              <section className="flex items-center">
                <div className={`w-full ${mostBg} rounded-full h-1.5`}>
                  <div
                    className={`${buttonBg} h-1.5 w-10/12 rounded-full`}
                  ></div>
                </div>
                <p className="pt-2 pl-1.5 font-semibold"> 91%</p>
              </section>
            </div>
          </Slide>
          <Slide triggerOnce>
            <div>
              <span className="pb-0 font-semibold uppercase">mongo db</span>
              <section className="flex items-center">
                <div className={`w-full ${mostBg} rounded-full h-1.5`}>
                  <div
                    className={`${buttonBg} h-1.5 w-10/12 rounded-full`}
                  ></div>
                </div>
                <p className="pt-2 pl-1.5 font-semibold"> 92%</p>
              </section>
            </div>
          </Slide> */}
          <Slide triggerOnce delay={1000}>
            <div>
              <span className="pb-0 font-semibold uppercase">javascript</span>
              <section className="flex items-center">
                <div className={`w-full ${fewBg} rounded-full h-1.5`}>
                  <div
                    className={`${buttonBg} h-1.5 w-10/12 rounded-full`}
                  ></div>
                </div>
                <p className="pt-2 pl-1.5 font-semibold"> 95%</p>
              </section>
            </div>
          </Slide>
          <Slide triggerOnce>
            <div>
              <span className="pb-0 font-semibold uppercase">nodejs</span>
              <section className="flex items-center">
                <div className={`w-full ${fewBg} rounded-full h-1.5`}>
                  <div
                    className={`${buttonBg} h-1.5 w-10/12 rounded-full`}
                  ></div>
                </div>
                <p className="pt-2 pl-1.5 font-semibold"> 90%</p>
              </section>
            </div>
          </Slide>
          <Slide triggerOnce delay={1000}>
            <div>
              <span className="pb-0 font-semibold uppercase">nextjs</span>
              <section className="flex items-center">
                <div className={`w-full ${fewBg} rounded-full h-1.5`}>
                  <div
                    className={`${buttonBg} h-1.5 w-10/12 rounded-full`}
                  ></div>
                </div>
                <p className="pt-2 pl-1.5 font-semibold"> 95%</p>
              </section>
            </div>
          </Slide>
          <Slide triggerOnce>
            <div>
              <span className="pb-0 font-semibold uppercase">React</span>
              <section className="flex items-center">
                <div className={`w-full ${fewBg} rounded-full h-1.5`}>
                  <div
                    className={`${buttonBg} h-1.5 w-10/12 rounded-full`}
                  ></div>
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
                <div className={`w-full ${fewBg} rounded-full h-1.5`}>
                  <div
                    className={`${buttonBg} h-1.5 w-10/12 rounded-full`}
                  ></div>
                </div>
                <p className="pt-2 pl-1.5 font-semibold"> 93%</p>
              </section>
            </div>
          </Slide>
          <Slide triggerOnce>
            <div>
              <span className="pb-0 font-semibold uppercase">Tailwindcss</span>
              <section className="flex items-center">
                <div className={`w-full ${fewBg} rounded-full h-1.5`}>
                  <div
                    className={`${buttonBg} h-1.5 w-10/12 rounded-full`}
                  ></div>
                </div>
                <p className="pt-2 pl-1.5 font-semibold"> 97%</p>
              </section>
            </div>
          </Slide>
          <Slide triggerOnce delay={1000}>
            <div>
              <span className="pb-0 font-semibold uppercase">Html5</span>
              <section className="flex items-center">
                <div className={`w-full ${fewBg} rounded-full h-1.5`}>
                  <div
                    className={`${buttonBg} h-1.5 w-10/12 rounded-full`}
                  ></div>
                </div>
                <p className="pt-2 pl-1.5 font-semibold"> 94%</p>
              </section>
            </div>
          </Slide>
          <Slide triggerOnce>
            <div>
              <span className="pb-0 font-semibold uppercase">Css3</span>
              <section className="flex items-center">
                <div className={`w-full ${fewBg} rounded-full h-1.5`}>
                  <div
                    className={`${buttonBg} h-1.5 w-10/12 rounded-full`}
                  ></div>
                </div>
                <p className="pt-2 pl-1.5 font-semibold"> 95%</p>
              </section>
            </div>
          </Slide>
          <Slide triggerOnce delay={1000}>
            <div>
              <span className="pb-0 font-semibold uppercase">markdown</span>
              <section className="flex items-center">
                <div className={`w-full ${fewBg} rounded-full h-1.5`}>
                  <div
                    className={`${buttonBg} h-1.5 w-10/12 rounded-full`}
                  ></div>
                </div>
                <p className="pt-2 pl-1.5 font-semibold"> 97%</p>
              </section>
            </div>
          </Slide>
          <Slide triggerOnce>
            <div>
              <span className="pb-0 font-semibold uppercase">Github</span>
              <section className="flex items-center">
                <div className={`w-full ${fewBg} rounded-full h-1.5`}>
                  <div
                    className={`${buttonBg} h-1.5 w-10/12 rounded-full`}
                  ></div>
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
                <div className={`w-full ${fewBg} rounded-full h-1.5`}>
                  <div
                    className={`${buttonBg} h-1.5 w-10/12 rounded-full`}
                  ></div>
                </div>
                <p className="pt-2 pl-1.5 font-semibold"> 92%</p>
              </section>
            </div>
          </Slide>
          <Slide triggerOnce>
            <div>
              <span className="pb-0 font-semibold uppercase">deploy</span>
              <section className="flex items-center">
                <div className={`w-full ${fewBg} rounded-full h-1.5`}>
                  <div
                    className={`${buttonBg} h-1.5 w-10/12 rounded-full`}
                  ></div>
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
