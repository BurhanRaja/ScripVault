import User from "../model/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { jwt_secret } from "../config.js";

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

// Add User Info
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

// Get User Info
export const getUser = async (req, res) => {
  let success = false;

  try {
    const user = await User.findOne({ _id: req.user.id });
    if (!user) {
      return res.status(404).send({
        success,
        message: "User does not exists.",
      });
    }

    success = true;

    return res.status(200).send({
      success,
      user,
    });
  } catch (err) {
    return res.status(500).send({
      message: "Internal Server Error.",
    });
  }
};

// Update Bank Details
export const updateBankDetails = async (req, res) => {
  let success = false;

  try {
    const { accountNumber, accountType, ifsc } = req.body;

    let user = await User.findOne({ _id: req.user.id });

    if (!user) {
      return res.status(404).send({
        success,
        message: "User does not exists.",
      });
    }

    user = await User.findOneAndUpdate(
      { _id: req.user.id },
      {
        $set: {
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
      message: "User Bank Details Updated.",
    });
  } catch (err) {
    return res.status(500).send({
      message: "Internal Server Error.",
    });
  }
};

// Update Info
export const updateUserInfo = async (req, res) => {
  let success = false;

  try {
    const { dob, pan, sourceWealth } = req.body;

    let user = await User.findOne({ _id: req.user.id });

    if (!user) {
      return res.status(404).send({
        success,
        message: "User does not exists.",
      });
    }

    user = await User.findOneAndUpdate(
      { _id: req.user.id },
      {
        $set: {
          info: {
            dob,
            pan,
            sourceWealth,
          },
        },
      }
    );

    success = true;

    return res.status(200).send({
      success,
      message: "User info Updated.",
    });
  } catch (err) {
    return res.status(500).send({
      message: "Internal Server Error.",
    });
  }
};

// Update User
export const updateUser = async (req, res) => {
  let success = false;

  try {
    const { full_name, email, phone } = req.body;

    let user = await User.findOne({ _id: req.user.id });

    if (!user) {
      return res.status(404).send({
        success,
        message: "User does not exists.",
      });
    }

    user = await User.findOneAndUpdate(
      { _id: req.user.id },
      {
        $set: {
          basic: {
            full_name,
            email,
            phone,
          },
        },
      }
    );

    success = true;

    return res.status(200).send({
      success,
      message: "User Updated.",
    });
  } catch (err) {
    return res.status(500).send({
      message: "Internal Server Error.",
    });
  }
};

// Change Password
export const changePassword = async (req, res) => {
  let success = false;
  try {
    const { oldPassword, newPassword } = req.body;

    let user = await User.findOne({ _id: req.user.id });

    if (!user) {
      return res.status(404).send({
        success,
        message: "User does not exists.",
      });
    }

    if (oldPassword === newPassword) {
      return res.status(400).send({
        success,
        message: "Old Password and New Password are same.",
      });
    }

    let checkUserPassword = await bcrypt.compare(
      oldPassword,
      user.basic.password
    );

    if (!checkUserPassword) {
      return res.status(400).send({
        success,
        message: "Old Password does not match.",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const securePassword = await bcrypt.hash(newPassword, salt);

    user = await User.findOneAndUpdate(
      { _id: req.user.id },
      {
        $set: {
          basic: {
            password: securePassword,
          },
        },
      }
    );

    success = true;

    return res.status(200).send({
      success,
      message: "User Password changed.",
    });
  } catch (err) {
    return res.status(500).send({
      message: "Internal Server Error.",
    });
  }
};
