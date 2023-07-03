import axios from "axios";
import Portfolio from "../model/Portfolio.js";
import SoldTicker from "../model/SoldTicker.js";
import Wallet from "../model/Wallet.js";
import config from "../config.js";

// Stock Buy ---------------------------------------------------------------------------
export const stockBuyTicker = async (req, res) => {
  let success = false;
  try {
    const { name, symbol, buy_price, no_of_shares, date_of_buy } = req.body;

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
        stocks: [
          {
            name,
            symbol,
            no_of_shares,
            buy_price,
            date_of_buy,
          },
        ],
        total_investment: buy_price * no_of_shares,
      });
    } else {
      portfolio = await Portfolio.findOneAndUpdate(
        { user_id: req.user.id },
        {
          $push: {
            stocks: {
              name,
              symbol,
              no_of_shares,
              buy_price,
              date_of_buy,
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
      message: `Stock bought successfully`,
    });
  } catch (err) {
    return res.status(500).send({
      success,
      message: "Internal Server Error.",
    });
  }
};

// Mutual Funds Buy ---------------------------------------------------------------------------
export const mutualFundBuyTicker = async (req, res) => {
  let success = false;
  try {
    const {
      name,
      symbol,
      buy_price,
      type_mf,
      date_of_buy,
      total_years,
      year_sell,
    } = req.body;

    let portfolio = await Portfolio.findOne({ user_id: req.user.id });

    let wallet = await Wallet.findOneAndUpdate(
      { user_id: req.user.id },
      {
        $inc: {
          balance: -buy_price,
        },
      }
    );

    if (!portfolio) {
      portfolio = await Portfolio.create({
        user_id: req.user.id,
        mutual_funds: [
          {
            name,
            symbol,
            type_mf,
            buy_price,
            date_of_buy,
            total_years,
            year_sell,
          },
        ],
        total_investment: buy_price,
      });
    } else {
      portfolio = await Portfolio.findOneAndUpdate(
        { user_id: req.user.id },
        {
          $push: {
            mutual_funds: {
              name,
              symbol,
              type_mf,
              buy_price,
              date_of_buy,
              total_years,
              year_sell,
            },
          },
          $inc: {
            total_investment: buy_price,
          },
        }
      );
    }

    success = true;

    return res.status(200).send({
      success,
      message: `Mutual Fund bought successfully`,
    });
  } catch (err) {
    return res.status(500).send({
      success,
      message: "Internal Server Error.",
    });
  }
};

// Buy ETF -----------------------------------------------------------------------------------
export const etfBuyTicker = async (req, res) => {
  let success = false;
  try {
    const { name, symbol, buy_price, date_of_buy } = req.body;

    let portfolio = await Portfolio.findOne({ user_id: req.user.id });

    let wallet = await Wallet.findOneAndUpdate(
      { user_id: req.user.id },
      {
        $inc: {
          balance: -buy_price,
        },
      }
    );

    if (!portfolio) {
      portfolio = await Portfolio.create({
        user_id: req.user.id,
        stocks: [
          {
            name,
            symbol,
            buy_price,
            date_of_buy,
          },
        ],
        total_investment: buy_price,
      });
    } else {
      portfolio = await Portfolio.findOneAndUpdate(
        { user_id: req.user.id },
        {
          $push: {
            stocks: {
              name,
              symbol,
              buy_price,
              date_of_buy,
            },
          },
          $inc: {
            total_investment: buy_price,
          },
        }
      );
    }

    success = true;

    return res.status(200).send({
      success,
      message: `ETF bought successfully`,
    });
  } catch (err) {
    return res.status(500).send({
      success,
      message: "Internal Server Error.",
    });
  }
};

// Stocks Sell and remove from Portfolio ---------------------------------------------------------------------------
export const sellStocksTicker = async (req, res) => {
  let success = false;

  try {
    const {
      name,
      symbol,
      buy_price,
      sell_price,
      no_of_shares,
      date_of_buy,
      date_of_sell,
      profit,
      stocks_id,
    } = req.body;

    let portfolio = await Portfolio.findOneAndUpdate(
      { user_id: req.user.id },
      {
        $pull: {
          stocks: {
            _id: stocks_id,
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
        stocks: [
          {
            name,
            symbol,
            buy_price,
            sell_price,
            no_of_shares,
            date_of_buy,
            date_of_sell,
            profit,
          },
        ],
      });
    } else {
      soldTicker = await SoldTicker.findOneAndUpdate(
        { user_id: req.user.id },
        {
          $push: {
            stocks: {
              name,
              symbol,
              buy_price,
              sell_price,
              no_of_shares,
              date_of_buy,
              date_of_sell,
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

// Mutual Funds Sell and remove from Portfolio ---------------------------------------------------------------------------
export const sellMutualFundsTicker = async (req, res) => {
  let success = false;

  try {
    const {
      name,
      symbol,
      buy_price,
      type_mf,
      date_of_buy,
      total_years,
      year_sell,
      sell_price,
      date_of_sell,
      profit,
      mf_id,
    } = req.body;

    const date = new Date();
    const sell_date = new Date(year_sell);

    if (sell_date.getTime() !== date.getTime()) {
      return res.status(405).send({
        success,
        message: "You cannot sell your Mutual Fund.",
      });
    }

    let portfolio = await Portfolio.findOneAndUpdate(
      { user_id: req.user.id },
      {
        $pull: {
          stocks: {
            _id: mf_id,
          },
        },
        $inc: {
          total_investment: -buy_price,
        },
      }
    );

    let soldTicker = await SoldTicker.findOne({ user_id: req.user.id });

    if (!soldTicker) {
      soldTicker = await SoldTicker.create({
        user_id: req.user.id,
        mutual_funds: [
          {
            name,
            symbol,
            buy_price,
            type_mf,
            date_of_buy,
            total_years,
            year_sell,
            sell_price,
            date_of_sell,
            profit,
          },
        ],
      });
    } else {
      soldTicker = await SoldTicker.findOneAndUpdate(
        { user_id: req.user.id },
        {
          $push: {
            mutual_funds: {
              name,
              symbol,
              buy_price,
              type_mf,
              date_of_buy,
              total_years,
              year_sell,
              sell_price,
              date_of_sell,
              profit,
            },
          },
        }
      );
    }

    price = 0;

    let wallet = await Wallet.findOneAndUpdate(
      { user_id: req.user.id },
      {
        $inc: {
          balance: sell_price,
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

// ETF Sell and remove from Portfolio ---------------------------------------------------------------------------
export const sellEtfTicker = async (req, res) => {
  let success = false;

  try {
    const {
      name,
      symbol,
      buy_price,
      date_of_buy,
      sell_price,
      date_of_sell,
      profit,
      etf_id,
    } = req.body;

    const date = new Date();
    const sell_date = new Date(year_sell);

    if (sell_date.getTime() !== date.getTime()) {
      return res.status(405).send({
        success,
        message: "You cannot sell your Mutual Fund.",
      });
    }

    let portfolio = await Portfolio.findOneAndUpdate(
      { user_id: req.user.id },
      {
        $pull: {
          stocks: {
            _id: etf_id,
          },
        },
        $inc: {
          total_investment: -buy_price,
        },
      }
    );

    let soldTicker = await SoldTicker.findOne({ user_id: req.user.id });

    if (!soldTicker) {
      soldTicker = await SoldTicker.create({
        user_id: req.user.id,
        mutual_funds: [
          {
            name,
            symbol,
            buy_price,
            date_of_buy,
            sell_price,
            date_of_sell,
            profit,
          },
        ],
      });
    } else {
      soldTicker = await SoldTicker.findOneAndUpdate(
        { user_id: req.user.id },
        {
          $push: {
            mutual_funds: {
              name,
              symbol,
              buy_price,
              date_of_buy,
              sell_price,
              date_of_sell,
              profit,
            },
          },
        }
      );
    }

    price = 0;

    let wallet = await Wallet.findOneAndUpdate(
      { user_id: req.user.id },
      {
        $inc: {
          balance: sell_price,
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

// Get Portfolio
export const getPortfolio = async (req, res) => {
  let success = false;

  try {
    let portfolio = await Portfolio.findOne({ user_id: req.user.id });

    success = true;

    return res.status(200).send({
      success,
      portfolio,
    });
  } catch (err) {
    return res.status(500).send({
      success,
      message: "Internal Server Error.",
    });
  }
};

// Update and get Total Portfolio Amount ---------------------------------------------------------------------------
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
