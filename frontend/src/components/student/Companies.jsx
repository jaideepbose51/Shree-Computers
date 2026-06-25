import React from "react";
import {
  CheckCircle2,
  Award,
  GraduationCap,
  Briefcase,
} from "lucide-react";

const stats = [
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
];

const highlights = [
  {
    icon: GraduationCap,
    title: "Practical Hands-On Training",
  },
  {
    icon: Award,
    title: "Experienced & Dedicated Faculty",
  },
  {
    icon: CheckCircle2,
    title: "Government Recognized Certifications",
  },
  {
    icon: Briefcase,
    title: "Career Guidance & Placement Assistance",
  },
];

const Companies = () => {
  return (
    <section className="w-full bg-white py-14 md:py-20">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center">

          <span className="inline-block rounded-full bg-blue-50 px-4 py-2 text-xs md:text-sm font-semibold uppercase tracking-[3px] text-blue-600">
            Trusted Since 1997
          </span>

          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">

            A Legacy of
            <span className="text-blue-600">
              {" "}Quality Computer Education
            </span>

          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-sm sm:text-base text-gray-600 leading-7">

            Shree Computer is one of the oldest and most trusted computer
            education institutes in Katras Township. As a NIELIT Accredited
            Centre, we have been empowering students with practical learning,
            professional certification and career-oriented training for more
            than two decades.

          </p>

        </div>

        {/* Stats */}

        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">

          {stats.map((item, index) => (

            <div
              key={index}
              className="rounded-2xl border border-gray-200 bg-white p-5 md:p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600">

                {item.value}

              </h3>

              <p className="mt-3 text-sm md:text-base text-gray-600 font-medium">

                {item.label}

              </p>

            </div>

          ))}

        </div>

        {/* Why Choose Us */}

        <div className="mt-16 rounded-3xl bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 p-6 sm:p-8 lg:p-12 overflow-hidden relative">

          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,white,transparent_60%)]"></div>

          <div className="relative z-10">

            <div className="text-center">

              <span className="inline-block rounded-full bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[3px] text-blue-100">

                Why Choose Us

              </span>

              <h3 className="mt-5 text-2xl sm:text-3xl lg:text-4xl font-bold text-white">

                Why Students Choose Shree Computer

              </h3>

              <p className="mt-4 max-w-2xl mx-auto text-blue-100 leading-7">

                We focus on practical learning, professional certification,
                real-world skills and career growth to help students succeed.

              </p>

            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">

              {highlights.map((item, index) => {

                const Icon = item.icon;

                return (

                  <div
                    key={index}
                    className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md p-5 flex items-center gap-4 hover:bg-white/15 transition-all duration-300"
                  >

                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0">

                      <Icon
                        size={22}
                        className="text-blue-600"
                      />

                    </div>

                    <p className="text-white font-medium text-base md:text-lg leading-7">

                      {item.title}

                    </p>

                  </div>

                );

              })}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Companies;