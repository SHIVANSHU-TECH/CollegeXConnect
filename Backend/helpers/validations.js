import { z } from "zod";
import { opportunityType } from "./opportunityTypes.js";
import { eventTypes } from "./eventTypes.js";

export const eventSchema = z.object({
  title: z.string(),
  deadlineDate: z.string().datetime(),
  description: z.string(),
  category: z.enum(Object.values(eventTypes)).default(eventTypes.TECHNICAL),
  eventLink: z.string(),
});

export const jobsSchema = z.object({
  title: z.string(),
  deadlineDate: z.string().datetime(),  
  description: z.string(),
  companyName: z.string(),
  link: z.string(),
  type: z.enum(Object.values(opportunityType)).default(opportunityType.FULLTIME),
});

export const notesSchema = z.object({
  title: z.string(),
  course: z.string(),
  description: z.string(),
  semester: z.string(),
  subject: z.string(),
  notesUrl: z.string(),
});
