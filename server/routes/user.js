import { Router } from "express";
import {
  addUserNomination,
  changePassword,
  deleteUserNominate,
  getAllUserNominate,
  getSingleUserNominate,
  getUser,
  updateBankDetails,
  updateUser,
  updateUserInfo,
  updateUserNominate,
  userInfo,
  userLogin,
  userRegister,
} from "../controller/user";
import checkuser from "../middleware/checkuser";

const router = Router();

router.post("/register", userRegister);

router.post("/user/info", userInfo);

router.post("/user/nominate", addUserNomination);

router.post("/login", userLogin);

router.get("/", checkuser, getUser);

router.put("/update/userInfo", checkuser, updateUserInfo);

router.put("/update/user", checkuser, updateUser);

router.put("/update/userBank", checkuser, updateBankDetails);

router.put("/changepassword", checkuser, changePassword);

router.get("/all/user/nominate", checkuser, getAllUserNominate);

router.get("/user/nominate/:id", checkuser, getSingleUserNominate);

router.put("/update/user/nominate/:id", checkuser, updateUserNominate);

router.delete("/delete/user/nominate/:id", checkuser, deleteUserNominate);

export default router;
