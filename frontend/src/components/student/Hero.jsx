import React from "react";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  Award,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";

import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <section className="relative overflow-hidden w-full bg-gradient-to-b from-slate-50 via-blue-50 to-white">

      {/* Decorative Background */}

      <div className="absolute -top-24 -left-24 sm:-top-32 sm:-left-32 md:-top-44 md:-left-40 w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] md:w-[550px] md:h-[550px] rounded-full bg-blue-200/30 blur-3xl"></div>

      <div className="absolute top-0 right-0 w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] md:w-[450px] md:h-[450px] rounded-full bg-cyan-200/30 blur-3xl"></div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] max-w-[700px] h-[180px] md:h-[260px] bg-blue-100 blur-[120px] opacity-60"></div>

      {/* Grid */}

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#0f172a 1px,transparent 1px),linear-gradient(90deg,#0f172a 1px,transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        <div className="min-h-screen py-16 sm:min-h-0 sm:py-20 md:py-24 lg:py-28 flex flex-col justify-center items-center text-center">

          {/* Badge */}

          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/90 backdrop-blur-md px-4 sm:px-5 py-2 shadow-sm">

            <Award
              size={16}
              className="text-blue-600 shrink-0"
            />

            <span className="text-xs sm:text-sm font-semibold text-blue-700 tracking-wide">

              Trusted Since 1997 • NIELIT Accredited Centre

            </span>

          </div>

          {/* Heading */}

          <h1 className="mt-6 sm:mt-8 max-w-6xl font-black leading-tight tracking-tight">

            <span className="block text-gray-900 text-3xl sm:text-5xl md:text-6xl lg:text-7xl">

              Shree Computers

            </span>

            <span className="block mt-3 sm:mt-4 text-blue-600 text-2xl sm:text-4xl md:text-5xl lg:text-6xl">

              Empowering Careers Through{" "}
              <br className="hidden md:block" />
              Quality Computer Education

            </span>

          </h1>

          {/* Description */}

          <p className="mt-6 sm:mt-8 max-w-3xl text-gray-600 text-sm sm:text-base md:text-lg leading-7 sm:leading-8 px-1">

            One of Katras Township's most trusted computer education institutes,
            delivering practical training, government-recognized certifications,
            experienced faculty, and career-oriented professional courses for over
            two decades.

          </p>

          {/* CTA */}

          <div className="mt-8 sm:mt-10 w-full sm:w-auto flex flex-col sm:flex-row gap-3 sm:gap-4 px-2 sm:px-0">

            <Link
              to="/course-list"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3.5 sm:py-4 font-semibold shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              Explore Courses

              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition"
              />
            </Link>

            <Link
              to="/contact"
              className="rounded-xl border border-gray-300 bg-white px-6 sm:px-8 py-3.5 sm:py-4 font-semibold text-gray-700 hover:bg-gray-50 transition"
            >
              Contact Us
            </Link>

          </div>

          {/* Search */}

          <div className="w-full max-w-4xl mt-10 sm:mt-14 px-1 sm:px-0">

            <SearchBar />

          </div>

          {/* Trust Points */}

          <div className="mt-10 sm:mt-12 flex flex-wrap justify-center gap-3 sm:gap-4 px-2">

            <div className="flex items-center gap-2 rounded-full bg-white border border-gray-200 px-4 sm:px-5 py-2.5 sm:py-3 shadow-sm">

              <GraduationCap
                size={18}
                className="text-blue-600 shrink-0"
              />

              <span className="font-medium text-gray-700 text-sm sm:text-base">

                Practical Classroom Training

              </span>

            </div>

            <div className="flex items-center gap-2 rounded-full bg-white border border-gray-200 px-4 sm:px-5 py-2.5 sm:py-3 shadow-sm">

              <BadgeCheck
                size={18}
                className="text-green-600 shrink-0"
              />

              <span className="font-medium text-gray-700 text-sm sm:text-base">

                Government Recognized Certifications

              </span>

            </div>

            <div className="flex items-center gap-2 rounded-full bg-white border border-gray-200 px-4 sm:px-5 py-2.5 sm:py-3 shadow-sm">

              <Award
                size={18}
                className="text-yellow-500 shrink-0"
              />

              <span className="font-medium text-gray-700 text-sm sm:text-base">

                Placement Assistance

              </span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;