import { db } from "@/lib/db";
export const dynamic = "force-dynamic";

export async function GET(req) {
  try {
    const categories = await db.category.findMany({
      orderBy: {
        name: "asc",
      },
    });

    const courses = await db.course.findMany({
      where: {
        isPublished: true,
      },
      include: {
        category: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return new Response(JSON.stringify({ categories, courses }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify("Error fetching course", error), {
      status: 500,
    });
  }
}
