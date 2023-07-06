import { Router } from "express";
import checkuser from "../middleware/checkuser.js";
import { addDeposit, getAllDeposits } from "../controller/deposit.js";

export const depositRouter = Router();

depositRouter.post("/add", checkuser, addDeposit);

depositRouter.get("/all", checkuser, getAllDeposits);
