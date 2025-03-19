import mongoose from "mongoose";
import { Status } from "../helpers/status.js";
import { opportunityType } from "../helpers/opportunityTypes.js";

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    companyName: {
      type: String,
      required: true,
    },
    deadlineDate: {
      type: Date,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: Object.values(opportunityType),
      default: opportunityType.FULLTIME,
    },
    status: {
      type: String,
      enum: Object.values(Status),
      default: Status.PENDING,
    },
    taskUrl: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Jobs = mongoose.model("Jobs", jobSchema);

export { Jobs };
