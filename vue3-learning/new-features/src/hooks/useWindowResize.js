import { onMounted, onUnmounted, ref } from 'vue'

export default function useWindowResize() {
  const width = ref('')
  const height = ref('')
  function onResize() {
    width.value = window.innerWidth
    height.value = window.innerHeight
  }
  onMounted(() => {
    window.addEventListener('resize', onResize)
  })
  onUnmounted(() => {
    window.removeEventListener('resize', onResize)
  })
  return {
    width,
    height
  }
}
