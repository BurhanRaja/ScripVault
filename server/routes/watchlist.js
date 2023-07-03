import {Router} from "express"
import checkuser from "../middleware/checkuser.js"
import { addWatchlist, getAllWatchlist, removeWatchlist } from "../controller/watchlist.js"

const router = Router()

router.post("/add/watchlist", checkuser, addWatchlist);

router.get("/all/watchlist", checkuser, getAllWatchlist);

router.post("/remove/watchlist", checkuser, removeWatchlist);

export default router