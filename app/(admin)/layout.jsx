"use client";

import { useEffect } from "react";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Sidebar.jsx/Sidebar";

const AdminLayout = ({ children }) => {
  const { userId, isLoaded } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && !userId) {
      router.push("/");
    }
  }, [userId, isLoaded, router]);

  if (!isLoaded) {
    return null;
  }
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 flex">
        <Sidebar />
        <main className="flex-grow">{children}</main>
      </div>

      <Footer />
    </div>
  );
};

export default AdminLayout;
