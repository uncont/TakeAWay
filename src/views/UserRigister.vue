<!-- 用户登入页面 -->
<template>

<form class="form wrap">
  <h2>用户注册</h2>
  <div class="flex-column">
    <label>用户账号</label>
  </div>
  <div class="inputForm">
    <img src="@/assets/Image/SVG/email.svg" alt="">
    <input type="text" class="input" placeholder="请输入你的账号" />
  </div>
  <div class="flex-column change">
    <label>{{  registerMethod ? "手机号码" : "邮箱地址"   }}</label>
    <button @click.prevent="registerMethod = !registerMethod">用{{ registerMethod ? "邮箱" : "手机"  }}注册</button>
  </div>
  <div class="inputForm" v-if="registerMethod">
    <img src="@/assets/Image/SVG/email.svg" alt="">
    <input type="text" class="input" placeholder="请输入你的手机号码" />
  </div>
  <div class="inputForm" v-else>
    <img src="@/assets/Image/SVG/email.svg" alt="">
    <input type="text" class="input" placeholder="请输入你的邮箱地址" />
  </div>

  <div class="flex-column">
    <label>用户密码</label>
  </div>
  <div class="inputForm">
    <img src="@/assets/Image/SVG/password.svg" alt="">
    <input 
    type="password" 
    class="input" 
    placeholder="请输入账户密码" 
    autocomplete="password"/>
  </div>
  <div class="flex-column">
    <label>确认密码</label>
  </div>
  <div class="inputForm">
    <img src="@/assets/Image/SVG/password.svg" alt="">
    <input 
    type="password" 
    class="input" 
    placeholder="请输入账户密码" 
    autocomplete="password"/>
  </div>
  <button class="button-submit" @click.prevent="">注册</button>
  <p class="p">已有账号<span class="span" @click="router.push('/login')">点击前往登入</span></p>
</form>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
import { ref } from "vue";
const registerMethod = ref(true); //切换注册方式 true 为手机注册，false 为邮箱注册
const registDate = ref(
  {
    userName:'',
    phone:'',
    email:'',
    password:'',
    confirmPassword:''
  }
);

</script>

<style scoped>
.form {
  --input-color: #93C0F2;
  --SVGBG-color: #FEFFFF;
  --background-color: #F2F7FA;
  --button-color: #4F9BFA;
  --font-color: #333;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: var(--background-color);
  padding: 30px;
  width: 450px;
  border-radius: 20px;
  box-shadow: 
    0px 187px 75px  rgba(0, 0, 0, 0.01),
    0px 105px 63px rgba(0, 0, 0, 0.05),
    0px 47px 47px rgba(0, 0, 0, 0.09),
    0px 12px 26px rgba(0, 0, 0, 0.1),
    0px 0px 0px rgba(0, 0, 0, 0.1);
}
h2{
margin: 20px 0;
text-align: center;
font-weight: 700;
}
  
::placeholder {
  color: #aaa;
}

.form button {
  align-self: flex-end;
}

.flex-column > label {
  color: var(--font-color);
  font-weight: 600;
}

.change{
  display: flex;
  justify-content: space-between;
}

.change button{
  margin-right: 10px;
}

.inputForm {
  border: 1.5px solid #333;
  border-radius: 10px;
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  transition: 0.2s ease-in-out;
  background-color: var(--SVGBG-color);
}
.inputForm img{
  width: 20px;
  height: 20px;
}
.input {
  margin-left: 10px;
  border-radius: 10px;
  border: none;
  width: 100%;
  height: 100%;
  /* background-color: var(--input-color); */
  color: #333;
}

.input:focus {
  outline: none;
}

.inputForm:focus-within {
  border: 1.5px solid #2d79f3;
}

.flex-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
}

.flex-row > div > label {
  font-size: 14px;
  color: var(--font-color);
  font-weight: 400;
}

.span {
  font-size: 14px;
  margin-left: 5px;
  color: #2d79f3;
  font-weight: 500;
  cursor: pointer;
}

.button-submit {
  margin: 20px 0 10px 0;
  background-color: var(--button-color);
  border: none;
  color: white;
  font-size: 15px;
  font-weight: 500;
  border-radius: 10px;
  height: 50px;
  width: 100%;
  cursor: pointer;
}

.p {
  text-align: center;
  color: var(--font-color);
  font-size: 14px;
  margin: 5px 0;
}

.btn {
  margin-top: 10px;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  gap: 10px;
  border: 1px solid #333;
  background-color: var(--button-color);
  color: #f1f1f1;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}

.btn:hover {
  border: 1px solid #2d79f3;
}

</style>