import { Router } from "express";
import checkuser from "../middleware/checkuser.js";
import { addWithdraw, getAllWithdraws } from "../controller/withdraw.js";

export const withdrawRouter = Router();

withdrawRouter.post("/add", checkuser, addWithdraw);

withdrawRouter.get("/all", checkuser, getAllWithdraws);