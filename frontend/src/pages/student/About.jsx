import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/student/Footer";

const About = () => {
const features = [
"Authorized NIELIT Accredited Centre",
"O Level, CCC & BCC Courses",
"Experienced & Dedicated Faculty",
"Modern Computer Labs",
"LAN Connected Systems",
"Internet & Projector Facilities",
"Rich Computer Library",
"Practical Training Sessions",
"Placement Assistance",
"Personality Development Programs",
"Quality Computer Education Standards",
"Student-Centric Learning Environment",
];

return (
<> <div className="bg-gray-50 min-h-screen">

    {/* Hero Section */}
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          About Shree Computer
        </h1>

        <p className="max-w-4xl mx-auto text-lg md:text-xl opacity-90 leading-8">
          The oldest and most trusted computer training institute in
          Katras Township, empowering students with industry-relevant
          skills and quality education since 1997.
        </p>
      </div>
    </section>

    <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-6 -mt-28 relative z-10 mb-16">

        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
          <h3 className="text-4xl font-bold text-blue-600">28+</h3>
          <p className="text-gray-600 mt-2">
            Years of Excellence
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
          <h3 className="text-4xl font-bold text-blue-600">1997</h3>
          <p className="text-gray-600 mt-2">
            Established
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
          <h3 className="text-4xl font-bold text-blue-600">O1476</h3>
          <p className="text-gray-600 mt-2">
            Accreditation No.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
          <h3 className="text-4xl font-bold text-blue-600">100%</h3>
          <p className="text-gray-600 mt-2">
            Practical Learning
          </p>
        </div>

      </div>

      {/* About */}
      <section className="bg-white rounded-2xl shadow-sm p-8 md:p-12 mb-10">

        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Who We Are
        </h2>

        <div className="space-y-5 text-gray-600 leading-8">

          <p>
            Founded on <strong>1st June 1997</strong>, Shree Computer
            has been a pioneer in computer education in Katras Township.
          </p>

          <p>
            Located opposite Katras Police Station, the institute has
            helped generations of students acquire practical computer
            skills, industry-recognized certifications and rewarding
            career opportunities.
          </p>

          <p>
            Through quality teaching, experienced faculty and hands-on
            training, we continue to be one of the most trusted
            computer education centres in the region.
          </p>

        </div>

      </section>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">

        <div className="bg-white rounded-2xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            Our Mission
          </h2>

          <p className="text-gray-600 leading-8">
            To provide affordable, practical and industry-oriented
            computer education that empowers students with the
            knowledge and skills required for today's digital world.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            Our Vision
          </h2>

          <p className="text-gray-600 leading-8">
            To become the most trusted technology education institute
            in the region by nurturing skilled professionals,
            innovators and lifelong learners.
          </p>
        </div>

      </div>

      {/* Accreditation */}
      <section className="bg-blue-50 border border-blue-100 rounded-2xl p-8 md:p-12 mb-10">

        <h2 className="text-3xl font-bold text-blue-700 mb-6">
          NIELIT Accredited Centre
        </h2>

        <div className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold mb-8">
          Accreditation Number: O1476
        </div>

        <div className="grid md:grid-cols-2 gap-4">

          <div className="bg-white p-4 rounded-lg shadow-sm">
            ✓ Authorized O Level Centre
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            ✓ Authorized CCC Centre
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            ✓ Authorized BCC Centre
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            ✓ Government Recognized Programs
          </div>

        </div>

      </section>

      {/* About NIELIT */}
      <section className="bg-white rounded-2xl shadow-sm p-8 md:p-12 mb-10">

        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Why NIELIT Matters
        </h2>

        <p className="text-gray-600 leading-8 mb-4">
          NIELIT (National Institute of Electronics and Information
          Technology) is an autonomous organization under the Ministry
          of Electronics and Information Technology, Government of India.
        </p>

        <p className="text-gray-600 leading-8">
          NIELIT certifications are nationally recognized and designed
          to create skilled IT professionals who can meet the growing
          demands of the technology industry.
        </p>

      </section>

      {/* Features */}
      <section className="mb-10">

        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Why Choose Shree Computer?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-6"
            >
              <div className="flex gap-3">
                <span className="text-blue-600 font-bold">✓</span>

                <span className="text-gray-700">
                  {feature}
                </span>
              </div>
            </div>
          ))}

        </div>

      </section>

      {/* Recognition */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl p-8 md:p-12 mb-10">

        <h2 className="text-3xl font-bold mb-6">
          Industry Recognition
        </h2>

        <p className="leading-8 text-lg mb-6">
          NIELIT certifications are recognized across India by various
          public and private organizations.
        </p>

        <div className="grid md:grid-cols-3 gap-4">

          <div className="bg-white/10 rounded-lg p-4">
            Government Organizations
          </div>

          <div className="bg-white/10 rounded-lg p-4">
            Banking Institutions
          </div>

          <div className="bg-white/10 rounded-lg p-4">
            Railways
          </div>

          <div className="bg-white/10 rounded-lg p-4">
            Public Sector Undertakings
          </div>

          <div className="bg-white/10 rounded-lg p-4">
            Private Companies
          </div>

          <div className="bg-white/10 rounded-lg p-4">
            Multinational Corporations
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-white rounded-2xl shadow-sm p-10 text-center">

        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Start Your Career Journey Today
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Join Shree Computer and gain practical skills,
          industry-recognized certifications and the confidence
          needed to build a successful future in Information Technology.
        </p>

        <Link
          to="/course-list"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition"
        >
          Explore Courses
        </Link>

      </section>

    </div>
  </div>

  <Footer />
</>

);
};

export default About;
