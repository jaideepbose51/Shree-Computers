import React from "react";
import {
  Route,
  Routes,
  useMatch,
  Navigate,
} from "react-router-dom";

import Home from "./pages/student/Home";
import CoursesList from "./pages/student/CoursesList";
import CourseDetails from "./pages/student/CourseDetails";

import Navbar from "./components/student/Navbar";
import Loading from "./components/student/Loading";

import Educator from "./pages/educator/Educator";
import Dashboard from "./pages/educator/Dashboard";

import { ToastContainer } from "react-toastify";

import "quill/dist/quill.snow.css";

// Create these pages next
import ManageCourses from "./pages/admin/ManageCourses";
import ManageEnquiries from "./pages/admin/ManageEnquiries";
import Settings from "./pages/admin/Settings";
import AdminLogin from "./pages/admin/AdminLogin";

import Contact from "./pages/student/Contact";
import About from "./pages/student/About";

import ProtectedRoute from "./components/admin/ProtectedRoute";

const App = () => {
  const isAdminRoute = useMatch("/admin/*");

  return (
    <div className="text-default min-h-screen bg-white">
      <ToastContainer />

      {!isAdminRoute && <Navbar />}

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />

        <Route
          path="/course-list"
          element={<CoursesList />}
        />

        <Route path="/about" element={<About />} />

        <Route
          path="/course-list/:input"
          element={<CoursesList />}
        />

        <Route
          path="/course/:slug"
          element={<CourseDetails />}
        />

        {/* Admin Login */}
        <Route
  path="/admin/login"
  element={
    localStorage.getItem("adminToken") ? (
      <Navigate to="/admin/dashboard" replace />
    ) : (
      <AdminLogin />
    )
  }
/>

        {/* Admin Panel */}
        <Route
  path="/admin"
  element={
    <ProtectedRoute>
      <Educator />
    </ProtectedRoute>
  }
>
          <Route
            path="dashboard"
            element={<Dashboard />}
          />

          <Route
            path="courses"
            element={<ManageCourses />}
          />

          <Route
            path="enquiries"
            element={<ManageEnquiries />}
          />

          <Route
            path="settings"
            element={<Settings />}
          />
        </Route>

        <Route
          path="/loading"
          element={<Loading />}
        />

        <Route
  path="/contact"
  element={<Contact />}
/>

      </Routes>
    </div>
  );
};

export default App;