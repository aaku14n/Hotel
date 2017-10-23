import axios from "axios";

const API_ROOT_URL = "http:/192.168.2.14:3000";

export async function login(data) {
  return await axios.post(`${API_ROOT_URL}/login`, data);
};

export async function getRoom() {
  return await axios.get(`${API_ROOT_URL}/rooms`);
};
export async function post(data) {
  return await axios.post(`${API_ROOT_URL}/getRoomStatusByDate`, data);
};