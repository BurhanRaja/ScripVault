import express from "express";
import cors from "cors";
import { portfolioRouter } from "./routes/portfolio.js";
import { userRouter } from "./routes/user.js";
import { watchlistRouter } from "./routes/watchlist.js";
import { depositRouter } from "./routes/deposit.js";
import { withdrawRouter } from "./routes/withdraw.js";
import { soldTickerRouter } from "./routes/soldticker.js";
import connectToMongoDB from "./db.js";

const app = express();
const port = 3000;

connectToMongoDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  return res.send("Welcome to the Investment Advisor API");
});

app.use("/api/portfolio", portfolioRouter);
app.use("/api/user", userRouter);
app.use("/api/watchlist", watchlistRouter);
app.use("/api/deposit", depositRouter);
app.use("/api/withdraw", withdrawRouter);
app.use("/api/soldticker", soldTickerRouter);

app.listen(port, () => {
  console.log(`App started at http://localhost:${port}`);
});
