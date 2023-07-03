import express from "express";
import cors from "cors";
import portfolio from "./routes/portfolio.js";
import { userRouter } from "./routes/user.js";
import watchlist from "./routes/watchlist.js";
import { depositRouter } from "./routes/deposit.js";
import withdraw from "./routes/withdraw.js";
import connectToMongoDB from "./db.js";

const app = express();
const port = 3000;

connectToMongoDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  return res.send("Welcome to the Investment Advisor API");
});

app.use("/api/portfolio", portfolio);
app.use("/api/user", userRouter);
app.use("/api/watchlist", watchlist);
app.use("/api/deposit", depositRouter);
app.use("/api/withdraw", withdraw);

app.listen(port, () => {
  console.log(`App started at http://localhost:${port}`);
});
