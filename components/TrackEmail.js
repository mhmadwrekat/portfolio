import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import emailjs from "@emailjs/browser";
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID;
const USER_ID = process.env.NEXT_PUBLIC_EMAIL_USER_ID;
const TEMPLATE_ID = "template_0dhx9oy";
import moment from "moment";

const TrackEmail = () => {
  const [countryCode, setCountryCode] = useState();
  const [browserName, setBrowserName] = useState();
  const [device, setDevice] = useState();
  const [date, setDate] = useState(moment().format("Do / MMMM / YYYY"));
  const [time, setTime] = useState(moment().format("mm : h a"));
  const [screen, setScreen] = useState();
  const [connection, setConnection] = useState();
  const form = useRef();

  // Function Get Country Code .
  const get_country = () => {
    localStorage.getItem("country_code")
      ? setCountryCode(localStorage.getItem("country_code"))
      : axios.get("https://geolocation-db.com/json/").then((res) => {
          localStorage.setItem("country_code", res.data.country_code);
          setCountryCode(res.data.country_code);
        });
  };
  // Function Get User Browser .
  const get_browser = () => {
    let userAgent = navigator.userAgent;
    if (userAgent.match(/chrome|chromium|crios/i)) {
      setBrowserName("chrome");
    } else if (userAgent.match(/firefox|fxios/i)) {
      setBrowserName("firefox");
    } else if (userAgent.match(/safari/i)) {
      setBrowserName("safari");
    } else if (userAgent.match(/opr\//i)) {
      setBrowserName("opera");
    } else if (userAgent.match(/edg/i)) {
      setBrowserName("edge");
    } else {
      setBrowserName("No browser detection");
    }
    let windowDevice = window.navigator.userAgent;
    let re = /\((.*)\)/;
    let ready = windowDevice.match(re)[1];
    setDevice(window?.frames?.clientInformation?.platform);
    setScreen(window.screen.width);
    setConnection(window?.frames?.clientInformation?.connection?.effectiveType);
  };
  useEffect(() => {
    get_country();
    get_browser();
    countryCode &&
      browserName &&
      device &&
      emailjs.sendForm(
        `service_bf0j5yc`,
        `template_0dhx9oy`,
        form.current,
        `${USER_ID}`
      );
  }, [countryCode, browserName, device]);

  // connection && console.log(device);
  return (
    <React.Fragment>
      <section className="hidden">
        <form ref={form}>
          {countryCode && (
            <div className="hidden">
              <label
                className="block mb-2 text-xs font-bold uppercase"
                htmlFor="country"
              ></label>
              <input
                type="text"
                name="country"
                id="country"
                defaultValue={countryCode}
              />
            </div>
          )}
          {browserName && (
            <div className="hidden">
              <label
                className="block mb-2 text-xs font-bold uppercase"
                htmlFor="browserr"
              ></label>
              <input
                type="text"
                name="browserr"
                id="browserr"
                className="hidden"
                defaultValue={browserName}
              />
            </div>
          )}
          {device && (
            <div className="hidden">
              <label
                className="block mb-2 text-xs font-bold uppercase"
                htmlFor="device"
              ></label>
              <input
                type="text"
                name="device"
                id="device"
                className="hidden"
                defaultValue={device}
              />
            </div>
          )}
          {date && (
            <div className="hidden">
              <label
                className="block mb-2 text-xs font-bold uppercase"
                htmlFor="date"
              ></label>
              <input
                type="text"
                name="date"
                id="date"
                className="hidden"
                defaultValue={date}
              />
            </div>
          )}
          {time && (
            <div className="hidden">
              <label
                className="block mb-2 text-xs font-bold uppercase"
                htmlFor="time"
              ></label>
              <input
                type="text"
                name="time"
                id="time"
                className="hidden"
                defaultValue={time}
              />
            </div>
          )}
          {screen && (
            <div className="hidden">
              <label
                className="block mb-2 text-xs font-bold uppercase"
                htmlFor="screen"
              ></label>
              <input
                type="text"
                name="screen"
                id="screen"
                className="hidden"
                defaultValue={screen}
              />
            </div>
          )}

          {connection && (
            <div className="hidden">
              <label
                className="block mb-2 text-xs font-bold uppercase"
                htmlFor="connection"
              ></label>
              <input
                type="text"
                name="connection"
                id="connection"
                className="hidden"
                defaultValue={connection}
              />
            </div>
          )}
          {/* <div className="relative w-full mb-3">
                              <label
                                className="block mb-2 text-xs font-bold uppercase"
                                htmlFor="email"
                              >
                                Email
                              </label>
                              <input
                                type="email"
                                name="email"
                                id="email"
                                className={`border-1 border-Green1 px-3 py-3 rounded text-sm  shadow-lg w-full placeholder-black outline-none`}
                                placeholder=" "
                                required
                              />
                            </div>
                            <div className="relative w-full mb-3">
                              <label
                                className="block mb-2 text-xs font-bold uppercase"
                                htmlFor="feedback"
                              >
                                Message
                              </label>
                              <textarea
                                maxLength="300"
                                name="message"
                                id="feedback"
                                rows="4"
                                cols="80"
                                className={` w-full px-3 py-3 text-sm placeholder-black border-1 border-Green1 rounded  shadow-lg focus:outline-none`}
                                placeholder=""
                                required
                              ></textarea>
                            </div> */}
          <div className="hidden">
            <button className="hidden">Submit</button>
          </div>
        </form>
      </section>
    </React.Fragment>
  );
};

export default TrackEmail;
