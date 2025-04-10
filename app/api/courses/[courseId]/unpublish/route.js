import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
export const dynamic = "force-dynamic";

export async function PATCH(req, { params }) {
  const { courseId } = params;

  try {
    const { userId } = await auth();

    if (!userId) {
      return new Response(JSON.stringify("Unauthorized"), { status: 401 });
    }

    const unPublishCourse = await db.course.update({
      where: { id: courseId },
      data: {
        isPublished: false,
      },
    });

    return new Response(JSON.stringify(unPublishCourse), { status: 200 });
  } catch (error) {
    console.log("error :>> ", error);
    return new Response(JSON.stringify("Error updating course", error), {
      status: 500,
    });
  }
}
