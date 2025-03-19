"use client";

import { useEffect } from "react";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

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
    <div className="h-full flex flex-col">
      <Navbar />
      <div className="flex-1 ">{children}</div>
      <Footer />
    </div>
  );
};

export default AdminLayout;
