import { Event } from "../models/eventModel.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError, ServerError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { eventSchema } from "../helpers/validations.js";
import { StatusCodes } from "http-status-codes";
import {
  deleteFromCloudinary,
  uploadOnCloudinary,
} from "../utils/cloudinary.js";

export const createEvent = asyncHandler(async (req, res) => {
  const { title, deadlineDate, description, category, eventLink } = req.body;

  // const parsedData = eventSchema.safeParse(req.body);

  // if (!parsedData.success) {
  //   throw new ApiError(StatusCodes.BAD_REQUEST, "Invalid request");
  // }

  if (!req.file) {
    throw new ApiError(StatusCodes.BAD_REQUEST, "Invalid request file");
  }
  const fileResponse = await uploadOnCloudinary(req.file.path);

  const event = await Event.create({
    title,
    deadlineDate,
    description,
    category,
    eventLink,
    mediaKey: fileResponse.public_id,
    mediaUrl: fileResponse.secure_url,
  });

  res
    .status(StatusCodes.CREATED)
    .json(new ApiResponse("Event created successfully", event));
});

export const getAllEvents = asyncHandler(async (req, res) => {
  const allEvents = await Event.find({});

  res.status(StatusCodes.OK).json(new ApiResponse("All events", allEvents));
});

export const getSingleEvent = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const event = await Event.findById(id);

  if (event) {
    res.status(StatusCodes.OK).json(new ApiResponse("Single event", event));
  } else {
    throw new ApiError(StatusCodes.NOT_FOUND, "Event not found");
  }
});

export const getEventsByCategory = asyncHandler(async (req, res) => {
  const { category } = req.body;
  const eventsByCategory = await Event.find({ category });

  res
    .status(StatusCodes.OK)
    .json(new ApiResponse("All events by category", eventsByCategory));
});

export const getEventsByStatus = asyncHandler(async (req, res) => {
  const { status } = req.body;
  const eventsByStatus = await Event.find({ status });

  res
    .status(StatusCodes.OK)
    .json(new ApiResponse("All events by status", eventsByStatus));
});

export const updateEvent = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const event = await Event.findById(id);

  if (event) {
    const updatedEvent = await Event.findByIdAndUpdate(event._id, req.body, {
      new: true,
    });

    res
      .status(StatusCodes.OK)
      .json(new ApiResponse("Event updated", updatedEvent));
  } else {
    throw new ApiError(StatusCodes.NOT_FOUND, "Event not found");
  }
});

export const deleteEvent = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const event = await Event.findById(id);

  if (event) {
    const deleteimage = await deleteFromCloudinary(event.mediaKey);
    const deletedEvent = await Event.findByIdAndDelete(event._id);

    res.status(StatusCodes.OK).json(new ApiResponse("Event deleted"));
  } else {
    throw new ApiError(StatusCodes.NOT_FOUND, "Event not found");
  }
});
