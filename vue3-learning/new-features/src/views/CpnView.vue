<template>
  <div>
    <h1>父组件</h1>
    <div>{{ msg }}</div>
    <hr />
    <ChildCpn :msg="msg" :list="list" @update-msg="handelClick" @update-list="handelCickList" />
    <hr />
    <SlotCpn>
      <template #header>
        <h4>我是头部</h4>
      </template>
      <template #main>
        <div v-for="item in 10" :key="item">我是内容 +{{ item }}</div>
      </template>
      <template #footer>
        <h4>我是底部</h4>
      </template>

      <template #default>
        <h4>我是默认插槽</h4>
      </template>
    </SlotCpn>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import ChildCpn from '../components/ChildCpn.vue'
import SlotCpn from '../components/SlotCpn.vue'
const msg = ref('我是从父组件传过来的msg')
const list = reactive([1, 2, 3, 4, 5])

function handelClick(value) {
  msg.value = value
}

function handelCickList(value) {
  list.splice(0, list.length, ...value)
}
</script>

<style scoped></style>
