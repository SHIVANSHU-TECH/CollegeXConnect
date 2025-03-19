import express from "express";
import {
  registerUser,
  getAllUsers,
  getUserByID,
  updateUser,
  deleteUser,
  verifyEmail,
  loginUser,
  googleLogin,
} from "../controllers/userControllers.js";
import { auth } from "../middleware/authMiddleware.js";
const router = express.Router();

router.post("/register", registerUser);

// Get all users
router.get("/", auth, getAllUsers);

// Get a specific user by ID
router.get("/:id", auth, getUserByID);

// Update user details
router.put("/:id", auth, updateUser);

// Delete a user
router.delete("/:id", auth, deleteUser);

// Login user
router.post("/login", loginUser);

// Verify email
router.get("/verify-email/:token", verifyEmail);

router.post("/google-login", googleLogin);

export { router as userRouter };
