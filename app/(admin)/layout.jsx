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
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default AdminLayout;
