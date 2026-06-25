import React, {
  useContext,
  useEffect,
  useState,
} from "react";

import axios from "axios";
import { toast } from "react-toastify";

import {
  BookOpen,
  Users,
  UserPlus,
  PhoneCall,
  RefreshCcw,
  GraduationCap,
} from "lucide-react";

import Loading from "../../components/student/Loading";
import { AppContext } from "../../context/AppContext";

const Dashboard = () => {
  const { backendUrl } =
    useContext(AppContext);

  const [dashboardData, setDashboardData] =
    useState(null);

  const fetchDashboardData =
    async () => {
      try {
        const token =
          localStorage.getItem(
            "adminToken"
          );

        const { data } =
          await axios.get(
            `${backendUrl}/api/admin/dashboard`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

        if (data.success) {
          setDashboardData(data.data);
        }
      } catch (error) {
        toast.error(
          error?.response?.data?.message ||
            error.message
        );
      }
    };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  if (!dashboardData)
    return <Loading />;

  const cards = [
    {
      title: "Total Courses",
      value:
        dashboardData.totalCourses,
      icon: BookOpen,
    },
    {
      title: "Total Enquiries",
      value:
        dashboardData.totalEnquiries,
      icon: Users,
    },
    {
      title: "New Enquiries",
      value:
        dashboardData.newEnquiries,
      icon: UserPlus,
    },
    {
      title: "Contacted",
      value:
        dashboardData.contactedEnquiries,
      icon: PhoneCall,
    },
    {
      title: "Follow Ups",
      value:
        dashboardData.followUpEnquiries,
      icon: RefreshCcw,
    },
    {
      title: "Admissions",
      value:
        dashboardData.admittedStudents,
      icon: GraduationCap,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-8">

      {/* Header */}

      <div className="mb-10">

        <p className="uppercase tracking-[3px] text-blue-600 font-semibold text-sm">
          Shree Computer
        </p>

        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2">
          Good Morning, Admin 👋
        </h1>

        <p className="text-gray-500 mt-2 text-sm lg:text-base max-w-2xl">
          Welcome to the Administration Dashboard.
          Monitor courses, enquiries and admissions
          from one place.
        </p>

      </div>

      {/* Cards */}

      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">

        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <div
              key={card.title}
              className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300"
            >

              <div className="flex justify-between items-center">

                <div>

                  <p className="text-gray-500 text-xs uppercase tracking-wide font-medium">
                    {card.title}
                  </p>
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2">
                  
                    {card.value}
                  </h2>

                </div>

                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">

                  <Icon
                    size={22}
                    className="text-blue-600"
                  />

                </div>

              </div>

            </div>
          );
        })}

      </div>

      {/* Institute Info */}

      <div className="mt-12 bg-white rounded-3xl border border-gray-200 shadow-sm p-8">

        <h2 className="text-2xl font-bold text-gray-900">
          Institute Overview
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-8">

          <div>

            <p className="text-gray-500">
              Established
            </p>

            <h3 className="text-3xl font-bold mt-2">
              1997
            </h3>

          </div>

          <div>

            <p className="text-gray-500">
              Accreditation
            </p>

            <h3 className="text-3xl font-bold mt-2">
              NIELIT
            </h3>

          </div>

          <div>

            <p className="text-gray-500">
              Centre Code
            </p>

            <h3 className="text-3xl font-bold mt-2">
              O1476
            </h3>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;