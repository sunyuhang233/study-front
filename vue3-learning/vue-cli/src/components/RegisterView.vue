<template>
  <div class="loginFormInput">
    <input type="text" placeholder="你的昵称" />
    <img src="../assets/img/user.png" alt="" />
  </div>
  <div class="loginFormInput">
    <input type="text" placeholder="手机号" />
    <img src="../assets/img/phone.png" alt="" />
  </div>
  <div class="loginFormInput">
    <input type="text" placeholder="设置密码" />
    <img src="../assets/img/lock.png" alt="" />
  </div>
  <div class="tools">
    <div class="left">
      <div>点击 “注册” 即表示您同意并愿意遵守简书</div>
      <div>
        <RouterLink to="/userAgreement">用户协议</RouterLink>
        和
        <RouterLink to="/privacyPolicy">隐私政策</RouterLink>
      </div>
    </div>
  </div>
  <div class="loginFormInput">
    <button>注册</button>
  </div>
  <div class="other">
    <div class="one"></div>
    <div class="msg">社交账号直接注册</div>
    <div class="one"></div>
  </div>
  <div class="loginOther">
    <img src="../assets/img/two.png" alt="" />
  </div>
</template>

<script setup></script>

<style scoped>
.loginFormInput {
  width: 300px;
  height: 50px;
  margin: 0 auto;
  border-radius: 5px;
  position: relative;
}
.loginFormInput input {
  width: 100%;
  height: 50px;
  margin-bottom: 0;
  padding: 4px 12px 4px 40px;
  border: 1px solid #c8c8c8;
  border-radius: 0 0 4px 4px;
  background-color: hsla(0, 0%, 71%, 0.1);
  vertical-align: middle;
  border-radius: 4px 4px 0 0;
}
.loginFormInput input::placeholder {
  color: #999;
}
.tools {
  width: 300px;
  height: 50px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.tools .left {
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  margin-top: 20px;
}
.tools .left div {
  font-size: 12px;
  color: #999;
}

.tools .left a {
  color: #3194d0;
  font-size: 12px;
}
.loginFormInput button {
  width: 100%;
  height: 100%;
  border: none !important;
  outline: none;
  background-color: #42c02e;
  color: #fff;
  border-radius: 30px;
  font-size: 16px;
  margin-top: 20px;
}
.other {
  width: 300px;
  height: 50px;
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.other .one {
  width: 100px;
  height: 1px;
  background-color: #999;
}
.other .msg {
  font-size: 12px;
  color: #999;
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
.loginOther {
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 75px;
  margin-left: 40px;
}
.loginOther img {
  width: 100%;
  height: 100%;
}
</style>
