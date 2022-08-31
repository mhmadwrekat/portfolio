import React, { useState } from "react";

const test = ({ data, observe, autoplay }) => {
  //
  let [isOpen, setIsOpen] = useState(true);
  const shareMedia = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="mx-2 h-12 w-12"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
          />
        </svg>
      ),
      time: 300,
    },
  ];
  const srcVideo = `https://www.youtube.com/embed/${retrieve_youtube_code(
    "https://www.youtube.com/watch?v=2NTkTPutU3Q"
  )}?autoplay=1&rel=0&showinfo=0`;
  //
  function retrieve_youtube_code(link) {
    let code = "";
    // check for watch videos
    if (link.includes("watch/")) {
      code = link.split("watch/")[1];
      return code;
    } else if (link.includes("watch?")) {
      // check for regular youtube videos
      code = link.split("watch?")[1];
      const youtube_code_for_thumbnail = code?.split("v=")[1];
      return youtube_code_for_thumbnail?.split("&")[0];
    } else {
      // check for Link without watch
      code = link.split("youtu.be/")[1];
      return code;
    }
  }
  const open_share = () => setIsOpen(!isOpen);
  return (
    <section ref={observe} id="video">
      <section className="relative mx-auto snap-center lg:w-7/12 2xl:w-4/12">
        <section className="mx-auto h-screen border-t-2 border-red-600 lg:w-10/12 lg:border-t-0 lg:py-5 2xl:w-10/12">
          <iframe
            allow="autoplay"
            className="z-10 h-full w-full lg:rounded-xl lg:shadow-xl"
            src={srcVideo}
            allowFullScreen={true}
            // title="Video"
            // name="youtube embed"
            // allowFullScreen={true}
          ></iframe>
          {/******** SHARE MODAL ********/}
          {/******** SHARE MODAL ********/}
          {isOpen ? (
            <section className="fixed inset-0 z-40 overflow-y-auto">
              <section className="flex min-h-full items-center justify-center p-4 text-center">
                <section className="w-full max-w-xs transform overflow-hidden rounded-2xl bg-white p-3 text-left align-middle shadow-xl transition-all">
                  <h3 className="my-3 text-center font-TSSemi text-lg leading-6 text-gray-900 ">
                    شارك عبر :
                  </h3>
                  <div className="flex justify-center">
                    {shareMedia.map((item, idx) => {
                      return <div key="idx">{item.icon}</div>;
                    })}
                  </div>

                  <button
                    className="z-50 float-right my-2 rounded-md bg-red-500 py-1.5 px-5 font-TSSemi text-white"
                    onClick={() => {
                      open_share();
                    }}
                  >
                    إغلاق
                  </button>
                </section>
              </section>
            </section>
          ) : null}

          {/******** DESKTOP ICONS ********/}
          {/* <div className="absolute bottom-28 -left-6 hidden lg:grid">
            <ThreeDotIcon className="h-8 w-8 cursor-pointer fill-white lg:h-11 lg:w-11 lg:fill-palette-gray-darkGray" />
            <ViewsIcon className="my-0 h-8 w-8 cursor-pointer fill-white lg:h-11 lg:w-11 lg:fill-palette-gray-darkGray" />
            <p className="pl-1 text-center font-TSExtra text-sm text-palette-gray-darkGray">
              13459
            </p>
            <SharekIncon
              className="my-5 h-9 w-9 cursor-pointer fill-white lg:h-12 lg:w-12 lg:fill-palette-gray-darkGray"
              onClick={() => {
                open_share();
              }}
            />
          </div> */}
          {/******** MOBILE ICONS ********/}
          <div className="absolute right-5 bottom-20 z-50 bg-BLUE lg:hidden">
            {/* <ThreeDotIcon className="h-8 w-8 cursor-pointer fill-white lg:h-11 lg:w-11 lg:fill-palette-gray-darkGray" />
            <ViewsIcon className="my-0 h-8 w-8 cursor-pointer fill-white lg:h-11 lg:w-11 lg:fill-palette-gray-darkGray" />
           */}
            <p className="pl-2 text-center font-TSExtra text-sm text-white">
              3457
            </p>
            <p
              className="text-white my-5 h-9 w-9 cursor-pointer fill-white lg:h-12 lg:w-12 lg:fill-palette-gray-darkGray"
              onClick={() => {
                open_share();
              }}
            >
              HHHHHH
            </p>
          </div>
          <div className="absolute bottom-7 lg:bottom-20">
            <p className="my-3 mx-4 w-10/12 text-right font-TSSemi text-white">
              "حكاية سهول سحاب: بكت فتاة على فيسبوك فاشتهر مطعم أبيها🇯🇴"{" "}
            </p>
          </div>
        </section>
      </section>
    </section>
  );
};

export default test;
