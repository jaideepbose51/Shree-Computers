import React, {
  useContext,
  useState,
} from "react";

import {
  Link,
  useLocation,
} from "react-router-dom";

import {
  Menu,
  X,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

import { assets } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";

const Navbar = () => {
  const { navigate } =
    useContext(AppContext);

  const location =
    useLocation();

  const [mobileMenu, setMobileMenu] =
    useState(false);

  const isActive = (path) =>
    location.pathname === path;

  const menuItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Courses",
      path: "/course-list",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (

<header className="sticky top-0 z-50">

<div className="absolute inset-0 bg-white/80 backdrop-blur-xl border-b border-gray-200"></div>

<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

<div className="flex items-center justify-between h-16 md:h-20">

{/* Logo */}

<div
onClick={() =>
navigate("/")
}
className="cursor-pointer flex items-center"
>

<img
src={assets.logo}
alt="Shree Computer"
className="w-36 sm:w-40 lg:w-[220px] h-auto object-contain"
/>

</div>

{/* Desktop */}

<nav className="hidden lg:flex items-center gap-2">

{menuItems.map((item)=>(

<Link
key={item.path}
to={item.path}
className={`relative px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300

${
isActive(item.path)
? "text-blue-700 bg-blue-50"
: "text-gray-600 hover:text-blue-600 hover:bg-gray-100"
}`}
>

{item.name}

{isActive(item.path) && (

<span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-blue-600 rounded-full"></span>

)}

</Link>

))}

<div className="mx-3 h-8 w-px bg-gray-200"></div>

<div className="hidden xl:flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2">

<ShieldCheck
size={16}
className="text-blue-600"
/>

<span className="text-sm font-semibold text-blue-700">

NIELIT Accredited

</span>

</div>

<button
onClick={()=>
navigate("/admin/login")
}
className="ml-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-white font-semibold shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
>

Admin Login

</button>

</nav>

{/* Mobile */}

<button
onClick={()=>
setMobileMenu(
!mobileMenu
)
}
className="lg:hidden w-11 h-11 rounded-xl border border-gray-200 bg-white flex items-center justify-center shadow-sm hover:bg-gray-50 transition"
>

{mobileMenu ? (

<X size={22}/>

) : (

<Menu size={22}/>

)}

</button>

</div>
      {/* Mobile Menu */}

      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          mobileMenu
            ? "max-h-[500px] opacity-100 pb-6"
            : "max-h-0 opacity-0"
        }`}
      >

        <div className="mt-2 rounded-3xl border border-gray-200 bg-white shadow-xl overflow-hidden">

          {/* Top */}

          <div className="px-6 py-5 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50">

            <p className="text-xs uppercase tracking-[3px] text-blue-600 font-semibold">
              Navigation
            </p>

            <h3 className="mt-2 text-xl font-bold text-gray-900">
              Shree Computer
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              NIELIT Accredited Centre
            </p>

          </div>

          {/* Links */}

          <div className="py-3">

            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() =>
                  setMobileMenu(false)
                }
                className={`mx-3 mb-2 flex items-center justify-between rounded-2xl px-5 py-4 transition-all duration-300

${
isActive(item.path)
? "bg-blue-50 text-blue-700"
: "text-gray-700 hover:bg-gray-50"
}`}
              >

                <span className="font-medium">
                  {item.name}
                </span>

                <ChevronRight
                  size={18}
                />

              </Link>
            ))}

          </div>

          {/* Bottom */}

          <div className="border-t border-gray-100 p-5">

            <button
              onClick={() => {
                navigate(
                  "/admin/login"
                );

                setMobileMenu(
                  false
                );
              }}
              className="w-full rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 py-4 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Admin Login
            </button>

            <div className="flex justify-center mt-5">

              <div className="flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2">

                <ShieldCheck
                  size={16}
                  className="text-blue-600"
                />

                <span className="text-sm font-semibold text-blue-700">
                  Trusted Since 1997
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  </header>

);

};

export default Navbar;