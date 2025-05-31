import {addAdvisory,deleteRecord,getAllAdvisory,getPaginatedAdvisory} from "../controller/BestTownAdvisory.controller.js";
import { verifyJwt } from "../middleware/auth.middleware.js";
import curtomAuthMiddleware from "../middleware/custom.middleware.js";

import express from "express";
const router = express.Router();

router.post("/addAdvisory", addAdvisory);
router.get("/getAllAdvisory",verifyJwt, getAllAdvisory);
router.get("/getPaginatedAdvisory",verifyJwt, getPaginatedAdvisory);
router.delete("/deleteRecord/:id",curtomAuthMiddleware, deleteRecord);


export default router;