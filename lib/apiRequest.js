import axios from "axios";

const API_ROOT_URL = "http://localhost:27017/";
const API_KEY = ",uk&appid=828a7f789fa0d9c17339483615f573da";

export async function get(pincode) {
  return await axios.get(`${API_ROOT_URL}${pincode}${API_KEY}`);
};