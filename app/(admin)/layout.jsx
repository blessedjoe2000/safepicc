"use client";

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar.jsx";
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
    </div>
  );
};

export default AdminLayout;
