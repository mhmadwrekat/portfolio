import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const test = () => {
  let [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  const array = [
    "https://www.youtube.com/embed/CeLP4TFnER4?autoplay=1&rel=0&showinfo=0",
    "https://www.youtube.com/embed/Medy7kM2LEk?feature=share",
    "https://www.youtube.com/embed/thDodJNdx2c?autoplay=1&rel=0&showinfo=0",
    "https://www.youtube.com/embed/tCEFYpRKDRo?autoplay=1&rel=0&showinfo=0",
  ];

  return (
    <div dir="rtl">
      <>
        <div className="fixed inset-0 flex items-center justify-center">
          <button
            type="button"
            onClick={openModal}
            className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            Open dialog
          </button>
        </div>

        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              {/** **/}
              <div className="fixed inset-0 bg-black bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-0 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full transform overflow-hidden bg-white text-left align-middle shadow-xl transition-all">
                    <section className="relative grid h-screen w-screen">
                      <Carousel
                        // selectedItem={sum}
                        showIndicators={false}
                        infiniteLoop={true}
                        thumbWidth={120}
                        useKeyboardArrows
                        axis="vertical"
                      >
                        {/* <img
                        src="https://www.alzubda.com/_next/image?url=https%3A%2F%2Fnetaq.s3.ap-south-1.amazonaws.com%2Fnjq55msu06.webp&w=1920&q=30"
                        className="h-full w-full"
                      /> */}
                        {array.map((item, idx) => {
                          return (
                            <iframe
                              className="h-full w-full rounded-lg shadow-lg lg:rounded-none lg:rounded-b-md "
                              src={`https://www.youtube.com/embed/CeLP4TFnER4`}
                              // allowFullScreen={true}
                              title="Video"
                              // name="youtube embed"
                              // allow="autoplay"
                              // allowFullScreen={true}
                            ></iframe>
                          );
                        })}
                        {/* <iframe
                          className="aspect-video h-full w-full rounded-lg shadow-lg lg:rounded-none lg:rounded-b-md "
                          src={`https://www.youtube.com/embed/CeLP4TFnER4?autoplay=1&rel=0&showinfo=0`}
                          allowFullScreen={true}
                          title="Video"
                          // name="youtube embed"
                          allow="autoplay"
                          // allowFullScreen={true}
                        ></iframe> */}
                      </Carousel>
                    </section>
                    {/* src={`https://www.youtube.com/embed/Medy7kM2LEk?feature=share`} */}

                    {/* <div className="absolute inset-1/3 z-10 mx-auto my-auto lg:inset-1/3">
                      <PlayVideoIcon
                        className="ytp-large-play-button ytp-button mt-10 ml-9 h-16 w-16 cursor-pointer"
                        aria-label="تشغيل"
                        // onClick={() => router.push("/video/123")}
                      />
                    </div> */}
                    {/* <div className="absolute bottom-20 right-2">
                      <ThreeDotIcon className="h-9 w-9 cursor-pointer fill-white" />
                      <ViewsIcon className="my-3 h-8 w-8" />
                      <SharekIncon className="my-4 h-9 w-9" />
                    </div>
                    <div className="absolute bottom-0">
                      <p className="my-3 mx-4 text-right font-TSSemi text-white">
                        جهز ميزانيتك: ارتفاع أسعار الوقود 7% قريبا بسبب القروض
                      </p>
                    </div> */}

                    {/* <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Payment successful
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Your payment has been successfully submitted. We’ve sent
                        you an email with all of the details of your order.
                      </p>
                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        Got it, thanks!
                      </button>
                    </div> */}
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </>
    </div>
  );
};

export default test;

/*
                      <iframe
                        className="aspect-video h-full w-full rounded-lg shadow-lg lg:rounded-none lg:rounded-b-md "
                        src={`https://www.youtube.com/embed/CeLP4TFnER4?autoplay=1`}
                        allowFullScreen={true}
                        title="Video"
                        // name="youtube embed"
                        allow="autoplay"
                        // allowFullScreen={true}
                      ></iframe>
     
*/
