// Import Libraries
// #FF651D
import React, { useRef, useState, useEffect } from "react";
import Axios from "axios";
import emailjs from "@emailjs/browser";
import dynamic from "next/dynamic";
import Swal from "sweetalert2";
// Import Components
const Nav = dynamic(() => import("./page/Nav"));
const Footer = dynamic(() => import("./page/Footer"));
const Projects = dynamic(() => import("./projects"));
const ProfileBody = dynamic(() => import("./ProfileBody"));
const ProgLang = dynamic(() => import("./ProgLang"));

// Declare
const FEEDBACK = process.env.NEXT_PUBLIC_FEEDBACK_API;
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID;
const USER_ID = process.env.NEXT_PUBLIC_EMAIL_USER_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID;
const USERNAME = process.env.NEXT_PUBLIC_USERNAME;
const PASS = process.env.NEXT_PUBLIC_PASSWORD;
// const { createFeedback } = useFeedback();
// import useFeedback from "./hooks/useFeedback";

const profile = ({
  weather,
  buttonText,
  buttonBg,
  screenBg,
  mostText,
  fewBg,
  mostBg,
  fewText,
}) => {
  const Toast = Swal.mixin({
    toast: true,
    position: "bottom",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });
  const form = useRef();
  const [feedback, setFeedback] = useState([]);

  // GET FEEDBACK
  const token = Buffer.from(`${USERNAME}:${PASS}`, "utf8").toString("base64");
  const url = `${FEEDBACK}`;
  useEffect(() => {
    Axios.get(url, {
      headers: {
        Authorization: `Basic ${token}`,
      },
    }).then((res) => {
      setFeedback(res.data);
    });
  }, []);

  // POST FEEDBACK
  const handelFeedback = (event) => {
    event.preventDefault();
    // const feedback = {
    //   name: event.target.name.value,
    //   email: event.target.email.value,
    //   message: event.target.message.value,
    //   author: 2,
    // };
    //  createFeedback(feedback);
    Toast.fire({
      icon: "success",
      title: "Thank You For Your Feedback!!",
    });
    emailjs.sendForm(
      `${SERVICE_ID}`,
      `${TEMPLATE_ID}`,
      form.current,
      `${USER_ID}`
    );
    event.target.reset();
  };
  return (
    <React.Fragment>
      <section className={`${screenBg}`}>
        <Nav
          fewText={fewText}
          mostBg={mostBg}
          weather={weather}
          buttonText={buttonText}
          buttonBg={buttonBg}
          mostText={mostText}
        />
        <ProfileBody
          mostBg={mostBg}
          buttonText={buttonText}
          buttonBg={buttonBg}
          mostText={mostText}
        />
        <ProgLang
          mostBg={mostBg}
          buttonText={buttonText}
          buttonBg={buttonBg}
          mostText={mostText}
          fewBg={fewBg}
        />
        <div className="pt-10"></div>
        <Projects
          fewText={fewText}
          mostBg={mostBg}
          buttonText={buttonText}
          fewBg={fewBg}
          buttonBg={buttonBg}
          mostText={mostText}
        />

        {/* FEEDBACK FORM */}

        <section
          id="Message"
          className={`lg:w-10/12 mx-auto pt-0 antialiased leading-normal tracking-wider ${fewText} sm:pt-10 font-serif`}
        >
          <div className={`${mostText}`}>
            <div className="container flex flex-col mx-auto md:flex-row">
              <div className="flex flex-col w-full p-8 lg:w-1/3">
                <p className="text-3xl font-extrabold md:text-6xl">
                  Leave Me a Feedback!
                </p>
                <p className="text-sm hover:font-bold font-extrabold md:text-xl lg:pt-4">
                  Please provide your valuable feedback or any beautiful word
                  for support ...
                </p>
              </div>
              <div className="mx-auto">
                <div className="container w-full px-4 mx-auto">
                  <div className="">
                    <div className="w-full px-4 mx-auto lg:w-8/12">
                      <div
                        className={`relative flex flex-col w-full min-w-0 mb-6 break-words ${mostBg} rounded-lg shadow-xl`}
                      >
                        <div className="flex-auto p-5 lg:p-10">
                          <p className="mb-4 text-2xl font-semibold">
                            Suggestion, Feedback, or any Comment!!
                          </p>
                          <form
                            id="feedbackForm"
                            method="post"
                            onSubmit={handelFeedback}
                            ref={form}
                          >
                            <div className="relative w-full mb-3">
                              <label
                                className="block mb-2 text-xs font-bold uppercase"
                                htmlFor="name"
                              >
                                Name
                              </label>
                              <input
                                type="text"
                                name="name"
                                id="name"
                                className={`${screenBg} border-1 border-Green1 px-3 py-3 rounded text-sm shadow-lg w-full placeholder-black outline-none`}
                                placeholder=" "
                                required
                              />
                            </div>
                            <div className="relative w-full mb-3">
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
                                className={`${screenBg} border-1 border-Green1 px-3 py-3 rounded text-sm  shadow-lg w-full placeholder-black outline-none`}
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
                                className={`${screenBg} w-full px-3 py-3 text-sm placeholder-black border-1 border-Green1 rounded  shadow-lg focus:outline-none`}
                                placeholder=""
                                required
                              ></textarea>
                            </div>
                            <div className="mt-6 text-center">
                              <button
                                id="feedbackBtn"
                                type="submit"
                                className={`px-6 py-3 mx-auto mb-1 mr-1 text-sm font-bold text-center ${buttonText} uppercase rounded shadow-lg outline-none ${buttonBg} focus:outline-none`}
                              >
                                Submit
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer buttonText={buttonText} fewBg={fewBg} />
      </section>
    </React.Fragment>
  );
};
export default profile;
// https://wallpaperaccess.com/full/6997875.jpg
// if (typeof window !== "undefined") {
//   localStorage.setItem("feedback", JSON.stringify(feedback));
//   localStorage.setItem("weather", JSON.stringify(weather));
// }
