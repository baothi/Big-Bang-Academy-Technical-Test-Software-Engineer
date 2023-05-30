import axios from "axios";
import { base_url } from "../../utils/axios";

const getAllUsers = async()=>{
  const response= await axios.get(`${base_url}api/users`);
  if (response.data) {
    return response.data.users.users;
  }
};



const authService = {
  getAllUsers
};

export default authService;
