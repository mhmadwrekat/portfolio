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
const projects = () => {
  return (
    <React.Fragment>
      <section className="lg:w-10/12 mx-auto">
        <section>
          <div id="Projects" className="text-blue-500">
            <div>
              <div className="mx-auto lg:w-3/6 sm:pt-10 text-base sm:text-3xl text-center font-serif font-bold self-center">
                <div className="p-5 mx-6 bg-gray-800 rounded-xl shadow-2xl opacity-95 lg:mx-6">
                  <p>My Latest Projects</p>
                  <br></br>
                  <p>“You can do anything you set your mind to it.”</p>

                  <br></br>
                  <p className="text-xs text-gray-300 sm:text-lg">
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
                <div className="w-56 lg:w-80 bg-white opacity-95 rounded-xl shadow-2xl">
                  <div className="text-center overflow-hidden rounded-xl shadow-2xl">
                    <div className="block bg-gray-800 py-1 text-sm sm:text-xl uppercase leading-tight font-medium text-white">
                      {item.name}
                    </div>
                    <div className="uppercase tracking-wide text-xs sm:text-sm text-red-700 py-1 sm:pb-0 font-semibold">
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
                        className="text-gray-700
  absolute bottom-3 lg:bottom-4 right-16 lg:right-24 lg:px-8 lg:py-1.5
  bg-yellow-400 hover:bg-yellow-600 text-white font-bold py-0.5 px-5 rounded-full "
                      >
                        <a href={item.link}>live url</a>
                      </button>
                    </div>

                    <div className="pl-1">
                      <div className="my-2 text-gray-900 text-xs sm:text-sm mx-2 h-14">
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
