import axios from "axios";

const API_ROOT_URL = "http://10.0.0.11:3000";

export async function login(data) {
  return await axios.post(`${API_ROOT_URL}/login`, data);
};

export async function getRoom() {
  return await axios.get(`${API_ROOT_URL}/rooms`);
};