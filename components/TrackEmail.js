import React, { useState } from "react";
import emailjs from "@emailjs/browser";
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID;
const USER_ID = process.env.NEXT_PUBLIC_EMAIL_USER_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID;

const TrackEmail = () => {
  const [countryCode, setCountryCode] = useState();

  // Function Get Country Code .
  const get_country = async () => {
    localStorage.getItem("country_code")
      ? setCountryCode(localStorage.getItem("country_code"))
      : axios.get("https://geolocation-db.com/json/").then((res) => {
          localStorage.setItem("country_code", res.data.country_code);
          setCountryCode(res.data.country_code);
        });
  };

  get_country() && console.log(countryCode);
  emailjs.sendForm(
    `${SERVICE_ID}`,
    `${TEMPLATE_ID}`,
    form.current,
    `${USER_ID}`
  );
  console.log("lets Start");
  return <React.Fragment></React.Fragment>;
};

export default TrackEmail;
