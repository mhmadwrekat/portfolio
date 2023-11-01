import React, { useState } from "react";
import dynamic from "next/dynamic";
const Aside = dynamic(() => import("./Aside"));
const AsideMobile = ({ theme, handle_mode, new_tab }) => {
  const [open, setOpen] = useState(false);
  const handle_drawer = () => setOpen(!open);

  const handle_time = () => {
    const date = new Date();
    // const hour = date.getHours();
    // const minute = date.getMinutes();
    // const rightMinute = minute.toString().length == 1 ? `0${minute}` : minute;
    // return ` ${hour} : ${rightMinute} `;
    let day;
    switch (date.getDay()) {
      case 0:
        day = "Sunday";
        break;
      case 1:
        day = "Monday";
        break;
      case 2:
        day = "Tuesday";
        break;
      case 3:
        day = "Wednesday";
        break;
      case 4:
        day = "Thursday";
        break;
      case 5:
        day = "Friday";
        break;
      case 6:
        day = "Saturday";
        break;
    }
    const fullDate = `${day} | ${date.getDate()} - ${date.getMonth()} - ${date.getFullYear()}`;
    return fullDate;
  };
  return (
    <React.Fragment>
      <section
        className={`${theme.mode.secondBG} flex justify-between items-center w-12/12 md:px-10 z-0`}
      >
        <button
          onClick={handle_drawer}
          aria-label="menu"
          className="px-4 ring-1 py-2 m-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width={25}
            height={25}
            viewBox="0 0 50 50"
            fill={theme.color.svg}
          >
            <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
          </svg>
        </button>
        <b className={`${theme.color.txt} font-Acme px-4 text-xl`}>
          {handle_time()}
        </b>
      </section>
      <section>
        {open ? (
          <section className="h-screen fixed top-0 z-40">
            <Aside
              handle_drawer={handle_drawer}
              theme={theme}
              handle_mode={handle_mode}
              new_tab={new_tab}
            />
          </section>
        ) : (
          <React.Fragment />
        )}
      </section>
    </React.Fragment>
  );
};

export default AsideMobile;
