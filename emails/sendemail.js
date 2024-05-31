"use server";
import nodemailer from "nodemailer";
import connectDb from "@/db/connection";
connectDb();

const sendEmail = async (to, subject, otp) => {
  const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "",
      pass: "",
    },
  });

  const mailOptions = {
    from: "",
    to,
    subject,
    html: `<p>Your account verification OTP for etalks is<b> ${otp} </b>`, // html body
  };

  try {
    await transporter.sendMail(mailOptions);
    return { message: "email send successfully" };
  } catch (error) {
    console.error("Error sending email:", error);
    return { message: "email send successfully" };
  }
};

export default sendEmail;
