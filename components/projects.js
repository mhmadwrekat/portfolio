import React from "react";
import { Slide } from "react-awesome-reveal";
import project_data from "./Data/ProjectData.json";
import Image from "next/image";

{
  /* <img src='./assest/projectgif.gif' className="w-full" /> */
}
// Ckeck The Console Problem in Here
// Ckeck The Console Problem in Here
// Ckeck The Console Problem in Here
// Ckeck The Console Problem in Here
// Ckeck The Console Problem in Here
// Ckeck The Console Problem in Here
// Ckeck The Console Problem in Here
// Ckeck The Console Problem in Here
// Ckeck The Console Problem in Here
// Ckeck The Console Problem in Here
// Ckeck The Console Problem in Here
// Ckeck The Console Problem in Here
// Ckeck The Console Problem in Here
// Ckeck The Console Problem in Here
// Ckeck The Console Problem in Here
// Ckeck The Console Problem in Here
const projects = ({
  buttonText,
  buttonBg,
  mostText,
  fewBg,
  mostBg,
  fewText,
}) => {
  return (
    <React.Fragment>
      <section className="lg:w-10/12 mx-auto font-serif">
        <section>
          <div id="Projects" className={`${mostText}`}>
            <div>
              <div className="mx-auto lg:w-3/6 sm:pt-10 text-base text-center font-bold self-center">
                <div
                  className={`p-5 mx-6 ${mostBg} rounded-xl shadow-2xl opacity-95 lg:mx-6`}
                >
                  <p className="text-xl lg:text-4xl">My Latest Projects</p>
                  <br></br>
                  <p className="text-sm lg:text-xl">
                    “You can do anything you set your mind to it.”
                  </p>

                  <p className={`text-sm lg:text-lg ${fewText}`}>
                    - Benjamin Franklin
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="grid grid-cols-1 justify-items-center gap-10 py-10 mx-5 sm:mx-0 sm:grid-cols-3 sm:gap-5">
          {project_data.map((item) => {
            return (
              <section key={item.id} className="lg:pt-5">
                <div
                  className={`w-56 lg:w-80 ${mostBg} opacity-95 rounded-xl shadow-2xl`}
                >
                  <div className="text-center overflow-hidden rounded-xl shadow-2xl">
                    <div
                      className={`block ${fewBg} py-1 text-sm sm:text-xl uppercase leading-tight font-bold ${buttonText}`}
                    >
                      {item.name}
                    </div>
                    <div
                      className={`${fewText} uppercase tracking-wide text-xs sm:text-sm py-1 sm:pb-0 font-medium`}
                    >
                      {item.status}
                    </div>
                    {/* <Image
            src="/assest/desktop_profile.jpg"
            className=" rounded-none shadow-2xl lg:rounded-lg"
            alt="mhmad wrekat image"
            quality={100}
            // layout="fixed"
            objectFit="cover"
            width={400}
            height={450}
            loading="eager"
            priority
            placeholder="blur"
            blurDataURL="/assest/desktop_profile.jpg"
          /> */}
                    <div className="relative">
                      <Image
                        src={item.img}
                        alt={item.name}
                        className="object-cover w-full sm:h-48 h-28 rounded-none hover:scale-110"
                        width={350}
                        height={200}
                        loading="lazy"
                        // priority
                        placeholder="blur"
                        blurDataURL={item.img}
                        quality={100}
                        // layout="responsive"
                        objectFit="cover"
                      />

                      {/* <img
                      className="object-cover w-full sm:h-48 h-28 rounded-none"
                      src={item.img}
                      alt={item.name}
                    /> */}
                      <button
                        className={`text-gray-700
  absolute bottom-3 lg:bottom-4 right-16 lg:right-24 lg:px-8 lg:py-1.5
${buttonText} font-medium py-0.5 px-5 rounded-full${buttonBg}`}
                      >
                        <a href={item.link}>live url</a>
                      </button>
                    </div>

                    <div className="pl-1">
                      <div
                        className={`my-2 ${mostText} text-xs sm:text-base mx-2 h-14`}
                      >
                        {item.desc}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </section>
      </section>
    </React.Fragment>
  );
};
export default projects;
{
  /* */
}
