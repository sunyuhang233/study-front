<template>
  <div class="big">
    <div class="logo">
      <img class="jianshu" src="../assets/img/jianshu.png" alt="" />
    </div>
    <!-- 登录页 -->
    <div class="loginBox">
      <div class="left">
        <div class="imgBox">
          <img src="../assets/img/login.png" alt="" />
        </div>
        <div class="box">
          <button>下载简书APP</button>
          <img src="../assets/img/ecode.png" alt="" />
        </div>
      </div>
      <div class="login">
        <div class="loginTitle">
          <RouterLink to="/user/login">登录</RouterLink>
          <span>·</span>
          <RouterLink to="/user/register">注册</RouterLink>
        </div>
        <div class="loginForm">
          <RouterView></RouterView>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.jianshu {
  height: 46px;
  width: 80px;
  position: absolute;
  top: 56px;
  margin-left: 50px;
}
.jianshu img {
  width: 100px;
  height: 100%;
  vertical-align: middle;
}
.big {
  height: 100%;
  background-color: #f1f1f1;
}
.loginBox {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.login {
  width: 400px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  margin-left: 20px;

  padding: 50px 50px 30px;
}
.loginTitle {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}
.loginTitle span {
  margin: 0 10px;
  font-size: 18px;
  color: #ccc;
}
.loginTitle a {
  font-size: 18px;
  color: #9696b1;
  text-decoration: none;
}
.loginTitle a.router-link-exact-active {
  color: #ea6f5a;
  padding-bottom: 2px;
  border-bottom: 3px solid #ea6f5a;
}
.loginForm {
  padding: 5px;
}
.loginFormInput input {
  width: 100%;
  height: 50px;
  margin-bottom: 0;
  padding: 4px 12px 4px 35px;
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
</style>
