import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

export async function POST(req) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return new Response(JSON.stringify("Unauthorized"), { status: 401 });
    }

    const courseData = await req.json();
    const { title, categoryId, description, videoUrl, price } = courseData;

    const newCourse = await db.course.create({
      data: {
        title,
        description,
        videoUrl,
        price: parseFloat(price),
        adminId: userId,
        category: {
          connect: { id: categoryId },
        },
      },
      include: {
        muxData: true,
      },
    });

    return new Response(JSON.stringify(newCourse), { status: 201 });
  } catch (error) {
    console.log("error :>> ", error);
    return new Response(
      JSON.stringify("Error creating course", error.message),
      {
        status: 500,
      }
    );
  }
}

export async function GET(req) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return new Response(JSON.stringify("Unauthorized"), { status: 401 });
    }

    const allCourses = await db.course.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return new Response(JSON.stringify(allCourses), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify("Error creating course", error), {
      status: 500,
    });
  }
}
