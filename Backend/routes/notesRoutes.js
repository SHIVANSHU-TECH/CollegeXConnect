import { Router } from "express";
import {
  createNote,
  deleteNote,
  getAllNotes,
  updateNote,
} from "../controllers/notesController.js";

const router = Router();

router.post("/", createNote);
router.get("/", getAllNotes);

router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export { router as notesRouter };
