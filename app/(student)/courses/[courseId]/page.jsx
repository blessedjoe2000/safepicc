"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { redirect, usePathname } from "next/navigation";

const CourseOverview = ({ studentId }) => {
  const { userId } = useAuth();

  const path = usePathname();
  const [course, setCourse] = useState([]);

  const courseId = path.split("/").pop();

  if (!userId) {
    return redirect("/sign-in");
  }

  useEffect(() => {
    const getCourse = async () => {
      const response = await axios.get(`/api/courses/${courseId}`);
      setCourse(response.data);
    };

    getCourse();
  }, []);

  console.log("course :>> ", course);

  if (!course) {
    redirect("/courses");
  }

  return (
    <div className="lg:mx-20 md:mx-10 mx-5 sm:my-10 my-5">
      <div className="text-2xl font-bold pb-5 text-center">{course.title}</div>
      <div className="flex gap-2 pb-5">
        <div className="font-bold">Price:</div>
        <div>${course.price} </div>
      </div>
      <div className="flex flex-col gap-2 pb-5">
        <div className="font-bold">Description:</div>
        <div className="px-5">{course.description} </div>
      </div>
    </div>
  );
};

export default CourseOverview;
