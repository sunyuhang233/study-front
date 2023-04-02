<template>
  <div>other</div>
  <div>
    <h1>注入的值-{{ people.name }}</h1>
    <h1>注入的值-{{ people.age }}</h1>
  </div>
</template>

<script setup>
import { inject } from 'vue'

// 注入的值
const people = inject('people')
</script>

<style scoped></style>
