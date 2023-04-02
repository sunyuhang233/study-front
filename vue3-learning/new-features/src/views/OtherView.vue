<template>
  <div>
    <!-- <OtherView /> -->
    <!-- Suspense 异步加载组件-->
    <Suspense>
      <!-- 异步组件-默认渲染的页面 -->
      <template #default>
        <OtherView />
      </template>
      <!-- 异步组件-加载中的页面 -->
      <template #fallback>
        <div>loading...</div>
      </template>
    </Suspense>
    <!-- Teleport 传送组件 to就是dom传送的位置-->
    <Teleport to="body">
      <div>我是传送组件</div>
    </Teleport>

    <!-- keep-alive 存活组件 -->
    <keep-alive max="10">
      <div v-if="isShow">我是keep-alive</div>
      <div v-else>其他元素</div>
    </keep-alive>

    <!-- provide/inject -->
  </div>
</template>

<script setup>
import { defineAsyncComponent, provide, reactive, ref } from 'vue'
// defineAsyncComponent 异步加载组件
const OtherView = defineAsyncComponent(() => import('../components/OtherCpn.vue'))

const isShow = ref(true)

// provide/inject
const people = reactive({
  name: 'why',
  age: 18
})
provide('people', people)
</script>

<style scoped></style>
