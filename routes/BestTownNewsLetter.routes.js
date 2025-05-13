import {addNewsLetter,getNewsLetter,getPaginatedNewsLetter,deleteRecord} from "../controller/BestTownNewsLetter.controller.js";
import { verifyJwt } from "../middleware/auth.middleware.js";
import express from "express";
const router = express.Router();
import curtomAuthMiddleware from "../middleware/custom.middleware.js";

router.post("/addNewsLetter", addNewsLetter);
router.get("/getNewsLetter",verifyJwt, getNewsLetter);
router.get("/getPaginatedNewsLetter",verifyJwt, getPaginatedNewsLetter);
router.delete("/deleteRecord/:id",curtomAuthMiddleware, deleteRecord);
export default router;