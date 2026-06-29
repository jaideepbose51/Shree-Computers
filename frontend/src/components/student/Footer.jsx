import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { AppContext } from "../../context/AppContext";

const Footer = () => {
  const { settings } =
    useContext(AppContext);

 return (
  <footer className="relative overflow-hidden bg-gradient-to-b from-gray-950 via-slate-950 to-black text-white">

    {/* Decorative Background */}

    <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl"></div>

    <div className="absolute -bottom-52 -right-40 w-[420px] h-[420px] rounded-full bg-indigo-600/10 blur-3xl"></div>

    <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

      {/* Top */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[1.5fr_1fr_1fr] gap-12 lg:gap-16 py-16 border-b border-white/10">

        {/* Institute */}

        <div>

          <span className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs sm:text-sm font-semibold tracking-wide text-blue-300">

            Established 1997 • NIELIT Accredited Centre

          </span>

          <h2 className="mt-7 text-3xl md:text-4xl font-bold leading-tight">

            {settings?.instituteName ||
              "Shree Computer"}

          </h2>

          <p className="mt-3 text-blue-400 font-semibold uppercase tracking-[3px] text-sm">

            Accreditation No. O1476

          </p>

          <p className="mt-6 max-w-lg text-white/70 leading-8 text-sm md:text-base">

            Empowering students through quality computer
            education, practical training and career-oriented
            learning since 1997. Our mission is to provide
            industry-relevant education that helps students
            build successful careers in Information Technology
            and professional computing.

          </p>

          {/* Small Badge */}

          <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm">

            <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center font-bold text-lg">

              25+

            </div>

            <div>

              <p className="font-semibold">

                Years of Excellence

              </p>

              <p className="text-sm text-white/60">

                Trusted by thousands of students

              </p>

            </div>

          </div>

        </div>

        {/* Quick Links */}

        <div>

          <h3 className="text-xl font-semibold mb-8">

            Quick Links

          </h3>

          <ul className="space-y-5">

            <li>

              <Link
                to="/"
                className="group flex items-center gap-3 text-white/70 hover:text-blue-400 transition"
              >

                <span className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-125 transition"></span>

                Home

              </Link>

            </li>

            <li>

              <Link
                to="/course-list"
                className="group flex items-center gap-3 text-white/70 hover:text-blue-400 transition"
              >

                <span className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-125 transition"></span>

                Courses

              </Link>

            </li>

            <li>

              <Link
                to="/about"
                className="group flex items-center gap-3 text-white/70 hover:text-blue-400 transition"
              >

                <span className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-125 transition"></span>

                About Us

              </Link>

            </li>

            <li>

              <Link
                to="/contact"
                className="group flex items-center gap-3 text-white/70 hover:text-blue-400 transition"
              >

                <span className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-125 transition"></span>

                Contact Us

              </Link>

            </li>

          </ul>

        </div>

        {/* Contact */}

        <div>

          <h3 className="text-xl font-semibold mb-8">

            Contact Information

          </h3>

          <div className="space-y-6 text-white/70">

            <div>

              <p className="text-sm uppercase tracking-wider text-blue-400 mb-2">

                Address

              </p>

              <p className="leading-7">

                {settings?.address}

              </p>

            </div>

            <div>

              <p className="text-sm uppercase tracking-wider text-blue-400 mb-2">

                Phone

              </p>

              <a
                href={`tel:${settings?.phone}`}
                className="hover:text-blue-400 transition"
              >

                {settings?.phone}

              </a>

            </div>

            <div>

              <p className="text-sm uppercase tracking-wider text-blue-400 mb-2">

                Email

              </p>

              <a
                href={`mailto:${settings?.email}`}
                className="break-all hover:text-blue-400 transition"
              >

                {settings?.email}

              </a>

            </div>

            {settings?.whatsapp && (

              <div>

                <p className="text-sm uppercase tracking-wider text-blue-400 mb-2">

                  WhatsApp

                </p>

                <a
                  href={`https://wa.me/91${settings.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-green-400 transition"
                >

                  +91 {settings.whatsapp}

                </a>

              </div>

            )}

          </div>

        </div>

      </div>

                {/* Trust Statistics */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 py-14 border-b border-white/10">

          {[
            {
              value: "1997",
              label: "Established",
            },
            {
              value: "25+",
              label: "Years of Excellence",
            },
            {
              value: "NIELIT",
              label: "Accredited Centre",
            },
            {
              value: "O1476",
              label: "Accreditation No.",
            },
          ].map((item, index) => (

            <div
              key={index}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:bg-white/[0.05]"
            >

              <h3 className="text-3xl md:text-4xl font-bold text-blue-500 group-hover:text-blue-400 transition">

                {item.value}

              </h3>

              <p className="mt-3 text-sm text-white/60 leading-6">

                {item.label}

              </p>

            </div>

          ))}

        </div>

        {/* Bottom Footer */}

        <div className="py-8 flex flex-col lg:flex-row items-center justify-between gap-6">

          <div className="text-center lg:text-left">

            <p className="text-white/70 text-sm">

              © {new Date().getFullYear()}{" "}
              {settings?.instituteName ||
                "Shree Computer"}

              . All Rights Reserved.

            </p>

            <p className="text-white/40 text-xs mt-2 tracking-wide">

              Empowering Students Through Quality Computer
              Education Since 1997

            </p>

          </div>

          <div className="flex flex-wrap justify-center gap-3">

            <Link
              to="/"
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 transition hover:border-blue-500/40 hover:bg-blue-600 hover:text-white"
            >
              Home
            </Link>

            <Link
              to="/course-list"
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 transition hover:border-blue-500/40 hover:bg-blue-600 hover:text-white"
            >
              Courses
            </Link>

            <Link
              to="/about"
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 transition hover:border-blue-500/40 hover:bg-blue-600 hover:text-white"
            >
              About
            </Link>

            <Link
              to="/contact"
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 transition hover:border-blue-500/40 hover:bg-blue-600 hover:text-white"
            >
              Contact
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;