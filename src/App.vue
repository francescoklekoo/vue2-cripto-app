<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    @select="handleSelect"
  >
    <el-menu-item index="1"
      ><router-link to="/">Crypto List</router-link></el-menu-item
    >
  </el-menu>
  <router-view />
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      activeIndex: 1,
    };
  },
};
</script>

<style lang="scss"></style>
