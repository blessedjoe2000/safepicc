import { db } from "@/lib/db";
import { stripe } from "@/lib/stripe";
import { currentUser } from "@clerk/nextjs/dist/types/server";
import Stripe from "stripe";

export async function POST(req, { params }) {
  const { courseId } = params;

  try {
    const { user } = await currentUser();

    if (!user || !user.id || !user.emailAddresses[0]?.emailAddress) {
      return new Response(JSON.stringify("Unauthorized"), { status: 401 });
    }

    if (!courseId) {
      return new Response(JSON.stringify("Course id missing"), { status: 400 });
    }

    const course = await db.course.findUnique({
      where: { id: courseId, isPublished: true },
    });

    if (!course) {
      return new Response(JSON.stringify("Course not found"), { status: 404 });
    }

    const purchase = await db.purchase.findUnique({
      where: {
        customerId_courseId: { customerId: user.id, courseId: courseId.id },
      },
    });

    if (purchase) {
      return new Response(JSON.stringify("Course already purchased"), {
        status: 400,
      });
    }

    const line_items = [
      {
        quantity: 1,
        price_data: {
          currency: "USD",
          product_data: {
            name: course.title,
          },
          unit_amount: course.price * 100,
        },
      },
    ];

    let stripeCustomer = await db.stripeCustomer.findUnique({
      where: { customerId: user.id },
      select: { stripeCustomerId: true },
    });

    if (!stripeCustomer) {
      const customer = await stripe.customers.create({
        email: user.emailAddresses[0].emailAddress,
      });
    }

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
