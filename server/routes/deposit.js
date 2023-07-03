import { Router } from "express";
import checkuser from "../middleware/checkuser";
import { addDeposit, getAllDeposits } from "../controller/deposit";

const router = Router();

router.post("/add/deposit", checkuser, addDeposit);

router.get("/all/deposit", checkuser, getAllDeposits);

export default router;
