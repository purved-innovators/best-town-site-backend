import {
  addQuestionary,
  deleteRecord,
  getPaginatedQuestionary,
  getQuestionary,
} from "../controller/BestTownQuestionary.controller.js";
import { verifyJwt } from "../middleware/auth.middleware.js";
import curtomAuthMiddleware from "../middleware/custom.middleware.js";

import express from "express";
const router = express.Router();

router.post("/addQuestionary", addQuestionary);
router.get("/getQuestionary", verifyJwt, getQuestionary);
router.get("/getPaginatedQuestionary", verifyJwt, getPaginatedQuestionary);
router.delete("/deleteRecord/:id", curtomAuthMiddleware, deleteRecord);

export default router;
