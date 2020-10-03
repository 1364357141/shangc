<template>
    <div class="goods-item" @click="clickItme">
        <img :src="GoodItem.show.img" alt=""/>
        <div class="goods-info">
            <p>{{GoodItem.title}}</p>
            <span class="price">{{GoodItem.price}}</span>
            <span class="collect" ><van-icon name="star" size="12" color="pink" />{{GoodItem.cfav}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'GoodItem',
    props:{
        GoodItem: {
            type: Object,
            default(){
                return{}
            }
        }
    },
   
    methods: {
      clickItme(){
        // console.log('点击')
        this.$router.push('/xiangqing/' + this.GoodItem.iid)

      }
    }
}
</script>

<style lang="scss" scoped>
     .goods-item { 
    padding-bottom: 40px;
    position: relative;
    width: 48%;
  }

  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

  
</style>