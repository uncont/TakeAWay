import axios from "axios";

// 引入URL
import { user_LoginURL } from "@/API/config"

// 用户登入
export const userLogin = async(data) => {
  try {
    const response = await axios.post(user_LoginURL, data)
  } catch (error) {
    console.error(error+"用户登入失败");
  }
}