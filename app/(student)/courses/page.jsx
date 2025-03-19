"use client";

import { useEffect, useState } from "react";
import Categories from "@/components/Categories/Categories";
import CourseCard from "@/components/Courses/CourseCard/CourseCard";
import axios from "axios";
import { Skeleton } from "@/components/ui/skeleton";

const StudentCourses = () => {
  const [categories, setCategories] = useState([]);
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`/api/categories/courses`);
        const data = response.data;
        setCategories(data.categories);
        setCourses(data.courses);
        setIsLoading(false);
      } catch (err) {
        console.log("error fetching category by course ");
      }
    };

    fetchCourses();
  }, []);

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
      <Categories categories={categories} selected={null} />
      {!courses ||
        (courses.length === 0 && (
          <div className="font-bold text-lg text-center">
            No course found for this category
          </div>
        ))}
      <div className="flex flex-wrap gap-7 justify-center">
        {courses?.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default StudentCourses;
