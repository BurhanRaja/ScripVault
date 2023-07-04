import {Router} from "express"
import checkuser from "../middleware/checkuser.js"
import { addWatchlist, getAllWatchlist, removeWatchlist } from "../controller/watchlist.js"

export const watchlistRouter = Router()

watchlistRouter.post("/add/watchlist", checkuser, addWatchlist);

watchlistRouter.get("/all/watchlist", checkuser, getAllWatchlist);

watchlistRouter.post("/remove/watchlist", checkuser, removeWatchlist);
