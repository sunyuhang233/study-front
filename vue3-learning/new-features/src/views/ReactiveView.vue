<script setup>
import { reactive, toRef, toRefs } from 'vue'
const obj = {
  name: 'hang',
  age: 18
}

const objValue = toRefs(obj)

function handleClick() {
  objValue.name.value = 'zhangsan'
  objValue.age.value = 20
  console.log(objValue)
}

// reactive 定义的对象结构就会丢掉响应式 但是 toRefs 会保留响应式
const people = reactive({
  name: 'hang',
  age: 18,
  city: 'beijing'
})
// 解构出 name 和 age 会丢掉响应式 给 解构的原对象添加toRefs方法
const { name, age } = toRefs(people)
// 解构出来单个属性也会丢掉响应式 给 解构的原对象添加toRef方法
const city = toRef(people, 'city')
</script>
<template>
  <div>
    <h1>ToRefs</h1>
    <span>{{ obj }}</span>
    <span>{{ objValue }}</span>
    <button @click="handleClick">修改值</button>
    <div>
      <h2>reactive</h2>
      <span>{{ name }}</span>
      <span>{{ age }}</span>
      <button @click="name = 'nb'">修改name</button>
      <button @click="age = 20">修改age</button>
    </div>
    <div>
      <h2>reactive</h2>
      <span>{{ city }}</span>
      <button @click="city = 'shanghai'">修改city</button>
    </div>
  </div>
</template>

<style scoped></style>
