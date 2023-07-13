import express from "express";
import checkUser from "../middleware/checkuser.js";
import { addKyc, approveKyc, checkKYC } from "../controller/kyc.js";
export const kycRouter = express.Router();

kycRouter.post("/add", checkUser, addKyc);

kycRouter.post("/approve", checkUser, approveKyc);

kycRouter.get("/status", checkUser, checkKYC);