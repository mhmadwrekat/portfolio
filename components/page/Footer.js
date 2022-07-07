// Cleaned
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Lottie from "lottie-react";
import footer_json from "../../public/assest/emoji/footer.json";

const Footer = ({ buttonText, fewBg }) => {
  return (
    <React.Fragment>
      <section className={`${fewBg} ${buttonText}`} id="profilefoot">
        <div>
          <div className="mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 pb-5 pt-3">
            <div className="flex flex-col items-center justify-center">
              <Link href="/">
                <div className="w-24 h-24 lg:w-28 lg:h-28">
                  <Lottie animationData={footer_json} loop={false} />
                </div>
              </Link>
              <div className="flex flex-wrap sm:gap-10 gap-8 items-center justify-center mt-3 font-extrabold"></div>
              <div className="flex items-center gap-x-8 mt-5">
                <a
                  href="https://linkedin.com/in/mohammad-alwrekat"
                  data-tippy-content="linkedin"
                >
                  <Image
                    src="/assest/linkedin.WebP"
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
                    src="/assest/whatsapp.WebP"
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
                    src="/assest/facebook.WebP"
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
                    src="/assest/instagram.WebP"
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
                    src="/assest/twitter.WebP"
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
