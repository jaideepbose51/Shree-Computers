import React, {
  useContext,
} from "react";

import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { AppContext } from "../../context/AppContext";
import CourseCard from "./CourseCard";

const CoursesSection = () => {
  const { allCourses } =
    useContext(AppContext);

  return (
<section className="relative overflow-hidden w-full bg-gradient-to-b from-slate-50 via-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center">

          <span className="inline-block rounded-full bg-blue-50 px-4 py-2 text-xs md:text-sm font-semibold uppercase tracking-[3px] text-blue-600">

            Our Courses

          </span>

          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">

            Industry-Relevant
            <span className="text-blue-600">
              {" "}Training Programs
            </span>

          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-sm sm:text-base text-gray-600 leading-7">

            Explore professional computer courses designed to
            build practical skills, improve employability and
            prepare students for careers in Programming,
            Web Development, Networking, Accounting,
            Office Automation and more.

          </p>

        </div>

        {/* Cards */}

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

          {allCourses.length > 0 ? (

            allCourses
              .slice(0, 4)
              .map((course) => (

                <CourseCard
                  key={course._id}
                  course={course}
                />

              ))

          ) : (

            <div className="col-span-full rounded-3xl border border-dashed border-gray-300 bg-white py-20 text-center">

              <h3 className="text-xl font-semibold text-gray-700">
                No Courses Available
              </h3>

              <p className="mt-3 text-gray-500">
                Courses will appear here once they are published.
              </p>

            </div>

          )}

        </div>

        {/* CTA */}

        {allCourses.length > 4 && (

          <div className="mt-14 flex justify-center">

            <Link
              to="/course-list"
              onClick={() =>
                scrollTo(0, 0)
              }
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-white font-semibold shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >

              Explore All Courses

              <ArrowRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />

            </Link>

          </div>

        )}

      </div>

    </section>
  );
};

export default CoursesSection;