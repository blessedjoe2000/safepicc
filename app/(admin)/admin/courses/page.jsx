"use client";

import { Button } from "@/components/ui/button";
import { useAuth } from "@clerk/nextjs";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const AdminCourses = () => {
  const { userId } = useAuth();
  const [allCourses, setAllCourses] = useState([]);

  if (!userId) {
    return redirect("/sign-in");
  }

  useEffect(() => {
    const getAllCourses = async () => {
      try {
        const response = await axios.get("/api/courses");
        setAllCourses(response.data);
      } catch (error) {
        console.log("error retrieving courses :>> ", error);
      }
    };
    getAllCourses();
  }, []);

  return (
    <div className="px-6 py-4">
      <Link href="/admin/courses/create-course">
        <Button>Create New Course</Button>
      </Link>
      {allCourses.length === 0 && <div>No Courses available</div>}
      <div className=" flex flex-col mt-10">
        {allCourses.map((course) => (
          <Link href={`/admin/courses/${course.id}/basic`} key={course.id}>
            {course.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AdminCourses;
