import Head from "next/head";
import Link from "next/link";
import React, { useEffect } from "react";
const Nav = ({ weather }) => {
  //   let weathers = [];
  //   if (typeof window !== "undefined") {
  //     if (localStorage.getItem("weather") === null) {
  //       localStorage.setItem("weather", JSON.stringify([]));
  //     }
  //     weathers = JSON.parse(localStorage.getItem("weather"));
  //   }
  useEffect(() => {
    try {
      const btn = document.querySelector("button.mobile-menu-button");
      const menu = document.querySelector(".mobile-menu");
      btn.addEventListener("click", () => {
        menu.classList.toggle("hidden");
      });
    } catch (error) {
      handleError(error);
    }
    function handleError(error) {
      console.error(error);
    }
  }, []);
  return (
    <>
      <Head>
        <title>Mhmad Wrekat</title>
        <meta
          name="google-site-verification"
          content="HDEEQ5-e6iIohsSP76gB4dymhNOG6VmNHESihFQL4Dc"
        />
        <meta name="description" content="Web Developer - Jordan - Amman" />
        <link rel="icon" href="./assest/icon.png" />
      </Head>
      <nav
        className="bg-white opacity-80 border-gray-200 px-2 sm:px-4 py-4 rounded"
        translate="no"
      >
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <div className="flex md:order-0">
            <button className="mobile-menu-button" type="button">
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
            </button>
            <a href="./assest/wrekatt.pdf" download="wrekatt.pdf">
              <button
                type="button"
                className=" cursor-help animate-bounce flex text-white 
hover:bg-yellow-500 bg-yellow-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-4 md:mr-0"
              >
                <svg
                  className="fill-current w-4 h-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                </svg>
                <span>Resume</span>
              </button>
            </a>
          </div>
          <div
            className="hidden justify-between items-center w-full md:flex md:w-auto md:order-2"
            id="mobile-menu-4"
          >
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 text-black md:text-sm md:font-medium">
              <li>
                <button>
                  <a
                    href="#Skills"
                    className="cursor-grab hover:scale-110 font-bold block py-2 pr-4 pl-3 text-black hover:text-yellow-700 md:border-0 md:p-0"
                  >
                    Skills
                  </a>
                </button>
              </li>
              <li>
                <button>
                  <a
                    href="#Projects"
                    className="cursor-grab hover:scale-110 font-bold block py-2 pr-4 pl-3  hover:text-yellow-700 md:border-0 md:p-0"
                  >
                    Projects
                  </a>
                </button>
              </li>
              <li>
                <button>
                  <a
                    href="#Message"
                    className="cursor-grab hover:scale-110 font-bold block py-2 pr-4 pl-3  hover:text-yellow-700 md:border-0 md:p-0"
                  >
                    Message Me
                  </a>
                </button>
              </li>
            </ul>
          </div>
          {weather.length > 0 ? (
            <p className="md:order-2 text-sm sm:text-lg font-bold font-sans pl-3 text-yellow-500 hover:text-yellow-700 cursor-grab hover:scale-110">
              ⛅ {weather[0].max_temp} °C
            </p>
          ) : null}
        </div>
      </nav>
      <div
        translate="no"
        className="hidden mobile-menu md:hidden w-full bg-white opacity-80 border-gray-200"
      >
        <ul className="flex flex-col md:flex-row text-black md:space-x-0 md:mt-0 md:text-sm md:font-medium text-center">
          <button>
            <a
              href="#Skills"
              className="cursor-grab hover:scale-110 font-bold block py-2 pr-4 pl-3  hover:text-yellow-700 md:border-0 md:p-0"
            >
              Skills
            </a>
          </button>
          <button>
            <a
              href="#Projects"
              className="cursor-grab hover:scale-110 font-bold block py-2 pr-4 pl-3  hover:text-yellow-700 md:border-0 md:p-0"
            >
              Projects
            </a>
          </button>

          <button>
            <a
              href="#Message"
              className="cursor-grab hover:scale-110 font-bold block py-2 pr-4 pl-3 hover:text-yellow-700 md:border-0 md:p-0"
            >
              Message Me
            </a>
          </button>
        </ul>
      </div>
    </>
  );
};
export default Nav;
