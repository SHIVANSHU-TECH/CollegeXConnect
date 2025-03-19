import { Jobs } from "../models/opportunitySchema.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError, ServerError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { jobsSchema } from "../helpers/validations.js";
import { StatusCodes } from "http-status-codes";

export const createJob = asyncHandler(async (req, res) => {
  const { title, deadlineDate, description, type, link, companyName, task } = req.body;

  // const parsedData = jobsSchema.safeParse(req.body);

  // if (!parsedData.success) {
  //   console.error("Validation Error:", parsedData.error);
  //   throw new ApiError(StatusCodes.BAD_REQUEST, "Invalid request");
  // }

  try {
    const job = await Jobs.create({
      title,
      deadlineDate,
      description,
      type,
      link,
      companyName,
      task
    });

    res.status(StatusCodes.CREATED).json(new ApiResponse("Job created successfully", job));
  } catch (error) {
    console.error("Error creating job:", error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(new ApiResponse("Failed to create job", error.message));
  }
});

export const getAllJobs = asyncHandler(async (req, res) => {
  const alljobs = await Jobs.find({});

  res.status(StatusCodes.OK).json(new ApiResponse("All jobs", alljobs));
});

export const getSingleJob = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const job = await Jobs.findById(id);

  if (job) {
    res.status(StatusCodes.OK).json(new ApiResponse("Single job", job));
  } else {
    throw new ApiError(StatusCodes.NOT_FOUND, "Job not found");
  }
});

export const getJobsByType = asyncHandler(async (req, res) => {
  const { type } = req.body;
  const jobsBytype = await Jobs.find({ type });

  res
    .status(StatusCodes.OK)
    .json(new ApiResponse("All events by type", jobsBytype));
});

export const getjobsByStatus = asyncHandler(async (req, res) => {
  const { status } = req.body;
  const jobsByStatus = await Jobs.find({ status });

  res
    .status(StatusCodes.OK)
    .json(new ApiResponse("All jobs by status", jobsByStatus));
});

export const updateJob = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const job = await Jobs.findById(id);

  if (job) {
    const updatedJob = await Jobs.findByIdAndUpdate(job._id, req.body, {
      new: true,
    });

    res.status(StatusCodes.OK).json(new ApiResponse("Job updated", updatedJob));
  } else {
    throw new ApiError(StatusCodes.NOT_FOUND, "Job not found");
  }
});

export const deleteJob = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const job = await Jobs.findById(id);

  if (job) {
    const deletedJob = await Jobs.findByIdAndDelete(job._id);

    res.status(StatusCodes.OK).json(new ApiResponse("Job deleted"));
  } else {
    throw new ApiError(StatusCodes.NOT_FOUND, "Job not found");
  }
});
