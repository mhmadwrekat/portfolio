// library imports
import React from "react";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
// Import Components
// import { PlayVideoIcon } from "../../config/icon";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/scrollbar";

const VideoGrid = ({ data }) => {
  const router = useRouter();

  function return_image_src(videoLink) {
    let youtube_code = videoLink.split("shorts/")[1];
    return `https://img.youtube.com/vi/${youtube_code}/0.jpg`;
  }

  return (
    <div className=" mx-auto my-4 w-11/12 lg:my-6 lg:w-10/12">
      {/* ======== HEADER  ======== */}
      <h2 className="cursor-pointer font-TSExtra text-xl hover:underline md:text-2xl lg:text-3xl">
        الأكثر مشاهدة
      </h2>

      {/******* DESKTOP VIEW ********/}
      {/******* DESKTOP VIEW ********/}
      <div className="hidden gap-2 md:grid md:grid-cols-5 lg:grid lg:grid-cols-5 lg:gap-5 2xl:grid-cols-5 ">
        {data.slice(0, 5).map((childData, idx) => {
          return (
            <div
              key={idx}
              className="relative mx-auto w-full cursor-pointer shadow"
              onClick={() => router.push(`/${childData._id}`)}
            >
              <Image
                src={return_image_src(childData.video)}
                quality={30}
                layout="responsive"
                className="rounded-xl"
                width={220}
                height={400}
                objectFit="cover"
              />
              <div className="absolute z-10 mx-auto my-auto lg:inset-1/3">
                {/* <PlayVideoIcon  /> */}
                <svg
                  fill="none"
                  viewBox="0 0 38 38"
                  xmlns="http://www.w3.org/2000/svg"
                  className=" lg:mt-5 lg:h-14 lg:w-14 2xl:mt-10 2xl:ml-0 2xl:mr-3 2xl:h-20 2xl:w-20"
                >
                  <path
                    d="m36.28 18.943c0 9.5744-7.7395 17.33-17.279 17.33-9.5399 0-17.279-7.7558-17.279-17.33 0-9.5745 7.7395-17.33 17.279-17.33 9.5399 0 17.279 7.7558 17.279 17.33z"
                    stroke="#fff"
                    stroke-width="2.5"
                  />
                  <path
                    d="m15.677 26.574c-0.2539-5e-4 -0.5034-0.0673-0.7238-0.1937-0.4963-0.282-0.8049-0.8295-0.8049-1.4238v-12.027c0-0.596 0.3086-1.1418 0.8049-1.4238 0.2257-0.1301 0.482-0.1969 0.7423-0.1936 0.2602 0.0032 0.5148 0.0766 0.7372 0.2123l10.251 6.153c0.2137 0.1343 0.3898 0.3209 0.5119 0.5421 0.122 0.2213 0.1861 0.47 0.1861 0.7229 0 0.2528-0.0641 0.5015-0.1861 0.7228-0.1221 0.2212-0.2982 0.4078-0.5119 0.5421l-10.253 6.1547c-0.2275 0.1379-0.4881 0.2113-0.754 0.2124z"
                    fill="#fff"
                  />
                </svg>
              </div>
            </div>
          );
        })}
      </div>
      {/******* MOBILE VIEW ********/}
      {/******* MOBILE VIEW ********/}
      <div className="block md:hidden lg:hidden">
        <Swiper
          modules={[Navigation]}
          slidesPerView={2.5}
          spaceBetween={20}
          loop={true}
        >
          {data.map((childData, idx) => {
            return (
              <SwiperSlide key={idx}>
                <div
                  onClick={() => router.push(`/${childData._id}`)}
                  key={idx}
                  className="relative mx-auto w-full shadow"
                >
                  <Image
                    src={return_image_src(childData.video)}
                    quality={30}
                    layout="responsive"
                    className="rounded-md shadow"
                    width={220}
                    height={400}
                    objectFit="cover"
                  />
                  <div className="absolute inset-1/3 z-10 mx-auto my-auto">
                    {/* <PlayVideoIcon className="mt-3 ml-9 h-10 w-10 cursor-pointer" /> */}
                    <svg
                      fill="none"
                      viewBox="0 0 38 38"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mt-3 ml-9 h-10 w-10 cursor-pointer"
                    >
                      <path
                        d="m36.28 18.943c0 9.5744-7.7395 17.33-17.279 17.33-9.5399 0-17.279-7.7558-17.279-17.33 0-9.5745 7.7395-17.33 17.279-17.33 9.5399 0 17.279 7.7558 17.279 17.33z"
                        stroke="#fff"
                        stroke-width="2.5"
                      />
                      <path
                        d="m15.677 26.574c-0.2539-5e-4 -0.5034-0.0673-0.7238-0.1937-0.4963-0.282-0.8049-0.8295-0.8049-1.4238v-12.027c0-0.596 0.3086-1.1418 0.8049-1.4238 0.2257-0.1301 0.482-0.1969 0.7423-0.1936 0.2602 0.0032 0.5148 0.0766 0.7372 0.2123l10.251 6.153c0.2137 0.1343 0.3898 0.3209 0.5119 0.5421 0.122 0.2213 0.1861 0.47 0.1861 0.7229 0 0.2528-0.0641 0.5015-0.1861 0.7228-0.1221 0.2212-0.2982 0.4078-0.5119 0.5421l-10.253 6.1547c-0.2275 0.1379-0.4881 0.2113-0.754 0.2124z"
                        fill="#fff"
                      />
                    </svg>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};
export default VideoGrid;
