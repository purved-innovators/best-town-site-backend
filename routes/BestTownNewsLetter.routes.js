import {addNewsLetter,getNewsLetter,getPaginatedNewsLetter} from "../controller/BestTownNewsLetter.controller.js";
import { verifyJwt } from "../middleware/auth.middleware.js";
import express from "express";
const router = express.Router();

router.post("/addNewsLetter", addNewsLetter);
router.get("/getNewsLetter",verifyJwt, getNewsLetter);
router.get("/getPaginatedNewsLetter",verifyJwt, getPaginatedNewsLetter);
export default router;