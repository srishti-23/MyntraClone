import React from "react";
import play from "../images/googleplay.png";
import apple from "../images/apple.png";
import original from "../images/original.png";
import ret from "../images/ret.png";
import { AiFillFacebook } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";

const Footer = () => {
  return (
    <div className="w-full mt-20 bg-[#FAFBFC] text-sm">
      <div className="px-4 py-8 space-y-4 text-[#282C3F]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="ml-8 md:ml-16 lg:ml-32">
              <p>ONLINE SHOPPING</p>
              <div className="mt-8 text-[#696B79] font-normal space-y-1">
                <p>MEN</p>
                <p>WOMEN</p>
                <p>Kids</p>
                <p>Home & Living</p>
                <p>Beauty</p>
                <p>Gift Cards</p>
                <p>Myntra insiders</p>
              </div>
            </div>
            <div className="mt-10 ml-8 md:ml-16 lg:ml-32">
              <p>USEFUL LINKS</p>
              <div className="mt-8 text-[#696B79] font-normal space-y-1">
                <p>Blog</p>
                <p>Careers</p>
                <p>Site Map</p>
                <p>Corporate information</p>
                <p>Whitehat</p>
                <p>Clear trip</p>
              </div>
            </div>
          </div>

          <div>
            <div className="ml-8 md:ml-16 lg:ml-32">
              <p>Customer policies</p>
              <div className="mt-8 text-[#696B79] font-normal space-y-1">
                <p>Contact us</p>
                <p>FAQ</p>
                <p>T&C</p>
                <p>Terms of Use</p>
                <p>Track orders</p>
                <p>Shipping</p>
                <p>Cancellation</p>
                <p>Returns</p>
                <p>Privacy policy</p>
                <p>Grievance offer</p>
              </div>
            </div>
          </div>

          <div>
            <div className="ml-8 md:ml-16 lg:ml-32">
              <p>Experience Myntra app on mobile</p>
              <div className="mt-8 flex space-x-4">
                <img src={play} className="w-32 h-10" alt="Google Play" />
                <img src={apple} className="w-32 h-10" alt="Apple App Store" />
              </div>
              <div className="mt-10 tracking-wide">
                <p>KEEP IN TOUCH</p>
                <div className="flex space-x-4 mt-4">
                  <AiFillFacebook size={25} />
                  <BsTwitter size={25} />
                  <FaYoutube size={25} />
                  <TiSocialInstagram size={25} />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="ml-8 md:ml-16 lg:ml-32">
              <div className="flex space-x-4 items-center">
                <img src={original} alt="Original sign" className="w-12 h-10" />
                <p>
                  <span className="font-bold">100% ORIGINAL</span>
                  <span className="text-[#696B79] font-normal">
                    {" "}
                    guarantee for<br></br>
                    all products at myntra.com
                  </span>
                </p>
              </div>
              <div className="mt-10 tracking-wide flex items-center space-x-4">
                <img src={ret} className="w-12 h-10" alt="Return" />
                <p>
                  Return within 14 days{" "}
                  <span className="text-[#696B79] font-normal">
                    of receiving your order
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
