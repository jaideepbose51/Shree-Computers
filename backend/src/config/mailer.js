import "dotenv/config";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

transporter.verify((error) => {
  if (error) {
    console.error("Mailer Error:", error.message);
  } else {
    console.log("Mail Service Ready");
  }
});

export const sendOTPEmail = async (email, otp) => {
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Email Verification OTP",
    html: `<h2>Your OTP is ${otp}</h2>`,
  });
};

export default transporter;