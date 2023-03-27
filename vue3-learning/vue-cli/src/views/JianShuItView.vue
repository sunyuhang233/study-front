<template>
  <div class="it">
    <div class="left">
      <div class="item" v-for="i in item" :key="i.id" @click="goRouter(i.path)">
        <span :class="i.isActive ? 'active' : ''">{{ i.name }}</span>
      </div>
    </div>
    <div class="right">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue'
import { useRoute } from 'vue-router'
import router from '../router'
const route = useRoute()
const item = reactive([
  {
    id: 1,
    name: '前端',
    path: '/jianshu/it/fonrnt',
    isActive: true
  },
  {
    id: 2,
    name: '后端',
    path: '/jianshu/it/back',
    isActive: false
  },
  {
    id: 3,
    name: '移动端',
    path: '/jianshu/it/mobile',
    isActive: false
  },
  {
    id: 4,
    name: '人工智能',
    path: '/jianshu/it/articial',
    isActive: false
  },
  {
    id: 5,
    name: '产品',
    path: '/jianshu/it/product',
    isActive: false
  },
  {
    id: 6,
    name: '设计',
    path: '/jianshu/it/design',
    isActive: false
  }
])

function goRouter(path) {
  console.log(item)
  router.push(path)
  item.forEach((i) => {
    if (i.path === path) {
      i.isActive = true
    } else {
      i.isActive = false
    }
  })
}
// 根据路由的变化，动态的改变左侧的样式
const routeChange = computed(() => {
  return item.forEach((i) => {
    if (i.path === route.path) {
      i.isActive = true
    } else {
      console.log('no')
    }
  })
})
console.log(routeChange)
</script>

<style scoped>
.it {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  margin-left: 100px;
  margin-top: 40px;
}
.it .left {
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.it .left .item {
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  padding-left: 5px;
  cursor: pointer;
}
.it .left .item a {
  color: #eb7b68;
  text-decoration: none;
}
.it .right {
  width: 70%;
  height: 100%;
  background-color: #fff;
  margin-left: 40px;
}

.active {
  color: #eb7b68;
  width: 100%;
  background-color: #f0f0f0;
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 5px;
}
</style>
