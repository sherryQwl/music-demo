<template>
  <div class="home">
    <div class="home-swiper">
      <common-swiper></common-swiper>
      <common-title titleName="华语推荐">
        <ul class="home-swiper-name">
          <template v-for="(item,index) in cateList">
            <li :key="index">{{item.name}}</li>
            <span v-if="index < cateList.length-1">|</span>
          </template>
        </ul>
      </common-title>
      <item-card :chineseList="chineseData"></item-card>

      <common-title titleName="个性化推荐"></common-title>
      <item-card :personalizedList="personalizedData"></item-card>
      <page-bean></page-bean>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CommonSwiper from "@/components/CommonSwiper.vue";
import CommonTitle from "./components/CommonTitle";
import itemCard from "./components/ItemCard";
import { getCatList, getHotPlaylist, recommendList } from "api/user_api";
import pageBean from "./components/pageBean";

export default {
  name: "home",
  data() {
    return {
      cateList: [],
      chineseData:[],// 华语推荐
      personalizedData:[],// 个性化推荐
    };
  },
  components: {
    CommonSwiper,
    CommonTitle,
    itemCard,
    pageBean
  },
  mounted() {
    this.getHotPlaylists();
    this.getSongsList();
    this.getRecommondList();
  },
  methods: {
    // 获取歌单分类
    async getSongsList() {
      let res = await getCatList();
      this.cateList = res.tags;
    },
    // 获取歌单分类，包含类别信息
    async getHotPlaylists() {
      let params = {
        limit: 10,
        order: "new"
      };
      let res = await getHotPlaylist(params);
      this.chineseData = res.playlists;
    },
    // 获得每日推荐歌单（需要登录）
    async getRecommondList() {
      debugger
      let res = await recommendList();
      console.log(res);
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  &-swiper {
    width: 100%;
    &-name {
      display: flex;
      li {
        margin: 0 16px;
        cursor: pointer;
      }
    }
  }
}
</style>
