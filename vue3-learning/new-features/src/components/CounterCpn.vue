<template>
  <div>
    <h1>{{ counter }}</h1>
    <button @click="handleUpdate">修改</button>
  </div>
</template>

<script setup>
defineProps({
  counter: {
    type: Number,
    default: 0
  }
})

const emit = defineEmits(['update:counter'])

function handleUpdate() {
  emit('update:counter', 10000)
}
</script>

<style scoped></style>
