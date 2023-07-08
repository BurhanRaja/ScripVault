import CryptoJS from "crypto-js";

export const encodeCipher = (data) => {
  let token = CryptoJS.AES.encrypt(data);
  return token;
};

export const decodeCipher = (token) => {
  let data = CryptoJS.AES.decrypt(token);
  return data;
};
