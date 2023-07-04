import axios from "axios";
import { node_url } from "../config";

let token = localStorage.get("token");

// User Register
export const userRegister = async (data) => {
  const response = await axios.post(node_url + "/api/user/register", {
    data,
  });

  return response.data;
};

// User Login
export const userLogin = async (data) => {
  const response = await axios.post(node_url + "/api/user/login", {
    data,
  });

  return response.data;
};

// User Info
export const addUserInfo = async (data) => {
  const response = await axios.post(node_url + "/api/user/info", {
    data,
  });
  return response.data;
};

// User Nominate
export const addUserNominate = async (data) => {
  const response = await axios.post(node_url + "/api/user/nominate", {
    data,
  });
  return response.data;
};

// Get User
export const getUser = async () => {
  const response = await axios.get(node_url + "/api/user/", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

// Update User
export const updateUser = async (data) => {
  const response = await axios.put(
    node_url + "/api/user/update/user",
    {
      data,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

// Update User Info
export const updateUserInfo = async (data) => {
  const response = await axios.put(
    node_url + "/api/user/update/userInfo",
    {
      data,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

// Update Bank Details
export const updateBankDetails = async (data) => {
  const response = await axios.put(
    node_url + "/api/user/update/userBank",
    {
      data,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

// Get User Nominate
export const getUserNominate = async () => {
  const response = await axios.get(node_url + "/api/user/all/nominate", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

// Get Single User Nominate
export const getSingleUserNominate = async (id) => {
  const response = await axios.get(node_url + `/api/user/nominate/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

// Update User Nominate
export const updateUserNominate = async (id, data) => {
  const response = await axios.put(
    node_url + `/api/user/update/nominate/${id}`,
    {
      data,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

// Change User Password
export const changeUserPassword = async (data) => {
  const response = await axios.put(
    node_url + "/api/user/changepassword",
    {
      data,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

// Delete User Nominate
export const deleteUserNominate = async (id) => {
  const response = await axios.delete(
    node_url + `/api/user/delete/nominate/${id}`
  );
  return response.data;
};