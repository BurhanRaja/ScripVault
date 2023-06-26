import mongoose, { Schema } from "mongoose";

const PortfolioSchema = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    portfolio: [
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
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Portfolio", PortfolioSchema);
