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
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
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

  let a = [1, 2, 3, 4, 5, 6];
  return (
    <div dir="rtl">
      <div className="flex h-screen">
        <div className="grow">
          <Carousel axis="vertical" useKeyboardArrows={true}>
            {videoData.map((item, idx) => {
              return (
                // <div className="w-40 h-60 bg-Orange mx-auto">{item}</div>
                <div
                  key={idx}
                  ref={idx === videoData.length - 1 ? observe : null}
                >
                  <VideoFeed item={item} idx={idx} />
                </div>
              );
            })}
          </Carousel>
        </div>
        <div className="static relative hidden w-14 flex-none md:block lg:block"></div>
      </div>
    </div>
  );
}
export default index;
/*
 <div dir="rtl">
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
        <div className="static relative hidden w-14 flex-none md:block lg:block"></div>
      </div>
    </div>
*/
