<!-- 用户登入页面 -->
<template>

<form class="form wrap">
  <h2>用户登入</h2>
  <div class="flex-column">
    <label>用户账号</label>
  </div>
  <div class="inputForm">
    <img src="@/assets/Image/SVG/email.svg" alt="">
    <input type="text" class="input" placeholder="请输入你的账户" />
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

  <div class="flex-row">
    <div>
      <input type="radio" />
      <label>记住密码</label>
    </div>
    <span class="span">密码忘记了？</span>
  </div>
  <button class="button-submit" @click.prevent="onShow">登入</button>
  <p class="p">还没有账号？<span class="span" @click="router.push('/register')">点击前往注册</span></p>
  <p class="p line">或者</p>

  <div class="flex-row">
    <button class="btn WeChat">使用微信登入</button>
    <button class="btn apple">使用邮箱地址登入</button>
  </div>
</form>
<Vcode :show="isShow" @success="onSuccess" @close="onClose" />
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
import { ref } from "vue";
import Vcode from "vue3-puzzle-vcode";
/*验证码*/ 
const isShow = ref(false);//验证码的显示与隐藏
const onShow = () => {
  isShow.value = true;
};
const onClose = () => {
  isShow.value = false;
};
// 成功后执行的函数
const onSuccess = () => {
  onClose(); // 验证成功，需要手动关闭模态框
};

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
  background-color: var(--button-color);
  color: #f1f1f1;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}

.WeChat{
  background-color:  #04BE02;
}

.btn:hover {
  border: 1px solid #2d79f3;
}

</style>