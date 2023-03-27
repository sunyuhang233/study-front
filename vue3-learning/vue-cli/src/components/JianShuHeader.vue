<template>
  <div class="head">
    <div class="logo">
      <img src="../assets/img/jianshu.png" alt="" />
    </div>
    <div class="main">
      <div class="item">
        <img src="../assets/img/icon1.png" alt="" />
        <RouterLink to="/jianshu/home">首页</RouterLink>
      </div>
      <div class="item">
        <img src="../assets/img/icon2.png" alt="" />
        <RouterLink to="/jianshu/download">下载App</RouterLink>
      </div>
      <div class="item">
        <img src="../assets/img/icon3.png" alt="" />
        <RouterLink to="/jianshu/write">会员</RouterLink>
      </div>
      <div class="item">
        <img src="../assets/img/icon4.png" alt="" />
        <RouterLink to="/jianshu/it">IT技术</RouterLink>
      </div>
    </div>
    <div class="search">
      <input type="text" placeholder="搜索" />
      <img src="../assets/img/search.png" alt="" />
    </div>
    <div class="other">
      <div class="item aa">
        <RouterLink to="/user/login"> Aa </RouterLink>
      </div>
      <div class="item login">
        <RouterLink to="/user/login"> 登录 </RouterLink>
      </div>
      <div class="item register">
        <RouterLink to="/user/register"> 注册 </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.head {
  height: 56px;
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f0f0f0;
}
.logo {
  height: 70%;
  width: 100px;
  margin-left: 50px;
}
.logo img {
  width: 100%;
  height: 100%;
}
.main {
  height: 100%;
  width: 600px;
  display: flex;
  align-items: center;
  margin-left: 200px;
}
.main .item {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 0 10px;
  text-align: center;
}
.main .item img {
  height: 30px;
  width: 30px;
  margin-right: -6px;
}

.main a {
  text-decoration: none;
  color: #000;
  width: 70px;
  text-align: center;
}

.search {
  height: 100%;
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 50px;
  position: relative;
}
.search img {
  height: 20px;
  width: 20px;
  position: absolute;
  right: 34px;
  top: 50%;
  transform: translateY(-50%);
}
.search input {
  height: 38px;
  width: 240px;
  border-radius: 20px;
  padding-left: 20px;
  outline: none;
  border: 1px solid #eee;
  background-color: #eeeeee;
}
.other {
  height: 100%;
  width: 300px;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 80px;
}
.other .item {
  height: 100%;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.other .item:hover {
  background-color: #f0f0f0;
}
.other a {
  text-decoration: none;
  color: #000;
}
.other .aa {
  height: 100%;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.other .aa a {
  font-size: 20px;
  color: #969696;
}

.other .aa:hover {
  background-color: #f0f0f0;
}
.other .login {
  height: 100%;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.other .login a {
  font-size: 15px;
  color: #969696;
}
.other .login:hover {
  background-color: #f0f0f0;
}
.other .register {
  height: 100%;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 80px;
  height: 38px;
  line-height: 24px;
  border: 1px solid rgba(236, 97, 73, 0.7);
  border-radius: 20px;
  font-size: 15px;
  color: #ea6f5a;
  background-color: transparent;
}
.other .register:hover {
  background-color: #f0f0f0;
}
/* 路由激活样式 */
a.router-link-exact-active {
  color: #ea6f5a;
}
</style>
