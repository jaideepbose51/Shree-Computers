import React from "react";
import {
  Quote,
  Star,
} from "lucide-react";

const testimonials = [
  {
    name: "Rahul Kumar",
    course: "O Level",
    feedback:
      "The practical training and supportive faculty helped me build strong computer skills. The course improved my confidence and prepared me for government and private sector opportunities.",
  },
  {
    name: "Priya Sharma",
    course: "ADCA",
    feedback:
      "The teaching methodology was excellent and every concept was explained clearly. The hands-on practice sessions made learning easy and enjoyable.",
  },
  {
    name: "Amit Singh",
    course: "Certified Web Developer",
    feedback:
      "The project-based learning approach helped me understand web development from basics to advanced concepts. I gained valuable real-world experience.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="w-full bg-white py-14 md:py-20">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center">

          <span className="inline-block rounded-full bg-blue-50 px-4 py-2 text-xs md:text-sm font-semibold uppercase tracking-[3px] text-blue-600">

            Student Success Stories

          </span>

          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">

            What Our
            <span className="text-blue-600">
              {" "}Students Say
            </span>

          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-sm sm:text-base text-gray-600 leading-7">

            Over the years, Shree Computer has helped thousands of
            students develop practical skills, earn recognised
            certifications and build successful careers.

          </p>

        </div>

        {/* Cards */}

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

          {testimonials.map(
            (testimonial, index) => (

              <div
                key={index}
                className="group rounded-3xl border border-gray-200 bg-white p-7 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >

                {/* Top */}

                <div className="flex items-center justify-between">

                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center justify-center text-xl font-bold">

                    {testimonial.name.charAt(0)}

                  </div>

                  <Quote
                    size={34}
                    className="text-blue-100 group-hover:text-blue-500 transition"
                  />

                </div>

                {/* Rating */}

                <div className="flex gap-1 mt-6">

                  {[...Array(5)].map((_, i) => (

                    <Star
                      key={i}
                      size={18}
                      className="fill-yellow-400 text-yellow-400"
                    />

                  ))}

                </div>

                {/* Feedback */}

                <p className="mt-6 text-gray-600 leading-8 text-[15px]">

                  "{testimonial.feedback}"

                </p>

                {/* Footer */}

                <div className="mt-8 pt-6 border-t border-gray-100">

                  <h3 className="font-semibold text-lg text-gray-900">

                    {testimonial.name}

                  </h3>

                  <p className="mt-1 text-blue-600 font-medium">

                    {testimonial.course} Student

                  </p>

                </div>

              </div>

            )
          )}

        </div>

      </div>

    </section>
  );
};

export default TestimonialsSection;