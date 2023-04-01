<template>
  <div>
    <h2>插槽</h2>
    <div>
      <h3>我是具名插槽</h3>
      <slot name="header"></slot>
      <slot name="main"></slot>
      <slot name="footer"></slot>
      <hr />
    </div>
    <div>
      <h3>我是普通插槽</h3>
      <slot></slot>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
