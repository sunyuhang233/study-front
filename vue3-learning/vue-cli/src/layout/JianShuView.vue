<template>
  <div>
    <JianShuHeader />
    <div class="main">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import JianShuHeader from '../components/JianShuHeader.vue'
</script>

<style scoped>
.main {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  margin-left: 200px;
}
</style>
