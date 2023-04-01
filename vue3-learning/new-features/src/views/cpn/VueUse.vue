<template>
  <div class="box"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const bgColor = ref('skyblue')
// const isDark = useDark()
setTimeout(() => {
  bgColor.value = 'red'
}, 3000)
</script>

<style scoped>
.box {
  height: 2000px;
  background-color: v-bind('bgColor');
}
</style>
