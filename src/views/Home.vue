<template>
  <div id="home">
    <van-nav-bar
      title="商城"
      
    />
    <!-- 轮番图 -->
    <van-swipe class="my-swipe" :autoplay="1000" indicator-color="white">
      <van-swipe-item v-for="itme in banners" :key="itme.id">
        <a :href="itme.link">
          <img :src="itme.image" alt="" />
        </a>
      </van-swipe-item>
    </van-swipe>

    <!-- 推荐信息 -->
    <van-row type="flex" justify="center">
      <van-col v-for="itme in recommends" :key="itme.id">
        <a :href="itme.link">
          <img :src="itme.image" alt="" />
        </a>
      </van-col>
    </van-row>
    <!-- tuijan  -->
    <tui-jian />

    <!-- biaoqian -->
    <biao-qian />
  </div>
</template>

<script>
import { getHomeMultidata, getHomeGood } from "../network/home";
import TuiJian from "./TuiJian";
import BiaoQian from "./BiaoQian";

export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      
    };
  },
  methods: {
   
  },
  components: {
    TuiJian,
    BiaoQian,
    
  },
  created() {
    // 1.请求多个数据
    this.getHomeMultidata()

    
    
  },
  methods: {
    getHomeMultidata(){
       getHomeMultidata().then(res => {
      // this.result = res;
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
      console.log(res);
    })
    },
    
  },
};
</script>

<style lang="scss" scoped>
// lunfantu

.van-swipe-item {
  width: 100%;
  text-align: center;
}
.van-swipe-item img {
  width: 100%;
}

// 推荐

.van-col {
  text-align: center;
}
.van-col img {
  width: 80%;
}
.van-row {
  margin-top: 10px;
}
</style>