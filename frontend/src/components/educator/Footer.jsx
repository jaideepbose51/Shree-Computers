import React from "react";
import {
  ShieldCheck,
  Globe,
} from "lucide-react";

import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white">

      <div className="px-8 lg:px-10">

        <div className="py-6 flex flex-col lg:flex-row items-center justify-between gap-6">

          {/* Left */}

          <div className="flex items-center gap-5">

            <img
              src={assets.logo}
              alt="logo"
              className="h-10 w-auto object-contain"
            />

            <div className="hidden md:block w-px h-10 bg-gray-200"></div>

            <div>

              <h3 className="font-semibold text-gray-900">
                Shree Computer
              </h3>

              <p className="text-sm text-gray-500">
                Administration Portal
              </p>

            </div>

          </div>

          {/* Center */}

          <div className="hidden xl:flex items-center gap-3 rounded-full border border-blue-100 bg-blue-50 px-5 py-2">

            <ShieldCheck
              size={18}
              className="text-blue-600"
            />

            <span className="text-sm font-semibold text-blue-700">
              NIELIT Accredited Centre • Established 1997
            </span>

          </div>

          {/* Right */}

          <div className="flex items-center gap-3">

            <a
              href="#"
              className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-blue-600 transition-all duration-300 flex items-center justify-center group"
            >

              <img
                src={assets.facebook_icon}
                alt="facebook"
                className="w-5 group-hover:brightness-0 group-hover:invert"
              />

            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-sky-500 transition-all duration-300 flex items-center justify-center group"
            >

              <img
                src={assets.twitter_icon}
                alt="twitter"
                className="w-5 group-hover:brightness-0 group-hover:invert"
              />

            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-pink-600 transition-all duration-300 flex items-center justify-center group"
            >

              <img
                src={assets.instagram_icon}
                alt="instagram"
                className="w-5 group-hover:brightness-0 group-hover:invert"
              />

            </a>

          </div>

        </div>

        <div className="border-t border-gray-100 py-5 flex flex-col md:flex-row items-center justify-between gap-3">

          <p className="text-sm text-gray-500 text-center">

            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-gray-700">
              Shree Computer
            </span>

            . All Rights Reserved.

          </p>

          <div className="flex items-center gap-2 text-gray-500">

            <Globe size={16} />

            <span className="text-sm">
              Secure Institute ERP
            </span>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;