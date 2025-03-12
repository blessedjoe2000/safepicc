import { db } from "@/lib/db";

export async function GET(req, { params }) {
  try {
    const { categoryId } = params;

    if (!categoryId) {
      return res.status(400).json({ error: "Category ID is required" });
    }

    const categories = await db.category.findMany({
      orderBy: {
        name: "asc",
      },
    });

    const courses = await db.course.findMany({
      where: { categoryId },
    });

    return new Response(JSON.stringify({ categories, courses }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify("Error fetching categories", error), {
      status: 500,
    });
  }
}
