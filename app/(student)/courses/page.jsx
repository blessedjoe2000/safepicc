import CourseCard from "@/components/Courses/CourseCard/CourseCard";
import { db } from "@/lib/db";

const StudentCourses = async () => {
  const categories = await db.category.findMany({
    orderBy: {
      name: "asc",
    },
  });
  return (
    <div>
      <CourseCard />
    </div>
  );
};

export default StudentCourses;
