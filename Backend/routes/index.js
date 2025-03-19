import { Router } from "express";
import { eventRoutes } from "./eventRoutes.js";
import { opportunityRoutes } from "./opportunitiesRoutes.js";
import { notesRouter } from "./notesRoutes.js";
import { userRouter } from "./userRoutes.js";
import { newsletterRoute } from "./newsletterRoutes.js";

const router = Router();

router.use("/events", eventRoutes);
router.use("/jobs", opportunityRoutes);
router.use("/notes", notesRouter);
router.use("/user", userRouter);
router.use("/newsletter", newsletterRoute);

export { router };
