import { db } from "@/lib/db";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

    const sig = req.headers.get("stripe-signature");

    const body = await req.text();

    let event;

    try {
      event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
    } catch (error) {
      return new Response(JSON.stringify(`Webhook Error: ${error.message}`), {
        status: 400,
      });
    }

    //Handle the event
    switch (event.type) {
      case "checkout.session.completed":
        const session = event.data.object;

        const customerId = session?.metadata?.customerId;
        const courseId = session?.metadata?.courseId;

        if (!customerId || !courseId) {
          return new Response(JSON.stringify(`missing metadata:`), {
            status: 400,
          });
        }

        await db.purchase.create({
          data: {
            courseId,
            customerId,
          },
        });

        break;
      // ... handle other event types
      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    return new Response(JSON.stringify("Success payment"), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify("Error updating course", error), {
      status: 500,
    });
  }
}
