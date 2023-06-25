import express from "express";
import cors from "cors";
import portfolio from "./routes/portfolio.js";
import user from "./routes/user.js";
import watchlist from "./routes/watchlist.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use("/api/portfolio", portfolio);
app.use("/api/user", user);
app.use("/api/watchlist", watchlist);

app.listen(port, () => {
  console.log(`App started at http://localhost:${port}`);
});
