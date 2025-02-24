"use client";

import { Button } from "@/components/ui/button";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const AdminCourses = () => {
  const { userId } = useAuth();

  if (!userId) {
    return redirect("/sign-in");
  }

  return (
    <div className="px-6 py-4">
      <Link href="/admin/create-course">
        <Button>Create New Course</Button>
      </Link>
    </div>
  );
};

export default AdminCourses;
