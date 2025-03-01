import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

export async function PATCH(req, { params }) {
  const { courseId } = params;

  try {
    const { userId } = await auth();
    const values = await req.json();

    if (!userId) {
      return new Response(JSON.stringify("Unauthorized"), { status: 401 });
    }

    const updatedCourse = await db.course.update({
      where: { id: courseId },
      data: {
        title: values.title,
        categoryId: values.categoryId,
        decription: values.decription,
        imageUrl: values.imageUrl,
        price: values.price,
      },
    });

    return new Response(JSON.stringify(updatedCourse), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify("Error updating course", error.message),
      {
        status: 500,
      }
    );
  }
}
