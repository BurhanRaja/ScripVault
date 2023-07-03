import express from "express";
import cors from "cors";
import portfolio from "./routes/portfolio.js";
import user from "./routes/user.js";
import watchlist from "./routes/watchlist.js";
import deposit from "./routes/deposit.js";
import withdraw from "./routes/withdraw.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use("/api/portfolio", portfolio);
app.use("/api/user", user);
app.use("/api/watchlist", watchlist);
app.use("/api/deposit", deposit);
app.use("/api/withdraw", withdraw);

app.listen(port, () => {
  console.log(`App started at http://localhost:${port}`);
});
