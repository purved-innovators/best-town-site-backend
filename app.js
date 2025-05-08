import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import AdminRoutes from "./routes/AdminLogin.routes.js";
import BestTownContactFormRoutes from "./routes/BestTownContactForm.routes.js";
import BestTownNewsLetterRoutes from "./routes/BestTownNewsLetter.routes.js";
import BestTownChatBotRoutes from "./routes/BestTownChatBot.routes.js";

dotenv.config();

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(
  cors({
    origin: "*",
  })
);

app.use("/admin", AdminRoutes);
app.use("/BestTownContactForm", BestTownContactFormRoutes);
app.use("/BestTownNewsLetter", BestTownNewsLetterRoutes);
app.use("/BestTownChatBot", BestTownChatBotRoutes);

export default app;
