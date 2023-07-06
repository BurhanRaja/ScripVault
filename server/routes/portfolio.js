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
} from "../controller/portfolio.js";

export const portfolioRouter = Router();

portfolioRouter.post("/stock/buy", checkuser, stockBuyTicker);

portfolioRouter.post("/mutual-funds/buy", checkuser, mutualFundBuyTicker);

portfolioRouter.post("/etf/buy", checkuser, etfBuyTicker);

portfolioRouter.post("/stock/sell", checkuser, sellStocksTicker);

portfolioRouter.post("/mutual-funds/sell", checkuser, sellMutualFundsTicker);

portfolioRouter.post("/etf/sell", checkuser, sellEtfTicker);

portfolioRouter.get("/all/portfolio", checkuser, getPortfolio);

portfolioRouter.get("/total/profit", checkuser, getProfit);
