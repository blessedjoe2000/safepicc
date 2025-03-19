import AlertBanner from "@/components/AlertBanner/AlertBanner";
import EditCourseForm from "@/components/Courses/EditCourseForm/EditCourseForm";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const CourseBasic = async ({ params }) => {
  const { userId } = await auth();

  if (!userId) {
    return redirect("/sign-in");
  }

  const course = await db.course.findUnique({
    where: {
      id: params.courseId,
    },
  });

  const categories = await db.category.findMany({
    orderBy: { name: "asc" },
  });

  if (!course) {
    redirect("/admin/courses");
  }

  const requiredFields = [
    course.title,
    course.categoryId,
    course.imageUrl,
    course.videoUrl,
    course.price,
  ];
  const requiredFieldCount = requiredFields.length;
  const missingField = requiredFields.filter((field) => !Boolean(field));
  const missingFieldCount = missingField.length;
  const isCompleted = requiredFields.every(Boolean);

  return (
    <div className="lg:mx-20 md:mx-10 mx-5 sm:my-10 my-5">
      <AlertBanner
        isCompleted={isCompleted}
        missingFieldCount={missingFieldCount}
        requiredFieldCount={requiredFieldCount}
      />
      <EditCourseForm
        course={course}
        categories={categories.map((category) => ({
          label: category.name,
          value: category.id,
        }))}
        isCompleted={isCompleted}
      />
    </div>
  );
};

export default CourseBasic;
