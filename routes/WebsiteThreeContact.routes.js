import {
    addContactForm,
    getContactForm,deleteRecord,
    getPaginatedContactForm,
  } from "../controller/WebsiteThreeContact.controller.js";
  import { verifyJwt } from "../middleware/auth.middleware.js";
  import express from "express";
  const router = express.Router();
  import curtomAuthMiddleware from "../middleware/custom.middleware.js";
  
  router.post("/addContactForm", addContactForm);
  router.get("/getContactForm", verifyJwt, getContactForm);
  router.delete("/deleteRecord/:id",curtomAuthMiddleware, deleteRecord);
  router.get("/getPaginatedContactForm", verifyJwt, getPaginatedContactForm);
  
  export default router;
  