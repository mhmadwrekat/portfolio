import React from "react";
import { Fade } from "react-awesome-reveal";
const HeadLine = ({ mainText, otherText, theme }) => {
  return (
    <section id={mainText} className="md:m-0 m-5 font-TSmedium">
      <div className="flex items-center">
        <Fade direction="up" cascade damping={0.1}>
          <div className={`${theme.color.bg} w-1.5 h-9 rounded-full`} />
        </Fade>

        <Fade direction="right" cascade damping={0.1}>
          <p
            className={`${theme.mode.mainTextColor} text-3xl font-bold font-Acme ml-2`}
          >
            {mainText}
          </p>
        </Fade>
      </div>
      {otherText.JSX}
    </section>
  );
};

export default HeadLine;
