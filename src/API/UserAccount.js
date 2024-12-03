import axios from "axios";

// 引入URL
import { userLogin_AccountURL,userRegisterURL,userCheckUsernameURL } from "@/API/config"

// 用户账号登入
export const userLogin = async(data)=>{
  // data ={
  //   "password": "Ysq456068607?",
  //   "account": "3486188492"
  // }
  try{
    const respose =  await axios.post(userLogin_AccountURL,data)
  }catch(err){
    console.error(err);
    
  }
}
// 用户注册
export const userRegister = async(data)=>{
  
  try{
    const respose =  await axios.post(userRegisterURL,data)
    console.log(respose.data);
  }catch(err){
    console.error(err);
  }
}

// 检查注册信息是否重复
export const checkRegisterInfo = async(data)=>{
  // data ={
  //   "account": "3486188492"
  // }
  const url = `${userCheckUsernameURL}${data.type}=${data.data}`
  try{
    const respose =  await axios.get(url)
    console.log(respose.data);
    
  }catch(err){
    console.error(err);
  }
}