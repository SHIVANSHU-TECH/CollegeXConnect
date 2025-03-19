import Sidebar from "@/components/DashboardSidebar/Sidebar";
import Navbar from "@/components/navbar/page";
import React from "react";

const Dashboardlayout = ({ children }) => {
  return <section className="text-base-content">
    <Navbar />
    {children}</section>;
};

export default Dashboardlayout;
