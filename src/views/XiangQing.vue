<template>
  <div class="xiangqing">
    <div class="title">
      <van-icon name="arrow-left" size="20" @click="clickX" class="tubiao" />
      <div
        v-for="(item, index) in titles"
        :key="item.id"
        class="title-item"
        :class="{ active: index == currentIndex }"
        @click="clickColor(index)"
      >
        {{ item }}
      </div>
    </div>
    <!-- 轮番图 -->
    <van-swipe class="my-swipe lunban" :autoplay="1000" indicator-color="white">
      <van-swipe-item v-for="item in topImages" :key="item.id">
        <img :src="item" alt="" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { getXiangQing } from "../network/home";

export default {
  name: "XiangQing",
  data() {
    return {
      iid: null,
      topImages: [],
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  methods: {
    clickColor(index) {
      this.currentIndex = index;
    },
    clickX() {
      this.$router.back();
    },
  },
  created() {
    this.iid = this.$route.params.iid;
    getXiangQing(this.iid).then((res) => {
      this.topImages = res.result.itemInfo.topImages;
    });
  },
};
</script>

<style lang="scss" scoped>
.title {
  display: flex;
  text-align: center;
  padding: 10px 15%;
  > .title-item {
    flex: 1;
  }
}
.active {
  color: pink;
}
.tubiao {
  margin-right: 15px;
}
.lunban {
  height: 300px;
  text-align: center;
  .van-swipe-item {
  width: 100%;
  img {
    width: 100%;
  }
}
}

</style>