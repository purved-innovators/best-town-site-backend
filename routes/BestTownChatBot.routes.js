import {addChatBotData,
    getChatBotData,getPaginatedChatBotData
} from "../controller/BestTownChatBot.controller.js"
import { verifyJwt } from "../middleware/auth.middleware.js";
import express from "express";
const router = express.Router();

router.post("/addChatBotData", addChatBotData);
router.get("/getChatBotData",verifyJwt, getChatBotData);
router.get("/getPaginatedChatBotData",verifyJwt, getPaginatedChatBotData);
export default router;