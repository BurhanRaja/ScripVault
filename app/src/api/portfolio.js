import axios from "axios";
import config from "../config";

let token = localStorage.getItem("token");

export const buyStock = async (data) => {
  let response = await axios.post(
    config.node_url + "/api/portfolio/stock/buy",
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

export const buyMutualFund = async (data) => {
  let response = await axios.post(
    config.node_url + "/api/portfolio/mutual-funds/buy",
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export const buyETF = async (data) => {
  let response = await axios.post(
    config.node_url + "/api/portfolio/etf/buy",
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};
