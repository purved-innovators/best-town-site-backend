import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import AdminRoutes from "./routes/AdminLogin.routes.js";
import BestTownContactFormRoutes from "./routes/BestTownContactForm.routes.js";
import BestTownNewsLetterRoutes from "./routes/BestTownNewsLetter.routes.js";
import BestTownChatBotRoutes from "./routes/BestTownChatBot.routes.js";
import SobahRouteOne from "./routes/WebsiteOneContact.routes.js"
import SobahRouteTwo from "./routes/WebsiteTwoContact.routes.js"
import SobahRouteThree from "./routes/WebsiteThreeContact.routes.js"
import SobahRouteFour from "./routes/WebsiteFourContact.routes.js"
import BestTownCareerRoutes from "./routes/BestTownCareerSection.routes.js"
import BestTownQuestionaryRoutes from "./routes/BestTownQuestionary.routes.js"
import rateLimit from 'express-rate-limit'

dotenv.config();

const app = express();

const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,   
  max: 100,                   
  standardHeaders: true,      
  legacyHeaders: false,       
  message: 'Too many requests, please try again later.'
});

app.use(globalLimiter);
app.use(helmet())
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(
  cors({
    origin: "*",
    allowedHeaders: ['Authorization','Content-Type']
  })
);

app.use("/api/admin", AdminRoutes);
app.use("/api/BestTownContactForm", BestTownContactFormRoutes);
app.use("/api/BestTownNewsLetter", BestTownNewsLetterRoutes);
app.use("/api/BestTownChatBot", BestTownChatBotRoutes);
app.use("/api/SobahRouteOne",SobahRouteOne);
app.use("/api/SobahRouteTwo",SobahRouteTwo);
app.use("/api/SobahRouteThree",SobahRouteThree);
app.use("/api/SobahRouteFour",SobahRouteFour);
app.use("/api/BestTownCareer",BestTownCareerRoutes)
app.use("/api/BestTownQuestionary",BestTownQuestionaryRoutes)

export default app;
