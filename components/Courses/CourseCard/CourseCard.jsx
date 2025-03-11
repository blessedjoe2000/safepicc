"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const CourseCard = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const getAllCourses = async () => {
      try {
        const response = await axios.get("/api/courses");
        setCourses(response.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };
    getAllCourses();
  }, []);

  return (
    <div className="flex flex-wrap gap-5 justify-center">
      {courses.map((course) => (
        <div
          key={course.id}
          className="border-1 rounded-lg shadow-lg p-4 w-[350px] flex flex-col"
        >
          <Link
            href={`/courses/${course.id}/overview`}
            className="flex flex-col"
          >
            <Image
              src={
                course.imageUrl ? course.imageUrl : "/image_placeholder.webp"
              }
              alt="course-title"
              width={500}
              height={300}
              className="rounded-t-xl w-full h-[180px] object-cover"
            />
            <div className="py-3">
              <h2 className="font-bold text-lg hover:text-main-teal">
                {course.title}
              </h2>
              <p className="text-sm font-semibold">${course.price}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CourseCard;
