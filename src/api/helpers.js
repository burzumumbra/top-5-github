import axios from "axios";
import { API_URL } from "./constants";

export const fetchUser = async (id) => {

  const response = await axios.get(`${API_URL}/${id}`);
  console.log(response);
  return response.data
}