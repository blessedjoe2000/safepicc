import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import Mux from "@mux/mux-node";

export async function PATCH(req, { params }) {
  const { courseId } = params;
  const { video } = new Mux(
    process.env.MUX_TOKEN_ID,
    process.env.MUX_TOKEN_SECRET
  );

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
        description: values.description,
        videoUrl: values.videoUrl,
        price: values.price,
      },
    });

    if (values.videoUrl) {
      const existingMuxUrl = await db.muxData.findFirst({
        where: {
          courseId,
        },
      });
      if (existingMuxUrl) {
        await video.assets.delete(existingMuxUrl.assetId);
        await db.muxData.delete({
          where: {
            id: existingMuxUrl.id,
          },
        });
      }

      const newMuxAsset = await video.assets.create({
        input: values.videoUrl,
        playback_policy: ["public"],
        test: false,
      });

      await db.muxData.create({
        data: {
          assetId: newMuxAsset.id,
          playbackId: newMuxAsset.playback_ids?.[0]?.id,
          courseId,
        },
      });
    }

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
    return new Response(
      JSON.stringify("Error updating course", error.message),
      {
        status: 500,
      }
    );
  }
}
