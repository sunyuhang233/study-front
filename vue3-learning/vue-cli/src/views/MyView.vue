<template>
  <div class="input">
    <TodoInput @add="handleAdd" />
  </div>
  <div class="box">
    <template v-for="item in list" :key="item.id">
      <TodoItem :item="item" @deleteItem="handleDelteItem" @finished="handleFinished" />
    </template>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import TodoInput from '../components/TodoInput.vue'
import TodoItem from '../components/TodoItem.vue'
import { getList, addData, getDetail, updateData, deleteData } from '../request/request'

const handleAdd = (val) => {
  addData(val).then((res) => {
    getData()
  })
}

// const getUrl = (name) => {
//   return new URL(`../assets/img/${name}`, import.meta.url).href
// }

let list = ref([])

function getData() {
  getList().then((res) => {
    list.value = res.data
  })
}

onMounted(() => {
  getData()
})

const handleDelteItem = (val) => {
  deleteData(val).then((res) => {
    getData()
  })
}

function handleFinished(val) {
  getDetail(val).then((res) => {
    const { title, date, finished, id, logo } = res.data
    const item = {
      id,
      title,
      date,
      logo,
      finished: !finished
    }
    updateData(id, item).then((res) => {
      getData()
    })
  })
}
</script>

<style scoped>
.input {
  display: flex;
  justify-content: center;
  margin: 10px 40px;
}
.box {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 10px 40px;
}
</style>
