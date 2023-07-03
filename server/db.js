import mongoose from "mongoose";

const mongoURI = "mongodb://127.0.0.1:27017/investmentadvisor";

const connectToMongoDB = () => {
  mongoose
    .connect(mongoURI)
    .then(() => console.log("Mongodb Connected"))
    .catch((err) => console.log(err));
};

export default connectToMongoDB;
