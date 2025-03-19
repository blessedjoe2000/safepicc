"use client";

import Categories from "@/components/Categories/Categories";
import CourseCard from "@/components/Courses/CourseCard/CourseCard";
import { Skeleton } from "@/components/ui/skeleton";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const CourseByCategory = () => {
  const [categories, setCategories] = useState([]);
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const path = usePathname();
  const categoryId = path.split("/").pop();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`/api/categories/${categoryId}`);
        if (!response.ok) throw new Error("Failed to fetch courses");

        const data = await response.json();

        setCategories(data.categories);
        setCourses(data.courses);
        setIsLoading(false);
      } catch (err) {
        console.log("err :>> ", err);
      }
    };

    fetchCourses();
  }, [categoryId]);

  if (isLoading) {
    return (
      <div className="md:mt-5 md:px-10 xl:px-16 pb-16">
        <div className="flex gap-3 justify-center ">
          {[...Array(5)].map((_, i) => (
            <Skeleton key={i} className="h-10 w-[120px] rounded-md" />
          ))}
        </div>

        <div className="flex flex-wrap gap-7 justify-center mt-5">
          {[...Array(6)].map((_, i) => (
            <Skeleton key={i} className="h-[300px] w-[350px] rounded-lg" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="md:mt-5 md:px-10 xl:px-16 pb-16">
      <Categories categories={categories} selected={categoryId} />
      {!courses ||
        (courses.length === 0 && (
          <div className="font-bold text-lg text-center">
            No course found for this category
          </div>
        ))}
      <div className="flex flex-wrap gap-7 justify-center">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CourseByCategory;
