// Need To Refactor
// Need To Refactor
// Need To Refactor
// Need To Refactor
// Need To Refactor
// Need To Refactor
import React, { useRef } from "react";
import Image from "next/image";
import { commentsData } from "../../config/Config";
import { Fade } from "react-awesome-reveal";
import HeadLine from "./HeadLine";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID;
const USER_ID = process.env.NEXT_PUBLIC_EMAIL_USER_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID;
const Comment = ({ theme }) => {
  const form = useRef();

  const handle_feedback = (event) => {
    event.preventDefault();
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
      <HeadLine
        theme={theme}
        mainText={"Comment"}
        otherText={{
          JSX: (
            <p className={`${theme.mode.otherTextColor} text-base mt-4`}>
              Leave Me a <b className={`${theme.color.txt}`}>Feedback! </b>{" "}
              Please provide your valuable feedback,{" "}
              <b className={`${theme.color.txt}`}>comment </b>or any beautiful
              word for support ...
            </p>
          ),
        }}
      />
      <section
        className={`${theme.mode.mainTextColor} m-5 md:m-0 grid md:flex py-8 md:justify-around`}
      >
        <div className="md:px-4 w-11/12 md:w-6/12 lg:w-5/12 2xl:w-5/12 m-auto">
          <div
            className={`${theme.mode.secondBG} ring-1 flex flex-col w-full min-w-0 mb-6 break-words rounded-lg shadow-xl`}
          >
            <div className="flex-auto p-5 lg:p-10">
              <form
                id="feedbackForm"
                method="post"
                onSubmit={handle_feedback}
                ref={form}
              >
                <div className="w-full mb-3 font-TSbold">
                  <label
                    className="block mb-1 text-sm md:text-base font-bold uppercase"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className={`${theme.mode.firstBG} ring-1 border-1 px-3 py-3 rounded text-sm shadow-lg w-full placeholder-black outline-none`}
                    placeholder=" "
                    required
                  />
                </div>
                <div className="w-full mb-3 font-TSbold">
                  <label
                    className="block mb-1 pt-2 text-sm md:text-base font-bold uppercase"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className={`${theme.mode.firstBG} ring-1 border-1 border-Green1 px-3 py-3 rounded text-sm  shadow-lg w-full placeholder-black outline-none`}
                    placeholder=" "
                    required
                  />
                </div>
                <div className="w-full mb-3 font-TSbold">
                  <label
                    className="block mb-1 pt-2 text-sm md:text-base font-bold uppercase"
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
                    className={`${theme.mode.firstBG} ring-1 w-full px-3 py-3 text-sm placeholder-black border-1 rounded  shadow-lg focus:outline-none`}
                    placeholder=""
                    required
                  ></textarea>
                </div>
                <div className="mt-6 text-center">
                  <button
                    id="feedbackBtn"
                    type="submit"
                    className={`${theme.color.bg} hover:scale-110 duration-500 ease-in-out text-gray-900 px-8 md:px-6 py-2 md:py-3 mx-auto mb-1 mr-1 text-sm font-bold text-center uppercase rounded shadow-lg outline-none focus:outline-none`}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="md:pr-4 w-12/12 md:w-5/12">
          <p className={`${theme.color.txt} text-3xl font-TSbold pb-3`}>
            Most Comments
          </p>
          {commentsData.map((item, idx) => {
            return (
              <Fade key={idx} direction="up" cascade damping={0.1}>
                <div
                  className={`${theme.mode.secondBG} hover:-translate-x-2 duration-700 my-4 overflow-hidden relative max-w-sm ring-1 rounded-xl flex items-center gap-6`}
                >
                  <Image
                    src="/assest/img/user.webp"
                    className="absolute -left-6 w-24 h-24 rounded-full shadow-lg"
                    alt="mhmad wrekat image"
                    quality={100}
                    width={100}
                    height={50}
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="/assest/img/user.webp"
                  />
                  <div className="flex flex-col py-3 md:py-5 pl-20 md:pl-24">
                    <strong className={`text-base md:text-lg font-TSbold`}>
                      {item.name}
                    </strong>
                    <span
                      className={`${theme.mode.otherTextColor} pl-2 text-sm font-TSmedium`}
                    >
                      {item.message}
                    </span>
                  </div>
                </div>
              </Fade>
            );
          })}
        </div>
      </section>
      <hr className="mx-5 md:mx-0 lg:mr-16 w-12/12 m-auto border-b-2 opacity-20 border-gray-500 my-8" />
    </React.Fragment>
  );
};

export default Comment;
