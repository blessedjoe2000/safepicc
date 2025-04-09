import nodemailer from "nodemailer";

export const sendEmailToAdmin = async ({ message }) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.ADMIN_EMAIL,
      pass: process.env.APP_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: { name: "Safe PICC Inc.", address: process.env.ADMIN_EMAIL },
    to: process.env.ADMIN_NOTIFY_EMAIL,
    subject: `Course Completed`,
    text: message,
  });
};
