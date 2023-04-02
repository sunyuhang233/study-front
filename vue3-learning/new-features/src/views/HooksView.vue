<template>
  <div>
    <h1>Hooks</h1>
    <div>
      <button @click="decrement">-</button>
      <span>{{ couter }}</span>
      <button @click="increment">+</button>
    </div>
    <div>
      <span>width: {{ width }}</span>
      <span>height: {{ height }}</span>
    </div>
  </div>
</template>

<script setup>
import useCounter from '../hooks/useCounter'
import useWindowResize from '../hooks/useWindowResize'
// useCounter()返回的是一个对象，包含了couter、increment、decrement三个属性
const { couter, increment, decrement } = useCounter()
const { width, height } = useWindowResize()
</script>

<style scoped></style>
