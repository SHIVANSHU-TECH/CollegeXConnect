import { Router } from "express";
import {
  createJob,
  deleteJob,
  getAllJobs,
  getjobsByStatus,
  getJobsByType,
  getSingleJob,
  updateJob,
} from "../controllers/opporttunityControllers.js";

const router = Router();

router.post("/", createJob);
router.get("/", getAllJobs);
router.post("/type", getJobsByType);
router.post("/status", getjobsByStatus);
router.get("/:id", getSingleJob);
router.put("/:id", updateJob);
router.delete("/:id", deleteJob);

export { router as opportunityRoutes };
