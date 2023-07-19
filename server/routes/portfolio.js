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
import checkKyc from "../middleware/checkKYC.js";

export const portfolioRouter = Router();

portfolioRouter.post("/stock/buy", checkuser, checkKyc, stockBuyTicker);

portfolioRouter.post(
  "/mutual-funds/buy",
  checkuser,
  checkKyc,
  mutualFundBuyTicker
);

portfolioRouter.post("/etf/buy", checkuser, checkKyc, etfBuyTicker);

portfolioRouter.post("/stock/sell", checkuser, checkKyc, sellStocksTicker);

portfolioRouter.post(
  "/mutual-funds/sell",
  checkuser,
  checkKyc,
  sellMutualFundsTicker
);

portfolioRouter.post("/etf/sell", checkuser, checkKyc, sellEtfTicker);

portfolioRouter.get("/all/portfolio", checkuser, checkKyc, getPortfolio);

portfolioRouter.get("/total/profit", checkuser, checkKyc, getProfit);
