import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import cors from "cors";
import mailSendRoute from "./routes/mailSendRoute.js";
import { errorHandler } from "./utils/customErrorHandler.js";
const BaseUrl = "http://localhost:3000";

// Init Express.
const app = express();

// Init EnvironmentVariables.
dotenv.config();
const PORT = process.env.PORT || 9090;

// Middlewares.
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: `${BaseUrl}`,
    credentials: true,
  })
);

// Routes.
app.use("/api/v1/mail_send", mailSendRoute);

// Error Handler.
app.use(errorHandler);

// Listen Server.
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`.bgGreen.black);
});
