import axios from "axios";
import Portfolio from "../model/Portfolio";
import SoldTicker from "../model/SoldTicker";
import Wallet from "../model/Wallet";
import config from "../config";

// Buy and add to Portfolio
export const buyTicker = async (req, res) => {
  let success = false;
  try {
    const { name, symbol, buy_price, no_of_shares, type } = req.body;

    let portfolio = await Portfolio.findOne({ user_id: req.user.id });

    let wallet = await Wallet.findOneAndUpdate(
      { user_id: req.user.id },
      {
        $inc: {
          balance: -(buy_price * no_of_shares),
        },
      }
    );

    if (!portfolio) {
      portfolio = await Portfolio.create({
        user_id: req.user.id,
        portfolio: [
          {
            name,
            symbol,
            no_of_shares,
            buy_price,
            type,
          },
        ],
        total_investment: buy_price * no_of_shares,
      });
    } else {
      portfolio = await Portfolio.findOneAndUpdate(
        { user_id: req.user.id },
        {
          $push: {
            portfolio: {
              name,
              symbol,
              no_of_shares,
              buy_price,
              type,
            },
          },
          $inc: {
            total_investment: buy_price * no_of_shares,
          },
        }
      );
    }

    success = true;

    return res.status(200).send({
      success,
      message: `${type} bought successfully`,
    });
  } catch (err) {
    return res.status(500).send({
      success,
      message: "Internal Server Error.",
    });
  }
};

// Sell and remove from Portfolio
export const sellTicker = async (req, res) => {
  let success = false;

  try {
    const {
      name,
      symbol,
      buy_price,
      sell_price,
      no_of_shares,
      type,
      profit,
      portfolio_id,
    } = req.body;

    let portfolio = await Portfolio.findOneAndUpdate(
      { user_id: req.user.id },
      {
        $pull: {
          portfolio: {
            _id: portfolio_id,
          },
        },
        $inc: {
          total_investment: -(buy_price * no_of_shares),
        },
      }
    );

    let soldTicker = await SoldTicker.findOne({ user_id: req.user.id });

    if (!soldTicker) {
      soldTicker = await SoldTicker.create({
        user_id: req.user.id,
        tickers: [
          {
            name,
            symbol,
            sell_price,
            buy_price,
            no_of_shares,
            type,
            profit,
          },
        ],
      });
    } else {
      soldTicker = await SoldTicker.findOneAndUpdate(
        { user_id: req.user.id },
        {
          $push: {
            tickers: {
              name,
              symbol,
              sell_price,
              buy_price,
              no_of_shares,
              type,
              profit,
            },
          },
        }
      );
    }

    let wallet = await Wallet.findOneAndUpdate(
      { user_id: req.user.id },
      {
        $inc: {
          balance: sell_price * no_of_shares,
        },
      }
    );

    success = true;

    return res.status(200).send({
      success,
      message: `${name} successfully Sold.`,
    });
  } catch (err) {
    return res.status(500).send({
      success,
      message: "Internal Server Error.",
    });
  }
};

// Update and get Total Portfolio Amount
export const getProfit = async (req, res) => {
  let success = false;

  try {
    let portfolio = await Portfolio.findOne({ user_id: req.user.id });

    let date = new Date().toLocaleDateString().split("/");

    let curr = new Date().getTime();
    let later = new Date(
      `${date[2]}-0${date[1]}-0${date[0]} 15:35:00`
    ).getTime();

    let profit = 0;
    let portfolioData = portfolio.portfolio;

    if (curr > later) {
      for (let p in portfolioData) {
        let currPrice = 0;
        if (p.type === "Stock") {
          currPrice = await axios.get(
            config.stock_api + "/stock/currentprice" + p.symbol
          );
        }
        if (p.type === "Mutual Fund") {
          currPrice = await axios.get(
            config.stock_api + "/mutualfund/current/price" + p.symbol
          );
        }
        if (p.type === "ETF") {
          currPrice = await axios.get(
            config.stock_api + "/etf/current/price" + p.symbol
          );
        }

        profit += (currPrice - p.buy_price) * p.no_of_shares;
      }
      success = true;

      portfolio = await Portfolio.findOneAndUpdate(
        { user_id: req.user.id },
        {
          $set: {
            total_profit: profit,
          },
        }
      );
    }
    success = true;

    return res.status(200).send({
      success,
      profit: portfolio.total_profit,
    });
  } catch (err) {
    return res.status(500).send({
      success,
      message: "Internal Server Error.",
    });
  }
};

// Invest (Process) list of mutual fund -> lumpsum or SIP -> Set Amount on previous choice -> Confirm -> add to portfolio
