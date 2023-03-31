<template>
  <header>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </header>
  <div class="main">
    <RouterView />
  </div>
</template>

<script setup></script>

<style scoped>
header {
  height: 60px;
  background-color: skyblue;
  display: flex;
  align-items: center;
  justify-content: center;
}
header a {
  margin: 0 20px;
  color: #fff;
  font-size: 14px;
}
.router-link-exact-active {
  color: #000;
}
.main {
  height: calc(100vh - 60px);
  padding: 20px;
}
</style>
