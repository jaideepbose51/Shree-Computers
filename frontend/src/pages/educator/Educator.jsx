import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../../components/educator/Navbar";
import Sidebar from "../../components/educator/Sidebar";
import Footer from "../../components/educator/Footer";

const Educator = () => {
  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  return (
    <div className="min-h-screen bg-slate-50">

      <Navbar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div className="flex">

        <Sidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        <main className="flex-1 min-h-[calc(100vh-80px)] overflow-x-hidden">

          <Outlet />

          <Footer />

        </main>

      </div>

    </div>
  );
};

export default Educator;