import { User } from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { sendVerificationMail } from "../helpers/emailValidation.js";

export const registerUser = async (req, res) => {
  const { name, email, password, course, branch, year, college, role } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        success: false,
        message: "Email already exists",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    user = await User.create({
      name,
      email,
      password: hashedPassword,
      course,
      branch,
      year,
      college,
      role
    });

    await sendVerificationMail(user);

    res.status(201).json({
      message: "User Created Successfully",
      success: true,
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().populate(
      "purchased_notes created_resources applied_jobs uploaded_roadmaps"
    );
    res.status(201).json({
      message: "Users fetched successfully",
      success: true,
      users,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const getUserByID = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate(
      "purchased_notes created_resources applied_jobs uploaded_roadmaps"
    );
    if (!user) {
      return res.status(404).json({
        message: "User not found!",
        success: false,
      });
    }
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const updatedData = req.body;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
        success: false,
      });
    }

    const updates = {};
    for (const key in updatedData) {
      if (user[key] !== undefined) {
        updates[key] = updatedData[key];
      }
    }

    const updatedUser = await User.findByIdAndUpdate(userId, updates, {
      new: true,
      runValidators: true,
    });

    res.status(201).json({
      message: "User Successfully Updated",
      success: true,
      user: updatedUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({
        message: "User not found",
        success: false,
      });
    }

    const deleted = await User.findByIdAndRemove(req.params.id);
    res.status(201).json({
      message: "Successfully removed user",
      success: true,
      deletedUser: deleted,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    // Check if email and password are provided
    if (!email || !password || !role) {
      return res
        .status(400)
        .json({ message: "Please provide both email and password, and role" });
    }

    // Find the user by email
    const user = await User.findOne({ email, role }).select("+password");

    if (!user) {
      return res.status(404).json({ message: "User not found with this role!" });
    }

    if (!user.is_verified) {
      return res
        .status(400)
        .json({ message: "Please verify your account first" });
    }

    // Compare the entered password with the stored hash

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Proceed with generating token or any other logic
    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const verifyEmail = async (req, res) => {
  try {
    const { token } = req.params;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.user.id;

    // Find user by ID and update the `is_verified` field
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { is_verified: true },
      { new: true, runValidators: true } // Return the updated document and run validators
    );

    if (!updatedUser) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    // if (updatedUser.is_verified) {
    //   return res.status(400).json({
    //     message: "Email already verified",
    //   });
    // }

    res.status(200).json({ message: "Email verified", success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const googleLogin = async (req, res) => {
  const { name, email,  } = req.body;

  try {
    let user = await User.findOneAndUpdate(
      { email },
      { name, isGoogleUser: true },
      { new: true, upsert: true }
    );

    const token = generateToken(user);

    res.status(201).json({ success: true, user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

const generateToken = (user) => {
  const secret = process.env.JWT_SECRET;
  const payload = {
    id: user._id,
    email: user.email,
    name: user.name,
  };
  return jwt.sign(payload, secret, { expiresIn: "1d" });
};
