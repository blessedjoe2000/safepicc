"use client";

import axios from "axios";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const CourseOverview = ({ studentId }) => {
  const [course, setCourse] = useState([]);
  const path = usePathname();
  const courseId = path.split("/").pop();

  useEffect(() => {
    const getCourse = async () => {
      const response = await axios.get(`/api/courses/${courseId}`);
      setCourse(response.data);
    };

    getCourse();
  }, [courseId]);

  console.log("course :>> ", course);

  return <div>Course Overview</div>;
};

export default CourseOverview;
