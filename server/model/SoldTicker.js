import mongoose, { Schema } from "mongoose";

const SoldTickerSchema = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    tickers: [
      {
        name: {
          type: String,
        },
        symbol: {
          type: String,
        },
        buy_price: {
          type: Number,
        },
        sell_price: {
          type: Number,
        },
        no_of_shares: {
          type: Number,
        },
        type: {
          type: String,
        },
        profit: {
          type: Number,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("SoldTicker", SoldTickerSchema);
