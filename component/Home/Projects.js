// Need To Refactor
// Need To Refactor
// Need To Refactor
// Need To Refactor
// Need To Refactor
// Need To Refactor
import React from "react";
import Image from "next/image";
import HeadLine from "./HeadLine";
import { projectsData } from "../../config/Config";
const Projects = ({ theme, new_tab }) => {
  return (
    <React.Fragment>
      <section className={`${theme.mode.mainTextColor} m-5 md:m-0`}>
        <HeadLine
          theme={theme}
          mainText={"Projects"}
          otherText={{
            JSX: (
              <p className={`${theme.mode.otherTextColor} text-base mt-4`}>
                My Latest Projects <br />
                “ You can do anything you set your mind to it. ”
                <br />
                <strong className={`${theme.color.txt}`}>Benjamin Franklin</strong>
              </p>
            ),
          }}
        />
        <section
          className={`${theme.mode.firstBG} w-12/12 md:w-11/12 md:mr-auto py-5`}
        >
          <section className="overflow-x-scroll flex">
            {projectsData.map((item, idx) => {
              return (

                <div key={idx} className="flex-none pb-10 pt-1 px-4">
                  <div
                    id="card"
                    className={`hover:-translate-y-2 duration-700 ease-in-out flex ${theme.mode.secondBG} ring-1 rounded max-w-sm md:max-w-lg`}
                  >
                    <Image
                      src={item.img}
                      className="cursor-pointer object-cover w-4/12"
                      alt={item.name}
                      quality={100}
                      width={200}
                      height={100}
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL={item.img}
                      onClick={() => {
                        new_tab(item.link);
                      }}
                    />

                    <div className="grid justify-center p-4">
                      <p className="mb-2 text-2xl font-TSExtra">{item.name}</p>
                      <p className={`${theme.mode.otherTextColor} mb-3 font-TSmedium`}>
                        {item.desc}
                      </p>
                      <b className={`${theme.color.bg} w-5/12 text-xs py-1 text-gray-900 rounded text-center`}>
                        {item.status}
                      </b>
                    </div>
                  </div>
                </div>
              );
            })}
          </section>
        </section>
      </section>
    </React.Fragment>
  );
};

export default Projects;
// {
// {projectData.map((item, idx) => {
//   return (
//     <div key={idx} className="bg-blue-300">
//       <p>{item.name}</p>
// <Image
//   src={item.img}
//   className="rounded object-cover w-full h-full"
//   alt="mhmad wrekat image"
//   quality={100}
//   width={200}
//   height={100}
//   loading="eager"
//   priority
//   placeholder="blur"
//   blurDataURL="/assest/img/mohammad_wrekat.webp"
// />
//     </div>
//   );
// })}
// }
