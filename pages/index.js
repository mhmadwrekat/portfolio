import dynamic from "next/dynamic";
import React, { useState, useEffect, useRef, useCallback } from "react";
const WEATHER = process.env.NEXT_PUBLIC_BACKEND_WEATHER_API;
const Profile = dynamic(() => import("../components/profile"));
const Head_comp = dynamic(() => import("../components/page/Head_comp"));
const Track = dynamic(() => import("../components/Track"));
export async function getServerSideProps({ req, res }) {
  // Cache the content of this page for 12 hrs
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=604800, stale-while-revalidate=59"
  );
  // Get Weather API
  const weather_res = await fetch(WEATHER);
  const weather = await weather_res.json();
  const final_weather = weather?.cache?.data;
  return {
    props: {
      weather: final_weather,
    },
  };
}

const index = (props) => {
  const [id, setID] = useState();
  let deviceId = props.deviceId && props.deviceId;
  /************************************************************************************** */
  /************************************************************************************** */
  /************************************************************************************** */
  /************************************************************************************** */
  /************************************************************************************** */
  var sendNotification = function (data) {
    var headers = {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: "Basic MGIwYzdhZGMtZmU2ZC00M2ZkLTliNjEtMDRkNTE2ZmE3OGE0",
    };

    var options = {
      host: "onesignal.com",
      port: 443,
      path: "/api/v1/notifications",
      method: "POST",
      headers: headers,
    };

    var https = require("https");
    var req = https.request(options, function (res) {
      res.on("data", function (data) {
        console.log("Response:");
        console.log(JSON.parse(data));
      });
    });

    req.on("error", function (e) {
      console.log("ERROR:");
      console.log(e);
    });

    req.write(JSON.stringify(data));
    req.end();
  };

  var message = {
    app_id: "77731724-8ce0-4b47-aad9-8add0056e47e",
    contents: { en: "English Message" },
    channel_for_external_user_ids: "push",
    included_segments: ["Subscribed Users"],
  };

  // sendNotification(message);
  /************************************************************************************** */
  /************************************************************************************** */
  /************************************************************************************** */
  /************************************************************************************** */
  /************************************************************************************** */
  /************************************************************************************** */
  // id && console.log("--->", id.id);
  // let externalUserId = "12345756";
  let externalUserId = deviceId && deviceId;
  useEffect(() => {
    // navigator.serviceWorker.getRegistrations();
    // window.OneSignal = window.OneSignal || [];
    // externalUserId &&
    OneSignal.push(function () {
      OneSignal.setExternalUserId(externalUserId);
    });
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
  }, [externalUserId]); // <-- run this effect once on mount
  // console.log("---->", externalUserId);
  var sendNotification = function (data) {
    var headers = {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: "Basic MGIwYzdhZGMtZmU2ZC00M2ZkLTliNjEtMDRkNTE2ZmE3OGE0",
    };

    var options = {
      host: "onesignal.com",
      port: 443,
      path: "/api/v1/notifications",
      method: "POST",
      headers: headers,
    };

    var https = require("https");
    var req = https.request(options, function (res) {
      res.on("data", function (data) {
        console.log("Response:");
        console.log(JSON.parse(data));
      });
    });

    req.on("error", function (e) {
      console.log("ERROR:");
      console.log(e);
    });

    req.write(JSON.stringify(data));
    req.end();
  };

  var message = {
    app_id: "77731724-8ce0-4b47-aad9-8add0056e47e",
    contents: { en: "English Message" },
    channel_for_external_user_ids: "push",
    include_external_user_ids: [externalUserId],
  };

  externalUserId && sendNotification(message);
  return (
    <React.Fragment>
      {/* {console.log("SSR --> ", props.weather)} */}
      {/* <Track /> */}
      <section translate="no">
        <Head_comp />
        <Profile weather={props.weather} />
      </section>
    </React.Fragment>
  );
};
export default index;
