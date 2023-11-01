// Ready & Refactoring
// Ready & Refactoring
// Ready & Refactoring
// Ready & Refactoring
import React from "react";
const Footer = ({theme}) => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <React.Fragment>
      <p className={`${theme.mode.mainTextColor} font-TSlight pb-3 lg:pb-0 2xl:pb-0 text-center text-xs md:text-base`}>
        {year} MHMAD WREKAT
        <span className={`${theme.color.border} border-l-4 mx-2`}>
          <span className="mx-2">Inc. All Rights Reserved</span>
        </span>
      </p>
    </React.Fragment>
  );
};

export default Footer;
