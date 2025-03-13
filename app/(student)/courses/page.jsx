"use client";

import { useEffect, useState } from "react";
import Categories from "@/components/Categories/Categories";
import CourseCard from "@/components/Courses/CourseCard/CourseCard";
import axios from "axios";

const StudentCourses = () => {
  const [categories, setCategories] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(`/api/categories/courses`);
        const data = response.data;
        setCategories(data.categories);
        setCourses(data.courses);
      } catch (err) {
        console.log("error fetching category by course ");
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="md:mt-5 md:px-10 xl:px-16 pb-16">
      <Categories categories={categories} selected={null} />
      <div className="flex flex-wrap gap-7 justify-center">
        {courses?.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default StudentCourses;
