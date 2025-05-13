import {addChatBotData,
    getChatBotData,getPaginatedChatBotData,deleteRecord
} from "../controller/BestTownChatBot.controller.js"
import { verifyJwt } from "../middleware/auth.middleware.js";
import express from "express";
import curtomAuthMiddleware from "../middleware/custom.middleware.js";
const router = express.Router();

router.post("/addChatBotData", addChatBotData);
router.get("/getChatBotData",verifyJwt, getChatBotData);
router.get("/getPaginatedChatBotData",verifyJwt, getPaginatedChatBotData);
router.delete("/deleteRecord/:id",curtomAuthMiddleware, deleteRecord);
export default router;