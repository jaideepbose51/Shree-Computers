import React from "react";
import {
  NavLink,
  useNavigate,
} from "react-router-dom";

import {
  LayoutDashboard,
  BookOpen,
  Users,
  Settings,
  LogOut,
  ShieldCheck,
  X,
} from "lucide-react";

const Sidebar = ({
  sidebarOpen,
  setSidebarOpen,
}) => {
  const navigate =
    useNavigate();

  const menuItems = [
    {
      name: "Dashboard",
      path: "/admin/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Courses",
      path: "/admin/courses",
      icon: BookOpen,
    },
    {
      name: "Enquiries",
      path: "/admin/enquiries",
      icon: Users,
    },
    {
      name: "Settings",
      path: "/admin/settings",
      icon: Settings,
    },
  ];

  const logoutHandler =
    () => {
      localStorage.removeItem(
        "adminToken"
      );

      navigate("/admin/login");
    };

  return (
    <>
      {/* Overlay */}

      <div
        onClick={() =>
          setSidebarOpen(false)
        }
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-all duration-300 lg:hidden

${
sidebarOpen
? "opacity-100 visible"
: "opacity-0 invisible"
}`}
      />

      {/* Sidebar */}

      <aside
        className={`fixed lg:sticky top-0 left-0 h-screen w-72 bg-white border-r border-gray-200 shadow-xl lg:shadow-none z-50 flex flex-col justify-between transition-transform duration-300

${
sidebarOpen
? "translate-x-0"
: "-translate-x-full lg:translate-x-0"
}`}
      >

        {/* Top */}

        <div>

          {/* Mobile Close */}

          <div className="lg:hidden flex justify-end p-5">

            <button
              onClick={() =>
                setSidebarOpen(
                  false
                )
              }
              className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center"
            >

              <X size={22} />

            </button>

          </div>

          {/* Brand */}

          {/* <div className="px-6 pb-6 border-b border-gray-100">

            <div className="flex items-center gap-3">

              <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg">

                <ShieldCheck
                  size={22}
                  className="text-white"
                />

              </div>

              <div>

                <h2 className="text-lg font-bold text-gray-900">
                  Admin Panel
                </h2>

                <p className="text-sm text-gray-500">
                  Shree Computer
                </p>

              </div>

            </div>

          </div> */}

          {/* Navigation */}

          <div className="px-4 py-5 space-y-2">

            {menuItems.map(
              (item) => {
                const Icon =
                  item.icon;

                return (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    onClick={() =>
                      setSidebarOpen(
                        false
                      )
                    }
                    className={({
                      isActive,
                    }) =>
                      `group relative flex items-center gap-4 px-4 py-3 rounded-2xl transition-all duration-300

${
isActive
? "bg-blue-50 text-blue-700 shadow-sm"
: "hover:bg-gray-50 text-gray-600 hover:text-gray-900"
}`
                    }
                  >
                    {({
                      isActive,
                    }) => (
                      <>
                        {isActive && (
                          <span className="absolute left-0 top-2 bottom-2 w-1 rounded-r-full bg-blue-600"></span>
                        )}

                        <div
                          className={`w-11 h-11 rounded-xl flex items-center justify-center transition

${
isActive
? "bg-blue-600 text-white"
: "bg-gray-100 text-gray-500 group-hover:bg-blue-100 group-hover:text-blue-600"
}`}
                        >

                          <Icon
                            size={20}
                          />

                        </div>

                        <div>

                          <p className="font-semibold">
                            {item.name}
                          </p>

                          <p className="text-xs text-gray-400">
                            Manage{" "}
                            {item.name.toLowerCase()}
                          </p>

                        </div>
                      </>
                    )}
                  </NavLink>
                );
              }
            )}

          </div>

        </div>

        {/* Bottom */}

        <div className="p-5 border-t border-gray-100">

          <div className="rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 p-4 mb-5">

            <p className="text-xs uppercase tracking-widest text-blue-600 font-semibold">
              Institute
            </p>

            <h3 className="mt-2 text-lg font-bold">
              Since 1997
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              NIELIT Accredited Centre
            </p>

          </div>

          <button
            onClick={() => {
              logoutHandler();
              setSidebarOpen(
                false
              );
            }}
            className="w-full rounded-2xl border border-red-200 py-3 flex items-center justify-center gap-3 text-red-600 font-semibold hover:bg-red-500 hover:text-white transition-all duration-300"
          >

            <LogOut size={18} />

            Logout

          </button>

          <p className="text-center text-xs text-gray-400 mt-6">
            Shree Computer ERP
          </p>

        </div>

      </aside>
    </>
  );
};

export default Sidebar;