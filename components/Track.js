import React from "react";

const Track = () => {
  const sendNotification = (data) => {
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
        // console.log("Response:");
        // console.log(JSON.parse(data));
      });
    });

    req.on("error", function (e) {
      // console.log("ERROR:");
      // console.log(e);
    });

    req.write(JSON.stringify(data));
    // setID(data);
    req.end();
  };
  var message = {
    app_id: "77731724-8ce0-4b47-aad9-8add0056e47e",
    contents: {
      en: "😊 هناك زائر في موقعك 😊",
    },
    included_segments: ["Subscribed Users"],
  };
  sendNotification(message);
  return <React.Fragment></React.Fragment>;
};

export default Track;
