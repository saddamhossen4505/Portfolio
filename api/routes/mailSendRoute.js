import express from "express";
import { mailSendController } from "../controllers/mailSendController.js";

// Init Router.
const router = express.Router();

// Routes.
router.route("/").post(mailSendController);

// Export Default.
export default router;
