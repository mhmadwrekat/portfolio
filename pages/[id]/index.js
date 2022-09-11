//library imports
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { useInView } from "react-cool-inview";
// import { animateScroll as scroll } from "react-scroll";

//config imports
// import { BASE_URL } from "../../../config/config";
// import { TopIcon, DownIcon } from "../../../config/icon";

//component imports
// import Navigation from "../../../components/Templates/Navigation";
import VideoFeed from "../../components/Test/VideoFeed";

function index() {
  const BASE_URL = "https://api.alzubda.com";
  const router = useRouter();
  const videoId = router.query.id;

  const [videoData, setvideoData] = useState([]);
  const [page, setpage] = useState(0);

  const { observe } = useInView({
    delay: 100,
    onEnter: () => {
      get_video_feed(page);
      setpage(page + 1);
    },
  });

  const get_video_by_id = () => {
    if (videoId) {
      axios
        .get(`${BASE_URL}/v1/Web/Videos/Single?video_id=${videoId}`)
        .then((res) => {
          let data = res.data.data;
          data["video"] = data.video.replace("shorts", "embed");
          setvideoData([data]);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const get_video_feed = (activePage) => {
    axios
      .get(`${BASE_URL}/v1/Web/Videos?page=${activePage}`)
      .then((res) => {
        let data = res.data.data.videos;
        let updatedData = data.map((item) => {
          item["video"] = item.video.replace("shorts", "embed");
          return item;
        });

        setvideoData([...videoData, ...updatedData]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //   const scrollToSection = (scrollSpace) => {
  //     scroll.scrollMore(scrollSpace);
  //   };

  useEffect(() => {
    if (videoId !== undefined && videoId !== "undefined") get_video_by_id();
  }, [videoId]);

  return (
    <div dir="rtl">
      {/* <div className="fixed top-0 z-50 w-full bg-white  ">
        <Navigation />
      </div> */}
      <div className="flex h-screen">
        <div className="grow">
          {videoData.map((item, idx) => {
            return (
              <div
                key={idx}
                ref={idx === videoData.length - 1 ? observe : null}
              >
                <VideoFeed item={item} idx={idx} />
              </div>
            );
          })}
        </div>
        <div className="static relative hidden w-14 flex-none md:block lg:block">
          {/* <TopIcon onClick={() => scrollToSection(-950)} />

          <DownIcon
            className="absolute bottom-0"
            onClick={() => scrollToSection(950)}
          /> */}
        </div>
      </div>
    </div>
  );
}
export default index;

// import React, { useState, useEffect, useRef } from "react";
// import axios from "axios";
// import { BASE_URL } from "../../../config/config";
// import { useRouter } from "next/router";
// import { TopIcon, DownIcon } from "../../../config/icon";
// import { animateScroll as scroll } from "react-scroll";

// // import Component
// import Navigation from "../../../components/Templates/Navigation";
// import VideoFeed from "../../../components/Common/VideoFeed";

// const index = (props) => {
// const router = useRouter();
// const videoId = router.query.id;
//   const [showTopButton, setShowTopButton] = useState(false);
// const [data, setData] = useState();
//   const [mostData] = useState(props?.videoData);

//   // Function to Handle Scrolling Top and Button
// const scrollToSection = (scrollSpace) => {
//   scroll.scrollMore(scrollSpace);
// };

//   return (
//     <div dir="rtl">
// <section className="fixed top-0 z-30 w-full bg-white">
//   <Navigation />
// </section>
//       <div className="mt-16 lg:mt-24" />
//       {/******** TOP & DOWN BUTTON ********/}
//       {/******** TOP & DOWN BUTTON ********/}
//       <section className="hidden lg:grid">
//         {showTopButton ? (
//           <div className="fixed top-24 left-3">
//             <TopIcon
//               className="cursor-pointer opacity-50 hover:opacity-75 lg:h-12 lg:w-12 2xl:h-16 2xl:w-16"
//               onClick={() => scrollToSection(-950)}
//             />
//           </div>
//         ) : null}

//         <div className="fixed bottom-5 left-3">
// <DownIcon
//   className="cursor-pointer opacity-50 hover:opacity-75 lg:h-12 lg:w-12 2xl:h-16 2xl:w-16"
//   onClick={() => scrollToSection(950)}
// />
//         </div>
//       </section>
//       {/* OPENING VIDEO */}
//       {/* OPENING VIDEO */}
//       {data ? (
//         <div>
//           <VideoFeed
//             data={data}
//             setShowTopButton={setShowTopButton}
//             playVideo={"1"}
//           />
//           {/** OTHER VIDEOES **/}
//           {/** OTHER VIDEOES **/}
//           {mostData.map((item, idx) => {
//             return (
//               <>
//                 {/* {console.log(item)} */}
//                 <VideoFeed
//                   key={idx}
//                   setShowTopButton={setShowTopButton}
//                   data={item}
//                 />
//               </>
//             );
//           })}
//         </div>
//       ) : //  (
//       //   mostData.map((item, idx) => {
//       //     return (
//       //       <VideoFeed
//       //         key={idx}
//       //         playVideo={"0"}
//       //         setShowTopButton={setShowTopButton}
//       //         data={item}
//       //       />
//       //     );
//       //   })
//       // )
//       null}
//     </div>
//   );
// };

// export default index;

// // // Get Server Side Function
// // export async function getServerSideProps() {
// //   const videoUrl = await fetch(`http://3.19.180.141:3000/v1/Web/Videos?page=0`);
// //   const videoRes = await videoUrl.json();
// //   // console.log(videoRes.data);
// //   return {
// //     props: {
// //       videoData: videoRes.data.videos,
// //       //  videoRes.data.videos.data,
// //     },
// //   };
// // }
