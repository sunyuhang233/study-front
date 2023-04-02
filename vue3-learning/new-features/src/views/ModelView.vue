<template>
  <div>
    <!-- 默认model 传递的是 modelValue -->
    <ModelCpn v-model="msg" @update:msg="handleChange" />
    <!-- 修改model 传递的是couter -->
    <CounterCpn v-model:counter="counter" @update:counter="handleCouterChange" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ModelCpn from '../components/ModelCpn.vue'
import CounterCpn from '../components/CounterCpn.vue'

const msg = ref('abcadad')

const counter = ref(100)

function handleChange(val) {
  msg.value = val
}

function handleCouterChange(val) {
  counter.value = val
}
</script>

<style scoped></style>
