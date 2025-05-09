import {
    addContactForm,
    getContactForm,
    getPaginatedContactForm,
  } from "../controller/WebsiteOneContact.controller.js";
  import { verifyJwt } from "../middleware/auth.middleware.js";
  import express from "express";
  const router = express.Router();
  
  router.post("/addContactForm", addContactForm);
  router.get("/getContactForm", verifyJwt, getContactForm);
  router.get("/getPaginatedContactForm", verifyJwt, getPaginatedContactForm);
  
  export default router;
  