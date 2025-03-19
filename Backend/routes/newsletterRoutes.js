import { Router } from "express";

import { subscribeNewsletter } from "../controllers/newsLetterController.js";

const router = Router();

router.post("/subscribe", subscribeNewsletter);

export { router as newsletterRoute };
