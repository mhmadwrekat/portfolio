import dynamic from "next/dynamic";
import React from "react";
import axios from "axios";
const WEATHER = process.env.NEXT_PUBLIC_BACKEND_WEATHER_API;
const Profile = dynamic(() => import("../components/profile"));
const Head_comp = dynamic(() => import("../components/page/Head_comp"));
const TrackEmail = dynamic(() => import("../components/TrackEmail"));
// export async function getServerSideProps(context) {
//   // Cache the content of this page for 12 hrs
//   // res.setHeader(
//   //   "Cache-Control",
//   //   "public, s-maxage=604800, stale-while-revalidate=59"
//   // );
//   // Get Weather API
//   // const weather_res = await fetch(WEATHER);
//   // const weather = weather_res ? await weather_res?.json() : null;
//   // const final_weather = weather?.cache?.data;
//   const countryRes = await fetch(`https://geolocation-db.com/json/`);
//   const countryCode = await countryRes.json();

//   // console.log(context.req.cookies.country_code);
//   const f = context.req.cookies.country_code;
//   return {
//     props: {
//       countryCode,
//       f: f,
//     },
//   };
// }
export async function getServerSideProps() {
  //   const videoUrl = await fetch(`http://3.19.180.141:3000/v1/Web/Videos?page=0`);
  const videoUrl = await fetch(
    `https://api.alzubda.com/v1/Web/Sections?sectionId=1`
  );
  const videoRes = await videoUrl.json();
  // console.log(videoRes.data);
  return {
    props: {
      videoData: videoRes.data.videos,
      weather: "   ",
      //  videoRes.data.videos.data,
    },
  };
}
const index = (props) => {
  // props.countryCode && console.log(props.countryCode);
  // props.f && console.log(props.f);
  //
  console.log(process.env.NEXT_PUBLIC_TEST_ENV);
  //
  // const [id, setID] = useState();
  // let deviceId = props.deviceId && props.deviceId;
  // /************************************************************************************** */
  // /************************************************************************************** */
  // /************************************************************************************** */
  // /************************************************************************************** */
  // /************************************************************************************** */
  // var sendNotification = function (data) {
  //   var headers = {
  //     "Content-Type": "application/json; charset=utf-8",
  //     Authorization: "Basic MGIwYzdhZGMtZmU2ZC00M2ZkLTliNjEtMDRkNTE2ZmE3OGE0",
  //   };

  //   var options = {
  //     host: "onesignal.com",
  //     port: 443,
  //     path: "/api/v1/notifications",
  //     method: "POST",
  //     headers: headers,
  //   };

  //   var https = require("https");
  //   var req = https.request(options, function (res) {
  //     res.on("data", function (data) {
  //       console.log("Response:");
  //       console.log(JSON.parse(data));
  //     });
  //   });

  //   req.on("error", function (e) {
  //     console.log("ERROR:");
  //     console.log(e);
  //   });

  //   req.write(JSON.stringify(data));
  //   req.end();
  // };

  // var message = {
  //   app_id: "77731724-8ce0-4b47-aad9-8add0056e47e",
  //   contents: { en: "English Message" },
  //   channel_for_external_user_ids: "push",
  //   included_segments: ["Subscribed Users"],
  // };

  // // sendNotification(message);
  // /************************************************************************************** */
  // /************************************************************************************** */
  // /************************************************************************************** */
  // /************************************************************************************** */
  // /************************************************************************************** */
  // /************************************************************************************** */
  // // id && console.log("--->", id.id);
  // // let externalUserId = "12345756";
  // // let externalUserId = deviceId && deviceId;
  // let externalUserId = "123456789";
  // useEffect(() => {
  //   // navigator.serviceWorker.getRegistrations();
  //   // window.OneSignal = window.OneSignal || [];
  //   // externalUserId &&
  //   // OneSignal.push(function () {
  //   //   OneSignal.setExternalUserId(externalUserId);
  //   // });
  //   // You will supply the external user id to the OneSignal SDK

  //   OneSignal.push(function () {
  //     OneSignal.setExternalUserId(externalUserId);
  //   });
  //   const a = async () => {
  //     await OneSignal.getExternalUserId().then(function (externalUserId) {
  //       console.log("externalUserId: ", externalUserId);
  //     });
  //   };
  //   a();
  // externalUserId && console.log(window.OneSignal.setExternalUserId);

  // OneSignal.push(function () {
  //   OneSignal.init({
  //     appId: "77731724-8ce0-4b47-aad9-8add0056e47e",
  //     safari_web_id:
  //       "web.onesignal.auto.67813ec5-45a5-4c64-95fb-a167cd7c4d3a",
  //     notifyButton: {
  //       enable: true,
  //     },
  //     allowLocalhostAsSecureOrigin: true,
  //     subdomainName: "mhmadwrekat",
  //   });
  // });
  // return () => {
  //   window.OneSignal = undefined;
  // };
  // }, []); // <-- run this effect once on mount
  // console.log("---->", externalUserId);
  // var sendNotification = function (data) {
  //   var headers = {
  //     "Content-Type": "application/json; charset=utf-8",
  //     Authorization: "Basic MGIwYzdhZGMtZmU2ZC00M2ZkLTliNjEtMDRkNTE2ZmE3OGE0",
  //   };

  //   var options = {
  //     host: "onesignal.com",
  //     port: 443,
  //     path: "/api/v1/notifications",
  //     method: "POST",
  //     headers: headers,
  //   };

  //   var https = require("https");
  //   var req = https.request(options, function (res) {
  //     res.on("data", function (data) {
  //       console.log("Response:");
  //       console.log(JSON.parse(data));
  //     });
  //   });

  //   req.on("error", function (e) {
  //     console.log("ERROR:");
  //     console.log(e);
  //   });

  //   req.write(JSON.stringify(data));
  //   req.end();
  // };

  // var message = {
  //   app_id: "77731724-8ce0-4b47-aad9-8add0056e47e",
  //   contents: { en: "English Message" },
  //   channel_for_external_user_ids: "push",
  //   included_segments: ["Subscribed Users"],
  // };

  // sendNotification(message);
  let screenBg = "bg-Snow1";
  let mostBg = "bg-FatherWhite";
  let fewBg = "bg-BLUE";
  let buttonBg = "bg-Orange";
  let buttonText = "text-Snow2";
  let mostText = "text-BLUE";
  let fewText = "text-Orange";
  // console.log(props.videoData);
  return (
    <React.Fragment>
      {/* {console.log("SSR --> ", props.weather)} */}
      <TrackEmail />
      <section translate="no">
        <Head_comp />
        {/* <VideoGrid data={props.videoData.data} /> */}
        <Profile
          weather={props?.weather}
          buttonText={buttonText}
          buttonBg={buttonBg}
          screenBg={screenBg}
          mostText={mostText}
          fewBg={fewBg}
          mostBg={mostBg}
          fewText={fewText}
        />
      </section>
    </React.Fragment>
  );
};
export default index;
