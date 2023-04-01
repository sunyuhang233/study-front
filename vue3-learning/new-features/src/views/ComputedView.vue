<script setup>
import { computed, reactive, ref, watch, watchEffect } from 'vue'
import VueUse from './cpn/VueUse.vue'
const obj = reactive({
  name: 'zhangsan',
  age: 18
})

const count = ref(0)

// computed 计算属性
const add = computed(() => count.value + 1)

function handleCountClick() {
  count.value++
}

setTimeout(() => {
  obj.name = 'lisi'
  obj.age = 20
}, 1000)

// watch 监听对象的一个属性 需要写成回调函数的形式 参数1是回调函数 参数2是回调函数 参数3是配置项
watch(
  () => obj.name,
  (newVal, oldVal) => {
    console.log(
      '发生了改变' + '新值：' + JSON.stringify(newVal) + '旧值：' + JSON.stringify(oldVal)
    )
  }
)

const people = reactive({
  name: 'zhangsan',
  age: 18,
  address: {
    city: 'beijing',
    street: 'xidan'
  }
})

// watch 监听对象的一个属性 需要写成回调函数的形式 参数1是回调函数 参数2是回调函数 参数3是配置项
watch(
  () => obj.age,
  (newVal, oldVal) => {
    console.log(
      '发生了改变' + '新值：' + JSON.stringify(newVal) + '旧值：' + JSON.stringify(oldVal)
    )
  }
)

// watch 监听
watch(
  count,
  (newVal, oldVal) => {
    console.log('发生了改变' + '新值：' + newVal + '旧值：' + oldVal)
  },
  { immediate: true, deep: true }
)

setTimeout(() => {
  ;(people.address.city = 'shanghai'), (people.address.street = 'xuhui')
}, 2000)
// watch 监听深层次对象
watch(
  () => [people.address.city, people.address.street],
  (newValue, oldVale) => {
    console.log(
      '发生了改变' + '新值：' + JSON.stringify(newValue) + '旧值：' + JSON.stringify(oldVale)
    )
  },
  { deep: true }
)

// watchEffect 监听 依赖变化时 执行回调(立即执行函数) 参数 1是回调函数(立即执行函数) 参数2是配置项
let num = ref(100)
setTimeout(() => {
  num.value += 50
}, 3000)
watchEffect(() => {
  console.log('watchEffect' + num.value)
})

// watchEffect 存在返回值 用于停止监听
const stopWatch = watchEffect(() => {
  console.log('watchEffect' + num.value)
  // 停止监听
  if (num.value > 200) {
    stopWatch()
  }
})
</script>

<template>
  <div>
    <h1>计算属性</h1>
    <div>
      <span>{{ obj }}</span>
      <button @click="handleClick">修改值</button>
    </div>
    <div>
      <span>{{ add }}</span>
      <button @click="handleCountClick">修改值</button>
    </div>
  </div>
  <VueUse />
</template>

<style scoped></style>
