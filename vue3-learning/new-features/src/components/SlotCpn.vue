<template>
  <div>
    <h2>插槽</h2>
    <div>
      <h3>我是具名插槽</h3>
      <slot name="header"></slot>
      <slot name="main"></slot>
      <slot name="footer"></slot>
      <hr />
    </div>
    <div>
      <h3>我是普通插槽</h3>
      <slot></slot>
    </div>
    <div>
      <h3>我是传递数据的插槽</h3>
      <slot :data="data" name="data"></slot>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const data = reactive({
  name: '我是插槽传递的数据',
  age: 18
})
</script>

<style scoped></style>
