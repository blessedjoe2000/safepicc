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

    return new Response(JSON.stringify(newCourse), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify("Error creating course", error), {
      status: 500,
    });
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

// export async function PATCH(req, ctx) {
//   const { id } = ctx.params;
//   console.log("id :>> ", id);

//   const body = await req.json();
//   console.log("body :>> ", body);
//   try {
//     const { userId } = await auth();

//     if (!userId) {
//       return new Response(JSON.stringify("Unauthorized"), { status: 401 });
//     }

//     const course = await db.course.findUnique(id);

//     if (!course) {
//       return new Response(JSON.stringify(""), { status: 401 });
//     }

//     return new Response(JSON.stringify(course), { status: 200 });
//   } catch (error) {
//     return new Response(JSON.stringify("Error creating course", error), {
//       status: 500,
//     });
//   }
// }
