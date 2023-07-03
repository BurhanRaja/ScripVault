import mongoose, { Schema } from "mongoose";

const KycSchema = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
    },
    poa: {
      type: String,
    },
    poi: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
