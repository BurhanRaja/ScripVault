import User from "../model/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { jwt_secret } from "../config.js";

// Get User Info
// Update User Info
// delete User account

// User Regitration
export const UserRegister = async (req, res) => {
  let success = false;
  try {
    const { full_name, email, phone, password } = req.body;
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).send({
        success,
        message: "User already exists.",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const securePassword = await bcrypt.hash(password, salt);

    user = User.create({
      basic: {
        full_name,
        email,
        phone,
        password: securePassword,
      },
    });

    if (!user) {
      return res.status(400).send({
        success,
        messgae: "Some Error Occurred",
      });
    }

    success = true;

    return res.status(200).send({
      success,
      message: "User Registered Successfully.",
      user_id: user.id,
    });
  } catch (err) {
    return res.status(500).send({
      message: "Internal Server Error.",
    });
  }
};

// Get User Info
export const userInfo = async (req, res) => {
  let success = false;

  try {
    const { id, dob, pan, sourceWealth, accountNumber, accountType, ifsc } =
      req.body;

    if (!id) {
      return res.status(400).send({
        success,
        message: "Id Not Found",
      });
    }

    await User.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          info: {
            dob,
            pan,
            sourceWealth,
          },
          bank: {
            accountNumber,
            accountType,
            ifsc,
          },
        },
      }
    );

    success = true;

    return res.status(200).send({
      success,
      message: "User Info added.",
    });
  } catch (err) {
    return res.status(500).send({
      message: "Internal Server Error.",
    });
  }
};

// User Login
export const userLogin = async (req, res) => {
  let success = false;

  try {
    const { email, password } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
      return res.status(400).send({
        success,
        message: "Invalid Credentials",
      });
    }

    const comparePass = await bcrypt.compare(password, user.basic.password);

    if (!comparePass) {
      return res.status(400).send({
        success,
        message: "Invalid Credentials",
      });
    }

    let data = {
      user: {
        id: user.id,
      },
    };

    const token = jwt.sign(data, jwt_secret);

    success = true;

    return res.status(200).send({
      success,
      token,
    });
  } catch (err) {
    return res.status(500).send({
      message: "Internal Server Error.",
    });
  }
};
