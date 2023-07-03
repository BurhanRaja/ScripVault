import { Router } from "express";
import checkuser from "../middleware/checkuser";
import { addWithdraw, getAllWithdraws } from "../controller/withdraw";

const router = Router();

router.post("/add/withdraw", checkuser, addWithdraw);

router.get("/all/withdraw", checkuser, getAllWithdraws);

export default router;
