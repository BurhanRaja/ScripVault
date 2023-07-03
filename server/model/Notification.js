import mongoose, { Schema } from "mongoose";

const NotificationSchema = new Schema(
  {
    data: {
      type: Object,
    },
    user_id: {
      type: Schema.Types.ObjectId,
    },
    type: {
      type: String,
      default: "reminder",
    },
    read: {
        type: Boolean
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Notifications", NotificationSchema);
