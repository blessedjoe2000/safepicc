"use client";

import Categories from "@/components/Categories/Categories";
import CourseCard from "@/components/Courses/CourseCard/CourseCard";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const CourseByCategory = () => {
  const [categories, setCategories] = useState([]);
  const [courses, setCourses] = useState([]);

  const path = usePathname();
  const categoryId = path.split("/").pop();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(`/api/categories/${categoryId}`);
        if (!response.ok) throw new Error("Failed to fetch courses");

        const data = await response.json();

        setCategories(data.categories);
        setCourses(data.courses);
      } catch (err) {
        console.log("err :>> ", err);
      }
    };

    fetchCourses();
  }, [categoryId]);

  return (
    <div className="md:mt-5 md:px-10 xl:px-16 pb-16">
      <Categories categories={categories} selected={categoryId} />
      <div className="flex flex-wrap gap-7 justify-center">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CourseByCategory;
