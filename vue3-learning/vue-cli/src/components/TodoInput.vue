<template>
  <div class="box">
    <p>任务列表</p>
    <input type="text" v-model="form.title" placeholder="请输入要做的事情" class="input" />
    <input type="text" v-model="form.date" placeholder="请输入时间" class="input" />
    <button @click="handleClick">确定</button>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

let form = reactive({
  title: '',
  date: '',
  finished: false
})

const emit = defineEmits(['add'])

const handleClick = () => {
  if (!form.title || !form.date) {
    alert('请输入内容')
    return
  }
  const formItem = {
    title: form.title,
    date: form.date,
    finished: false,
    id: Date.now(),
    logo: 'https://ahang666.oss-cn-hangzhou.aliyuncs.com/RealWorldVue3.png'
  }
  emit('add', formItem)
}
</script>

<style scoped>
p {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  padding: 0;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}
.box {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  height: 25%;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  animation: moveLeftToRight 0.6s ease-in-out;
  animation-duration: 1s;
}
.box .input {
  width: 200px;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 10px 0;
}
.box button {
  width: 200px;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 10px 0;
}
.box .input:focus {
  outline: none;
}
.box .input::placeholder {
  color: #ccc;
  font-size: 0.8rem;
  letter-spacing: 2;
}
.box button:hover {
  cursor: pointer;
  background-color: #ccc;
}
.box button:active {
  background-color: #aaa;
}

@keyframes moveLeftToRight {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(0deg);
    transform: translateX(0);
    opacity: 1;
  }
}

.finish {
  display: flex;
  align-items: center;
  justify-content: center;
}
.finish input {
  margin: 0 10px;
}
.finish {
  font-size: 12px;
}
</style>
