import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";

export const sendVerificationMail = async (user) => {
  const token = jwt.sign({ user: { id: user.id } }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587, // Use 587 for STARTTLS
    secure: false, // Set to false for port 587
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: user.email,
    subject: "Verify your email - College X Connect",
    text: `Please verify your email by clicking the following link: ${process.env.BASE_URL}api/v1/user/verify-email/${token}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Verification email sent successfully.");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

export const sendNewsLetterConfirmationMail = async (email) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587, // Use 587 for STARTTLS
    secure: false, // Set to false for port 587
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: "Newsletter Subscription Confirmation",
    text: `Thank you for subscribing to our newsletter! You’ll receive the latest updates and news directly to your inbox.`,
    html: `<p>Thank you for subscribing to our newsletter! You’ll receive the latest updates and news directly to your inbox.</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Newsletter email confirmation sent successfully!");
  } catch (error) {
    console.error("Error sending newsletter confirmation email", error);
  }
};
