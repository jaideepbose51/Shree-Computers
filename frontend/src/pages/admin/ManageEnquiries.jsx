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
  Mail,
  Phone,
  User,
  Trash2,
  Filter,
  Users,
} from "lucide-react";

import { AppContext } from "../../context/AppContext";

const ManageEnquiries = () => {
  const { backendUrl } =
    useContext(AppContext);

  const [page, setPage] =
    useState(1);

  const [totalPages, setTotalPages] =
    useState(1);

  const [loading, setLoading] =
    useState(false);

  const [search, setSearch] =
    useState("");

  const [statusFilter, setStatusFilter] =
    useState("ALL");

  const [enquiries, setEnquiries] =
    useState([]);

  const fetchEnquiries =
    async () => {
      try {
        setLoading(true);

        const token =
          localStorage.getItem(
            "adminToken"
          );

        const { data } =
          await axios.get(
            `${backendUrl}/api/enquiries?page=${page}&limit=10`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

        if (data.success) {
          setEnquiries(data.data);

          setTotalPages(
            data.totalPages
          );

          if (
            page >
              data.totalPages &&
            data.totalPages > 0
          ) {
            setPage(
              data.totalPages
            );
          }
        }
      } catch (error) {
        toast.error(
          error?.response?.data
            ?.message ||
            error.message
        );
      } finally {
        setLoading(false);
      }
    };

  useEffect(() => {
    fetchEnquiries();
  }, [page]);

  const filteredEnquiries =
    useMemo(() => {
      return enquiries.filter(
        (enquiry) => {
          const matchesSearch =
            enquiry.name
              ?.toLowerCase()
              .includes(
                search.toLowerCase()
              ) ||
            enquiry.email
              ?.toLowerCase()
              .includes(
                search.toLowerCase()
              ) ||
            enquiry.phone
              ?.includes(search);

          const matchesStatus =
            statusFilter ===
              "ALL" ||
            enquiry.status ===
              statusFilter;

          return (
            matchesSearch &&
            matchesStatus
          );
        }
      );
    }, [
      enquiries,
      search,
      statusFilter,
    ]);

  const updateStatus =
    async (
      enquiryId,
      status
    ) => {
      try {
        const token =
          localStorage.getItem(
            "adminToken"
          );

        const { data } =
          await axios.patch(
            `${backendUrl}/api/enquiries/${enquiryId}`,
            {
              status,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

        if (data.success) {
          toast.success(
            "Status Updated"
          );

          fetchEnquiries();
        }
      } catch (error) {
        toast.error(
          error?.response?.data
            ?.message ||
            error.message
        );
      }
    };

  const deleteEnquiry =
    async (id) => {
      if (
        !window.confirm(
          "Delete this enquiry?"
        )
      )
        return;

      try {
        const token =
          localStorage.getItem(
            "adminToken"
          );

        const { data } =
          await axios.delete(
            `${backendUrl}/api/enquiries/${id}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

        if (data.success) {
          toast.success(
            "Enquiry Deleted"
          );

          fetchEnquiries();
        }
      } catch (error) {
        toast.error(
          error?.response?.data
            ?.message ||
            error.message
        );
      }
    };

  return (
  <div className="p-8">

    {/* Header */}

    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">

      <div>

        <p className="uppercase tracking-[3px] text-blue-600 text-sm font-semibold">
          Student Management
        </p>

        <h1 className="text-3xl font-bold text-gray-900 mt-2">
          Manage Enquiries
        </h1>

        <p className="text-gray-500 mt-2">
          View, manage and respond to student enquiries efficiently.
        </p>

      </div>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm px-6 py-4 flex items-center gap-4">

        <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">

          <Users
            size={24}
            className="text-blue-600"
          />

        </div>

        <div>

          <p className="text-gray-500 text-sm">
            Total Enquiries
          </p>

          <h2 className="text-2xl font-bold text-gray-900">
            {filteredEnquiries.length}
          </h2>

        </div>

      </div>

    </div>

    {/* Table Card */}

    <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">

      {/* Toolbar */}

      <div className="p-6 border-b border-gray-100 flex flex-col xl:flex-row xl:items-center xl:justify-between gap-5">

        {/* Search */}

        <div className="relative w-full xl:w-96">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search by name, email or phone..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 outline-none transition focus:ring-4 focus:ring-blue-100 focus:border-blue-500"
          />

        </div>

        {/* Filter */}

        <div className="flex items-center gap-3">

          <div className="flex items-center gap-2 text-gray-500">

            <Filter size={18} />

            <span className="text-sm font-medium">
              Status
            </span>

          </div>

          <select
            value={statusFilter}
            onChange={(e) =>
              setStatusFilter(
                e.target.value
              )
            }
            className="rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none focus:ring-4 focus:ring-blue-100"
          >

            <option value="ALL">
              All
            </option>

            <option value="NEW">
              New
            </option>

            <option value="CONTACTED">
              Contacted
            </option>

            <option value="FOLLOW_UP">
              Follow Up
            </option>

            <option value="ADMITTED">
              Admitted
            </option>

          </select>

        </div>

      </div>

      {/* Table */}

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b border-gray-100 bg-gray-50">

              <th className="px-6 py-4 text-left text-xs uppercase tracking-wider text-gray-500 font-semibold">
                Student
              </th>

              <th className="px-6 py-4 text-left text-xs uppercase tracking-wider text-gray-500 font-semibold">
                Contact
              </th>

              <th className="px-6 py-4 text-left text-xs uppercase tracking-wider text-gray-500 font-semibold">
                Course
              </th>

              <th className="px-6 py-4 text-left text-xs uppercase tracking-wider text-gray-500 font-semibold">
                Status
              </th>

              <th className="px-6 py-4 text-right text-xs uppercase tracking-wider text-gray-500 font-semibold">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>
            {filteredEnquiries.length > 0 ? (
  filteredEnquiries.map((enquiry) => (
    <tr
      key={enquiry._id}
      className="border-b border-gray-100 hover:bg-blue-50/40 transition-all duration-300"
    >
      {/* Student */}
      <td className="px-6 py-5">

        <div className="flex items-center gap-4">

          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center justify-center font-semibold text-lg">

            {enquiry.name
              ?.charAt(0)
              .toUpperCase()}

          </div>

          <div>

            <h3 className="font-semibold text-gray-900">
              {enquiry.name}
            </h3>

            <p className="text-sm text-gray-500">
              Student Enquiry
            </p>

          </div>

        </div>

      </td>

      {/* Contact */}

      <td className="px-6 py-5">

        <div className="space-y-2">

          <div className="flex items-center gap-2 text-gray-700">

            <Mail
              size={15}
              className="text-blue-500"
            />

            <span className="text-sm">
              {enquiry.email}
            </span>

          </div>

          <div className="flex items-center gap-2 text-gray-700">

            <Phone
              size={15}
              className="text-green-500"
            />

            <span className="text-sm">
              {enquiry.phone}
            </span>

          </div>

        </div>

      </td>

      {/* Course */}

      <td className="px-6 py-5">

        <div className="font-medium text-gray-800">

          {enquiry.courseInterested
            ?.courseName || "-"}

        </div>

      </td>

      {/* Status */}

      <td className="px-6 py-5">

        <select
          value={enquiry.status}
          onChange={(e) =>
            updateStatus(
              enquiry._id,
              e.target.value
            )
          }
          className={`rounded-full px-4 py-2 text-sm font-medium border outline-none transition

${
enquiry.status === "NEW"
? "bg-blue-50 text-blue-700 border-blue-200"
: enquiry.status ===
"CONTACTED"
? "bg-yellow-50 text-yellow-700 border-yellow-200"
: enquiry.status ===
"FOLLOW_UP"
? "bg-purple-50 text-purple-700 border-purple-200"
: "bg-green-50 text-green-700 border-green-200"
}`}
        >
          <option value="NEW">
            NEW
          </option>

          <option value="CONTACTED">
            CONTACTED
          </option>

          <option value="FOLLOW_UP">
            FOLLOW UP
          </option>

          <option value="ADMITTED">
            ADMITTED
          </option>

        </select>

      </td>

      {/* Actions */}

      <td className="px-6 py-5">

        <div className="flex justify-end">

          <button
            onClick={() =>
              deleteEnquiry(
                enquiry._id
              )
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
      className="py-24"
    >

      <div className="flex flex-col items-center">

        <Users
          size={70}
          className="text-gray-300"
        />

        <h2 className="text-2xl font-bold text-gray-700 mt-5">
          No Enquiries Found
        </h2>

        <p className="text-gray-500 mt-2">
          There are no enquiries matching
          your search.
        </p>

      </div>

    </td>

  </tr>
)}

</tbody>

</table>

</div>

{/* Pagination */}

<div className="border-t border-gray-100 px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-5">

  <p className="text-sm text-gray-500">

    Showing Page

    <span className="font-semibold text-gray-900 mx-1">
      {page}
    </span>

    of

    <span className="font-semibold text-gray-900 mx-1">
      {totalPages}
    </span>

  </p>

  <div className="flex gap-3">

    <button
      disabled={page <= 1}
      onClick={() => {
        if (page > 1) {
          setPage((prev) => prev - 1);
        }
      }}
      className="px-5 py-2 rounded-xl border border-gray-300 bg-white hover:bg-gray-50 disabled:opacity-50 transition"
    >
      Previous
    </button>

    <button
      disabled={
        page >= totalPages ||
        totalPages === 0
      }
      onClick={() => {
        if (page < totalPages) {
          setPage((prev) => prev + 1);
        }
      }}
      className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50 transition"
    >
      Next
    </button>

  </div>

</div>

</div>

</div>
);

};

export default ManageEnquiries;