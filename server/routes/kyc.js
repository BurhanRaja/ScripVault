import express from "express";
import checkUser from "../middleware/checkuser.js";
import { addKyc, approveKyc, checkKYC } from "../controller/kyc.js";
export const kycRouter = express.Router();

kycRouter.post("/add/kyc", checkUser, addKyc);

kycRouter.post("/approve/kyc", checkUser, approveKyc);

kycRouter.get("/status", checkUser, checkKYC);