<template>
  <header>
    <nav>
      <RouterLink to="/">首页</RouterLink>
      <RouterLink to="/about">关于</RouterLink>
      <RouterLink to="/todo">Todo</RouterLink>
      <RouterLink to="/login">登录</RouterLink>
    </nav>
  </header>
</template>

<script setup></script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5%;
  background-color: lightblue;
}
header a {
  display: inline-block;
  padding: 0 1rem;
  color: #000;
  text-decoration: none;
}
/* 选中状态 */
header a.router-link-exact-active {
  color: #fff;
}
</style>
