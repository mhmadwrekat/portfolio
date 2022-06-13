// Cleaned
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <React.Fragment>
      <section
        className="opacity-95 bg-gray-800 text-yellow-400"
        id="profilefoot"
      >
        <div>
          <div className="mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 pb-5 pt-3">
            <div className="flex flex-col items-center justify-center">
              <Link href="/">
                <div>
                  <Image
                    className="cursor-help hover:scale-110"
                    alt="Logo"
                    src="/assest/project.png"
                    width="50"
                    height="50"
                  />
                </div>
              </Link>
              <div className="flex flex-wrap sm:gap-10 gap-8 items-center justify-center mt-3 font-extrabold">
                <Link href="/feedback">
                  <p className="cursor-help hover:text-yellow-600 hover:scale-110 focus:underline focus:outline-none text-base">
                    Feedbacks
                  </p>
                </Link>
              </div>
              <div className="flex items-center gap-x-8 mt-5">
                <a
                  href="https://linkedin.com/in/mohammad-alwrekat"
                  data-tippy-content="linkedin"
                >
                  <Image
                    src="/assest/linkedin.png"
                    className="fill-current hover:scale-125 cursor-alias"
                    alt="linkedin"
                    width="25"
                    height="25"
                  />
                </a>
                <a
                  href="https://wa.me/+962788818125"
                  data-tippy-content="WhatsApp"
                >
                  <Image
                    src="/assest/whatsapp.png"
                    className="fill-current hover:scale-125 cursor-alias"
                    alt="whatsapp"
                    width="25"
                    height="25"
                  />
                </a>
                <a
                  className="pb-0.5 rounded-full hover:scale-125"
                  href="https://www.facebook.com/profile.php?id=100010107875359"
                  data-tippy-content="Facebook"
                >
                  <Image
                    src="/assest/facebook.png"
                    className="fill-curren cursor-alias"
                    alt="facebook"
                    width="25"
                    height="25"
                  />
                </a>
                <a
                  className="rounded-full hover:scale-125"
                  href="https://www.instagram.com/mhmadwrekatt?r=nametag"
                  data-tippy-content="Instagram"
                >
                  <Image
                    src="/assest/instagram.png"
                    className="fill-current cursor-alias"
                    alt="instagram"
                    width="25"
                    height="25"
                  />
                </a>
                <a
                  className="rounded-full hover:scale-125"
                  href="https://twitter.com/wrekatmhmad"
                  data-tippy-content="twitter"
                >
                  <Image
                    src="/assest/twitter.png"
                    className="fill-current cursor-alias"
                    alt="twitter"
                    width="25"
                    height="25"
                  />
                </a>
              </div>
              <div className="flex items-center mt-4">
                <p className="font-serif text-xs cursor-help hover:text-yellow-600  hover:scale-110 leading-4 mt-1">
                  2022 <span className="font-serif">MHMAD WREKAT</span>
                </p>
                <div className="border-l-2 border-yellow-500 pl-2 ml-2">
                  <p className="font-serif text-xs cursor-help hover:text-yellow-600 hover:scale-110 leading-4">
                    Inc. All Rights Reserved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default Footer;
