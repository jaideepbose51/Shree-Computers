import React, {
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import axios from "axios";
import { toast } from "react-toastify";

import {
  Search,
  Plus,
  Pencil,
  Trash2,
  BookOpen,
} from "lucide-react";

import { AppContext } from "../../context/AppContext";
import CourseFormModal from "../../components/admin/CourseFormModal";

const ManageCourses = () => {
  const { backendUrl } =
    useContext(AppContext);

  const [courses, setCourses] =
    useState([]);

  const [showModal, setShowModal] =
    useState(false);

  const [editingCourse, setEditingCourse] =
    useState(null);

  const [search, setSearch] =
    useState("");

  const fetchCourses =
    async () => {
      try {
        const { data } =
          await axios.get(
            `${backendUrl}/api/courses`
          );

        if (data.success) {
          setCourses(data.data || []);
        }
      } catch (error) {
        toast.error(
          error.response?.data?.message ||
            error.message
        );
      }
    };

  const filteredCourses =
    useMemo(() => {
      return courses.filter((course) =>
        course.courseName
          .toLowerCase()
          .includes(search.toLowerCase())
      );
    }, [courses, search]);

  const handleSubmit =
    async (formData) => {
      try {
        const token =
          localStorage.getItem(
            "adminToken"
          );

        if (editingCourse) {
          await axios.put(
            `${backendUrl}/api/courses/${editingCourse._id}`,
            formData,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          toast.success(
            "Course Updated"
          );
        } else {
          await axios.post(
            `${backendUrl}/api/courses`,
            formData,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          toast.success(
            "Course Created"
          );
        }

        setEditingCourse(null);
        setShowModal(false);

        fetchCourses();
      } catch (error) {
        toast.error(
          error.response?.data?.message ||
            error.message
        );
      }
    };

  const deleteCourse =
    async (id) => {
      if (
        !window.confirm(
          "Delete this course?"
        )
      )
        return;

      try {
        const token =
          localStorage.getItem(
            "adminToken"
          );

        await axios.delete(
          `${backendUrl}/api/courses/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        toast.success(
          "Course Deleted"
        );

        fetchCourses();
      } catch (error) {
        toast.error(
          error.response?.data?.message ||
            error.message
        );
      }
    };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
<div className="p-4 md:p-6 lg:p-8">
<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-8">


<div>

<p className="uppercase tracking-[3px] text-blue-600 text-sm font-semibold">
Course Management
</p>

<h1 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">
Manage Courses
</h1>

<p className="text-gray-500 mt-2">
Create, edit and organize all institute courses.
</p>

</div>

<button
onClick={()=>{
setEditingCourse(null);
setShowModal(true);
}}
className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl shadow-lg transition"
>

<Plus size={20}/>

Add Course

</button>

</div>

<div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">

<div className="p-6 border-b border-gray-100 flex flex-col md:flex-row md:items-center md:justify-between gap-5">

<div className="relative w-full lg:w-80">

<Search
size={18}
className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
/>

<input
type="text"
placeholder="Search courses..."
value={search}
onChange={(e)=>
setSearch(e.target.value)
}
className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500"
/>

</div>

<div className="hidden sm:flex items-center gap-3 text-sm text-gray-500">

<BookOpen
size={18}
className="text-blue-600"
/>

<span>

{filteredCourses.length} Courses

</span>

</div>

</div>

<div className="overflow-x-auto rounded-b-2xl">

<table className="min-w-[900px] w-full">

<thead>

<tr className="text-left border-b border-gray-100">

<th className="px-6 py-4">
Course
</th>

<th className="px-6 py-4">
Duration
</th>

<th className="px-6 py-4">
Fees
</th>

<th className="px-6 py-4">
Status
</th>

<th className="px-6 py-4 text-right">
Actions
</th>

</tr>

</thead>

<tbody>
  {filteredCourses.length > 0 ? (
    filteredCourses.map((course) => (
      <tr
        key={course._id}
        className="border-b border-gray-100 hover:bg-gray-50 transition"
      >
        {/* Course */}
        <td className="px-6 py-5">

          <div className="flex items-center gap-4 min-w-[260px]">

            <img
              src={
                course.image ||
                "https://placehold.co/100x100?text=Course"
              }
              alt={course.courseName}
              className="w-14 h-14 md:w-16 md:h-16 rounded-xl object-cover border"
            />

            <div>

              <h3 className="font-semibold text-gray-900">
                {course.courseName}
              </h3>

              <p className="hidden md:block text-sm text-gray-500 line-clamp-1 mt-1 max-w-xs">
                {course.description}
              </p>

            </div>

          </div>

        </td>

        {/* Duration */}

        <td className="px-4 md:px-6 py-4 font-medium text-gray-700">
          {course.duration}
        </td>

        {/* Fees */}

        <td className="px-6 py-5">

          <span className="font-semibold text-blue-600">
            ₹
            {course.fees.toLocaleString()}
          </span>

        </td>

        {/* Status */}

        <td className="px-6 py-5">

          {course.isPublished ? (
            <span className="inline-flex items-center rounded-full bg-green-100 text-green-700 px-3 py-1 text-xs font-semibold">
              Published
            </span>
          ) : (
            <span className="inline-flex items-center rounded-full bg-yellow-100 text-yellow-700 px-3 py-1 text-xs font-semibold">
              Draft
            </span>
          )}

        </td>

        {/* Actions */}

        <td className="px-6 py-5">

          <div className="flex justify-end gap-2">

            <button
              onClick={() => {
                setEditingCourse(course);
                setShowModal(true);
              }}
              className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-blue-50 hover:bg-blue-100 flex items-center justify-center transition"
            >
              <Pencil
                size={18}
                className="text-blue-600"
              />
            </button>

            <button
              onClick={() =>
                deleteCourse(course._id)
              }
              className="w-10 h-10 rounded-xl bg-red-50 hover:bg-red-100 flex items-center justify-center transition"
            >
              <Trash2
                size={18}
                className="text-red-600"
              />
            </button>

          </div>

        </td>

      </tr>
    ))
  ) : (
    <tr>

      <td
        colSpan={5}
        className="py-16 md:py-24 text-center"
      >

        <div className="flex flex-col items-center">

          <BookOpen
            size={60}
            className="text-gray-300"
          />

          <h3 className="mt-5 text-xl font-semibold text-gray-700">
            No Courses Found
          </h3>

          <p className="text-gray-500 mt-2">
            Try searching with another keyword.
          </p>

        </div>

      </td>

    </tr>
  )}
</tbody>

</table>

</div>

</div>

<CourseFormModal
  isOpen={showModal}
  onClose={() => {
    setShowModal(false);
    setEditingCourse(null);
  }}
  onSubmit={handleSubmit}
  editingCourse={editingCourse}
/>

</div>
);

};

export default ManageCourses;
