import CreateCourseForm from "@/components/Courses/CreateCourseForm/CreateCourseForm";
import { db } from "@/lib/db";

const CreateCourse = async () => {
  const categories = await db.category.findMany({
    orderBy: { name: "asc" },
  });
  return (
    <div className="lg:mx-20 md:mx-10 mx-5 my-5">
      <CreateCourseForm
        categories={categories.map((category) => ({
          label: category.name,
          value: category.id,
        }))}
      />
    </div>
  );
};

export default CreateCourse;
