<template>
  <div class="loginFormInput">
    <input type="text" placeholder="手机号或邮箱" />
    <!-- 图标 -->
    <img src="../assets/img/user.png" alt="" />
  </div>
  <div class="loginFormInput">
    <input type="text" placeholder="密码" />
    <!-- 图标 -->
    <img src="../assets/img/lock.png" alt="" />
  </div>
  <div class="tools">
    <div class="left">
      <input type="checkbox" :value="isTrue" />
      <span>记住我</span>
    </div>
    <RouterLink to="/forget">登录遇到问题?</RouterLink>
  </div>
  <div class="loginFormInput">
    <button @click="goMain">登录</button>
  </div>
  <div class="other">
    <div class="one"></div>
    <div class="msg">社交账号登录</div>
    <div class="one"></div>
  </div>
  <div class="loginOther">
    <img src="../assets/img/one.png" alt="" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import router from '../router'

const isTrue = ref(true)

function goMain() {
  router.push('/jianshu/home')
}
</script>

<style scoped>
.loginFormInput input {
  width: 100%;
  height: 50px;
  margin-bottom: 0;
  padding: 4px 12px 4px 44px;
  border: 1px solid #c8c8c8;
  border-radius: 0 0 4px 4px;
  background-color: hsla(0, 0%, 71%, 0.1);
  vertical-align: middle;
  border-radius: 4px 4px 0 0;
}
.loginFormInput button {
  width: 100%;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 20px;
  background-color: #3194d0;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
}

.loginFormInput button:hover {
  background-color: #000;
  color: #fff;
}

.loginFormInput button:active {
  background-color: #000;
  color: #fff;
}

.tools {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 20px;
}
.tools input {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}
.tools span {
  font-size: 14px;
}
.tools a {
  font-size: 14px;
  color: #ccc;
  text-decoration: none;
}
.other {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 60px;
}
.other .one {
  width: 100px;
  height: 1px;
  background-color: #ccc;
}
.other .msg {
  font-size: 14px;
  color: #ccc;
}
.box .left {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
.loginBox .left .box {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 40px;
}
.box button {
  width: 252px;
  height: 46px;
  border: 1px solid #ccc;
  border-radius: 20px;
  background-color: #ea6f5a;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
}
.box img {
  height: 46px;
  width: 46px;
  vertical-align: middle;
  margin-left: 20px;
}
.left .imgBox {
  width: 400px;
  height: 513px;
  margin-bottom: 20px;
}
.left .imgBox img {
  width: 100%;
  height: 100%;
  vertical-align: middle;
}
.loginOther {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
}
.loginOther img {
  width: 300px;
  height: 100%;
  vertical-align: middle;
}
.loginFormInput {
  position: relative;
  margin-bottom: 20px;
}
.loginFormInput img {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 30px;
  height: 30px;
}
.loginFormInput ::placeholder {
  margin-left: 80px;
}
</style>
