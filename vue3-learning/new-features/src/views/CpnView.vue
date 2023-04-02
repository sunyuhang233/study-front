<template>
  <div>
    <h1>父组件</h1>
    <div>{{ msg }}</div>
    <hr />
    <ChildCpn
      :msg="msg"
      :list="list"
      @update-msg="handelClick"
      @update-list="handelCickList"
      ref="ChildRef"
    />
    <button @click="openChild">获取子组件导出的方法</button>
    <hr />
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import ChildCpn from '../components/ChildCpn.vue'

const msg = ref('我是从父组件传过来的msg')
const list = reactive([1, 2, 3, 4, 5])

function handelClick(value) {
  msg.value = value
}

function handelCickList(value) {
  list.splice(0, list.length, ...value)
}

// 通过ref获取子组件的方法
const ChildRef = ref(null)
function openChild() {
  ChildRef.value.openAlert()
}
</script>

<style scoped></style>
