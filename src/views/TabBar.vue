<template>
  <div class="tabbar">
    <van-tabbar v-model="active" active-color="pink" route>
    <van-tabbar-item name="home" icon="home-o" to="/home">首页</van-tabbar-item>
    <van-tabbar-item name="search" icon="shopping-cart-o" to="/shang"
      >购物车</van-tabbar-item
    >
    <van-tabbar-item name="friends" icon="apps-o" to="/cart"
      >分类</van-tabbar-item
    >
    <van-tabbar-item name="setting" icon="manager-o" to="/she"
      >我的</van-tabbar-item
    >
  </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "TabBar",
   data() {
    return {
      active: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>