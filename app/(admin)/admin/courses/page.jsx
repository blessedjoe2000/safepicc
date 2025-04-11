"use client";

import { columns } from "@/components/Courses/Columns/Columns";
import { DataTable } from "@/components/Courses/DataTable/DataTable";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useAuth } from "@clerk/nextjs";
import axios from "axios";
import { Sidebar } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const AdminCourses = () => {
  const { userId } = useAuth();
  const [allCourses, setAllCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  if (!userId) {
    return redirect("/sign-in");
  }

  useEffect(() => {
    const getAllCourses = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get("/api/courses");
        setAllCourses(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log("error retrieving courses ", error);
      }
    };
    getAllCourses();

    const getBookings = async () => {
      const calApiKey = process.env.NEXT_PUBLIC_CAL_API_KEY;
      try {
        const response = await axios.get(
          `https://api.cal.com/v1/bookings?apiKey=${calApiKey}`
        );
        console.log("booking  :>> ", response.data);
      } catch (error) {
        console.log("error fetching bookings :>> ", error);
      }
    };

    getBookings();
  }, []);

  if (isLoading) {
    return (
      <div className="md:mt-5 md:px-10 xl:px-16 pb-16">
        <div className="flex justify-end pb-5 p-5">
          <Skeleton className="h-10 w-[200px] " />
        </div>
        <div className="pb-5 px-5">
          <Skeleton className="h-10 w-1/3 " />
        </div>

        <div className="flex flex-col gap-2 px-5">
          {[...Array(6)].map((_, i) => (
            <Skeleton key={i} className="h-10 w-full" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="lg:mx-20 md:mx-10 mx-5 sm:my-10 my-5">
      <Link href="/admin/courses/create-course" className="flex justify-end">
        <Button>Create New Course</Button>
      </Link>
      {allCourses.length === 0 && <div>No Courses available</div>}

      <div className="">
        <DataTable columns={columns} data={allCourses} />
      </div>
    </div>
  );
};

export default AdminCourses;
