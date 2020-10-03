<template>
  <div id="app">
    <keep-alive exclude='XiangQing'>
      <router-view />
    </keep-alive>
    <tab-bar></tab-bar>
  </div>
</template>
  
<script>
import TabBar from  './views/TabBar'

export default { 
    name: 'App',
    data(){  
       return{} 
    },
    components: {
      TabBar
    } 
  }
</script>
<style lang="scss">


</style>
