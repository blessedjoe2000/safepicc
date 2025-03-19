import { db } from "@/lib/db";

export async function GET(req, { params }) {
  try {
    const { categoryId } = params;

    if (!categoryId) {
      return new Response(JSON.stringify("Category ID is required"), {
        status: 400,
      });
    }

    const categories = await db.category.findMany({
      orderBy: {
        name: "asc",
      },
    });

    const courses = await db.course.findMany({
      where: { categoryId, isPublished: true },
      include: { category: true },
      orderBy: {
        createdAt: "desc",
      },
    });

    return new Response(JSON.stringify({ categories, courses }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify("Error fetching categories", error), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
