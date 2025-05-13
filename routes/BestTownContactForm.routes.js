import {
  addContactForm,
  getContactForm,
  getPaginatedContactForm,deleteRecord
} from "../controller/BestTownContactForm.controller.js";
import { verifyJwt } from "../middleware/auth.middleware.js";
import express from "express";
import curtomAuthMiddleware from "../middleware/custom.middleware.js";
const router = express.Router();

router.post("/addContactForm", addContactForm);
router.get("/getContactForm", verifyJwt, getContactForm);
router.get("/getPaginatedContactForm", verifyJwt, getPaginatedContactForm);
router.delete("/deleteRecord/:id",curtomAuthMiddleware, deleteRecord);

export default router;
