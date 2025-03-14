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

    if (
      !values.title ||
      !values.categoryId ||
      !values.imageUrl ||
      !values.videoUrl ||
      !values.price
    ) {
      return new Response(JSON.stringify("Missing required fields"), {
        status: 400,
      });
    }

    const updatedCourse = await db.course.update({
      where: { id: courseId },
      data: {
        title: values.title,
        categoryId: values.categoryId,
        description: values.description,
        imageUrl: values.imageUrl,
        videoUrl: values.videoUrl,
        price: values.price,
      },
    });

    return new Response(JSON.stringify(updatedCourse), { status: 200 });
  } catch (error) {
    console.log("error :>> ", error);
    return new Response(JSON.stringify("Error updating course", error), {
      status: 500,
    });
  }
}

export async function DELETE(req, { params }) {
  const { courseId } = params;

  try {
    const { userId } = await auth();

    if (!userId) {
      return new Response(JSON.stringify("Unauthorized"), { status: 401 });
    }

    if (!courseId) {
      return new Response(JSON.stringify("Course id missing"), { status: 400 });
    }

    await db.course.delete({
      where: { id: courseId },
    });

    return new Response(JSON.stringify("Course deleted successfully"), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify("Error updating course", error), {
      status: 500,
    });
  }
}

export async function GET(req, { params }) {
  const { courseId } = params;

  try {
    const { userId } = await auth();

    if (!userId) {
      return new Response(JSON.stringify("Unauthorized"), { status: 401 });
    }

    if (!courseId) {
      return new Response(JSON.stringify("Course id missing"), { status: 400 });
    }

    const course = await db.course.findUnique({
      where: { id: courseId, isPublished: true },
    });

    const purchase = await db.purchase.findUnique({
      where: {
        customerId_courseId: {
          customerId: userId,
          courseId,
        },
      },
    });

    return new Response(JSON.stringify({ course, purchase }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify("Error fetching course", error), {
      status: 500,
    });
  }
}
