import {addCareerInfo,getAllCareerInfo,getPaginatedCareerData,deleteRecord} from "../controller/BestTownCareerSection.controllers.js";
import { upload } from "../middleware/multer.middleware.js";
import { verifyJwt } from "../middleware/auth.middleware.js";
import curtomAuthMiddleware from "../middleware/custom.middleware.js";

import express from "express";
const router = express.Router();

router.post("/addCareerInfo", upload.single("cv"), addCareerInfo);
router.get("/getAllCareerInfo",verifyJwt, getAllCareerInfo);
router.get("/getPaginatedCareerData",verifyJwt, getPaginatedCareerData);
router.delete("/deleteRecord/:id",curtomAuthMiddleware, deleteRecord);


export default router;