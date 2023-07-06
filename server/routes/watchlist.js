import { Router } from "express";
import checkuser from "../middleware/checkuser.js";
import {
  addWatchlist,
  getAllWatchlist,
  removeWatchlist,
} from "../controller/watchlist.js";
import checkKyc from "../middleware/checkKYC.js";

export const watchlistRouter = Router();

watchlistRouter.post("/add", checkuser, checkKyc, addWatchlist);

watchlistRouter.get("/all", checkuser, checkKyc, getAllWatchlist);

watchlistRouter.post("/remove/:type/:id", checkuser, checkKyc, removeWatchlist);
