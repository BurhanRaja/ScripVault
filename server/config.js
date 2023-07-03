import dotenv from "dotenv";
dotenv.config();

export default {
  port: process.env.PORT || 3001,
  stock_api: process.env.PYTHON_API_URL,
  jwt_secret: process.env.JWT_TOKEN_SECRET,
};
