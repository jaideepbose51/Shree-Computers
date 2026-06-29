import React from "react";
import {
  CheckCircle2,
  Award,
  GraduationCap,
  Briefcase,
  ShieldCheck,
  Trophy,
  CalendarClock,
} from "lucide-react";
import CountUp from "react-countup";

const stats = [
  {
    icon: CalendarClock,
    value: 1997,
    suffix: "",
    label: "Established",
    description: "Serving students since 1997",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: Trophy,
    value: 25,
    suffix: "+",
    label: "Years of Excellence",
    description: "Trusted by thousands of students",
    color: "text-amber-500",
    bg: "bg-amber-50",
  },
  {
    icon: ShieldCheck,
    text: "NIELIT",
    label: "Accredited Centre",
    description: "Government Recognized",
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    icon: GraduationCap,
    text: "O1476",
    label: "Accreditation No.",
    description: "Official Accreditation",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
];

const highlights = [
  {
    icon: GraduationCap,
    title: "Practical Hands-On Training",
    description:
      "Learn by doing with real software, live exercises and project work in every class, not just theory.",
  },
  {
    icon: Award,
    title: "Experienced & Dedicated Faculty",
    description:
      "Get guided by trained instructors who bring years of industry and classroom experience to every session.",
  },
  {
    icon: CheckCircle2,
    title: "Government Recognized Certifications",
    description:
      "Earn certificates valued by employers and government bodies, backed by our NIELIT accreditation.",
  },
  {
    icon: Briefcase,
    title: "Career Guidance & Placement Assistance",
    description:
      "Get support with resumes, interview preparation and placement leads to help you start your career with confidence.",
  },
];

const Companies = () => {
  return (
    <section className="relative overflow-hidden w-full bg-gradient-to-b from-slate-50 via-blue-50 to-white">

      {/* Background Effects */}

      <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-blue-200/30 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-cyan-200/20 blur-3xl"></div>

      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px),linear-gradient(90deg,#000 1px, transparent 1px)",
          backgroundSize: "45px 45px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5">

        {/* Header */}

        <div className="text-center">

          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-2 shadow-sm">

            <ShieldCheck
              size={18}
              className="text-blue-600"
            />

            <span className="text-sm font-semibold uppercase tracking-[3px] text-blue-700">
              Trusted Since 1997
            </span>

          </div>

          <h2 className="mt-8 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">

            A Legacy of

            <span className="block mt-2 bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">

              Quality Computer Education

            </span>

          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-gray-600 text-base md:text-lg leading-8">

            Shree Computers is one of the oldest and most trusted computer
            education institutes in Katras Township. As a NIELIT Accredited
            Centre, we empower students through practical learning,
            government-recognized certification and industry-focused training
            for successful careers.

          </p>

        </div>

        {/* Premium Stats */}

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-5">

          {stats.map((item, index) => {

            const Icon = item.icon;

            return (

              <div
                key={index}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-gray-200
                  bg-white/80
                  backdrop-blur-xl
                  p-6
                  text-center
                  shadow-lg
                  transition-all
                  duration-500
                  hover:-translate-y-3
                  hover:border-blue-200
                  hover:shadow-2xl
                "
              >

                <div
                  className={`
                    mx-auto
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    ${item.bg}
                    ${item.color}
                    transition-all
                    duration-500
                    group-hover:scale-110
                    group-hover:rotate-6
                  `}
                >

                  <Icon size={30} />

                </div>

                <div className="mt-6">

                  {item.value ? (

                    <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">

                      <CountUp
                        end={item.value}
                        duration={2.5}
                      />

                      {item.suffix}

                    </h3>

                  ) : (

                    <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">

                      {item.text}

                    </h3>

                  )}

                  <p className="mt-3 font-semibold text-gray-700">

                    {item.label}

                  </p>

                  <p className="mt-2 text-sm leading-6 text-gray-500">

                    {item.description}

                  </p>

                </div>

              </div>

            );

          })}

        </div>

        {/* Why Choose Us */}

                {/* Why Choose Us */}

        <div className="relative mt-24 overflow-hidden rounded-[32px] bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 p-8 md:p-12 lg:p-16 shadow-2xl">

          {/* Floating Background */}

          <div className="absolute -top-24 -left-20 w-72 h-72 rounded-full bg-white/10 blur-3xl"></div>

          <div className="absolute -bottom-32 right-0 w-96 h-96 rounded-full bg-cyan-300/10 blur-3xl"></div>

          <div className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px, transparent 1px),linear-gradient(90deg,#fff 1px, transparent 1px)",
              backgroundSize: "45px 45px",
            }}
          />

          {/* Floating Badge */}

          <div className="absolute right-8 top-8 hidden lg:flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl px-5 py-2">

            ⭐

            <span className="text-sm font-semibold text-white">
              Trusted Since 1997
            </span>

          </div>

          <div className="relative z-10">

            <div className="text-center">

              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2 backdrop-blur-xl">

                <Award
                  size={18}
                  className="text-yellow-300"
                />

                <span className="text-xs font-semibold uppercase tracking-[3px] text-blue-100">

                  Why Choose Us

                </span>

              </div>

              <h3 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-bold text-white">

                Why Students Choose
                <span className="block text-cyan-200">
                  Shree Computers
                </span>

              </h3>

              <p className="mx-auto mt-6 max-w-3xl text-base md:text-lg leading-8 text-blue-100">

                We combine practical training, experienced faculty,
                government-recognized certification and career guidance
                to help every student become industry-ready.

              </p>

            </div>

            {/* Cards */}

            <div className="mt-14 grid gap-6 md:grid-cols-2">

              {highlights.map((item, index) => {

                const Icon = item.icon;

                return (

                  <div
                    key={index}
                    className="
                    group
                    rounded-3xl
                    border
                    border-white/15
                    bg-white/10
                    backdrop-blur-xl
                    p-6
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:bg-white/15
                    hover:shadow-2xl
                    "
                  >

                    <div className="flex items-start gap-5">

                      <div
                        className="
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-2xl
                        bg-white
                        shadow-lg
                        transition-all
                        duration-500
                        group-hover:rotate-6
                        group-hover:scale-110
                        "
                      >

                        <Icon
                          size={28}
                          className="text-blue-600"
                        />

                      </div>

                      <div>

                        <h4 className="text-xl font-semibold text-white">

                          {item.title}

                        </h4>

                        <p className="mt-3 leading-7 text-blue-100">

                          {item.description}

                        </p>

                      </div>

                    </div>

                  </div>

                );

              })}

            </div>

            {/* Bottom Trust Strip */}

            <div className="mt-14 rounded-2xl border border-white/15 bg-white/10 backdrop-blur-xl p-6">

              <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-4">

                <div>

                  <h4 className="text-2xl font-bold text-white">

                    5000+

                  </h4>

                  <p className="mt-2 text-blue-100">

                    Students Trained

                  </p>

                </div>

                <div>

                  <h4 className="text-2xl font-bold text-white">

                    25+

                  </h4>

                  <p className="mt-2 text-blue-100">

                    Years of Excellence

                  </p>

                </div>

                <div>

                  <h4 className="text-2xl font-bold text-white">

                    NIELIT

                  </h4>

                  <p className="mt-2 text-blue-100">

                    Accredited Centre

                  </p>

                </div>

                <div>

                  <h4 className="text-2xl font-bold text-white">

                    100%

                  </h4>

                  <p className="mt-2 text-blue-100">

                    Practical Training

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Companies;