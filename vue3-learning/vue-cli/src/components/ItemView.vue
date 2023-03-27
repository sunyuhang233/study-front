<template>
  <div>
    <template v-for="(item, index) in list" :key="index">
      <div class="box">
        <div class="header">
          <p>{{ item.title }}</p>
        </div>
        <div class="center">
          <p>
            {{ item.content }}
          </p>
        </div>
        <div class="bottom">
          <span>
            <img src="../assets/img/i1.png" alt="" />
          </span>
          <span>{{ item.num1 }}</span>
          <span>{{ item.author }}</span>
          <span>
            <img src="../assets/img/i2.png" alt="" />
          </span>
          <span>{{ item.num3 }}</span>
          <span>
            <img src="../assets/img/i3.png" alt="" />
          </span>
          <span>{{ item.num5 }}</span>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
defineProps({
  list: {
    type: Array,
    default: () => []
  }
})
</script>

<style scoped>
.box .left {
  width: 625px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.left .box {
  margin: 20px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #ccc;
}
.left .box .header {
  font-size: 20px;
  font-weight: 600;
}
.left .box .center {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #999;
}
.left .box .bottom {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 50px;
  font-size: 12px;
  color: #999;
}
.left .box .bottom span {
  margin-right: 10px;
}
.left .box .bottom span img {
  width: 20px;
  height: 20px;
  margin-top: 6px;
}
</style>
