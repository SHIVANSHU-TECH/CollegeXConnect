import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please enter an name"],
    },
    email: {
      type: String,
      required: [true, "please Enter an email"],
      unique: [true, "Email already exist"],
    },
    password: {
      type: String,
      required: [true, "please enter an password"],
      minlength: [6, "password must be atleast 6 characters"],
      select: false,
    },
    isGoogleUser: {
      type: Boolean,
      default: false,
    },
    provider: {
      type: String,
    },
    profile_img: {
      type: String,
      default: "/user-avatar.svg",
    },
    is_verified: {
      type: Boolean,
      default: false,
    },
    course: {
      type: String,
    },
    branch: {
      type: String,
    },
    year: {
      type: String,
    },
    college: {
      type: String,
    },
    purchased_notes: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Notes",
    },
    role: {
      type: String,
      default: "user",
      enum: ["user", "recruiter", "admin"], // Fix here
    },
    created_resources: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Resources",
    },
    applied_jobs: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Opportunities",
      },
    ],
    uploaded_roadmaps: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Roadmaps",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", userSchema);
