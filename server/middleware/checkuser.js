import jwt from "jsonwebtoken";
import config from "../config.js";

export default checkUser = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
      return res.status(403).send({
        success,
        message: "Unauthorized access",
      });
    }

    const data = jwt.decode(token, config.jwt_secret);
    req.user = data.user;

    next();
  } catch (err) {
    return res.status(500).send({
      success,
      message: "Internal Server Error.",
    });
  }
};
