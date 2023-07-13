import axios from "axios";
import config from "../config";

export const addKyc = async (data) => {
  let res = await axios.post(
    config.node_url + "/api/kyc/add",
    {
      data,
    }
  );

  return res.data;
};
