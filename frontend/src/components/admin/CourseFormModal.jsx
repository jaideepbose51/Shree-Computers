import React, { useState, useEffect } from "react";

const CourseFormModal = ({
  isOpen,
  onClose,
  onSubmit,
  editingCourse,
}) => {
  const [formData, setFormData] = useState({
    courseName: "",
    description: "",
    duration: "",
    fees: "",
    eligibility: "",
    careerOpportunities: "",
    image: "",
    isPublished: true,
  });

  useEffect(() => {
    if (editingCourse) {
      setFormData({
        courseName: editingCourse.courseName || "",
        description: editingCourse.description || "",
        duration: editingCourse.duration || "",
        fees: editingCourse.fees || "",
        eligibility: editingCourse.eligibility || "",
        careerOpportunities:
          editingCourse.careerOpportunities?.join(", ") || "",
        image: editingCourse.image || "",
        isPublished:
          editingCourse.isPublished ?? true,
      });
    }
  }, [editingCourse]);

  const changeHandler = (e) => {
    const { name, value, type, checked } =
      e.target;

    setFormData({
      ...formData,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    onSubmit({
      ...formData,
      fees: Number(formData.fees),
      careerOpportunities:
        formData.careerOpportunities
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean),
    });
  };

  if (!isOpen) return null;

return (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">

    <div className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-300">

      {/* Header */}

      <div className="border-b border-gray-100 bg-gradient-to-r from-blue-50 via-white to-indigo-50 px-6 md:px-8 py-6">

        <div className="flex items-center justify-between">

          <div>

            <p className="uppercase tracking-[3px] text-xs font-semibold text-blue-600">
              Course Management
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">
              {editingCourse
                ? "Edit Course"
                : "Create New Course"}
            </h2>

            <p className="text-gray-500 mt-2 text-sm">
              Fill in the details below to
              {editingCourse
                ? " update the course."
                : " create a new course."}
            </p>

          </div>

          <button
            onClick={onClose}
            className="w-11 h-11 rounded-xl bg-gray-100 hover:bg-red-50 hover:text-red-600 transition flex items-center justify-center text-xl font-semibold"
          >
            ✕
          </button>

        </div>

      </div>

      {/* Form */}

      <form
        onSubmit={submitHandler}
      >

        <div className="max-h-[70vh] overflow-y-auto px-6 md:px-8 py-8 space-y-7">

          {/* Course Name */}

          <div>

            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Course Name
            </label>

            <input
              type="text"
              name="courseName"
              value={formData.courseName}
              onChange={changeHandler}
              placeholder="Enter course name"
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
            />

          </div>

          {/* Description */}

          <div>

            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Description
            </label>

            <textarea
              rows={6}
              name="description"
              value={formData.description}
              onChange={changeHandler}
              placeholder="Enter detailed course description..."
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none resize-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
            />

          </div>

          {/* Duration & Fees */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Duration
              </label>

              <input
                type="text"
                name="duration"
                value={formData.duration}
                onChange={changeHandler}
                placeholder="Eg. 6 Months"
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
              />

            </div>

            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Course Fees (₹)
              </label>

              <input
                type="number"
                name="fees"
                value={formData.fees}
                onChange={changeHandler}
                placeholder="Enter fees"
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
              />

            </div>

          </div>
                    {/* Eligibility */}

          <div>

            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Eligibility
            </label>

            <input
              type="text"
              name="eligibility"
              value={formData.eligibility}
              onChange={changeHandler}
              placeholder="Enter eligibility criteria"
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
            />

          </div>

          {/* Career Opportunities */}

          <div>

            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Career Opportunities
            </label>

            <input
              type="text"
              name="careerOpportunities"
              value={formData.careerOpportunities}
              onChange={changeHandler}
              placeholder="Software Developer, Web Developer, Data Analyst..."
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
            />

            <p className="text-xs text-gray-500 mt-2">
              Separate multiple opportunities with commas.
            </p>

          </div>

          {/* Image */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Course Image URL
              </label>

              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={changeHandler}
                placeholder="https://example.com/image.jpg"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
              />

            </div>

            {/* Image Preview */}

            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Live Preview
              </label>

              <div className="h-48 rounded-2xl border border-dashed border-gray-300 overflow-hidden bg-gray-50">

                {formData.image ? (

                  <img
                    src={formData.image}
                    alt="Preview"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display =
                        "none";
                    }}
                  />

                ) : (

                  <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                    Image Preview
                  </div>

                )}

              </div>

            </div>

          </div>

          {/* Publish */}

          <div className="flex items-center justify-between rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4">

            <div>

              <h3 className="font-semibold text-gray-800">
                Publish Course
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                Make this course visible to students.
              </p>

            </div>

            <input
              type="checkbox"
              name="isPublished"
              checked={formData.isPublished}
              onChange={changeHandler}
              className="w-5 h-5 accent-blue-600"
            />

          </div>

        </div>

        {/* Footer */}

        <div className="border-t border-gray-100 bg-white px-6 md:px-8 py-5 flex flex-col-reverse sm:flex-row justify-end gap-3">

          <button
            type="button"
            onClick={onClose}
            className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
          >
            {editingCourse
              ? "Update Course"
              : "Create Course"}
          </button>

        </div>

      </form>

    </div>

  </div>
);

};

export default CourseFormModal;
