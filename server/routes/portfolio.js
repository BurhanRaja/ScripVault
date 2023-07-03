import { Router } from "express";
import checkuser from "../middleware/checkuser.js";
import {
  etfBuyTicker,
  getPortfolio,
  getProfit,
  mutualFundBuyTicker,
  sellEtfTicker,
  sellMutualFundsTicker,
  sellStocksTicker,
  stockBuyTicker,
} from "../controller/portfolio";

const router = Router();

router.post("/stock/buy", checkuser, stockBuyTicker);

router.post("/mutual-funds/buy", checkuser, mutualFundBuyTicker);

router.post("/etf/buy", checkuser, etfBuyTicker);

router.post("/stock/sell", checkuser, sellStocksTicker);

router.post("/mutual-funds/sell", checkuser, sellMutualFundsTicker);

router.post("/etf/sell", checkuser, sellEtfTicker);

router.get("/all/portfolio", checkuser, getPortfolio);

router.get("/total/profit", checkuser, getProfit);

export default router;
