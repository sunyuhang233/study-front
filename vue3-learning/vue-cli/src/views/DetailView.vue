<template>
  <div :class="['big', item.finished ? '' : 'gray']">
    <div class="box">
      <h1 class="title">任务详情</h1>
      <div class="detail">
        <img :src="item.logo" alt="" />
        <h1 :class="item.finished ? '' : 'finisedItem'">{{ item.title }}</h1>
        <p :class="item.finished ? '' : 'finisedItem'">{{ item.date }}</p>
        <p class="description">{{ item.description }}</p>
        <p :class="[item.finished ? '' : 'finisedItem', item.finished ? 'finised' : 'unfinised']">
          {{ item.finished ? '已完成' : '未完成' }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { getDetail } from '../request/request'

const route = useRoute()

const item = ref({})

onMounted(() => {
  console.log(route.params.id)
  getDetail(route.params.id).then((res) => {
    item.value = res.data
  })
})
</script>

<style scoped>
.big {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

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
  animation: moveBottomTOTopToRightToLeft 1s ease-in-out forwards;
}

.title {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  padding: 0;
  margin-top: 1rem;
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #000;
  padding-bottom: 0.5rem;
  color: cornflowerblue;
}

.detail {
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.box .detail p {
  font-size: 0.6rem;
  font-weight: 400;
  margin: 0;
  padding: 0;
  margin-bottom: 0.5rem;
}

.box .detail img {
  width: 90%;
  height: 90%;
  border-radius: 10px;
}

@keyframes moveBottomTOTopToRightToLeft {
  0% {
    transform: translate(50%, 100%);
    opacity: 0;
  }
  50% {
    transform: rotate(180deg);
    opacity: 0.5;
  }
  75% {
    transform: rotate(360deg);
    opacity: 0.75;
  }
  100% {
    opacity: 1;
    transform: rotate(0deg);
    transform: translate(0, 0);
  }
}

.gray {
  filter: grayscale(100%);
}

/* 文字中划线 */
.finisedItem {
  text-decoration: line-through;
}

.finised {
  background-color: goldenrod;
  width: 25%;
  border-radius: 10px;
  color: #fff;
  font-size: 0.8rem;
  font-weight: 700;
  text-align: center;
}
.unfinised {
  background-color: #ccc;
  padding: 1rem 2rem;
  border-radius: 10px;
  color: red;
  font-size: 0.8rem;
  font-weight: 700;
  text-align: center;
  width: 25%;
}
.description {
  font-size: 0.8rem;
  font-weight: 400;
  margin: 0;
  padding: 0 1rem;
  margin-bottom: 0.5rem;
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #000;
  padding-bottom: 0.5rem;
  color: cornflowerblue;
}
</style>
