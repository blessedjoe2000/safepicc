import { db } from "@/lib/db";

const getCoursesByCategory = async (categoryId) => {
  const whereClause = categoryId ? { categoryId } : {};

  const courses = await db.course.findMany({
    where: { categoryId: whereClause, isPublished: true },
    include: {
      category: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return courses;
};

export default getCoursesByCategory;
