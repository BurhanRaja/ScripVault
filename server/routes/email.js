import express from "express";
import { sendEmailLogin } from "../controller/email";

export const emailRouter = express.Router();

verifyRouter.post("/verifylogin/:id", sendEmailLogin);
