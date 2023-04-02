<template>
  <div>
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
      <template #data="data">
        <p>{{ data.data.name }}</p>
        <p>{{ data.data.age }}</p>
      </template>
    </SlotCpn>
  </div>
</template>

<script setup>
import SlotCpn from '../components/SlotCpn.vue'
</script>

<style scoped></style>
