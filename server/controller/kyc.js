import Kyc from "../model/Kyc.js";
import User from "../model/User.js";
import random from "../utils/randomHash.js";
import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: async (req, file, cb) => {
    let user = await User.findOne({ _id: req.user.id });
    cb(null, `uploads/${req.user.id}_${user.full_name}`);
  },
  filename: (req, file, cb) => {
    const uniqueName =
      random(5) +
      new Date().getTime() +
      "_" +
      file.originalname +
      path.extname(file.originalname);
    cb(null, uniqueName);
  },
});

const upload = multer({
  storage,
  limits: { fieldSize: 1000 * 10 },
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      const err = new Error("Only .png, .jpg and .jpeg format allowed!");
      err.name = "ExtensionError";
      return cb(err);
    }
  },
}).array("kycImages", 2);

export const addKyc = async (req, res) => {
  let success = false;

  try {
    upload(req, res, async (err) => {
      if (!req.files) {
        return res.status(400).send({
          success,
          message: "All fields required.",
        });
      }

      if (err) {
        res.status(500).send({
          success,
          message: err.message,
        });
      }

      const kyc = await Kyc.create({
        user_id: req.user.id,
        poa: req.files[0].path,
        poi: req.files[1].path,
      });

      success = true;

      return res.status(200).send({
        status: 200,
        success,
        message: "KYC Successfully added.",
      });
    });
  } catch (err) {
    return res.status(500).send({
      status: 500,
      message: "Internal Server Error.",
    });
  }
};

export const approveKyc = async (req, res) => {
  let success = false;
  try {
    let kyc = await Kyc.findOne({ user_id: req.user.id });

    if (!kyc) {
      return res.status(400).send({
        success,
        message: "KYC Not Found.",
      });
    }

    kyc = await Kyc.findOneAndUpdate(
      { user_id: req.user.id },
      {
        $set: {
          status: true,
        },
      }
    );

    success = true;

    return res.status(200).send({
      success,
      message: "KYC approved.",
    });
  } catch (err) {
    return res.status(500).send({
      status: 500,
      message: "Internal Server Error.",
    });
  }
};
