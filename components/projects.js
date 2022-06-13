import React from "react";
import { Slide } from "react-awesome-reveal";
import project_data from "./Data/ProjectData.json";

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
          <div id="Projects" className=" text-blue-600">
            <div>
              <div className="lg:px-10 sm:px-0 sm:pt-10 text-base sm:text-3xl text-center font-serif font-bold self-center ...">
                <div className="p-5 mx-6 bg-white rounded-xl shadow-2xl lg:rounded-l-lg lg:rounded-r-none opacity-95 lg:mx-6">
                  <p>My Latest Projects</p>
                  <br></br>
                  <p>“You can do anything you set your mind to it.”</p>

                  <br></br>
                  <p className="text-xs text-gray-400 sm:text-lg">
                    - Benjamin Franklin
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="grid grid-cols-1 justify-items-center ... gap-10 py-10 mx-5 sm:mx-0 sm:grid-cols-3 sm:gap-5">
          {project_data.map((item) => {
            return (
              <section key={item.id}>
                <div className="w-56 lg:w-80 bg-white opacity-95 rounded-xl shadow-2xl p-2">
                  <div className="text-center relative overflow-hidden rounded-2xl shadow-2xl">
                    <div className="block mt-1 text-sm sm:text-xl uppercase leading-tight font-medium text-black">
                      {item.name}
                    </div>
                    <div className="uppercase tracking-wide text-xs sm:text-sm text-red-700 pb-1 sm:pb-0 font-semibold">
                      {item.status}
                    </div>
                    <img
                      className="object-cover w-full sm:h-48 h-28 rounded-xl"
                      src={item.img}
                      alt={item.name}
                    />
                    <button
                      className="
  absolute top-28 left-16 lg:top-48 lg:left-24 lg:px-10 lg:py-2
  bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-6 rounded-full"
                    >
                      <a href={item.link}>View</a>
                    </button>
                    <div className="pl-1">
                      <div className="my-2 text-gray-500 text-xs sm:text-sm">
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
