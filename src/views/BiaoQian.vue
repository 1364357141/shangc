<template>
  <div class="biaoqian">
    <van-tabs v-model="active" sticky>
      <van-tab title="流行">
        <good-list :goods="goods['pop'].list" />
      </van-tab>
      <van-tab title="新款">
        <good-list :goods="goods['new'].list" />
      </van-tab>
      <van-tab title="推荐">
        <good-list :goods="goods['sell'].list" />
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import { getHomeGood } from "../network/home";

import GoodList from "./GoodList";
export default {
  name: "BiaoQian",
  components: {
    GoodList,
   
  },
  data() {
    return {
      active: 0,
      goods: {
        'pop': { page: 0, list: [] },
        'new': { page: 0, list: [] },
        'sell': { page: 0, list: [] },
      },
    };
  },
  created() {
    
    this.getHomeGood("pop");
    this.getHomeGood("new");
    this.getHomeGood("sell");
  },
  methods: {
    getHomeGood(type) {
      const page = this.goods[type].page + 1;
      getHomeGood(type, page).then((res) => {
        console.log(res);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    },
  },
};
</script>
<style lang="scss" scoped>
</style>