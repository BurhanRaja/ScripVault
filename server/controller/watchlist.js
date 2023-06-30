import Watchlist from "../model/Watchlist";
import axios from "axios";
import config from "../config";

// Add to Watchlist
export const addWatchlist = async (req, res) => {
  let success = false;
  try {
    const { name, symbol, type } = req.body;

    let watchlist = await Watchlist.findOne({ user_id: req.user.id });

    if (!watchlist) {
      if (type === "stock") {
        watchlist = await Watchlist.create({
          user_id: req.user.id,
          stocks: [
            {
              name,
              symbol,
            },
          ],
        });
      }
      if (type === "mutual-fund") {
        watchlist = await Watchlist.create({
          user_id: req.user.id,
          mutual_funds: [
            {
              name,
              symbol,
            },
          ],
        });
      }
      if (type === "etf") {
        watchlist = await Watchlist.create({
          user_id: req.user.id,
          etfs: [
            {
              name,
              symbol,
            },
          ],
        });
      }
    } else {
      if (type === "stock") {
        watchlist = await Watchlist.findOneAndUpdate(
          { user_id: req.user.id },
          {
            $push: {
              stocks: {
                name,
                symbol,
              },
            },
          }
        );
      }
      if (type === "mutual-fund") {
        watchlist = await Watchlist.findOneAndUpdate(
          { user_id: req.user.id },
          {
            $push: {
              mutual_funds: {
                name,
                symbol,
              },
            },
          }
        );
      }
      if (type === "etf") {
        watchlist = await Watchlist.findOneAndUpdate(
          { user_id: req.user.id },
          {
            $push: {
              etfs: {
                name,
                symbol,
              },
            },
          }
        );
      }
    }

    success = true;
    return res.status(200).send({
      success,
      message: "Added to Watchlist.",
    });
  } catch (err) {
    return res.status(500).send({
      success,
      message: "Internal Server Error.",
    });
  }
};

// Get ALl Watchlist
export const getAllWatchlist = async (req, res) => {
  let success = false;

  try {
    const allWatchlists = await Watchlist.findOne({ user_id: req.user.id });

    const stocks = allWatchlists.stocks;
    const mutualFunds = allWatchlists.mutual_funds;
    const etfs = allWatchlists.etfs;

    let stocksData = [];
    let mutualFundsData = [];
    let etfsData = [];

    for (let s in stocks) {
      let data = await axios.get(
        config.stock_api + "/stock/currentprice" + s.symbol
      );
      stocksData.push(data);
    }
  } catch (err) {
    return res.status(500).send({
      success,
      message: "Internal Server Error.",
    });
  }
};

// Remove from Watchlist
export const removeWatchlist = async (req, res) => {
  let success = false;

  try {
    // stocks, mutual_funds, etfs
    const { type, id } = req.params;

    let watchlist = await Watchlist.findOne({
      user_id: req.user.id,
      [type]: { _id: id },
    });

    if (!watchlist[type]) {
      return res.status(400).send({
        success,
        message: `${type} not present.`,
      });
    }

    watchlist = await Watchlist.findOneAndUpdate(
      { user_id: id },
      {
        $pull: { [type]: { _id: id } },
      }
    );

    success = true;

    return res.status(200).send({
      success,
      message: `${type} deleted from Watchlist.`,
    });
  } catch (err) {
    return res.status(500).send({
      success,
      message: "Internal Server Error.",
    });
  }
};
