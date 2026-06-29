import React, {
  useContext,
  useState,
  useEffect,
} from "react";

import axios from "axios";
import { toast } from "react-toastify";
import {
  Eye,
  EyeOff,
  ShieldCheck,
  Lock,
  User,
} from "lucide-react";

import { AppContext } from "../../context/AppContext";

const AdminLogin = () => {

  const { backendUrl, navigate } =
    useContext(AppContext);

    
  useEffect(() => {
  const checkAdmin = async () => {
    const token = localStorage.getItem("adminToken");

    if (!token) return;

    try {
      await axios.get(`${backendUrl}/api/admin/verify`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      navigate("/admin/dashboard", {
        replace: true,
      });
    } catch {
      localStorage.removeItem("adminToken");
    }
  };

  checkAdmin();
}, [backendUrl, navigate]);


  const [loading, setLoading] =
    useState(false);

  const [showPassword, setShowPassword] =
    useState(false);

  const [rememberMe, setRememberMe] =
    useState(true);

  const [formData, setFormData] =
    useState({
      username: "",
      password: "",
    });

  const changeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const { data } =
        await axios.post(
          `${backendUrl}/api/admin/login`,
          formData
        );

      if (data.success) {
        localStorage.setItem(
          "adminToken",
          data.token
        );

        toast.success(
          "Welcome Back!"
        );

        navigate(
          "/admin/dashboard"
        );
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

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-50">

      {/* Background Blur */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-blue-300/30 blur-[140px]" />

      <div className="absolute top-1/2 -right-24 w-80 h-80 rounded-full bg-cyan-300/30 blur-[140px]" />

      <div className="absolute bottom-0 left-1/3 w-72 h-72 rounded-full bg-indigo-300/20 blur-[120px]" />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-12">

        <div className="w-full max-w-md">

          {/* Brand */}

          <div className="text-center mb-10">

            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-5 py-2">

              <ShieldCheck
                size={18}
                className="text-blue-600"
              />

              <span className="text-sm font-semibold text-blue-700">
                Secure Admin Portal
              </span>

            </div>

            <h1 className="mt-6 text-5xl font-bold tracking-tight text-gray-900">
              Shree Computer
            </h1>

            <p className="mt-4 text-gray-500 leading-7">
              Established 1997 • NIELIT Accredited Centre
            </p>

          </div>

          {/* Login Card */}

          <div className="rounded-[32px] border border-white/60 bg-white/80 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-10">

            <div className="text-center">

              <h2 className="text-3xl font-bold text-gray-900">
                Welcome Back
              </h2>

              <p className="mt-3 text-gray-500">
                Sign in to continue to the
                administration dashboard.
              </p>

            </div>

            <form
              onSubmit={submitHandler}
              className="mt-10 space-y-6"
            >

              {/* Username */}

              <div>

                <label className="text-sm font-semibold text-gray-700">
                  Username
                </label>

                <div className="relative mt-3">

                  <User
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="text"
                    name="username"
                    value={
                      formData.username
                    }
                    onChange={
                      changeHandler
                    }
                    placeholder="Enter username"
                    className="w-full rounded-2xl bg-gray-50 border border-transparent py-4 pl-12 pr-5 text-gray-800 outline-none transition-all duration-300 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    required
                  />

                </div>

              </div>

              {/* Password */}

              <div>

                <label className="text-sm font-semibold text-gray-700">
                  Password
                </label>

                <div className="relative mt-3">

                  <Lock
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    name="password"
                    value={
                      formData.password
                    }
                    onChange={
                      changeHandler
                    }
                    placeholder="Enter password"
                    className="w-full rounded-2xl bg-gray-50 border border-transparent py-4 pl-12 pr-14 text-gray-800 outline-none transition-all duration-300 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    required
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(
                        !showPassword
                      )
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-600 transition"
                  >
                    {showPassword ? (
                      <EyeOff size={20} />
                    ) : (
                      <Eye size={20} />
                    )}
                  </button>

                </div>

              </div>

                            {/* Remember Me */}
              <div className="flex items-center justify-between">

                <label className="flex items-center gap-3 cursor-pointer">

                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={() =>
                      setRememberMe(!rememberMe)
                    }
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />

                  <span className="text-sm text-gray-600">
                    Keep me signed in
                  </span>

                </label>

                <div className="flex items-center gap-2 text-green-600">

                  <ShieldCheck size={16} />

                  <span className="text-sm font-medium">
                    Secure
                  </span>

                </div>

              </div>

              {/* Login Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-2xl bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 py-4 text-white font-semibold shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-3">

                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-20"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />

                      <path
                        className="opacity-90"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      />

                    </svg>

                    Signing In...

                  </div>
                ) : (
                  "Secure Login"
                )}
              </button>

            </form>

            {/* Divider */}
            <div className="flex items-center gap-4 my-10">

              <div className="flex-1 h-px bg-gray-200"></div>

              <span className="text-xs uppercase tracking-widest text-gray-400">
                Shree Computer
              </span>

              <div className="flex-1 h-px bg-gray-200"></div>

            </div>

            {/* Trust Box */}
            <div className="rounded-2xl bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 p-5">

              <div className="flex items-start gap-4">

                <div className="h-12 w-12 rounded-xl bg-blue-600 flex items-center justify-center text-white">

                  <ShieldCheck size={24} />

                </div>

                <div>

                  <h3 className="font-semibold text-gray-900">
                    Trusted Administrative Portal
                  </h3>

                  <p className="text-sm text-gray-600 leading-6 mt-2">
                    This portal provides secure access
                    to course management, admissions,
                    enquiries and institute settings.
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Footer */}

          <div className="text-center mt-10">

            <p className="text-gray-500 font-medium">
              © {new Date().getFullYear()} Shree Computer
            </p>

            <p className="text-sm text-gray-400 mt-2">
              Empowering Students Through Quality
              Computer Education Since 1997
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default AdminLogin;