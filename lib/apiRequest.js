import axios from "axios";

const API_ROOT_URL = "http://192.168.2.14:3000";

export async function login(data) {
  return await axios.post(`${API_ROOT_URL}/login`, data);
};