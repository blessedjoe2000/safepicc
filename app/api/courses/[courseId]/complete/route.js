import { db } from "@/lib/db";
import { sendEmailToAdmin } from "@/lib/email";

export async function POST(req, { params }) {
  const { user } = await req.json();

  if (!user)
    return new Response(JSON.stringify("Unauthorized"), { status: 401 });

  const courseId = params.courseId;

  const existingCompletion = await db.courseCompletion.findFirst({
    where: {
      studentId: user.id,
      courseId,
    },
  });

  if (existingCompletion) {
    return new Response(JSON.stringify({ alreadyCompleted: true }), {
      status: 200,
    });
  }

  const course = await db.course.findUnique({
    where: { id: courseId },
  });

  try {
    await sendEmailToAdmin({
      message: `The student ${user?.fullName} has completed the course ${course.title}. Please issue a certificate to the student via ${user.primaryEmailAddress.emailAddress}.`,
    });

    await db.courseCompletion.create({
      data: {
        studentId: user.id,
        courseId,
        completedAt: new Date(),
      },
    });

    return new Response(JSON.stringify({ success: true }));
  } catch (err) {
    console.error("Error sending email to admin", err);
    return new Response(JSON.stringify("failed to notify admin"), {
      status: 500,
    });
  }
}
