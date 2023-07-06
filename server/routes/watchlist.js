import { Router } from "express";
import checkuser from "../middleware/checkuser.js";
import {
  addWatchlist,
  getAllWatchlist,
  removeWatchlist,
} from "../controller/watchlist.js";

export const watchlistRouter = Router();

watchlistRouter.post("/add", checkuser, addWatchlist);

watchlistRouter.get("/all", checkuser, getAllWatchlist);

watchlistRouter.post("/remove/:type/:id", checkuser, removeWatchlist);
