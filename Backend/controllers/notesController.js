import { Notes } from "../models/notesModel.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError, ServerError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { notesSchema } from "../helpers/validations.js";
import { StatusCodes } from "http-status-codes";

export const createNote = asyncHandler(async (req, res) => {
  const { title, course, description, semester, subject, notesUrl } = req.body;

  const parsedData = notesSchema.safeParse(req.body);

  if (!parsedData.success) {
    throw new ApiError(StatusCodes.BAD_REQUEST, "Invalid request");
  }

  const note = await Notes.create({
    title,
    course,
    description,
    semester,
    subject,
    notesUrl,
  });

  res
    .status(StatusCodes.CREATED)
    .json(new ApiResponse("Note created successfully", note));
});

export const getAllNotes = asyncHandler(async (req, res) => {
  const allNotes = await Notes.find({});

  res.status(StatusCodes.OK).json(new ApiResponse("All notes", allNotes));
});

export const updateNote = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const note = await Notes.findById(id);

  if (note) {
    const updatedNote = await Notes.findByIdAndUpdate(note._id, req.body, {
      new: true,
    });

    res
      .status(StatusCodes.OK)
      .json(new ApiResponse("note updated", updatedNote));
  } else {
    throw new ApiError(StatusCodes.NOT_FOUND, "Note not found");
  }
});

export const deleteNote = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const note = await Notes.findById(id);

  if (note) {
    const deletedJob = await Notes.findByIdAndDelete(note._id);

    res.status(StatusCodes.OK).json(new ApiResponse("Note deleted"));
  } else {
    throw new ApiError(StatusCodes.NOT_FOUND, "Note not found");
  }
});
