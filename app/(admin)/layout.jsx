"use client";

import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Sidebar.jsx/Sidebar.jsx";
import { useAuth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";

const AdminLayout = ({ children }) => {
  const { userId } = useAuth();

  if (!userId) {
    return redirect("/sign-in");
  }
  return (
    <div className="h-full flex flex-col">
      <Navbar />
      <div className="flex-1 flex">
        <Sidebar />
        <div className="flex-1 ">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminLayout;
