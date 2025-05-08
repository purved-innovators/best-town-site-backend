import {
  adminLogin,
  createUser,
  updatePassword,
  getCurrentUser,
} from "../controller/AdminLogin.controllers.js";
import { verifyJwt } from "../middleware/auth.middleware.js";
import express from "express";

const router = express.Router();

router.post("/login", adminLogin);
router.post("/createUser", createUser);
router.patch("/updatePassword", updatePassword);
router.get("/getCurrentUser", verifyJwt, getCurrentUser);

export default router;
