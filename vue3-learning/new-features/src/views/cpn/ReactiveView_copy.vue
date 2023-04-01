<template>
  <div class="reative">
    <span>{{ title }}</span>
    <span>{{ num }}</span>
    <span>{{ bool }}</span>
    <span>{{ nullValue }}</span>
    <span>{{ undefinedValue }}</span>
    <div>
      <span>姓名：{{ user.name }}</span>
      <span>年龄:{{ user.age }}</span>
    </div>
    <div>
      <span>{{ objValue }}</span>
      <span>{{ name }}</span>
      <span>{{ age }}</span>
    </div>
    <div>
      {{ date }}
    </div>
    <div>
      <button @click="handleClick">点击切换</button>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, toRef, toRefs, toRaw } from 'vue'

// ref的基础数据类型 字符串 数字 布尔值 null undefined
const title = ref('hello world')
console.log(title.value)

const num = ref(1)
console.log(num.value)

const bool = ref(true)
console.log(bool.value)

const nullValue = ref(null)
console.log(nullValue.value)

const undefinedValue = ref(undefined)
console.log(undefinedValue.value)

//reactive
const user = reactive({
  name: 'zhangsan',
  age: 18
})

const obj = {
  name: 'zhangsan',
  age: 18
}
/**
 *  三个to toRef toRefs toRaw
 toRef toRefs toRaw 三者区别
 toRef 和 toRefs 都是将对象转换为响应式数据 但是页面更改不会更新 需要包裹reactive 一个是转换为单个属性 一个是转换为所有属性
 toRaw 是将响应式数据转换为原始数据
 */

// toRef 含义：将对象的属性转换为响应式数据 变为响应式数据 但是页面更改不会更新 需要包裹reactive
const objValue = toRef(obj, 'age')
// toRefs 含义：将对象的所有属性转换为响应式数据 变为响应式数据 但是页面更改不会更新 需要包裹reactive
const { name, age } = toRefs(obj)
// toRaw 含义：将响应式数据转换为原始数据
const date = toRaw(user)

// 点击切换
function handleClick() {
  // toRef
  objValue.value += 10
  console.log(objValue.value)
  console.log(obj)
  // toRefs
  name.value = 'lisi'
  age.value = 20
  // toRaw
  date.name = 'wangwu'
  date.age = 30
}
</script>

<style scoped>
.reative {
  font-size: 24px;
  font-weight: 500;
}
span {
  margin: 0 20px;
}
</style>
