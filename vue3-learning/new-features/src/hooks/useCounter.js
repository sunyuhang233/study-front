import { ref } from 'vue'
export default function useCounter() {
    const couter = ref(0)
    function increment() {
        couter.value++
    }
    function decrement() { 
        couter.value--
    }
    return {
        couter,
        increment,
        decrement
    }
}