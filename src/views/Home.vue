<template>
  <div class="home">
    <div class="home-swiper">
      <common-swiper></common-swiper>
      <common-title titleName="华语推荐">
        <ul class="home-swiper-name">
          <li>华语</li>|
          <li>流行</li>|
          <li>摇滚</li>|
          <li>民谣</li>|
          <li>电子</li>
        </ul>
      </common-title>
      <item-card></item-card>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CommonSwiper from "@/components/CommonSwiper.vue";
import CommonTitle from "./components/CommonTitle";
import itemCard from "./components/ItemCard";

export default {
  name: "home",
  components: {
    CommonSwiper,
    CommonTitle,
    itemCard
  }
};
</script>

<style lang="scss" scoped>
.home {
  &-swiper{
    width: 100%;
    &-name{
      display: flex;
      li{
        margin:0 16px;
        cursor: pointer;
      }
    }
  }
}
</style>
