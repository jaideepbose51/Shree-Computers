import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Footer from "../../components/student/Footer";
import Loading from "../../components/student/Loading";
import { AppContext } from "../../context/AppContext";
import EnquiryModal from "../../components/student/EnquiryModal";

const CourseDetails = () => {
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);
  const { slug } = useParams();

  const { backendUrl, settings } =
  useContext(AppContext);

  const [course, setCourse] = useState(null);

  const fetchCourse = async () => {
    try {
      const { data } = await axios.get(
        `${backendUrl}/api/courses/slug/${slug}`
      );

      if (data.success) {
        setCourse(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCourse();
  }, [slug]);

  if (!course) {
    return <Loading />;
  }

  return (
    <>
      <div className="relative md:px-36 px-8 pt-20 md:pt-30">
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Left Section */}
          <div className="flex-1 text-left">
            <h1 className="text-4xl font-bold text-gray-800">
              {course.courseName}
            </h1>

            <p className="text-gray-600 mt-4">
              {course.description}
            </p>

            <div className="mt-8 space-y-3">
              <p>
                <span className="font-semibold">
                  Duration:
                </span>{" "}
                {course.duration}
              </p>

              <p>
                <span className="font-semibold">
                  Eligibility:
                </span>{" "}
                {course.eligibility}
              </p>

              <p>
  <span className="font-semibold">
    Fees:
  </span>{" "}

  {settings?.showCourseFees ? (
    <span className="text-blue-600 font-semibold">
      ₹{course.fees.toLocaleString()}
    </span>
  ) : (
    <span className="text-orange-600 font-semibold">
      Contact Institute
    </span>
  )}
</p>
            </div>

            <div className="mt-10">
              <h2 className="text-2xl font-semibold text-gray-800">
                Career Opportunities
              </h2>

              <ul className="list-disc ml-6 mt-4 text-gray-600">
                {course.careerOpportunities?.map(
                  (item, index) => (
                    <li key={index}>
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-[420px] bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={
                course.image ||
                "https://placehold.co/600x400?text=Course"
              }
              alt={course.courseName}
              className="w-full h-60 object-cover"
            />

            <div className="p-6">
            {settings?.showCourseFees ? (

  <p className="text-3xl font-bold text-blue-600">
    ₹{course.fees.toLocaleString()}
  </p>

) : (

  <div>

    <p className="text-sm text-gray-500">
      Course Fee
    </p>

    <div className="rounded-xl bg-orange-50 border border-orange-200 p-4 mt-2">

  <p className="text-orange-700 font-semibold">
    Contact Institute for Fee Details
  </p>

  <p className="text-sm text-gray-500 mt-1">
    Call or submit an enquiry to receive the latest fee structure.
  </p>

</div>

  </div>

)}

              <button
  className="w-full mt-6 bg-blue-600 text-white py-3 rounded"
  onClick={() => setShowEnquiryModal(true)}
>
  Enquire Now
</button>

              <div className="mt-6">
                <h3 className="font-semibold text-lg">
                  Course Includes
                </h3>

                <ul className="list-disc ml-5 mt-3 text-gray-600">
                  <li>Classroom Training</li>
                  <li>Practical Sessions</li>
                  <li>Study Materials</li>
                  <li>Certificate</li>
                  <li>Placement Assistance</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      <EnquiryModal
  isOpen={showEnquiryModal}
  onClose={() =>
    setShowEnquiryModal(false)
  }
  courseId={course._id}
/>

      <Footer />
    </>
  );
};

export default CourseDetails;