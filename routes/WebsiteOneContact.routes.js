import {
    addContactForm,
    getContactForm,
    getPaginatedContactForm,deleteRecord
  } from "../controller/WebsiteOneContact.controller.js";
  import { verifyJwt } from "../middleware/auth.middleware.js";
  import express from "express";
  const router = express.Router();
  import curtomAuthMiddleware from "../middleware/custom.middleware.js";
  
  router.post("/addContactForm", addContactForm);
  router.get("/getContactForm", verifyJwt, getContactForm);
  router.get("/getPaginatedContactForm", verifyJwt, getPaginatedContactForm);
  router.delete("/deleteRecord/:id",curtomAuthMiddleware, deleteRecord);
  
  export default router;
  