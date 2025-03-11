"use client";

import { columns } from "@/components/Courses/Columns/Columns";
import { DataTable } from "@/components/Courses/DataTable/DataTable";
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

      <div className="mt-5">
        <DataTable columns={columns} data={allCourses} />
      </div>
    </div>
  );
};

export default AdminCourses;
