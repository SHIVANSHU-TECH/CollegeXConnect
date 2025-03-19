import { Router } from "express";

import {
  createEvent,
  deleteEvent,
  getAllEvents,
  getEventsByCategory,
  getEventsByStatus,
  getSingleEvent,
  updateEvent,
} from "../controllers/eventControllers.js";
import { isLoggedin } from "../middleware/protect.js";
import { upload } from "../middleware/multer-middeware.js";

const router = Router();

router.post("/", upload.single("media"), createEvent);
router.get("/", getAllEvents);
router.get("/category", getEventsByCategory);
router.post("/status", getEventsByStatus);
router.get("/:id", getSingleEvent);
router.put("/:id", updateEvent);
router.delete("/:id", deleteEvent);

export { router as eventRoutes };
