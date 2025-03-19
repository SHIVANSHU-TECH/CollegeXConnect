import { NewsLetter } from "../models/newsletterModel.js";
import { sendNewsLetterConfirmationMail } from "../helpers/emailValidation.js";

export const subscribeNewsletter = async (req, res) => {
  const { email } = req.body;

  try {
    const existingSubscriber = await NewsLetter.findOne({ email });
    if (!existingSubscriber) {
      const newSubscriber = await NewsLetter.create({ email });
      await sendNewsLetterConfirmationMail(email);
      console.log("Email sent successfully!");
      return res.status(200).json({
        success: true,
        message: "Subscription successful, confirmation email sent!",
      });
    }
    console.log("Error in sending email");

    res
      .status(400)
      .json({ success: false, message: "Email already subscribed!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to subscribe to newsletter" });
  }
};
