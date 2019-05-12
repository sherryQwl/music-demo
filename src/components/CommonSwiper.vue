<template>
  <el-carousel height="336px" :interval="5000" arrow="always">
    <el-carousel-item v-for="item in imgData">
      <img :src="item.url" alt="" width="100%" height="100%">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: "commonSwiper",
  data() {
    return {
      imgData:[
        {url:'http://p1.music.126.net/81wce0FOoUn__fyeVJG57Q==/109951164054802193.jpg'},
        {url:'http://p1.music.126.net/LyN_mcIetm0pMRdpjoq6NQ==/109951164054759431.jpg'},
        {url:'http://p1.music.126.net/eSxxSL64iTDD_JLNzZ74PQ==/109951164054811344.jpg'}
      ]
    };
  }
};
</script>

<style lang="scss" scoped>

</style>

