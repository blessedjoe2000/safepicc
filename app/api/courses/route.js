import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

export async function POST(req) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return new Response(JSON.stringify("Unauthorized"), { status: 401 });
    }

    const { title, categoryId } = await req.json();

    const newCourse = await db.course.create({
      data: {
        title,
        categoryId,
        adminId: userId,
      },
    });

    return new Response(JSON.stringify(newCourse), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify("Error creating course", error), {
      status: 500,
    });
  }
}
