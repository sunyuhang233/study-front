<template>
  <div>
    <h2>我是子组件</h2>
    <div>
      <h3>我是子组件接收父组件的msg: {{ msg }}</h3>
      <button @click="handleClick">修改父组件传过来的msg</button>
      <hr />
      <h3>我是子组件接收父组件的list: {{ list }}</h3>
      <button @click="handleClickList">修改父组件传过来的list</button>
      <hr />
    </div>
  </div>
</template>

<script setup>
defineProps({
  msg: String,
  list: Array
})
const emit = defineEmits(['update-msg', 'update-list'])
function handleClick() {
  emit('update-msg', '我是子组件传递到父组件的msg')
}
function handleClickList() {
  emit('update-list', ['a', 'b', 'c', 'd'])
}

function openAlert() {
  alert('我是子组件导出的方法')
}
// 导出方法
defineExpose({
  openAlert
})
</script>

<style scoped>
button {
  margin: 10px 0;
  background-color: #f60;
  color: #fff;
  padding: 15px 10px;
  border-radius: 25px;
  border: none;
  cursor: pointer;
  box-shadow: 5px 2px 5px #ccc;
}
</style>
