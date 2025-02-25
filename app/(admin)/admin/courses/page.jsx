"use client";

import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const AdminCourses = () => {
  const { userId } = useAuth();

  if (!userId) {
    return redirect("/sign-in");
  }

  const allCourses = db.course.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="px-6 py-4">
      <Link href="/admin/create-course">
        <Button>Create New Course</Button>

        <div className="mt-10">
          {allCourses.map((course) => (
            <Link href={`/admin/courses/${course.id}/basic`} key={course.id}>
              {course.title}
            </Link>
          ))}
        </div>
      </Link>
    </div>
  );
};

export default AdminCourses;
