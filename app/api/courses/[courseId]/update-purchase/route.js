// /app/api/verify-payment/route.ts

import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";

export async function POST(req, { params }) {
  const { courseId } = params;
  const user = await currentUser();
  try {
    const existingPurchase = await db.purchase.findUnique({
      where: {
        customerId_courseId: { customerId: user.id, courseId },
      },
    });

    if (!existingPurchase) {
      await db.purchase.create({
        data: {
          courseId,
          customerId: user.id,
        },
      });
    }

    return new Response("Purchase recorded", { status: 200 });
  } catch (error) {
    console.error("can't update purchase:", error);
    return new Response(" error updating purchase", { status: 500 });
  }
}
