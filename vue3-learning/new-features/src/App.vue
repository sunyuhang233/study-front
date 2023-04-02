<template>
  <header>
    <RouterLink to="/">响应式相关API</RouterLink>
    <RouterLink to="/computed">计算属性</RouterLink>
    <RouterLink to="/cpn">组件</RouterLink>
    <RouterLink to="/hooks">Hooks</RouterLink>
    <RouterLink to="/model">升级Model</RouterLink>
    <RouterLink to="/slot">插槽</RouterLink>
    <RouterLink to="/directive">指令</RouterLink>
    <RouterLink to="/other">其他</RouterLink>
  </header>
  <div class="main">
    <RouterView />
  </div>
</template>

<script setup>
import { ref } from 'vue'
const color = ref('skyblue')
</script>

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
  /* v-bind绑定样式 */
  /* color: v-bind('color'); */
}
</style>
