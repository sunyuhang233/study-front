<template>
  <div class="box" @click="handleGoDetail(item.id)">
    <h1>{{ item.title }}</h1>
    <p>{{ item.date }}</p>
    <img :src="item.logo" alt="img" />
    <div class="checkbox">
      <input type="checkbox" :checked="item.finished" />
      <p :class="item.finished ? 'finised' : 'unfinised'">
        {{ item.finished ? '已完成' : '未完成' }}
      </p>
    </div>
    <div class="btns">
      <button @click.stop="handleFinished(item.id)" class="success" :disabled="item.finished">
        完成
      </button>
      <button @click.stop="handleDeleteItem(item.id)" class="delete">删除</button>
    </div>
  </div>
</template>

<script setup>
import router from '../router/index.js'
defineProps({
  item: {
    type: Object,
    requird: true
  }
})

const handleGoDetail = (id) => {
  router.push(`/detail/${id}`)
}

const emit = defineEmits(['finished', 'deleteItem'])

const handleFinished = (id) => {
  emit('finished', id)
}

const handleDeleteItem = (id) => {
  emit('deleteItem', id)
}
</script>

<style scoped>
.box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 25%;
  height: 25%;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  animation: trasformTop 0.6s ease-in-out;
  animation-duration: 1s;
}

.box h1 {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  padding: 0;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}

.box p {
  font-size: 0.6rem;
  font-weight: 400;
  margin: 0;
  padding: 0;
  margin-bottom: 0.5rem;
}

.box:hover {
  cursor: pointer;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  transform: translateY(-5px);
}

.box img {
  height: 120px;
  width: 120px;
  border-radius: 10px;
  margin-bottom: 1rem;
}

.checkbox {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}
.checkbox .finised {
  color: #fff;
  background-color: #4caf50;
  border-radius: 10px;
  text-align: center;
  margin-left: 0.2rem;
  padding: 0.3rem 1.5rem;
  margin-top: 2px;
}
.checkbox .unfinised {
  color: #fff;
  background-color: #f44336;
  border-radius: 10px;
  text-align: center;
  margin-left: 0.2rem;
  padding: 0.3rem 1.5rem;
  margin-top: 2px;
}

@keyframes trasformTop {
  0% {
    transform: translateY(-500px);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes trasformBottom {
  0% {
    transform: translateY(500px);
  }
  100% {
    transform: translateY(0);
  }
}

.btns {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}
.btns button {
  margin: 0 0.5rem;
  padding: 0.3rem 1.5rem;
  border-radius: 10px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}
.success {
  background-color: #4caf50;
  color: #fff;
}
.success:hover {
  background-color: #43a047;
}
.delete {
  background-color: #f44336;
  color: #fff;
}
.delete:hover {
  background-color: #e53935;
}
</style>
