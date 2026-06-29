import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  PhoneCall,
} from "lucide-react";

const CallToAction = () => {
  const navigate = useNavigate();

  return (
<section className="relative overflow-hidden w-full bg-gradient-to-b from-slate-50 via-blue-50 to-white">
      <div className="max-w-7xl mx-auto relative overflow-hidden rounded-[32px] bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 shadow-[0_25px_70px_rgba(37,99,235,0.35)]">

        {/* Background Decoration */}

        <div className="absolute -top-28 -left-28 w-72 h-72 rounded-full bg-white/10 blur-3xl"></div>

        <div className="absolute -bottom-28 -right-20 w-80 h-80 rounded-full bg-cyan-300/20 blur-3xl"></div>

        {/* Content */}

        <div className="relative z-10 px-6 sm:px-10 lg:px-20 py-14 md:py-20 text-center">

          <span className="inline-block rounded-full bg-white/15 px-4 py-2 text-xs md:text-sm font-semibold uppercase tracking-[3px] text-blue-100 backdrop-blur">

            Admissions Open 2026

          </span>

          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">

            Build Your Future with

            <span className="block mt-2">

              Shree Computers

            </span>

          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-blue-100 text-base sm:text-lg leading-8">

            Join Katras Township's trusted computer education institute
            since 1997. Learn from experienced faculty, gain practical
            knowledge, earn recognized certifications and prepare yourself
            for a successful IT career.

          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">

            <button
              onClick={() =>
                navigate("/course-list")
              }
              className="group w-full sm:w-auto inline-flex justify-center items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-blue-700 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >

              Explore Courses

              <ArrowRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />

            </button>

            <button
              onClick={() =>
                navigate("/contact")
              }
              className="group w-full sm:w-auto inline-flex justify-center items-center gap-3 rounded-full border border-white/40 bg-white/10 backdrop-blur px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-blue-700"
            >

              <PhoneCall size={18} />

              Contact Us

            </button>

          </div>

          {/* Trust Stats */}

          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6">

            <div>

              <h3 className="text-3xl font-bold text-white">
                1997
              </h3>

              <p className="mt-2 text-sm text-blue-100">
                Established
              </p>

            </div>

            <div>

              <h3 className="text-3xl font-bold text-white">
                25+
              </h3>

              <p className="mt-2 text-sm text-blue-100">
                Years of Excellence
              </p>

            </div>

            <div>

              <h3 className="text-3xl font-bold text-white">
                NIELIT
              </h3>

              <p className="mt-2 text-sm text-blue-100">
                Accredited Centre
              </p>

            </div>

            <div>

              <h3 className="text-3xl font-bold text-white">
                O1476
              </h3>

              <p className="mt-2 text-sm text-blue-100">
                Accreditation No.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default CallToAction;