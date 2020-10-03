<template>
  <div class="goodlist">
    <good-item
      v-for="item in goods"
      :good-item="item"
      :key="item.id"
    />
  </div>
</template>

<script>
import GoodItem from "./GoodItem";
export default {
  nanme: "GoodList",
  components: {
    GoodItem,
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style lang="scss" scoped>
   .goodlist {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2px;
  }
</style>