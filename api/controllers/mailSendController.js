import asyncHandler from "express-async-handler";
import { mailSend } from "../utils/mailSend.js";

// Create mailSend Controller.
export const mailSendController = asyncHandler((req, res) => {
  // Get Data.
  const { name, email, subject, text } = req.body;

  // Validation.
  if (!name || !email || !subject || !text) {
    return res.status(400).json({ message: "All fields are required." });
  }
  const data = { name, email, subject, text };
  mailSend(data);
  res.status(200).json({ data, message: "You have send message successfully" });
});
