<template>
  <div id="app">    
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import '@/style/common.scss';
*{
 font-family:"微软雅黑";
}

#app { 
  position: fixed;
  height: 100%;
  width: 100%;
}
</style>
