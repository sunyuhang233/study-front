<template>
  <div class="big">
    <div class="message">
      <!-- 主页 -->
      <div class="box">
        <div class="left">
          <ItemView :list="list" />
        </div>
        <div class="right">
          <div class="item">
            <img src="../assets/img/1.png" alt="" />
          </div>
          <div class="item">
            <img src="../assets/img/2.png" alt="" />
          </div>
          <div class="item">
            <img src="../assets/img/3.png" alt="" />
          </div>
          <div class="item">
            <img src="../assets/img/4.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import ItemView from '../components/ItemView.vue'
const list = reactive([
  {
    title: '好无奈',
    content:
      '午觉醒来，我坐在客厅的沙发上，打开手机补充小说。婆婆卧病八年多，白天她不睡觉，在炕上一会儿一叫，或是扶她起来，抽支烟，又躺下；喊冷，让盖被；躺...',
    num1: '12.6',
    num3: '11',
    num5: '11'
  },
  {
    title: '好无奈',
    content:
      '午觉醒来，我坐在客厅的沙发上，打开手机补充小说。婆婆卧病八年多，白天她不睡觉，在炕上一会儿一叫，或是扶她起来，抽支烟，又躺下；喊冷，让盖被；躺...',
    num1: '12.6',
    author: '张三',
    num3: '11',

    num5: '11'
  },
  {
    title: '好无奈',
    content:
      '午觉醒来，我坐在客厅的沙发上，打开手机补充小说。婆婆卧病八年多，白天她不睡觉，在炕上一会儿一叫，或是扶她起来，抽支烟，又躺下；喊冷，让盖被；躺...',
    num1: '12.6',
    author: '张三',

    num3: '11',

    num5: '11'
  },
  {
    title: '好无奈',
    content:
      '午觉醒来，我坐在客厅的沙发上，打开手机补充小说。婆婆卧病八年多，白天她不睡觉，在炕上一会儿一叫，或是扶她起来，抽支烟，又躺下；喊冷，让盖被；躺...',
    num1: '12.6',
    author: '张三',
    num3: '11',
    num5: '11'
  },
  {
    title: '好无奈',
    content:
      '午觉醒来，我坐在客厅的沙发上，打开手机补充小说。婆婆卧病八年多，白天她不睡觉，在炕上一会儿一叫，或是扶她起来，抽支烟，又躺下；喊冷，让盖被；躺...',
    num1: '12.6',
    author: '张三',
    num3: '11',
    num5: '11'
  },
  {
    title: '好无奈',
    content:
      '午觉醒来，我坐在客厅的沙发上，打开手机补充小说。婆婆卧病八年多，白天她不睡觉，在炕上一会儿一叫，或是扶她起来，抽支烟，又躺下；喊冷，让盖被；躺...',
    num1: '12.6',
    author: '张三',
    num3: '11',
    num5: '11'
  },
  {
    title: '好无奈',
    content:
      '午觉醒来，我坐在客厅的沙发上，打开手机补充小说。婆婆卧病八年多，白天她不睡觉，在炕上一会儿一叫，或是扶她起来，抽支烟，又躺下；喊冷，让盖被；躺...',
    num1: '12.6',
    author: '张三',
    num3: '11',
    num5: '11'
  },
  {
    title: '好无奈',
    content:
      '午觉醒来，我坐在客厅的沙发上，打开手机补充小说。婆婆卧病八年多，白天她不睡觉，在炕上一会儿一叫，或是扶她起来，抽支烟，又躺下；喊冷，让盖被；躺...',
    num1: '12.6',
    author: '张三',
    num3: '11',
    num5: '11'
  },
  {
    title: '好无奈',
    content:
      '午觉醒来，我坐在客厅的沙发上，打开手机补充小说。婆婆卧病八年多，白天她不睡觉，在炕上一会儿一叫，或是扶她起来，抽支烟，又躺下；喊冷，让盖被；躺...',
    num1: '12.6',
    author: '张三',
    num3: '11',
    num5: '11'
  },
  {
    title: '好无奈',
    content:
      '午觉醒来，我坐在客厅的沙发上，打开手机补充小说。婆婆卧病八年多，白天她不睡觉，在炕上一会儿一叫，或是扶她起来，抽支烟，又躺下；喊冷，让盖被；躺...',
    num1: '12.6',
    author: '张三',
    num3: '11',
    num5: '11'
  },
  {
    title: '好无奈',
    content:
      '午觉醒来，我坐在客厅的沙发上，打开手机补充小说。婆婆卧病八年多，白天她不睡觉，在炕上一会儿一叫，或是扶她起来，抽支烟，又躺下；喊冷，让盖被；躺...',
    num1: '12.6',
    author: '张三',
    num3: '11',
    num5: '11'
  },
  {
    title: '好无奈',
    content:
      '午觉醒来，我坐在客厅的沙发上，打开手机补充小说。婆婆卧病八年多，白天她不睡觉，在炕上一会儿一叫，或是扶她起来，抽支烟，又躺下；喊冷，让盖被；躺...',
    num1: '12.6',
    author: '张三',
    num3: '11',
    num5: '11'
  },
  {
    title: '好无奈',
    content:
      '午觉醒来，我坐在客厅的沙发上，打开手机补充小说。婆婆卧病八年多，白天她不睡觉，在炕上一会儿一叫，或是扶她起来，抽支烟，又躺下；喊冷，让盖被；躺...',
    num1: '12.6',
    author: '张三',
    num3: '11',
    num5: '11'
  },
  {
    title: '好无奈',
    content:
      '午觉醒来，我坐在客厅的沙发上，打开手机补充小说。婆婆卧病八年多，白天她不睡觉，在炕上一会儿一叫，或是扶她起来，抽支烟，又躺下；喊冷，让盖被；躺...',
    num1: '12.6',
    author: '张三',
    num3: '11',
    num5: '11'
  },
  {
    title: '好无奈',
    content:
      '午觉醒来，我坐在客厅的沙发上，打开手机补充小说。婆婆卧病八年多，白天她不睡觉，在炕上一会儿一叫，或是扶她起来，抽支烟，又躺下；喊冷，让盖被；躺...',
    num1: '12.6',
    author: '张三',
    num3: '11',
    num5: '11'
  },
  {
    title: '好无奈',
    content:
      '午觉醒来，我坐在客厅的沙发上，打开手机补充小说。婆婆卧病八年多，白天她不睡觉，在炕上一会儿一叫，或是扶她起来，抽支烟，又躺下；喊冷，让盖被；躺...',
    num1: '12.6',
    author: '张三',
    num3: '11',
    num5: '11'
  },
  {
    title: '好无奈',
    content:
      '午觉醒来，我坐在客厅的沙发上，打开手机补充小说。婆婆卧病八年多，白天她不睡觉，在炕上一会儿一叫，或是扶她起来，抽支烟，又躺下；喊冷，让盖被；躺...',
    num1: '12.6',
    author: '张三',

    num3: '11',
    num5: '11'
  },
  {
    title: '好无奈',
    content:
      '午觉醒来，我坐在客厅的沙发上，打开手机补充小说。婆婆卧病八年多，白天她不睡觉，在炕上一会儿一叫，或是扶她起来，抽支烟，又躺下；喊冷，让盖被；躺...',
    num1: '12.6',
    author: '张三',

    num3: '11',

    num5: '11'
  },
  {
    title: '好无奈',
    content:
      '午觉醒来，我坐在客厅的沙发上，打开手机补充小说。婆婆卧病八年多，白天她不睡觉，在炕上一会儿一叫，或是扶她起来，抽支烟，又躺下；喊冷，让盖被；躺...',
    num1: '12.6',
    author: '张三',
    num3: '11',

    num5: '11'
  },
  {
    title: '好无奈',
    content:
      '午觉醒来，我坐在客厅的沙发上，打开手机补充小说。婆婆卧病八年多，白天她不睡觉，在炕上一会儿一叫，或是扶她起来，抽支烟，又躺下；喊冷，让盖被；躺...',
    num1: '12.6',
    author: '张三',

    num3: '11',

    num5: '11'
  }
])
</script>

<style scoped>
.big {
  width: 100%;
  height: 100%;
  display: flex;
}
.box {
  width: 100%;
  height: 100%;
  display: flex;
}
.box .left {
  width: 625px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.right {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 120px;
  margin-top: 20px;
}
.right .item {
  height: 50px;
  width: 280px;
  margin: 5px 0;
}
.right .item img {
  width: 100%;
  height: 100%;
}
</style>
