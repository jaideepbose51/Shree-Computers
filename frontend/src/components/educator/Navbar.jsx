import React, { useContext } from "react";
import { Link } from "react-router-dom";

import {
  Menu,
  Bell,
  ShieldCheck,
} from "lucide-react";

import { assets } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";

const Navbar = ({
  sidebarOpen,
  setSidebarOpen,
}) => {
  const { settings } =
    useContext(AppContext);

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-gray-200 shadow-sm">

      <div className="h-20 px-6 lg:px-10 flex items-center justify-between">

        {/* Left */}

        <div className="flex items-center gap-5">

          {/* Mobile Hamburger */}

          <button
            onClick={() =>
              setSidebarOpen(
                !sidebarOpen
              )
            }
            className="lg:hidden w-11 h-11 rounded-xl border border-gray-200 bg-white shadow-sm hover:bg-gray-50 transition flex items-center justify-center"
          >
            <Menu size={22} />
          </button>

          {/* Logo */}

          <Link
            to="/"
            className="flex items-center gap-4"
          >
            <img
            src={assets.logo}
            alt="Shree Computer"
            className="w-36 sm:w-40 lg:w-[220px] h-auto object-contain"
            />

            {/* <div className="hidden md:block">

              <h2 className="text-lg font-bold text-gray-900">
                {settings?.instituteName ||
                  "Shree Computer"}
              </h2>

              <p className="text-sm text-gray-500">
                Administration Portal
              </p>

            </div> */}

          </Link>

        </div>

        {/* Right */}

        <div className="flex items-center gap-5">

          {/* Secure Badge */}

          <div className="hidden xl:flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2">

            <ShieldCheck
              size={16}
              className="text-blue-600"
            />

            <span className="text-sm font-semibold text-blue-700">
              Secure ERP
            </span>

          </div>

          {/* Notification */}

          <button className="relative w-11 h-11 rounded-xl bg-gray-100 hover:bg-gray-200 transition flex items-center justify-center">

            <Bell
              size={19}
              className="text-gray-600"
            />

            <span className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-red-500 border-2 border-white"></span>

          </button>

          {/* Admin */}

          <div className="flex items-center gap-3">

            <div className="hidden md:block text-right">

              <p className="font-semibold text-gray-900">
                Administrator
              </p>

              <p className="text-sm text-gray-500">
                Manage Institute
              </p>

            </div>

            <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold shadow-lg">

              A

            </div>

          </div>

        </div>

      </div>

    </header>
  );
};

export default Navbar;