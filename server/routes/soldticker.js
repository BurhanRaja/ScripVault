import express from "express";
import checkuser from "../middleware/checkuser.js";
import { getAllProfitEarned, getAllSoldTicker } from "../controller/soldticker.js";

export const soldTickerRouter = express.Router();

soldTickerRouter.get("/soldticker", checkuser, getAllSoldTicker);

soldTickerRouter.get("/total/profit", checkuser, getAllProfitEarned);