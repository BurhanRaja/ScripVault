import BankBalance from "../model/BankBalance";
import Deposit from "../model/Deposit";
import Wallet from "../model/Wallet";
import randomHash from "../utils/randomHash";

// Add Deposit
export const addDeposit = async (req, res) => {
  let success = false;

  try {
    const { amount, bank_account_number } = req.body;

    let transaction_id = randomHash(14);

    let bankBalance = await BankBalance.findOne({
      user_id: req.user.id,
    });

    if (bankBalance.balance < amount) {
      return res.status(400).send({
        success,
        message: "Some Error Occured.",
      });
    }

    let deposit = await Deposit.create({
      amount,
      bank_account_number,
      transaction_id,
      user_id: req.user.id,
    });

    let wallet = await Wallet.findOne({ user_id: req.user.id });

    if (!wallet) {
      await Wallet.create({
        user_id: req.user.id,
        balance: amount,
      });
    } else {
      await Wallet.findOneAndUpdate(
        { user_id: req.user.id },
        {
          $inc: { balance: amount },
        }
      );
    }

    await BankBalance.findOneAndUpdate(
      {
        user_id: req.user.id,
      },
      {
        $inc: { balance: -amount },
      }
    );

    success = true;

    return res.status(200).send({
      success,
      message: "Deposit successful.",
    });
  } catch (err) {
    return res.status(500).send({
      success,
      message: "Internal Server Error.",
    });
  }
};

// All Deposit
export const getAllDeposits = async (req, res) => {
  let success = false;

  try {
    let deposits = await Deposit.find({ user_id: req.user.id });

    success = true;

    return res.status(200).send({
      success,
      deposits,
    });
  } catch (err) {
    return res.status(500).send({
      success,
      message: "Internal Server Error.",
    });
  }
};
