import {
  adminLogin,
  createUser,
  updatePassword,
  getCurrentUser,
} from "../controller/AdminLogin.controllers.js";
import { verifyJwt } from "../middleware/auth.middleware.js";
import express from "express";
import curtomAuthMiddleware from "../middleware/custom.middleware.js";

const router = express.Router();

router.post("/login", adminLogin);
router.post("/createUser",curtomAuthMiddleware, createUser);
router.patch("/updatePassword",curtomAuthMiddleware, updatePassword);
router.get("/getCurrentUser", verifyJwt, getCurrentUser);

export default router;
