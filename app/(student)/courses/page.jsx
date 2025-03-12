import getCoursesByCategory from "@/app/actions/getCourses";
import Categories from "@/components/Categories/Categories";
import CourseCard from "@/components/Courses/CourseCard/CourseCard";
import { db } from "@/lib/db";

const StudentCourses = async () => {
  const categories = await db.category.findMany({
    orderBy: {
      name: "asc",
    },
  });

  const courses = await getCoursesByCategory();

  return (
    <div className="md:mt-5 md:px-10 xl:px-16 pb-16">
      <Categories categories={categories} selected={null} />
      <div className="flex flex-wrap gap-7 justify-center">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default StudentCourses;
