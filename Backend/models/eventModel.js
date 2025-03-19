import mongoose from "mongoose";
import { Status } from "../helpers/status.js";
import { eventTypes } from "../helpers/eventTypes.js";

const eventSchema = new mongoose.Schema(
  {
    // createdBy: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "User", // Use "User" here with an uppercase "U"
    // },
    title: {
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
    category: {
      type: String,
      enum: Object.values(eventTypes),
      default: eventTypes.TECHNICAL,
    },
    mediaUrl: {
      type: String,
    },
    mediaKey:{
      type: String,
    },
    eventLink: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: Object.values(Status),
      default: Status.PENDING,
    },
  },
  {
    timestamps: true,
  }
);

const Event = mongoose.model("events", eventSchema);
export { Event };
