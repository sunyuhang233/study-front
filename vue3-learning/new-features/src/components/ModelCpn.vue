<template>
  <div>
    <h1>{{ modelValue }}</h1>
    <button @click="handleUpdate">修改</button>
  </div>
</template>

<script setup>
defineProps({
  modelValue: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:msg'])

function handleUpdate() {
  emit('update:msg', '修改后的值')
}
</script>

<style scoped></style>
