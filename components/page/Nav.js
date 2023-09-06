// Cleaned
import React, { useEffect } from "react";
import Lottie from "lottie-react";
import weather_json from "../../public/assest/emoji/weather.json";
import clock_json from "../../public/assest/emoji/clock.json";
import moment from "moment";

const Nav = ({ weather, buttonText, buttonBg, mostBg, fewText }) => {
  // useEffect(() => {
  //   try {
  //     const btn = document.querySelector("button.mobile-menu-button");
  //     const menu = document.querySelector(".mobile-menu");
  //     btn.addEventListener("click", () => {
  //       menu.classList.toggle("hidden");
  //     });
  //   } catch (error) {
  //     handleError(error);
  //   }
  //   function handleError(error) {
  //     console.error(error);
  //   }
  // }, []);

  return (
    <React.Fragment>
      <nav
        className={`${mostBg} border-gray-200 px-2 sm:px-4 py-0 lg:fixed lg:w-full lg:z-50`}
      >
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <div className="flex md:order-0">
            {/* <button className="mobile-menu-button" type="button">
              <span className="sr-only">Open main menu</span>
              <svg
                className="text-black md:hidden flex w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button> */}
            <a href="./assest/mwrekatt.pdf" download="mwrekattt.pdf">
              <button
                type="button"
                className={`${buttonText}cursor-help animate-bounce flex ${buttonBg} focus:ring-4 focus:ring-blue-300 rounded-lg px-5 py-2 text-center ml-4 md:mr-0`}
              >
                <svg
                  className="h-3 w-3 lg:w-4 lg:h-4 mr-2 mt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="#F0FFF0"
                >
                  <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                </svg>
                <span
                  className={`${buttonText} text-sm lg:text-base font-extrabold`}
                >
                  Resume
                </span>
              </button>
            </a>
          </div>
          <div
            className="hidden justify-between items-center w-full md:flex md:w-auto md:order-2"
            id="mobile-menu-4"
          >
            <ul
              className={`${fewText} flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0`}
            >
              <li>
                <a
                  href="#Skills"
                  className="
                  hover:underline
                  text-lg cursor-grab hover:scale-110 font-medium block py-2 pr-4 pl-3 lg:mx-3 md:border-0 md:p-0"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#Projects"
                  className="hover:underline text-lg cursor-grab hover:scale-110 font-medium block py-2 lg:mx-3 pr-4 pl-3 md:border-0 md:p-0"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#Message"
                  className="hover:underline text-lg cursor-grab hover:scale-110 font-medium block py-2 lg:mx-3 pr-4 pl-3 md:border-0 md:p-0"
                >
                  Text Me
                </a>
              </li>
            </ul>
          </div>
          {weather?.length > 0 ? (
            <section className="flex md:order-2">
              <div className="w-14 h-14 lg:my-2.5">
                <Lottie animationData={clock_json} loop={true} />
              </div>

              <div
                className={`pt-6 lg:pt-8 text-base lg:text-xl font-sans pl-4 pr-1 ${fewText} cursor-grab hover:scale-110`}
              >
                {/* ⛅ */}
                {/* {weather[0]?.max_temp + "°C" || " "} */}
                <p className="text-center font-TSExtra text-base lg:text-xl">
                  {moment().format("h : mm a")}
                </p>
              </div>
            </section>
          ) : null}
        </div>
      </nav>
      <div
        className={`w-full ${mostBg} md:hidden lg:hidden sticky top-0 left-0 z-50`}
      >
        <ul
          className={`flex justify-between mx-3 md:flex-row ${fewText} md:space-x-0 md:mt-0 md:text-sm md:font-medium text-center`}
        >
          <li>
            <a
              href="#Skills"
              className="cursor-grab hover:scale-110 font-bold block py-2 pr-4 pl-3 md:border-0 md:p-0"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#Projects"
              className="cursor-grab hover:scale-110 font-bold block py-2 pr-4 pl-3 md:border-0 md:p-0"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#Message"
              className="cursor-grab hover:scale-110 font-bold block py-2 pr-4 pl-3 md:border-0 md:p-0"
            >
              Text Me
            </a>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};
export default Nav;
{
  /* <div className="hidden mobile-menu md:hidden w-full bg-gray-800 border-t-1 border-gray-100">
        <ul className="flex flex-col md:flex-row text-white md:space-x-0 md:mt-0 md:text-sm md:font-medium text-center">
          <a
            href="#Skills"
            className="cursor-grab hover:scale-110 font-bold block py-2 pr-4 pl-3  hover:text-yellow-700 md:border-0 md:p-0"
          >
            Skills
          </a>
          <a
            href="#Projects"
            className="cursor-grab hover:scale-110 font-bold block py-2 pr-4 pl-3  hover:text-yellow-700 md:border-0 md:p-0"
          >
            Projects
          </a>
          <a
            href="#Message"
            className="cursor-grab hover:scale-110 font-bold block py-2 pr-4 pl-3 hover:text-yellow-700 md:border-0 md:p-0"
          >
            Message Me
          </a>
        </ul>
      </div> */
}

//   let weathers = [];
//   if (typeof window !== "undefined") {
//     if (localStorage.getItem("weather") === null) {
//       localStorage.setItem("weather", JSON.stringify([]));
//     }
//     weathers = JSON.parse(localStorage.getItem("weather"));
//   }
