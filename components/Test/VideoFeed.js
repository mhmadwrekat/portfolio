import React, { useState, useRef } from "react";
import { useInView } from "react-cool-inview";

import { animateScroll as scroller, Element } from "react-scroll";
import ReactPlayer from "react-player";

// import {
//   EyeIcon,
//   HeartIcon,
//   ShareVideoIcon,
//   ThreeDotVideoIcon,
// } from "../../config/icon";

function VideoFeed({ item, idx }) {
  const ref = useRef();
  const [isPlaying, setisPlaying] = useState(false);

  const { observe } = useInView({
    delay: 100,
    rootMargin: "-100px 0px",
    onEnter: ({ unobserve }) => {
      setisPlaying(true);
      executeScroll();
    },
    onLeave: ({ unobserve }) => {
      setisPlaying(false);
    },
  });

  const executeScroll = () => {
    // ref.current.scrollIntoView();
    setisPlaying(true);

    //   const elmnt = ref;
    //   elmnt.current.scrollIntoView({
    //     behavior: "smooth",
    //     block: "center",
    //     inline: "start",
    //   });
  };

  return (
    <div id="video" className="relative snap-start" ref={ref}>
      <div ref={observe} className="h-screen">
        <ReactPlayer
          width="100%"
          height="100vh"
          url={item.video}
          controls={true}
          muted={false}
          volume={1}
          playing={isPlaying}
        />
      </div>
      {/*
      <iframe
        ref={observe}
        allow="autoplay"
        className="z-20 h-screen w-full"
        src={`${item.video}?autoplay=1&mute=1`}
        allowFullScreen={true}
  /> */}

      <div className="text-md absolute inset-x-0 bottom-10 z-0 mx-1 mb-5 text-right font-bold text-white">
        {item.content}
      </div>
      {/* <div className="absolute inset-y-0 z-30 mx-2 ">
        <div className="mt-80 ">
          <div className="flex justify-center">
            <EyeIcon className="fill-white" />
          </div>
          <div className="text-center text-sm font-medium text-white">
            {item.views}
          </div>
        </div>
        <div className="mt-10 ">
          <div className="flex justify-center">
            <HeartIcon className="fill-white" />
          </div>
          <div className="text-center text-sm font-medium text-white">
            {item.likes}
          </div>
        </div>

        <div className="mt-10 ">
          <div className="flex justify-center">
            <ShareVideoIcon className="fill-white" />
          </div>
          <div className="text-center text-sm font-medium text-white">
            {item.shares}
          </div>
        </div>
        <div className="mt-10 ">
          <div className="flex justify-center">
            <ThreeDotVideoIcon className="fill-white" />
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default VideoFeed;

// import React, { useState } from "react";
// import {
//   SharekIncon,
//   ViewsIcon,
//   ThreeDotIcon,
//   CopyLink,
//   ViewMobile,
// } from "../../config/icon";
// import axios from "axios";
// import Swal from "sweetalert2";
// import { useRouter } from "next/router";
// import { useInView } from "react-cool-inview";
// import MenuThreeDot from "../Common/MenuThreeDot";
// import {
//   FacebookShareButton,
//   FacebookIcon,
//   WhatsappShareButton,
//   WhatsappIcon,
//   TwitterShareButton,
//   TwitterIcon,
// } from "next-share";

// //config imports
// import {
//   SHARE_URL,
//   SHARE_AUTH_KEY,
//   SHARE_EVENT_URL,
//   SHARE_EVENT_AUTH_KEY,
//   CURRENT_ENV,
// } from "../../config/config";

// const VideoFeed = ({ data, setShowTopButton, playVideo }) => {
//   //
//   const router = useRouter();
//   let [isOpen, setIsOpen] = useState(false);
//   const [shareLink, setShareLink] = useState(data.stories_headlines);
//   // const [autoPlay, setAutoPlay] = useState(playVideo || "0");
// const [autoPlay, setAutoPlay] = useState("0");
//   const shareMedia = [
//     {
//       icon: (
//         <CopyLink
//           className="mx-2 h-14 w-12"
//           onClick={() => {
//             copy_link(data);
//           }}
//         />
//       ),
//     },
//     {
//       icon: (
//         <TwitterShareButton
//           url={`/${shareLink}`}
//           title={
//             "\nوفر وقتك. حمل تطبيق الزبدة الإخباري، لقراءة الأخبار في 60 كلمة من مصادرها الأصلية.\n"
//           }
//         >
//           <TwitterIcon
//             size={48}
//             round
//             className="mx-2 mt-1"
//             onClick={() => {
//               share_event();
//             }}
//           />
//         </TwitterShareButton>
//       ),
//     },
//     {
//       icon: (
//         <WhatsappShareButton
//           url={`${shareLink}`}
//           title={
//             "\nوفر وقتك. حمل تطبيق الزبدة الإخباري، لقراءة الأخبار في 60 كلمة من مصادرها الأصلية.\n"
//           }
//         >
//           <WhatsappIcon
//             size={48}
//             round
//             className="mx-2 mt-1"
//             onClick={() => {
//               share_event();
//             }}
//           />
//         </WhatsappShareButton>
//       ),
//     },
//     {
//       icon: (
//         <FacebookShareButton
//           url={`${shareLink}`}
//           quote={
//             "\nوفر وقتك. حمل تطبيق الزبدة الإخباري، لقراءة الأخبار في 60 كلمة من مصادرها الأصلية.\n"
//           }
//           hashtag={"#الزبدة"}
//         >
//           <FacebookIcon
//             size={48}
//             round
//             className="mx-2 mt-1"
//             onClick={() => {
//               share_event();
//             }}
//           />
//         </FacebookShareButton>
//       ),
//     },
//   ];

//   function retrieve_youtube_code(link) {
//     let code = "";
//     // check for watch videos
//     if (link.includes("shorts/")) {
//       code = link.split("shorts/")[1];
//       return code;
//     } else if (link.includes("watch?")) {
//       // check for regular youtube videos
//       code = link.split("watch?")[1];
//       const youtube_code_for_thumbnail = code?.split("v=")[1];
//       return youtube_code_for_thumbnail?.split("&")[0];
//     } else {
//       // check for Link without watch
//       code = link.split("youtu.be/")[1];
//       return code;
//     }
//   }

//   // Function To Handle Title And Copy It
//   const copy_link = (newsObj) => {
//     const Toast = Swal.mixin({
//       toast: true,
//       position: "bottom",
//       showConfirmButton: false,
//       timer: 1500,
//       timerProgressBar: true,
//       didOpen: (toast) => {
//         toast.addEventListener("mouseenter", Swal.stopTimer);
//         toast.addEventListener("mouseleave", Swal.resumeTimer);
//       },
//     });
//     // const titles = newsObj.stories_headlines;
//     // let ready_title = "";
//     // if (titles.includes("%")) {
//     //   let title = titles.replace(/\s+/g, "-");
//     //   // console.log(`/${title.replace('%', '_')}`)
//     //   ready_title = `${title.replace("%", "-")}`;
//     // } else if (titles.includes(" ")) {
//     //   let title = titles.replace(/\s+/g, "-");
//     //   ready_title = `${title.replace(" ", "-")}`;
//     // } else {
//     //   ready_title = titles;
//     // }
//     // if (titles.includes("?")) {
//     //   let title = titles.replace(/\s+/g, "");
//     //   ready_title = `${title.replace("?", "-")}`;
//     // }

//     // let ready_url = `https://alzubda.com/${ready_title}`;
//     // navigator.clipboard.writeText(ready_url);

//     Toast.fire({
//       icon: "success",
//       title: "تم نسخ الرابط بنجاح",
//     });
//     share_event();
//   };

//   // POST API SHARE EVENT
//   const share_event = () => {
//     const userId =
//       typeof window !== "undefined" ? localStorage.getItem("user_id") : "";

//     setIsOpen(!isOpen);
//     let videoData = {
//       user: userId,
//       stories: [data._id],
//       source_type: "default",
//     };
//     const config = {
//       headers: {
//         "x-api-key": SHARE_EVENT_AUTH_KEY,
//       },
//     };

//     if (CURRENT_ENV === "production")
//       axios
//         .post(`${SHARE_EVENT_URL}/production`, videoData, config)
//         .then((res) => {
//           // console.log(res);
//           // console.log(videoData);
//         });
//   };

//   // POST API SHARE WHEN SHARE ON SOCIAL MEDIA
//   const share_button = () => {
//     const userId =
//       typeof window !== "undefined" ? localStorage.getItem("user_id") : "";
//     let videoData = {
//       user: userId,
//       stories: [data._id],
//       source_type: "default",
//     };
//     const config = {
//       headers: {
//         "x-api-key": SHARE_AUTH_KEY,
//       },
//     };
//     if (CURRENT_ENV === "production")
//       axios.post(`${SHARE_URL}/production`, videoData, config);
//   };

//   // open Modal and Call share_button function
//   const open_share = () => {
//     setIsOpen(!isOpen);
//     share_button();
//   };

// const { observe } = useInView({
//   delay: 100,
//   onEnter: () => {
//     setAutoPlay("1");
//     // Hide and Show Top Button
//     router?.query?.id === data?.story?._id
//       ? setShowTopButton(false)
//       : setShowTopButton(true);
//   },
// onLeave: () => {
//   setAutoPlay("0");
// },
// });
//   return (
//     <section id="video">
//       <section className="relative mx-auto snap-center lg:w-7/12 2xl:w-4/12">
//         <section className="mx-auto h-screen border-t-2 border-red-600 lg:w-10/12 lg:border-t-0 lg:py-5 2xl:w-10/12">
//           {/******** VIDEO ********/}
//           {/******** VIDEO ********/}
//           <iframe
//             ref={observe}
//             allow="autoplay"
//             className="z-0 h-full w-full lg:rounded-xl lg:shadow-xl"
//             src={`https://www.youtube.com/embed/${retrieve_youtube_code(
//               data.video || data.story.stories_media_url[0]
//             )}?autoplay=${autoPlay}`}
// title="Video"
// allowFullScreen={true}
//           ></iframe>
//           {/******** SHARE MODAL ********/}
//           {/******** SHARE MODAL ********/}
//           {isOpen ? (
//             <section className="fixed inset-0 z-40 overflow-y-auto">
//               <section className="flex min-h-full items-center justify-center p-4 text-center">
//                 <section className="w-full max-w-xs transform overflow-hidden rounded-2xl bg-white p-3 text-left align-middle shadow-xl transition-all">
//                   <h3 className="my-3 text-center font-TSSemi text-lg leading-6 text-gray-900 ">
//                     شارك عبر :
//                   </h3>
//                   <div className="flex justify-center">
//                     {shareMedia.map((item, idx) => {
//                       return <div key={idx}>{item.icon}</div>;
//                     })}
//                   </div>

//                   <button
//                     className="z-50 float-right my-2 rounded-md bg-red-500 py-1.5 px-5 font-TSSemi text-white"
//                     onClick={() => {
//                       open_share();
//                     }}
//                   >
//                     إغلاق
//                   </button>
//                 </section>
//               </section>
//             </section>
//           ) : null}

//           {/******** DESKTOP ICONS ********/}
//           {/******** DESKTOP ICONS ********/}
//           <div className="absolute bottom-28 -left-6 mx-auto hidden lg:grid">
//             {/* <ThreeDotIcon className="h-8 w-8 cursor-pointer fill-white lg:h-11 lg:w-11 lg:fill-palette-gray-darkGray" /> */}
//             {/* <MenuThreeDot
//               newsObj={data.story || data}
//               fill={"fill-palette-gray-darkGray"}
//             /> */}

//             <ViewsIcon className="ml-0 h-8 w-8 cursor-pointer fill-white lg:h-11 lg:w-11 lg:fill-palette-gray-darkGray" />
//             <p className="text-center font-TSExtra text-sm text-palette-gray-darkGray">
//               {data.views || Math.floor(Math.random() * 100)}
//             </p>
//             {/* <SharekIncon
//               className="my-3 h-9 w-9 cursor-pointer fill-white lg:h-12 lg:w-12 lg:fill-palette-gray-darkGray"
//               onClick={() => {
//                 open_share();
//               }}
//             /> */}
//           </div>
//           {/******** MOBILE ICONS ********/}
//           {/******** MOBILE ICONS ********/}
//           <div className="absolute right-3 bottom-36 z-30 lg:hidden">
//             {/* <ThreeDotIcon className="mx-auto h-8 w-8 cursor-pointer fill-white lg:h-11 lg:w-11 lg:fill-palette-gray-darkGray" /> */}
//             <ViewMobile className="mx-auto my-0 h-8 w-10 cursor-pointer fill-white lg:h-11 lg:w-11 lg:fill-palette-gray-darkGray" />
//             <p className="text-center font-TSExtra text-xs text-white">
//               {data.views || Math.floor(Math.random() * 100)}
//             </p>
//             {/* <SharekIncon
//               className="mx-auto my-2.5 h-10 w-10 cursor-pointer fill-white lg:h-12 lg:w-12 lg:fill-palette-gray-darkGray"
//               onClick={() => {
//                 open_share();
//               }}
//             /> */}
//           </div>
//           <div className="absolute bottom-12 lg:bottom-20">
//             <p className="w-12/12 my-3 mx-4 text-right font-TSSemi text-white">
//               {data.content || data.story.stories_headlines}
//             </p>
//           </div>
//         </section>
//       </section>
//     </section>
//   );
// };

// export default VideoFeed;
