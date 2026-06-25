import React from "react";
import { Link } from "react-router-dom";

const NIELIT_COURSES = [
  "O Level",
  "A Level",
  "CCC",
  "CCC Plus",
  "BCC",
];

const CourseCard = ({ course }) => {
  return (
    <Link
      to={`/course/${course.slug}`}
      onClick={() => window.scrollTo(0, 0)}
      className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-blue-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
    >
      {/* Course Image */}
      <div className="relative h-56 overflow-hidden">

        <img
          src={
            course.image ||
            "https://placehold.co/800x500?text=Course"
          }
          alt={course.courseName}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        />

        {NIELIT_COURSES.includes(
          course.courseName
        ) && (
          <div className="absolute top-4 left-4 bg-green-50 text-green-700 border border-green-200 px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
            NIELIT Certified
          </div>
        )}

      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">

        {/* Title */}
        <div className="h-16">
          <h3 className="text-xl font-bold text-gray-900 line-clamp-2">
            {course.courseName}
          </h3>
        </div>

        {/* Description */}
        <div className="h-28 mt-3">
          <p className="text-gray-600 text-sm leading-7 line-clamp-4">
            {course.description}
          </p>
        </div>

        {/* Course Details */}
        <div className="border-t border-gray-100 pt-5 mt-4">

          <div className="flex justify-between mb-3">
            <span className="text-gray-500">
              Duration
            </span>

            <span className="font-medium text-gray-900">
              {course.duration}
            </span>
          </div>

          <div className="flex justify-between gap-4">
            <span className="text-gray-500">
              Eligibility
            </span>

            <span className="font-medium text-gray-900 text-right">
              {course.eligibility}
            </span>
          </div>

        </div>

        {/* Footer */}
        <div className="mt-auto border-t border-gray-100 pt-5">

          <p className="text-sm text-gray-500">
            Course Fee
          </p>

          <h4 className="text-3xl font-bold text-blue-600 mt-1">
            ₹{course.fees.toLocaleString()}
          </h4>

          <div className="mt-5 inline-flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
            View Course
            <span>→</span>
          </div>

        </div>

      </div>

    </Link>
  );
};

export default CourseCard;