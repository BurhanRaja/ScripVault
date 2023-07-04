import SoldTicker from "../model/SoldTicker.js";

export const getAllSoldTicker = async (req, res) => {
  let success = false;
  try {
    const soldTicker = await SoldTicker.findOne({ user_id: req.user.id });
    success = true;
    return res.status(200).send({
      success,
      data: soldTicker,
    });
  } catch (err) {
    return res.status(500).send({
      success,
      message: "Internal Server Error.",
    });
  }
};

export const getAllProfitEarned = async (req, res) => {
  let success = false;
  try {
    const profit = await SoldTicker.aggregate();

    success = true;
    return res.status(200).send({
      success,
      profit,
    });
  } catch (err) {
    return res.status(500).send({
      success,
      message: "Internal Server Error.",
    });
  }
};
