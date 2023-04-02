<template>
  <div>
    <h1>自定义指令</h1>
    <input type="text" placeholder="输入框" />
    <input type="text" placeholder="自定义指令的输入框" v-focus />
  </div>
</template>

<script setup></script>

<style scoped>
input {
  display: block;
  margin: 20px;
  width: 300px;
  height: 35px;
}
</style>
