import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

console.log("stripe :>> ", stripe);

export async function POST(req, { params }) {
  const { courseId } = params;

  try {
    const user = await currentUser();

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
        customerId_courseId: { customerId: user.id, courseId },
      },
    });

    // console.log("purchase :>> ", purchase);

    if (purchase) {
      return new Response(JSON.stringify("error checking out "), {
        status: 400,
      });
    }

    let stripeCustomer = await db.stripeCustomer.findUnique({
      where: { customerId: user.id },
      select: { stripeCustomerId: true },
    });

    // console.log("stripeCustomer :>> ", stripeCustomer);

    if (!stripeCustomer) {
      const customer = await stripe.customers.create({
        email: user.emailAddresses[0].emailAddress,
      });

      stripeCustomer = await db.stripeCustomer.create({
        data: {
          customerId: user.id,
          stripeCustomerId: customer.id,
        },
      });

      if (!stripeCustomer || !stripeCustomer.stripeCustomerId) {
        return new Response(
          JSON.stringify({ error: "Stripe customer creation failed" }),
          { status: 500 }
        );
      }
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

    // console.log("line_items :>> ", line_items);

    const session = await stripe.checkout.sessions.create({
      customer: stripeCustomer.stripeCustomerId,
      payment_method_types: ["card"],
      mode: "payment",
      line_items,
      success_url: `${process.env.NEXT_PUBLIC_URL}/courses/${course.id}?success=true`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL}/courses/${course.id}?canceled=true`,
      metadata: {
        courseId: course.id,
        customerId: user.id,
      },
    });

    // console.log("session :>> ", session);

    return new Response(JSON.stringify({ url: session.url }), {
      status: 200,
    });
  } catch (error) {
    console.log("error buying course :>> ", error);
    return new Response(JSON.stringify("Error buying course", error), {
      status: 500,
    });
  }
}
